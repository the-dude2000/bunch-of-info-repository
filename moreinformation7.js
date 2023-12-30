/*

CODEWARS

////////////
"""
Kata: Simple Interactive Interpreter (1 kyu)

Description:

Simple Interactive Interpreter (or REPL)

You will create an interpreter which takes inputs described below and produces outputs, storing state in between each input.

If you're not sure where to start with this kata, check out my Simpler Interactive Interpreter kata, which greatly simplifies the interpreter by removing functions.

Note that the eval command has been disabled.

Concepts

The interpreter will take inputs in the language described under the language header below. This section will give an overview of the language constructs.

Variables

Any identifier which is not a keyword or a function name will be treated as a variable. If the identifier is on the left hand side of an assignment operator, the result of the right hand side will be stored in the variable. If a variable occurs as part of an expression, the value held in the variable will be substituted when the expression is evaluated.

Variables are implicitly declared the first time they are assigned to.

Example: Initializing a variable to a constant value and using the variable in another expression (Each line starting with a '>' indicates a separate call to the input method of the interpreter, other lines represent output)

>x = 7
    7
>x + 6
    13
Referencing a non-existent variable will cause the interpreter to throw an error. The interpreter should be able to continue accepting input even after throwing.

Example: Referencing a non-existent variable

>y + 7
    ERROR: Invalid identifier. No variable with name 'y' was found."
Assignments

An assignment is an expression that has an identifier on left side of an = operator, and any expression on the right. Such expressions should store the value of the right hand side in the specified variable and return the result.

Example: Assigning a constant to a variable

x = 7
    7
You should also be able to chain and nest assignments. Note that the assignment operator is one of the few that is right associative.

Example: Chained assignments. The statement below should set both x and y to 7.

x = y = 7
    7
Example: Nested assignments. The statement below should set y to 3, but it only outputs the final result.

x = 13 + (y = 3)
    16
Operator Precedence

Operator precedence will follow the common order. There is a table in the Language section below that explicitly states the operators and their relative precedence.

Functions

Functions are declared by the fn keyword followed by a name, an optional arguments list, the => operator, and finally an expression. All function variables are local to the function. That is, the only variable names allowed in the function body are those declared by the arguments list. If a function has an argument called 'x', and there is also a global variable called 'x', the function should use the value of the supplied argument, not the value of the global variable, when evaluating the epxression. References to variables not found in the argument list should result in an error when the function is defined.

Example: declare a function to calculate the average of two variables and call it. (Each line starting with a '>' indicates a separate call to the input method of the interpreter, other lines represent output)

>fn avg => (x + y) / 2
    ERROR: Unknown identifier 'x'
>fn avg x y => (x + y) / 2
>a = 2
    2
>b = 4
    4
>avg a b
    3
Example: declare a function with an invalid variable name in the function body

>fn add x y => x + z
    ERROR: Invalid identifier 'z' in function body.
Example: chain method calls (hint: function calls are right associative!)

>fn echo x => x
>fn add x y => x + y
>add echo 4 echo 3
    7
Name conflicts

Because variable and function names share the same grammar, conflicts are possible. Precedence will be given to the first object declared. That is, if a variable is declared, then subsequent declaration of a function with the same name should result in an error. Likewise, declaration of a function followed by the initialization of a variable with the same name should result in an error.

Declaration of function with the same name as an existing function should overwrite the old function with the new one.

Example: Overwriting a function

>fn inc x => x + 1
>a = 0
    0
>a = inc a
    1
>fn inc x => x + 2
>a = inc a
    3
Input

Input will conform to either the function production or the expression production in the grammar below.

Output

Output for a valid function declaration will be an empty string (null in Java).
Output for a valid expression will be the result of the expression.
Output for input consisting entirely of whitespace will be an empty string (null in Java).
All other cases will throw an error.
-- In Haskell that is:
Right (Nothing, Interpreter)
Right (Just Double, Interpreter) 
Right (Nothing, Interpreter)
Left String
Language

Grammar

This section specifies the grammar for the interpreter language in EBNF syntax

function        ::= fn-keyword fn-name { identifier } fn-operator expression
fn-name         ::= identifier
fn-operator     ::= '=>'
fn-keyword      ::= 'fn'

expression      ::= factor | expression operator expression
factor          ::= number | identifier | assignment | '(' expression ')' | function-call
assignment      ::= identifier '=' expression
function-call   ::= fn-name { expression }

operator        ::= '+' | '-' | '*' | '/' | '%'

identifier      ::= letter | '_' { identifier-char }
identifier-char ::= '_' | letter | digit

number          ::= { digit } [ '.' digit { digit } ]

letter          ::= 'a' | 'b' | ... | 'y' | 'z' | 'A' | 'B' | ... | 'Y' | 'Z'
digit           ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
Operator Precedence

The following table lists the language's operators grouped in order of precedence. Operators within each group have equal precedence.

Category        Operators
Multiplicative  *, /, %
Additive        +, -
Assignment      =
Function        =>

URL: https://www.codewars.com/kata/simple-interactive-interpreter

"""

import re
from numbers import Number
import operator as op

def tokenize(expression):
    if expression == "":
        return []

    regex = re.compile("\s*(=>|[-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*")
    tokens = regex.findall(expression)
    return [s for s in tokens if not s.isspace()]

def is_number(d):
    p = re.compile(r"\A[-]?\d+(?:\.\d+)?\Z")
    m = p.search(d)
    return bool(m)
    

class Environment(dict):
    def __init__(self, operators = {}, functions = {}, variables = {}, keywords = {}):
        self.update(operators = operators, functions = functions, variables = variables, keywords = keywords)


class Func:
    def __init__(self, params, expr, interpreter):
        self.params, self.expr = params, expr
        self.env = Environment(interpreter.env["operators"], interpreter.env["functions"])
        self.ary = len(params)
        self.interp = interpreter

    def __call__(self, *args):
        self.env["variables"].update(zip(self.params, args))
        return self.interp.eval_postfix(self.interp.shunting_yard(self.expr, self.env), self.env)


class Interpreter:
    def __init__(self):
        variables = {}
        functions = {}
        operators = {
            "+": op.add,
            "-": op.sub,
            "*": op.mul,
            "/": op.truediv,
            "%": op.mod,
            "=": self._assign_var
        }
        keywords = ["fn"]
        self.env = Environment(operators, functions, variables, keywords)

    def input(self, expression):
        tokens = tokenize(expression)
        if not tokens:
            return ""
        if tokens[0] in self.env["keywords"]:
            # Function declaration
            if tokens[0] == "fn":
                new_fn_name = tokens[1]
                if new_fn_name in self.env["variables"]:
                    raise Exception("Cannot overwrite variable with function!")
                assign_op_index = tokens.index("=>")
                params = tokens[2:assign_op_index]
                if len(params) != len(set(params)):
                    raise Exception("Duplicate parameters specified!")
                expr = tokens[assign_op_index+1:]
                for token in expr:
                    if token.isalpha() and token not in params:
                        raise Exception("Function body contains unknown variables!")
                new_fn = Func(params, expr, self)
                self.env["functions"][new_fn_name] = new_fn
                return ""
        else:
            value = self.eval_expr(tokens)
        return value

    def eval_expr(self, tokens):
        return self.eval_postfix(self.shunting_yard(tokens))

    def _assign_var(self, name, value):
        if name in self.env["functions"]:
            raise Exception("Cannot overwrite function with variable!")
        self.env["variables"][name] = value
        return value

    def shunting_yard(self, expression, env = None):
        if env is None:
            env = self.env
        def precedence(operator):
            if operator == '+' or operator == '-':
                return 2
            elif operator == '*' or operator == '/' or operator == '%':
                return 3
            elif operator == "=":
                return 1
            else:
                raise Exception("%s is not a valid operator." % operator)
        def is_left_assoc(operator):
            if operator == "=":
                return False
            return True

        output = []
        operators = []
        for token in expression:
            if is_number(token):
                try:
                    output.append(int(token))
                except ValueError:
                    output.append(float(token))
            elif token in env["functions"]:
                operators.append(token)
            elif token in env["variables"]:
                output.append(token)
            elif token in env["operators"]:
                if operators and operators[-1] in env["operators"]:
                    o1 = token
                    o2 = operators[-1]
                    while operators and o2 in env["operators"] and ((is_left_assoc(o1) and precedence(o1) <= precedence(o2)) or (not is_left_assoc(o1) and precedence(o1) < precedence(o2))):
                        output.append(env["operators"][operators.pop()])
                        try:
                            o2 = operators[-1]
                        except IndexError:
                            break
                operators.append(token)
            elif token == "(":
                operators.append(token)
            elif token == ")":
                while operators and operators[-1] != "(" and operators[-1] in env["operators"]:
                    output.append(env["operators"][operators.pop()])
                try:
                    par = operators.pop()
                except IndexError:
                    raise Exception("ERROR: Mismatched parentheses!")
                    return
                if operators and operators[-1] in env["functions"]:
                    output.append(env["functions"][operators.pop()])
            else:
                # Token is identifier?
                output.append(token)
                #raise Exception("ERROR: Invalid token: %r" % token)
                #return
        while operators:
            if operators[-1] in env["operators"]:
                output.append(env["operators"][operators.pop()])
            elif operators[-1] in env["functions"]:
                output.append(env["functions"][operators.pop()])
            else:
                raise Exception("Invalid function!")
        return output

    def eval_postfix(self, tokens, env = None):
        if env is None:
            env = self.env
        if tokens is None:
            return ""
        output = []
        for i, token in enumerate(tokens):
            if isinstance(token, Number):
                output.append(token)
            elif isinstance(token, Func):
                try:
                    args = [env["variables"][output.pop()] if output[-1] in env["variables"] else output.pop() for _ in range(token.ary)]
                except IndexError:
                    raise Exception("ERROR: Incorrect number of arguments passed to function!")
                result = token(*args)
                output.append(result)
            elif callable(token):
                right = output.pop()
                left = output.pop()
                if right in env["variables"]:
                    right = env["variables"][right]
                if isinstance(right, str):
                    raise Exception("ERROR: Variable referenced before assignment!")
                if left in env["variables"] and token != env["operators"]["="]:
                    left = env["variables"][left]
                result = token(left, right)
                output.append(result)
            elif isinstance(token, str):
                output.append(token)
        if len(output) > 1:
            raise Exception("ERROR: Invalid syntax!")
        try:
            if output[0] in env["variables"]:
                return env["variables"][output[0]]
            elif isinstance(output[0], str):
                raise Exception("Undeclared variable referenced!")
            else:
                return output[0]
        except IndexError:
            return ""

            ////////

re — Regular expression operations

This module provides regular expression matching operations similar to those found in Perl.
regular expressions can be used in python

////////////////////
"""
Kata: Simpler Interactive Interpreter (2 kyu)

Description:

Simpler Interactive interpreter (or REPL)

You will create an interpreter which takes inputs described below and produces outputs, storing state in between each input. This is a simplified version of the Simple Interactive Interpreter kata with functions removed, so if you have fun with this kata, check out its big brother to add functions into the mix.

If you're not sure where to start with this kata, check out ankr's Evaluate Mathematical Expression kata.

Note that the
eval
command has been disabled.

Concepts

The interpreter will take inputs in the language described under the language header below. This section will give an overview of the language constructs.

Variables

Any identifier which is not a keyword will be treated as a variable. If the identifier is on the left hand side of an assignment operator, the result of the right hand side will be stored in the variable. If a variable occurs as part of an expression, the value held in the variable will be substituted when the expression is evaluated.

Variables are implicitly declared the first time they are assigned to.

Example: Initializing a variable to a constant value and using the variable in another expression (Each line starting with a '>' indicates a separate call to the input method of the interpreter, other lines represent output)

>x = 7
    7
>x + 6
    13
Referencing a non-existent variable will cause the interpreter to throw an error. The interpreter should be able to continue accepting input even after throwing.

Example: Referencing a non-existent variable

>y + 7
    ERROR: Invalid identifier. No variable with name 'y' was found."
Assignments

An assignment is an expression that has an identifier on left side of an = operator, and any expression on the right. Such expressions should store the value of the right hand side in the specified variable and return the result.

Example: Assigning a constant to a variable

x = 7
    7
In this kata, all tests will contain only a single assignment. You do not need to consider chained or nested assignments.

Operator Precedence

Operator precedence will follow the common order. There is a table in the Language section below that explicitly states the operators and their relative precedence.

Name conflicts

Because variables are declared implicitly, no naming conflicts are possible. variable assignment will always overwrite any existing value.

Input

Input will conform to the expression production in the grammar below.

Output

Output for a valid expression will be the result of the expression.

Output for input consisting entirely of whitespace will be an empty string (null in case of Java).

All other cases will throw an error.

Language

Grammar

This section specifies the grammar for the interpreter language in EBNF syntax

expression      ::= factor | expression operator expression
factor          ::= number | identifier | assignment | '(' expression ')'
assignment      ::= identifier '=' expression

operator        ::= '+' | '-' | '*' | '/' | '%'

identifier      ::= letter | '_' { identifier-char }
identifier-char ::= '_' | letter | digit

number          ::= { digit } [ '.' digit { digit } ]

letter          ::= 'a' | 'b' | ... | 'y' | 'z' | 'A' | 'B' | ... | 'Y' | 'Z'
digit           ::= '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

Operator Precedence

The following table lists the language's operators grouped in order of precedence. Operators within each group have equal precedence.

Category        Operators
Multiplicative  *, /, %
Additive        +, -
Assignment      =


URL: https://www.codewars.com/kata/simpler-interactive-interpreter
"""
/////////////////////
import re
from numbers import Number
import operator as op

def tokenize(expression):
    if expression == "":
        return []

    regex = re.compile("\s*(=>|[-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*")
    tokens = regex.findall(expression)
    return [s for s in tokens if not s.isspace()]

def is_number(d):
    p = re.compile(r"\A[-]?\d+(?:\.\d+)?\Z")
    m = p.search(d)
    return bool(m)

def is_operator(o):
    p = re.compile(r'\A[\+\-\*\/\%]\Z')
    m = p.search(o)
    return bool(m)

class Interpreter:
    def __init__(self):
        self.vars = {}
        self.functions = {}
        self.operators = {
            "+": op.add,
            "-": op.sub,
            "*": op.mul,
            "/": op.truediv,
            "%": op.mod
        }

    def input(self, expression):
        tokens = tokenize(expression)
        #print("tokens: %r" % tokens)
        
        if "=" in tokens:
            assert tokens[1] == "="
            new_var = tokens[0]
            tokens = tokens[2:]
            value = self.eval_postfix(self.shunting_yard(tokens))
            self.vars[new_var] = value
        else:
            value = self.eval_postfix(self.shunting_yard(tokens))
        return value

    def precedence(self, operator):
        if operator == '+' or operator == '-':
            return 2
        elif operator == '*' or operator == '/' or operator == '%':
            return 3
        else:
            raise Exception("%s is not a valid operator." % operator)
        
    def shunting_yard(self, expression):
        output = []
        operators = []
        last = ""
        for token in expression:
            if is_number(token):
                if last == "number":
                    raise Exception("ERROR: Invalid syntax: %r" % expression)
                    return
                last = "number"
                try:
                    output.append(int(token))
                except ValueError:
                    output.append(float(token))
            elif token in self.vars:
                if last == "number":
                    raise Exception("ERROR: Invalid syntax: %r" % expression)
                    return
                last = "number"              
                output.append(self.vars[token])
            elif token in self.operators:
                last = "operator"
                if operators and is_operator(operators[-1]):
                    o1 = self.precedence(token)
                    o2 = self.precedence(operators[-1])
                    while operators and operators[-1] in self.operators and o2 >= o1:
                        o2 = self.precedence(operators[-1])
                        output.append(self.operators[operators.pop()])
                operators.append(token)
            elif token == "(":
                last = "left_paren"
                operators.append(token)
            elif token == ")":
                last = "right_paren"
                while operators and operators[-1] != "(":
                    output.append(self.operators[operators.pop()])
                try:
                    par = operators.pop()
                except IndexError:
                    raise Exception("ERROR: Mismatched parentheses!")
                    return
            else:
                raise Exception("ERROR: Invalid token: %r" % token)
                return
        while operators:
            output.append(self.operators[operators.pop()])
        return output

    def eval_postfix(self, expression):
        if expression is None:
            return ""
        output = []
        for token in expression:
            if isinstance(token, Number):
                output.insert(0, token)
            else:
                right = output.pop(0)
                left = output.pop(0)
                result = token(left, right)
                output.insert(0, result)
        try:
            return output[0]
        except IndexError:
            return ""

SOFTWARE INTERVIEW

get familiar with coderpad

may ask you to run a few simple lines of code

may have to do object oriented design

may give you algorithm questions

may not be expected to do everything due to time

may have to make/code cloud reading application

can probably write down comments

Tell them what you are doing maybe

tell values and stuff
"""
Online cloud reading application
Similar to amazon kindle (for short stories)
We need help designing actual application (code that implements
    this)
A few things looking for:
- Users have a library of books that they can add to or remove from
- Users can set a book from their library as active
- The reading application remembers where a user left off in a given book
- The reading application only displays a page of text at a time in the active book.

- All books in library
- Remember active book
- Remember last pages in all books
- Display a page in active book

- Classes:
    - representing a book (Book)
        - id: str/int ?
        - title: str
        - pages/content in the book: list of strings (per page)
        - last page user looked at: int (remember off-by-one)
    - respresenting a library
        - collection of books: {id: Book()}
        - active book: variable correspond to id
"""

class Book:
    def__init__(self, title, content)

SCALA

right click then new scala object an option

create new file 

can give name other info here too like source folder and kind

HelloWorld.scala

window top 
general then editors then text editors then click colors and fonts all kinds of options

In scala IDE stuff or other thing maybe ///////

object HelloWorld {
    def main(args: Array[String]) {
        println("Hello, world!")
    }
}

to run right click then run as then scala application

to use scala interpreter scala apple // might not be right name
right click on project select scala then select create scala interpreter in ScalaSample

HelloWorld.main(Array(" "))

*/