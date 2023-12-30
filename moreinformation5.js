/*

JAVA

Compact constructor // look up ///////// shortcut

records cannot extend any other class

records are also implicitly final classes which means
that they cant be extended by any other class either

You are allowed to put final in your record declaration ///// other stuff here redundant and stuff be careful

You are allowed to implement interfaces in records

Static methods /// look up

Setter methods //// look up

one of the main features of a record and one of the main
reasons to use a record that they are immutableby default //// look at more 8:00 records in java coding with john
instance methods /// look up

Java Varargs
What is varargs in Java?

Let’s suppose you are creating a Java method. However, you are not sure how many arguments your method is going to accept. To address this problem, Java 1.5 introduced varargs.

Varargs is a short name for variable arguments. In Java, an argument of a method can accept arbitrary number of values. This argument that can accept variable number of values is called varargs.

The syntax for implementing varargs is as follows:

accessModifier methodName(datatype… arg) {
    // method body
}

In order to define vararg, ... (three dots) is used in the formal parameter of a method.

A method that takes variable number of arguments is called a variable-arity method, or simply a varargs method.

First, let’s look at the example without using varargs:

class NoVararg {

    public int sumNumber(int a, int b){
        return a+b;
    }

    public int sumNumber(int a, int b, int c){
        return a+b+c;
    }

    public static void main( String[] args ) {
        NoVararg obj = new NoVararg();
        System.out.println(obj.sumNumber(1, 2));
        System.out.println(obj.sumNumber(1, 2, 3));
    }
}

When you run this program, the output will be:

3
6

As you can clearly see, you had to overload sumNumber() method to make it work for 3 arguments.

What if the user wants to add 5 numbers or 10 or 100?

This can be handled in a neat way with the use of varargs. Let’s see a code example:
Example: Working of varargs

class VarargExample {

    public int sumNumber(int ... args){
        System.out.println("argument length: " + args.length);
        int sum = 0;
        for(int x: args){
            sum += x;
        }
        return sum;
    }

    public static void main( String[] args ) {
        VarargExample ex = new VarargExample();

        int sum2 = ex.sumNumber(2, 4);
        System.out.println("sum2 = " + sum2);

        int sum3 = ex.sumNumber(1, 3, 5);
        System.out.println("sum3 = " + sum3);

        int sum4 = ex.sumNumber(1, 3, 5, 7);
        System.out.println("sum4 = " + sum4);
    }
}

Output:

argument length: 2
sum2 = 6
argument length: 3
sum3 = 9
argument length: 4
sum4 = 16

Here, the sumNumber() method returns the sum of int parameters passed to it (doesn't matter the number of arguments passed).

Note: As you can see, varargs can be really useful in some situations. However, if you are certain about the number of arguments passed to a method, use method overloading instead. For example, if you are certain that sumNumber() method will be used only to calculate the sum of either 2 or 3 arguments, use overloading like in the first example.

Let's take another example. The format() method defined in Java library accepts varargs. In JDK, the format() method is defined as follows:

public static String format(Locale l, String format, Object... args) {
    // body
}

Example: format() Method

class Company {
  public static void main(String[] args) {
    String siteName = "programiz.com";
    int empCount = 6;
    String type = "tutorial website";
    System.out.println(
        String.format(
          "Site Name : %s, Emp Count: %d Type: %s",
            siteName, empCount, type
          )
        );
  }
}

Output:

Site Name : programiz.com, Emp Count: 6 Type: tutorial website

How varargs works behind the scene?

Let’s consider the following pseudo code:

public int sumNumber(int ... nums) {
    // method body
}

The ... syntax tells the Java compiler that the method can be called with zero or more arguments. As a result, nums variable is implicitly declared as an array of type int[ ]. Thus, inside the method, nums variable is accessed using the array syntax.

In case of no arguments, the length of nums is 0.
Overloading Varargs Methods

Similar to typical methods, you can overload a vararg methods. For example,

Before you learn about overloading vararg methods, make sure to learn about Java Method Overloading first.

class VarargOverload {

    private void test(int ... args){
        int sum = 0;
        for (int i: args) {
            sum += i;
        }
        System.out.println("sum = " + sum);
    }

    private void test(boolean p, String ... args){
        boolean negate = !p;
        System.out.println("negate = " + negate);
        System.out.println("args.length = "+ args.length);
    }

    public static void main( String[] args ) {
        VarargOverload obj = new VarargOverload();
        obj.test(1, 2, 3);
        obj.test(true, "hello", "world");
    }
}

Output:

sum = 6
negate = false
args.length = 2

In the above program, test() method is overloaded by changing the number of arguments it accepts.
Things to remember while using Varargs

Here are a couple of things you should remember while working with Java vargars:

1. While defining method signature, always keep varargs at last.

The variable argument must be the last argument passed to the method. Let's consider, you invoked doSomething() method like this:

doSomething(1, 2, 3, 4);

And, your doSomething() method is defined as:

// incorrect method declaration

public void doSomething(int ... nums, int p){
    // method body
}

In this case, compiler cannot figure out the number of arguments passed to nums.

However, if you define your method as:

public void doSomething(int p, int ... nums) {
    // method body
}

The Java compiler assigns the first argument to p, and the remaining int arguments are assigned to nums.

2. A method can have only one varargs parameter.

For example, this method declaration is incorrect:

int doSomething(int p, float ... floatNums, double ... doubleNums) {
    // code
}

Ambiguity in Varargs Method overloading

Let’s consider you overloaded test() method like this:

class Demo { 
  
  static void test(int ... vargs) {
    // method body
  }
    
  static void test(int n, int ... vargs) {
    // method body
  }
}

In the above program, the compiler gets confused if you try to invoke the test() method even though test() methods are overloaded and accepts different number of arguments.

The compiler doesn’t know which method to call. The compiler may think, you are trying to call test(int ... vargs) with one varargs argument. Also, the compiler may think, you are trying to call test(int n, int ... vargs) with argument passed to the first parameter with empty second parameter.

Since there are two possibilities, it causes ambiguity. Because of this, sometimes you may need to use two different method names instead of overloading the varargs method.


Java Method Overloading

In Java, two or more methods may have the same name if they differ in parameters (different number of parameters, different types of parameters, or both). These methods are called overloaded methods and this feature is called method overloading. For example:

void func() { ... }
void func(int a) { ... }
float func(double a) { ... }
float func(int a, float b) { ... }

Here, the func() method is overloaded. These methods have the same name but accept different arguments.

Note: The return types of the above methods are not the same. It is because method overloading is not associated with return types. Overloaded methods may have the same or different return types, but they must differ in parameters.
Why method overloading?

Suppose, you have to perform the addition of given numbers but there can be any number of arguments (let’s say either 2 or 3 arguments for simplicity).

In order to accomplish the task, you can create two methods sum2num(int, int) and sum3num(int, int, int) for two and three parameters respectively. However, other programmers, as well as you in the future may get confused as the behavior of both methods are the same but they differ by name.

The better way to accomplish this task is by overloading methods. And, depending upon the argument passed, one of the overloaded methods is called. This helps to increase the readability of the program.
How to perform method overloading in Java?

Here are different ways to perform method overloading:
1. Overloading by changing the number of parameters

class MethodOverloading {
    private static void display(int a){
        System.out.println("Arguments: " + a);
    }

    private static void display(int a, int b){
        System.out.println("Arguments: " + a + " and " + b);
    }

    public static void main(String[] args) {
        display(1);
        display(1, 4);
    }
}

Output:

Arguments: 1
Arguments: 1 and 4

2. Method Overloading by changing the data type of parameters

class MethodOverloading {

    // this method accepts int
    private static void display(int a){
        System.out.println("Got Integer data.");
    }

    // this method  accepts String object
    private static void display(String a){
        System.out.println("Got String object.");
    }

    public static void main(String[] args) {
        display(1);
        display("Hello");
    }
}

Output:

Got Integer data.
Got String object.

Here, both overloaded methods accept one argument. However, one accepts the argument of type int whereas other accepts String object.

Let’s look at a real-world example:

class HelperService {

    private String formatNumber(int value) {
        return String.format("%d", value);
    }

    private String formatNumber(double value) {
        return String.format("%.3f", value);
    }

    private String formatNumber(String value) {
        return String.format("%.2f", Double.parseDouble(value));
    }

    public static void main(String[] args) {
        HelperService hs = new HelperService();
        System.out.println(hs.formatNumber(500));
        System.out.println(hs.formatNumber(89.9934));
        System.out.println(hs.formatNumber("550"));
    }
}

When you run the program, the output will be:

500
89.993
550.00

Note: In Java, you can also overload constructors in a similar way like methods.

Recommended Reading: Java Constructor Overloading
Important Points

    Two or more methods can have the same name inside the same class if they accept different arguments. This feature is known as method overloading.
    Method overloading is achieved by either:
        changing the number of arguments.
        or changing the data type of arguments.
    It is not method overloading if we only change the return type of methods. There must be differences in the number of parameters.



Have to do a lot of code for default classes in Java
A constructor that is automatically generated when you
create a record is called a canonical constructor

Canonical Constructors in Java This type of constructor has implicit declaration of all the parameters – the same as the record component – and is automatically assigned to the values passed to the component of the record. Also, note that, in compact constructors,
 we do not use this keyword

 Types of Constructor

In Java, constructors can be divided into 3 types:

    No-Arg Constructor
    Parameterized Constructor
    Default Constructor

1. Java No-Arg Constructors

Similar to methods, a Java constructor may or may not have any parameters (arguments).

If a constructor does not accept any parameters, it is known as a no-argument constructor. For example,

private Constructor() {
   // body of the constructor
}

Example 2: Java private no-arg constructor

class Main {

  int i;

  // constructor with no parameter
  private Main() {
    i = 5;
    System.out.println("Constructor is called");
  }

  public static void main(String[] args) {

    // calling the constructor without any parameter
    Main obj = new Main();
    System.out.println("Value of i: " + obj.i);
  }
}

Run Code

Output:

Constructor is called
Value of i: 5

In the above example, we have created a constructor Main(). Here, the constructor does not accept any parameters. Hence, it is known as a no-arg constructor.

Notice that we have declared the constructor as private.

Once a constructor is declared private, it cannot be accessed from outside the class. So, creating objects from outside the class is prohibited using the private constructor.

Here, we are creating the object inside the same class. Hence, the program is able to access the constructor. To learn more, visit Java Implement Private Constructor.

However, if we want to create objects outside the class, then we need to declare the constructor as public.
Example 3: Java public no-arg constructors

class Company {
  String name;

  // public constructor
  public Company() {
    name = "Programiz";
  }
}

class Main {
  public static void main(String[] args) {

    // object is created in another class
    Company obj = new Company();
    System.out.println("Company name = " + obj.name);
  }
}

Run Code

Output:

Company name = Programiz

Recommended Reading: Java Access Modifier
2. Java Parameterized Constructor

A Java constructor can also accept one or more parameters. Such constructors are known as parameterized constructors (constructor with parameters).
Example 4: Parameterized constructor

class Main {

  String languages;

  // constructor accepting single value
  Main(String lang) {
    languages = lang;
    System.out.println(languages + " Programming Language");
  }

  public static void main(String[] args) {

    // call constructor by passing a single value
    Main obj1 = new Main("Java");
    Main obj2 = new Main("Python");
    Main obj3 = new Main("C");
  }
}

Run Code

Output:

Java Programming Language
Python Programming Language
C Programming Language

In the above example, we have created a constructor named Main(). Here, the constructor takes a single parameter. Notice the expression,

Main obj1 = new Main("Java");

Here, we are passing the single value to the constructor. Based on the argument passed, the language variable is initialized inside the constructor.
3. Java Default Constructor

If we do not create any constructor, the Java compiler automatically create a no-arg constructor during the execution of the program. This constructor is called default constructor.
Example 5: Default Constructor

class Main {

  int a;
  boolean b;

  public static void main(String[] args) {

    // A default constructor is called
    Main obj = new Main();

    System.out.println("Default Value:");
    System.out.println("a = " + obj.a);
    System.out.println("b = " + obj.b);
  }
}

Run Code

Output:

Default Value:
a = 0
b = false

Here, we haven't created any constructors. Hence, the Java compiler automatically creates the default constructor.

The default constructor initializes any uninitialized instance variables with default values.

		
			
				Type
					Default Value
			

			
				boolean
					false
			

			
				byte
					0
			

			
				short
					0
			

			
				int
					0
			

			
				long
					0L
			

			
				char
					\u0000
			

			
				float
					0.0f
			

			
				double
					0.0d
			

			
				object
					Reference null
			

		
	

In the above program, the variables a and b are initialized with default value 0 and false respectively.

The above program is equivalent to:

class Main {

  int a;
  boolean b;

   Main() {
    a = 0;
    b = false;
  }

  public static void main(String[] args) {
    // call the constructor
    Main obj = new Main();

    System.out.println("Default Value:");
    System.out.println("a = " + obj.a);
    System.out.println("b = " + obj.b);
  }
}

Run Code

The output of the program is the same as Example 5.
Important Notes on Java Constructors

    Constructors are invoked implicitly when you instantiate objects.
    The two rules for creating a constructor are:
    The name of the constructor should be the same as the class.
    A Java constructor must not have a return type.
    If a class doesn't have a constructor, the Java compiler automatically creates a default constructor during run-time. The default constructor initializes instance variables with default values. For example, the int variable will be initialized to 0
    Constructor types:
    No-Arg Constructor - a constructor that does not accept any arguments
    Parameterized constructor - a constructor that accepts arguments
    Default Constructor - a constructor that is automatically created by the Java compiler if it is not explicitly defined.
    A constructor cannot be abstract or static or final.
    A constructor can be overloaded but can not be overridden.

Constructors Overloading in Java

Similar to Java method overloading, we can also create two or more constructors with different parameters. This is called constructors overloading.
Example 6: Java Constructor Overloading

class Main {

  String language;

  // constructor with no parameter
  Main() {
    this.language = "Java";
  }

  // constructor with a single parameter
  Main(String language) {
    this.language = language;
  }

  public void getName() {
    System.out.println("Programming Langauage: " + this.language);
  }

  public static void main(String[] args) {

    // call constructor with no parameter
    Main obj1 = new Main();

    // call constructor with a single parameter
    Main obj2 = new Main("Python");

    obj1.getName();
    obj2.getName();
  }
}

Run Code

Output:

Programming Language: Java
Programming Language: Python

In the above example, we have two constructors: Main() and Main(String language). Here, both the constructor initialize the value of the variable language with different values.

Based on the parameter passed during object creation, different constructors are called and different values are assigned.

It is also possible to call one constructor from another constructor. To learn more, visit Java Call One Constructor from Another.

Note: We have used this keyword to specify the variable of the class. To know more about this keyword, visit Java this keyword.


DUTCH

this concert is great = dit concert is geweldig

the ceo has arrived = de CEO is gearriveerd

the sand is hot = het zand is heet



ik can mean i am same as ik ben

i am listening to music = ik luister naar muziek

C

#include <stdio.h>
#include <stdlib.h> //////////////// might not need these


int main(){

    int luckyNumbers[] = {4, 8, 15, 16, 23, 42};

    int i;
    for(i = 0; i < 6; i++){
        printf("%d]\n", luckyNumbers[i]);
    }

   return 0;
}


//// other stuff written here too come back sometime
int i = 1;
    while(i <= 5){
        printf("%d\n", i);
        i++;
    }

#include <stdio.h>
#include <stdlib.h>


int main(){

    int secretNumber = 5;
    int guess;
    int guessCount = 0;
    int guessLimit = 3;
    int outOfGuesses = 0;

    while(guess != secretNumber && outOfGuesses == 0){
        if(guessCount < guessLimit){
            printf("Enter a number: ");
            scanf("%d", &guess);
            guessCount++;
        } else {
            outOfGuesses = 1;
        }
    }
    if(outOfGuesses == 1){
        printf("Out of guesses");
    } else {
        printf("You win!");
    }

   return 0;

#include <stdio.h>
#include <stdlib.h>


int main(){
    /////
    int index = 6;
    do {
       printf("%d\n", index);
       index++;
    }while(index <= 5);



   return 0;
}

int main(){

    struct Student student1;
    student1.age = 22;
    student1.gpa = 3.2;
    strcpy( student1.name, "Jim");
    strcpy( student1.major, "Business");

    struct Student student2;
    student2.age = 20;
    student2.gpa = 2.5;
    strcpy( student2.name, "Ethan");
    strcpy( student1.major, "Technology");

    printf("%s", student2.name);

   return 0;
}

    char grade = 'C';

    switch(grade){
case 'A' :
    printf("You did great! ");
    break;
case 'B' :
    printf("You did alright!");
    break;
case 'C' :
    printf("You did poorly");
    break;
case 'D' :
    printf("You did very bad");
    break;
case 'F' :
    printf("You Failed!");
    break;
default :
        printf("Invalid Grade");
    } //////


    double num1;
    double num2;
    char op;

    printf("Enter a number: ");
    scanf("%lf", &num1);
    printf("Enter operator: ");
    scanf(" %c", &op);
    printf("Enter a number: ");
    scanf("%lf", &num2);

    if(op == '+'){
        printf("%f", num1 + num2);
    } else if(op == '-'){
        printf("%f", num1 - num2);
    } else if(op == '/'){
        printf("%f", num1 / num2);
    } else{
        printf("Invalid Operator");
    }

if(!(3 < 2)){
        printf("True");
    } else{
        printf("False");
    }

int max(int num1, int num2, int num3){
    int result;

    if(num1 >= num2 && num1 >= num3){
        result = num1;
    } else if(num2 >= num1 && num2 >= num3){
        result = num2;
        } else {
            result = num3;
        }

    return result;
}

3 < 2 || 2 > 5

== != 

printf("%d", max(13, 2, 3));

if(num1 > num2) {
        result = num1;
    } else {
        result = num2;
    }

#include <stdio.h>
#include <stdlib.h>

double cube(double num){
    return num * num * num;
}

int main()
{
    printf("Answer: %f", cube(7.0));

   return 0;
} //////////////////////////


SCALA

The system cannot find the path specified.

C:\Users\Ethan>cd scala-samples
The system cannot find the path specified.

C:\Users\Ethan>cd Home
The system cannot find the path specified.

C:\Users\Ethan>mkdir sbt_proj

C:\Users\Ethan>sbt_proj>sbt
'sbt_proj' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\Ethan>cd scala_samples

C:\Users\Ethan\scala_samples>sbt_proj>sbt
'sbt_proj' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\Ethan\scala_samples>


*/