/*

SCALA

In command prompt 

got to press enter to declare a variable

can use semicolon as a delimiter or a new line
as a delimiter

lazy loading or on-demand loading

 scala> var a : Int = 12;
 a: Int = 12

  scala> a+30
  res0: Int = 42 /// dont know if res0 is complete or not
  res which is result is a temporary variable
  where your result will be store

  0 will go up with which new result like:
  scala> a+40 
  res1: Int = 52

  scala> val b : Int = 50
  b: Int = 50  /// val makes it immutable unchangable and constant

  scala> b = 20
  <console>:12: error: reassignment to val
         b = 20
           ^

  scala> a = 20
  a: Int = 20

  scala> var c : Int;
 <console>:11: error: only traits and abstract classes
 can have declared but undefined members
 (Note that variables need to be initialized to be defined
 )
        var c : Int;

scala> var c = True
<console>: error: not found: value True
       var c = True
               ^

scala> var c = true
c: Boolean = true

scala> var d = 12.3
d: Float = 12.3
// may e wrong spacing around :
scala> val x = {val a :Int = 200 ; val b: Int=300; a+b }
x: Int = 500

scala> val x = {
       val a : Int = 500
       val b : Int =600
       a+b
       }
x: Int = 1100

scala> val x = 500
x: Int = 500

scala> x * 30
res2: Int = 15000

scala> lazy val x = 500
x: Int = <lazy>

scala> x * 2
res3: Int = 1000

with or without semicolon does not matter either way

can declare variables in scala in 2 ways

Boolean true or false
Byte 8 bit signed value
Short 16 bit signed value
Char 16 bit unsigned Unicode character
Int 32 bit signed value
Long 64 bit signed value
Float 32 bit IEEE 754 single-precision float
Double 64 bit IEEE 754 double-precision float
String A sequence of characters

Unit Corresponds to no value
Null null or empty reference
Nothing subtype of every other type; includes no
Any The supertype of any type; any object is of
AnyRef The supertype of any reference type

C:\Users\Ethan>cd C:\Users\Ethan\scala_samples\sbt_proj

C:\Users\Ethan\scala_samples\sbt_proj>mkdir sbt_thing

C:\Users\Ethan\scala_samples\sbt_proj>

C:\Users\Ethan\scala_samples\sbt_proj\sbt_thing>sbt

C:\Users\Ethan\scala_samples\sbt_proj\sbt_thing>sbt
[warn] Neither build.sbt nor a 'project' directory in the current directory: "C:\Users\Ethan\scala_samples\sbt_proj\sbt_thing"
c) continue
q) quit
?c

Scala is an eclipse based IDE

Try to get scala IDE working

go to top left file then new for options
one being scala project

can give name to it

// src stuff

High level similarities

At a high level, Scala shares these similarities with Java:

    Scala code is compiled to .class files, packaged in JAR files, and runs on the JVM
    It’s an object-oriented programming (OOP) language
    It’s statically typed
    Both languages have support for lambdas and higher-order functions
    They can both be used with IDEs like IntelliJ IDEA and Microsoft VS Code
    Projects can be built with build tools like Gradle, Ant, and Maven
    It has terrific libraries and frameworks for building server-side, network-intensive applications, including web server applications, microservices, machine learning, and more (see the “Awesome Scala” list)
    Both Java and Scala can use Scala libraries:
        They can use the Akka actors library to build actor-based concurrent systems, and Apache Spark to build data-intensive applications
        They can use the Play Framework to develop server-side applications
    You can use GraalVM to compile your projects into native executables
    Scala can seamlessly use the wealth of libraries that have been developed for Java

High level differences

Also at a high level, the differences between Java and Scala are:

    Scala has a concise but readable syntax; we call it expressive
    Though it’s statically typed, Scala often feels like a dynamic language
    Scala is a pure OOP language, so every object is an instance of a class, and symbols like + and += that look like operators are really methods; this means that you can create your own operators
    In addition to being a pure OOP language, Scala is also a pure FP language; in fact, it encourages a fusion of OOP and FP, with functions for the logic and objects for modularity
    Scala has a full suite of immutable collections, including List, Vector, and immutable Map and Set implementations
    Everything in Scala is an expression: constructs like if statements, for loops, match expressions, and even try/catch expressions all have return values
    Scala idioms favor immutability by default: you’re encouraged to use immutable (final) variables and immutable collections
    Idiomatic Scala code does not use null, and thus does not suffer from NullPointerException
    The Scala ecosystem has other build tools in sbt, Mill, and others
    In addition to running on the JVM, the Scala.js project lets you use Scala as a JavaScript replacement
    The Scala Native project adds low-level constructs to let you write “systems” level code, and also compiles to native executables

Programming level differences

Finally, these are some of the differences you’ll see every day when writing code:

    Scala’s syntax is extremely consistent
    Variables and parameters are defined as val (immutable, like final in Java) or var (mutable)
    Type inference makes your code feel dynamically typed, and helps to keep your code brief
    In addition to simple for loops, Scala has powerful for comprehensions that yield results based on your algorithms
    Pattern matching and match expressions will change the way you write code
    Writing immutable code by default leads to writing expressions rather than statements; in time you see that writing expressions simplifies your code (and your tests)
    Toplevel definitions let you put method, field, and other definitions anywhere, also leading to concise, expressive code
    You can create mixins by “mixing” multiple traits into classes and objects (traits are similar to interfaces in Java 8 and newer)
    Classes are closed by default, supporting Joshua Bloch’s Effective Java idiom, “Design and document for inheritance or else forbid it”
    Scala’s contextual abstractions and term inference provide a collection of features:
        Extension methods let you add new functionality to closed classes
        Given instances let you define terms that the compiler can synthesize at using points, making your code less verbose and essentially letting the compiler write code for you
        Multiversal equality lets you limit equality comparisons—at compile time—to only those comparisons that make sense
    Scala has state of the art, third-party, open source functional programming libraries
    Scala case classes are like records in Java 14; they help you model data when writing FP code, with built-in support for concepts like pattern matching and cloning
    Thanks to features like by-name parameters, infix notation, optional parentheses, extension methods, and higher-order functions, you can create your own “control structures” and DSLs
    Scala files do not have to be named according to the classes or traits they contain
    Many other goodies: companion classes and objects, macros, union and intersection, numeric literals, multiple parameter lists, default values for parameters, named arguments, and more


    Features compared with examples

Given that introduction, the following sections provide side-by-side comparisons of Java and Scala programming language features.
OOP style classes and methods

This section provides comparisons of features related to OOP-style classes and methods.
Comments:
//
/* ... */
/** ... */
//
/* ... */
/** ...  another asterisk / here
OOP style class, primary constructor:

Scala doesn’t follow the JavaBeans standard, so instead of showing Java code written in the JavaBeans style, here we show Java code that is equivalent to the Scala code that follows it.
class Person {
  public String firstName;
  public String lastName;
  public int age;
  public Person(
    String firstName,
    String lastName,
    int age
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  public String toString() {
    return String.format("%s %s is %d years old.", firstName, lastName, age);
  }
}
class Person (
  var firstName: String,
  var lastName: String,
  var age: Int
):  
  override def toString = s"$firstName $lastName is $age years old."
Auxiliary constructors:
public class Person {
  public String firstName;
  public String lastName;
  public int age;

  // primary constructor
  public Person(
    String firstName,
    String lastName,
    int age
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // zero-arg constructor
  public Person() {
    this("", "", 0);
  }

  // one-arg constructor
  public Person(String firstName) {
    this(firstName, "", 0);
  }

  // two-arg constructor
  public Person(
    String firstName,
    String lastName
  ) {
    this(firstName, lastName, 0);
  }

}
class Person (
  var firstName: String,
  var lastName: String,
  var age: Int
):
    // zero-arg auxiliary constructor
    def this() = this("", "", 0)

    // one-arg auxiliary constructor
    def this(firstName: String) =
      this(firstName, "", 0)

    // two-arg auxiliary constructor
    def this(
      firstName: String,
      lastName: String
    ) =
      this(firstName, lastName, 0)

end Person
Classes closed by default:

“Plan for inheritance or else forbid it.”
final class Person
class Person
A class that’s open for extension:
class Person
open class Person
One-line method:
public int add(int a, int b) {
  return a + b;
}
def add(a: Int, b: Int): Int = a + b
Multiline method:
public void walkThenRun() {
  System.out.println("walk");
  System.out.println("run");
}
def walkThenRun() =
  println("walk")
  println("run")
Immutable fields:
final int i = 1;
val i = 1
Mutable fields:
int i = 1;
var i = 1;
var i = 1
Interfaces, traits, and inheritance

This section compares Java interfaces to Scala traits, including how classes extend interfaces and traits.
Interfaces/traits:
public interface Marker {};
trait Marker
Simple interface:
public interface Adder {
  public int add(int a, int b);
}
trait Adder:
  def add(a: Int, b: Int): Int
Interface with a concrete method:
public interface Adder {
  int add(int a, int b);
  default int multiply(
    int a, int b
  ) {
    return a * b;
  }
}
trait Adder:
  def add(a: Int, b: Int): Int
  def multiply(a: Int, b: Int): Int =
    a * b
Inheritance:
class Dog extends Animal implements HasLegs, HasTail
class Dog extends Animal, HasLegs, HasTail
Extend multiple interfaces

These interfaces and traits have concrete, implemented methods (default methods):
interface Adder {
  default int add(int a, int b) {
    return a + b;
  }
}

interface Multiplier {
  default int multiply (
    int a,
    int b)
  {
    return a * b;
  }
}

public class JavaMath
implements Adder, Multiplier {}

JavaMath jm = new JavaMath();
jm.add(1,1);
jm.multiply(2,2);
trait Adder:
  def add(a: Int, b: Int) = a + b

trait Multiplier:
  def multiply(a: Int, b: Int) = a * b

class ScalaMath extends Adder, Multiplier

val sm = new ScalaMath
sm.add(1,1)
sm.multiply(2,2)
Mixins:
N/A
class DavidBanner

trait Angry:
  def beAngry() =
    println("You won’t like me ...")

trait Big:
  println("I’m big")

trait Green:
  println("I’m green")

// mix in the traits as DavidBanner
// is created
val hulk = new DavidBanner with Big,
  Angry, Green
Control structures

This section compares control structures in Java and Scala.
if statement, one line:
if (x == 1) { System.out.println(1); }
if x == 1 then println(x)
if statement, multiline:
if (x == 1) {
  System.out.println("x is 1, as you can see:")
  System.out.println(x)
}
if x == 1 then
  println("x is 1, as you can see:")
  println(x)
if, else if, else:
if (x < 0) {
  System.out.println("negative")
} else if (x == 0) {
  System.out.println("zero")
} else {
  System.out.println("positive")
}
if x < 0 then
  println("negative")
else if x == 0
  println("zero")
else
  println("positive")
if as the method body:
public int min(int a, int b) {
  return (a < b) ? a : b;
}
def min(a: Int, b: Int): Int =
  if a < b then a else b
Return a value from if:

Called a ternary operator in Java:
int minVal = (a < b) ? a : b;
val minValue = if a < b then a else b
while loop:
while (i < 3) {
  System.out.println(i);
  i++;
}
while i < 3 do
  println(i)
  i += 1
for loop, single line:
for (int i: ints) {
  System.out.println(i);
}
//preferred
for i <- ints do println(i)

// also available
for (i <- ints) println(i)
for loop, multiple lines:
for (int i: ints) {
  int x = i * 2;
  System.out.println(x);
}
for
  i <- ints
do
  val x = i * 2
  println(s"i = $i, x = $x")
for loop, multiple generators:
for (int i: ints1) {
  for (int j: chars) {
    for (int k: ints2) {
      System.out.printf("i = %d, j = %d, k = %d\n", i,j,k);
    }
  }
}
for
  i <- 1 to 2
  j <- 'a' to 'b'
  k <- 1 to 10 by 5
do
  println(s"i = $i, j = $j, k = $k")
Generator with guards (if) expressions:
List ints =
  ArrayList(1,2,3,4,5,6,7,8,9,10);

for (int i: ints) {
  if (i % 2 == 0 && i < 5) {
    System.out.println(x);
  }
}
for
  i <- 1 to 10
  if i % 2 == 0
  if i < 5
do
  println(i)
for comprehension:
N/A
val list =
  for
    i <- 1 to 3
  yield
    i * 10
// list: Vector(10, 20, 30)
switch/match:
String monthAsString = "";
switch(day) {
  case 1: monthAsString = "January";
          break;
  case 2: monthAsString = "February";
          break;
  default: monthAsString = "Other";
          break;
}
val monthAsString = day match
  case 1 => "January"
  case 2 => "February"
  case _ => "Other"
switch/match, multiple conditions per case:
String numAsString = "";
switch (i) {
  case 1: case 3:
  case 5: case 7: case 9:
    numAsString = "odd";
    break;
  case 2: case 4:
  case 6: case 8: case 10:
    numAsString = "even";
    break;
  default:
    numAsString = "too big";
    break;
}
val numAsString = i match
  case 1 | 3 | 5 | 7 | 9 => "odd"
  case 2 | 4 | 6 | 8 | 10 => "even"
  case _ => "too big"
try/catch/finally:
try {
  writeTextToFile(text);
} catch (IOException ioe) {
  println(ioe.getMessage())
} catch (NumberFormatException nfe) {
  println(nfe.getMessage())
} finally {
  println("Clean up resources here.")
}
try
  writeTextToFile(text)
catch
  case ioe: IOException =>
    println(ioe.getMessage)
  case nfe: NumberFormatException =>
    println(nfe.getMessage)
finally
  println("Clean up resources here.")
Collections classes

This section compares the collections classes that are available in Java and Scala.
Immutable collections classes

Examples of how to create instances of immutable collections.
Sequences:
List strings = List.of("a", "b", "c");
val strings = List("a", "b", "c")
val strings = Vector("a", "b", "c")
Sets:
Set set = Set.of("a", "b", "c");
val set = Set("a", "b", "c")
Maps:
Map map = Map.of(
  "a", 1,
  "b", 2,
  "c", 3
);
val map = Map(
  "a" -> 1,
  "b" -> 2,
  "c" -> 3
)
Mutable collections classes

Scala has mutable collections classes like ArrayBuffer, Map, and Set in its scala.collection.mutable package. After importing them into the current scope, they’re created just like the immutable List, Vector, Map, and Set examples just shown.

Scala also has an Array class, which you can think of as being a wrapper around the Java array primitive type. A Scala Array[A] maps to a Java A[], so you can think of this Scala Array[String]:

val a = Array("a", "b")

as being backed by this Java String[]:

String[] a = ["a", "b"];

However, a Scala Array also has all of the functional methods you expect in a Scala collection, including map and filter:

val nums = Array(1, 2, 3, 4, 5)
val doubledNums = nums.map(_ * 2)
val filteredNums = nums.filter(_ > 2)

Because the Scala Array is represented in the same way as the Java array, you can easily use Java methods that return arrays in your Scala code.

    Despite that discussion of Array, bear in mind that often in Scala there are alternatives to Array that might be better suited. Arrays are useful for interoperating with other languages (Java, JavaScript) and they may also be useful when writing low-level code that needs to squeeze maximum performance out of the underlying platform. But in general, when you need to use a sequence, the Scala idiom is to prefer immutable sequences like Vector and List, and then use ArrayBuffer if and when when you really need a mutable sequence.

You can also convert between Java and Scala collections classes with the Scala CollectionConverters objects. There are two objects in different packages, one for converting from Java to Scala, and another for converting from Scala to Java. This table shows the possible conversions:
Java 	Scala
java.util.Collection 	scala.collection.Iterable
java.util.List 	scala.collection.mutable.Buffer
java.util.Set 	scala.collection.mutable.Set
java.util.Map 	scala.collection.mutable.Map
java.util.concurrent.ConcurrentMap 	scala.collection.mutable.ConcurrentMap
java.util.Dictionary 	scala.collection.mutable.Map
Methods on collections classes

With the ability to treat Java collections as streams, Java and Scala now have many of the same common functional methods available to them:

    map
    filter
    forEach/foreach
    findFirst/find
    reduce

If you’re used to using these methods with lambda expressions in Java, you’ll find it easy to use the same methods on Scala’s collection classes.

Scala also has dozens of other collections methods, including head, tail, drop, take, distinct, flatten, and many more. At first you may wonder why there are so many methods, but after working with Scala you’ll realize that because of these methods, you rarely ever need to write custom for loops any more.

(This also means that you rarely need to read custom for loops, as well. Because developers tend to spend on the order of ten times as much time reading code as writing code, this is significant.)
Tuples

Java tuples are created like this:

Pair<String, Integer> pair =
  new Pair<String, Integer>("Eleven", 11);

Triplet<String, Integer, Double> triplet =
  Triplet.with("Eleven", 11, 11.0);
Quartet<String, Integer, Double,Person> triplet =
  Quartet.with("Eleven", 11, 11.0, new Person("Eleven"));

Other Java tuple names are Quintet, Sextet, Septet, Octet, Ennead, Decade.

Tuples of any size in Scala are created by putting the values inside parentheses, like this:

val a = ("eleven")
val b = ("eleven", 11)
val c = ("eleven", 11, 11.0)
val d = ("eleven", 11, 11.0, Person("Eleven"))

Enums

This section compares enumerations in Java and Scala.
Basic enum:
enum Color {
  RED, GREEN, BLUE
}
enum Color:
  case Red, Green, Blue
Parameterized enum:
enum Color {
  Red(0xFF0000),
  Green(0x00FF00),
  Blue(0x0000FF);

  private int rgb;

  Color(int rgb) {
    this.rgb = rgb;
  }
}
enum Color(val rgb: Int):
  case Red   extends Color(0xFF0000)
  case Green extends Color(0x00FF00)
  case Blue  extends Color(0x0000FF)
User-defined enum members:
enum Planet {
  MERCURY (3.303e+23, 2.4397e6),
  VENUS   (4.869e+24, 6.0518e6),
  EARTH   (5.976e+24, 6.37814e6);
  // more planets ...

  private final double mass;
  private final double radius;

  Planet(double mass, double radius) {
    this.mass = mass;
    this.radius = radius;
  }

  public static final double G =
    6.67300E-11;

  private double mass() {
    return mass;
  }

  private double radius() {
    return radius;
  }

  double surfaceGravity() {
    return G * mass /
      (radius * radius);
  }

  double surfaceWeight(
    double otherMass
  ) {
    return otherMass *
      surfaceGravity();
  }

}
enum Planet(
  mass: Double,
  radius: Double
):
  case Mercury extends
    Planet(3.303e+23, 2.4397e6)
  case Venus extends
    Planet(4.869e+24, 6.0518e6)
  case Earth extends
    Planet(5.976e+24, 6.37814e6)
    // more planets ...

  private final val G = 6.67300E-11

  def surfaceGravity =
    G * mass / (radius * radius)

  def surfaceWeight(otherMass: Double)
    = otherMass * surfaceGravity
Exceptions and error handling

This section covers the differences between exception handling in Java and Scala.
Java uses checked exceptions

Java uses checked exceptions, so in Java code you have historically written try/catch/finally blocks, along with throws clauses on methods:

public int makeInt(String s)
throws NumberFormatException {
  // code here to convert a String to an int
}

Scala doesn’t use checked exceptions

The Scala idiom is to not use checked exceptions like this. When working with code that can throw exceptions, you can use try/catch/finally blocks to catch exceptions from code that throws them, but how you proceed from there is different.

The best way to explain this is that Scala code consists of expressions, which return values. As a result, you end up writing your code as a series of algebraic expressions:

val a = f(x)
val b = g(a,z)
val c = h(b,y)

This is nice, it’s just algebra. You create equations to solve small problems, and then combine equations to solve larger problems.

And very importantly—as you remember from algebra courses—algebraic expressions don’t short circuit—they don’t throw exceptions that blow up a series of equations.

Therefore, in Scala our methods don’t throw exceptions. Instead, they return types like Option. For example, this makeInt method catches a possible exception and returns an Option value:

def makeInt(s: String): Option[Int] =
  try
    Some(s.toInt)
  catch
    case e: NumberFormatException => None

The Scala Option is similar to the Java Optional class. As shown, if the string-to-int conversion succeeds, the Int is returned inside a Some value, and if it fails, a None value is returned. Some and None are subtypes of Option, so the method is declared to return the Option[Int] type.

When you have an Option value, such as the one returned by makeInt, there are many ways to work with it, depending on your needs. This code shows one possible approach:

makeInt(aString) match
  case Some(i) => println(s"Int i = $i")
  case None => println(s"Could not convert $aString to an Int.")

Option is commonly used in Scala, and it’s built into many classes in the standard library. Other similar sets of classes like Try/Success/Failure and Either/Left/Right offer even more flexibility.

For more information on dealing with errors and exceptions in Scala, see the Functional Error Handling section.
Concepts that are unique to Scala

That concludes are comparison of the Java and Scala languages.

There are other concepts in Scala which currently have no equal in Java 11. This includes:

    Everything related to Scala’s contextual abstractions
    Several Scala method features:
        Multiple parameter lists
        Default parameter values
        Using named arguments when calling methods
    Case classes (like “records” in Java 14), case objects, and companion classes and objects (see the Domain Modeling) chapter
    The ability to create your own control structures and DSLs
    Toplevel definitions
    Pattern matching
    Advanced features of match expressions
    Type lambdas
    Trait parameters
    Opaque type aliases
    Multiversal equality
    Type classes
    Infix methods
    Macros and metaprogramming


STUFF

turn things blue can drag all at once

JAVA

public interface List<E> extends Collection<E> { /// generics stuff maybe

    codePointAt() /// look up   returns the character
    (Unicode code point) at the specified index.

    compareToIgnoreCase(String str) Compares two strings
    lexicographically, ignoring case differences.

    concat(String str) Concatenates the specified
    string to the end of this string

    contains(CharSequence s) Returns true if and
    only if this string contains the specified sequence
    of char values

    contentEquals(charSequence cs) Compares this 
    string to the specified CharSequence

    contentEquals(StringBuffer sb) Compares this string
    to the specified StringBuffer ////// come back and write down rest look up site | docs.oracle.com/en/java/javase/15/docs/api/java.base/java/lang/String.html


pressing shift twice allows you to get to 
things quicker

ctrl h to view stuff

Why Use Generics?

In a nutshell, generics enable types (classes and interfaces) to be parameters when defining classes, interfaces and methods. Much like the more familiar formal parameters used in method declarations, type parameters provide a way for you to re-use the same code with different inputs. The difference is that the inputs to formal parameters are values, while the inputs to type parameters are types.

Code that uses generics has many benefits over non-generic code:

    Stronger type checks at compile time.
    A Java compiler applies strong type checking to generic code and issues errors if the code violates type safety. Fixing compile-time errors is easier than fixing runtime errors, which can be difficult to find.

    Elimination of casts.
    The following code snippet without generics requires casting:

    List list = new ArrayList();
    list.add("hello");
    String s = (String) list.get(0);

    When re-written to use generics, the code does not require casting:

    List<String> list = new ArrayList<String>();
    list.add("hello");
    String s = list.get(0);   // no cast

    Enabling programmers to implement generic algorithms.
    By using generics, programmers can implement generic algorithms that work on collections of different types, can be customized, and are type safe and easier to read.



C++

cout is short for character out

#include <this is where file name from the standary library will go>

whitespaces in C++ often ignored
so if you have 1 or 10 does not really matter

C++ is a case sensitive language // be careful
with lettering as main and Main are different

// ##include <iostream>
//// Using intellij for mosh'd C++ tutorial
//int main() {
   // std::cout << "Hello, World!" << std::endl;
   // return 0;
//}

C++ is one of the fastest and most efficient
languages.

C== standard library //// look up

LAVAREL

Lavarel Extra Intellisense

laravel blade spacer ////

other things as well 

composer.json holds projects assets

phpstorm .

cd freeCodeGram

// in command prompt: ////////

 laravel

echo $PATH

 laravel new freeCodeGram

Laravel is the number 1 framework in Github

go to getcomposer.org to install laravel

NPM is the js counterpart to composer

C

#include <stdio.h>
#include <stdlib.h>


int main(){

    char line[255];
    FILE * fpointer = fopen("employees.txt", "r");

    fgets(line, 255, fpointer);
    fgets(line, 255, fpointer);
    printf("%s", line);

    fclose(fpointer);
    return 0;
}

#include <stdio.h>
#include <stdlib.h>


int main(){

    FILE * fpointer = fopen("employees.txt", "a"); //"w" as well

    fprintf(fpointer, "\nKelly, Customer Service");

    fclose(fpointer);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>


int main(){

    int age = 30;
    int *pAge = &age;

    printf("%d", *&age);

    return 0;
}


int main(){

    int age = 30;
    int *pAge = &age;

    printf("%d", *&*&age);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>


int main(){

    int age = 30;
    int *pAge = &age;

    printf("%p", &age);

    return 0;
}

#include <stdio.h>
#include <stdlib.h>


int main(){

    int age = 30;
    int * pAge = &age;
    double gpa = 3.4;
    double * pGpa = &gpa;
    char grade = 'A';
    char * aGrade = &grade;




    printf("age's memory address: %p\n", &age);
    return 0;
}

pointer is another type of data tat's a memory address.
to print out a pointer use %p // other things maybe too like \n


#include <stdio.h>
#include <stdlib.h>


int main(){

    int age = 3-;
    double gpa = 3.4;
    char grade = 'A';

    printf("age: %p\ngpa: %p\ngrade: %p", &age, &gpa, &grade);




   return 0;
}

#include <stdio.h>
#include <stdlib.h>


int main(){

    int nums[3][2] = {
                        {1, 2},
                        {3, 4},
                        {5, 6},
                        };
   int i, j;
   for(i = 0; i < 3; i++){
    for(j = 0; j < 2; j++){
        printf("%d", nums[i][j]);
    }
    printf("\n");
   }

   return 0;
}

 printf("%d", nums[1][1]);

INSTRUMENTS

1:44 practice! double kick speed video just do this drum beats online

Control is important

Exercises:

First measure

Quarter notes on the kick right left right left

Second measure

Two 16th notes
1,1e,2,2e,3,3e,4,4e

Get good muscle development

exercise called the double kick subdivision ladder

PIANO 

DOG 

| | 

Get great endurance

Tabata exercise

do an exercise for 20 seconds as fast as you can

 10 second rest

 repeat for 4 mins

 Tabata

 1. Play 16th notes on double kick 20 seconds as fast
 as you can

 2. 10 Second rest.

 3. Repeat 8x (total 4 minutes)

 Pro tip

 If things sound sloppy,
 lower the speed by 10%


*/