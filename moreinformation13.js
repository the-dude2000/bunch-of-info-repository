/*

JAVA

How to force Java to use IPv4 instead IPv6?



Put the options in _JAVA_OPTIONS environment variable. How to do this is already described in various other posts – although they usually talk about setting PATH, but it's all the same.

For example, on Linux, put the following in your ~/.profile or ~/.bash_profile:

export _JAVA_OPTIONS="-Djava.net.preferIPv4Stack=true"

IP stands for Internet Protocol and v4 stands for Version Four (IPv4). IPv4 was the primary version brought into action for production within the ARPANET in 1983. IP version four addresses are 32-bit integers which will be expressed in decimal notation. Example- 192.0. 2.126 could be an IPv4 address.

The most significant difference between IPv4 and IPv6 is the address size, which is only 32 bits in IPv4, but 128 bits in IPv6.

Not all systems have support for the IPv6 protocol, and while the Java networking stack will attempt to detect it and use it transparently when available, it is also possible to disable its use with a system property. In the case where IPv6 is not available, or explicitly disabled, Inet6Address are not valid arguments for most networking operations any more. While methods like InetAddress.getByName(java.lang.String) are guaranteed not to return an Inet6Address when looking up host names, it is possible, by passing literals, to create such an object. In which case, most methods, when called with an Inet6Address will throw an Exception.

Addresses

Addresses are used throughout the java.net APIs as either host identifiers, or socket endpoint identifiers.

The InetAddress class is the abstraction representing an IP (Internet Protocol) address. It has two subclasses:

    Inet4Address for IPv4 addresses.
    Inet6Address for IPv6 addresses.

But, in most cases, there is no need to deal directly with the subclasses, as the InetAddress abstraction should cover most of the needed functionality.

ockets

Sockets are means to establish a communication link between machines over the network. The java.net package provides 4 kinds of Sockets:

    Socket is a TCP client API, and will typically be used to connect to a remote host.
    ServerSocket is a TCP server API, and will typically accept connections from client sockets.
    DatagramSocket is a UDP endpoint API and is used to send and receive datagram packets.
    MulticastSocket is a subclass of DatagramSocket used when dealing with multicast groups.

Sending and receiving with TCP sockets is done through InputStreams and OutputStreams which can be obtained via the Socket.getInputStream() and Socket.getOutputStream() methods.

The UnknownHostException is an exception in Java that is thrown to indicate that the IP address of a host could not be determined. Since the UnknownHostException is a checked exception, it either needs to be thrown or surrounded by a try-catch block in code.

How to Prevent It?

Preventing the exception from occurring in the first place is better than handling it afterward. A few tips to prevent the exception are:

    Double-check the hostname: Make sure there is no typo, and trim all whitespaces.
    Check the system’s DNS settings: Make sure the DNS server is up and reachable, and if the hostname is new, wait for the DNS server to catch up.

The Domain Name System (DNS) is the phonebook of the Internet.

DNS translates domain names to IP addresses so browsers can load Internet resources.

The Spring Framework provides a comprehensive programming and configuration model for modern Java-based enterprise applications - on any kind of deployment platform.

A key element of Spring is infrastructural support at the application level: Spring focuses on the "plumbing" of enterprise applications so that teams can focus on application-level business logic, without unnecessary ties to specific deployment environments.

Features

    Core technologies: dependency injection, events, resources, i18n, validation, data binding, type conversion, SpEL, AOP.

    Testing: mock objects, TestContext framework, Spring MVC Test, WebTestClient.

    Data Access: transactions, DAO support, JDBC, ORM, Marshalling XML.

    Spring MVC and Spring WebFlux web frameworks.

    Integration: remoting, JMS, JCA, JMX, email, tasks, scheduling, cache and observability.

    Languages: Kotlin, Groovy, dynamic languages.

///// look into all this

Spring Boot is a backend framework that has become a major player in the enterprise Java ecosystem. It lets Java developers start building web applications quickly, without fuss.

C++

#include <iostream>
#include <cstlib>
#include <ctime>


using namespace std;

int main() {
    const short minValue = 1;
    const short maxValue = 6;
    srand(time(0));
    short first = (rand() % (maxValue - minValue + 1)) + minValue;
    short second = (rand() % (maxValue - minValue + 1)) + minValue;

    cout << first << ", " << second;

    return 0;
}

#include <iostream>
#include <cstlib>
#include <ctime>


using namespace std;

int main() {
    srand(time(0));
    int number = rand() % 10;
    cout << number;
    return 0;
}

// important thing [rand() % (maxValue - minValue + 1)] + minValue

 //  srand(5);

    //srand(6);

long elapsedSeconds = time(0); // Jan 1 1970 // nullptr

srand short for seed rand

#include <iostream>


using namespace std;

int main() {
    short number = 100; // important byte stuff here go back 1:14:05 around here
    int another{number}; // {} is a brace intializer
    cout << another; // and other important stuff here as well go back to it 13:03:03
    return 0;
}

 short number = 1'000'000;

#include <iostream>

using namespace std;

int main() {
   // stay away from unsigned //// int number = 0;
    number--;
   // int number 0b11111111;
     // int number 0xff;
   // int number = 255;
    cout << number;
    return 0;
}

The term "unsigned" in computer programming indicates a variable that can hold only positive numbers. The term "signed" in computer code indicates that a variable can hold negative and positive values.

#include <iostream>

using namespace std;

int main() {
    int number {};
    cout << number;
    return 0;
}

#include <iostream>

using namespace std;

int main() {
   // double price = 99.99;
    auto price = 99.99;
   // float interestRate = 3.67f;
    auto interestRate = 3.67;
    auto fileSize = 90000L;
    auto letter = 'a';
   // char letter = 'a';
   // long fileSize = 90000L;
   // char letter = 'a';
   // bool isValid = false;
    auto isValid = false;
    return 0;
}

It isn't always necessary to define a constructor for a class, especially ones that are relatively simple. Users can initialize objects of a class or struct by using uniform initialization, as shown in the following example:
C++

// no_constructor.cpp
// Compile with: cl /EHsc no_constructor.cpp
#include <time.h>

// No constructor
struct TempData
{
    int StationId;
    time_t timeSet;
    double current;
    double maxTemp;
    double minTemp;
};

// Has a constructor
struct TempData2
{
    TempData2(double minimum, double maximum, double cur, int id, time_t t) :
       stationId{id}, timeSet{t}, current{cur}, maxTemp{maximum}, minTemp{minimum} {}
    int stationId;
    time_t timeSet;
    double current;
    double maxTemp;
    double minTemp;
};

int main()
{
    time_t time_to_set;

    // Member initialization (in order of declaration):
    TempData td{ 45978, time(&time_to_set), 28.9, 37.0, 16.7 };

    // When there's no constructor, an empty brace initializer does
    // value initialization = {0,0,0,0,0}
    TempData td_emptyInit{};

    // Uninitialized = if used, emits warning C4700 uninitialized local variable
    TempData td_noInit;

    // Member declaration (in order of ctor parameters)
    TempData2 td2{ 16.7, 37.0, 28.9, 45978, time(&time_to_set) };

    return 0;
}

When a class or struct has no constructor, you provide the list elements in the order that the members are declared in the class. If the class has a constructor, provide the elements in the order of the parameters. If a type has a default constructor, either implicitly or explicitly declared, you can use brace initialization with empty braces to invoke it. For example, the following class may be initialized by using both empty and non-empty brace initialization:
C++

#include <string>
using namespace std;

class class_a {
public:
    class_a() {}
    class_a(string str) : m_string{ str } {}
    class_a(string str, double dbl) : m_string{ str }, m_double{ dbl } {}
double m_double;
string m_string;
};

int main()
{
    class_a c1{};
    class_a c1_1;

    class_a c2{ "ww" };
    class_a c2_1("xx");

    // order of parameters is the same as the constructor
    class_a c3{ "yy", 4.4 };
    class_a c3_1("zz", 5.5);
}

If a class has non-default constructors, the order in which class members appear in the brace initializer is the order in which the corresponding parameters appear in the constructor, not the order in which the members are declared (as with class_a in the previous example). Otherwise, if the type has no declared constructor, member initializers must appear in the brace initializer in the same order as they're declared. In this case, you can initialize as many of the public members as you wish, but you can't skip any member. The following example shows the order that's used in brace initialization when there's no declared constructor:
C++

class class_d {
public:
    float m_float;
    string m_string;
    wchar_t m_char;
};

int main()
{
    class_d d1{};
    class_d d1{ 4.5 };
    class_d d2{ 4.5, "string" };
    class_d d3{ 4.5, "string", 'c' };

    class_d d4{ "string", 'c' }; // compiler error
    class_d d5{ "string", 'c', 2.0 }; // compiler error
}

If the default constructor is explicitly declared but marked as deleted, empty brace initialization can't be used:
C++

class class_f {
public:
    class_f() = delete;
    class_f(string x): m_string { x } {}
    string m_string;
};
int main()
{
    class_f cf{ "hello" };
    class_f cf1{}; // compiler error C2280: attempting to reference a deleted function
}

You can use brace initialization anywhere you would typically do initialization—for example, as a function parameter or a return value, or with the new keyword:
C++

class_d* cf = new class_d{4.5};
kr->add_d({ 4.5 });
return { 4.5 };

In /std:c++17 mode and later, the rules for empty brace initialization are slightly more restrictive. See Derived constructors and extended aggregate initialization.
initializer_list constructors

The initializer_list Class represents a list of objects of a specified type that can be used in a constructor, and in other contexts. You can construct an initializer_list by using brace initialization:
C++

initializer_list<int> int_list{5, 6, 7};

Important

To use this class, you must include the <initializer_list> header.

An initializer_list can be copied. In this case, the members of the new list are references to the members of the original list:
C++

initializer_list<int> ilist1{ 5, 6, 7 };
initializer_list<int> ilist2( ilist1 );
if (ilist1.begin() == ilist2.begin())
    cout << "yes" << endl; // expect "yes"

The standard library container classes, and also string, wstring, and regex, have initializer_list constructors. The following examples show how to do brace initialization with these constructors:
C++

vector<int> v1{ 9, 10, 11 };
map<int, string> m1{ {1, "a"}, {2, "b"} };
string s{ 'a', 'b', 'c' };
regex rgx{ 'x', 'y', 'z' };

C++ is a statically typed language meaning habe to specify variables,
C# and java are as well.

Ruby is a dynamically typed language.

#include <iostream>

using namespace std;

int main() {
// slash star and star slash here
//int x = 0;
//return 0;
//}

#include <iostream>
#include <cmath>
// to find area of a cylinder
using namespace std;

int main() {
    cout << "Enter radius: ";
    double radius;
    cin >> radius;
    const double pi = 3.14;
    const int height = 4;
    double area = 2 * pi * radius * height + 2 * pi * pow(radius, 2);
    cout << area;
}

#include <iostream>
#include <cmath>
// to find the area of a circle
using namespace std;

int main() {
    cout << "Enter radius: ";
    double radius;
    cin >> radius;
    const double pi = 3.14;
    double area = pi * pow(radius, 2);
    cout << area;
    return 0;
}

#include <iostream>
#include <cmath>

using namespace std;

int main() {
   // double result = floor(1.2);
    double result = pow(2, 3);
    cout << result;
    return 0;
}

cmath reference can look up for stuff

#include <iostream>
// program to convert from fahrenheit to celsius
using namespace std;

int main() {
    cout << "Fahrenheit: ";
    int fahrenheit;
    cin >> fahrenheit;
    double celsius = (fahrenheit - 32) / 1.8;
   // cin >> y;
    cout << celsius;
    return 0;
}

#include <iostream>

using namespace std;

int main() {
    cout << "Enter values for x and y: ";
    double x;
    double y;
    cin >> x >> y;
   // cin >> y;
    cout << x + y;
    return 0;
}

Standard Input Stream you can use for reading data from the console

std::cin is an object of class istream that represents the standard input stream oriented to narrow characters (of type char). It corresponds to the C stream stdin. The standard input stream is a source of characters determined by the environment.

Standard input stream (cin) Usually the input device in a computer is the keyboard. C++ cin statement is the instance of the class istream and is used to read input from the standard input device which is usually a keyboard. The stream extraction operator(>>) is used along with the object cin for reading inputs.

#include <iostream>

using namespace std;

int main() {
    double sales = 95000;
    cout << "Sales: $" << sales << endl;

    const double stateTaxRate = .04;
    double stateTax = sales * stateTaxRate;
    cout << "State Tax: $" << stateTax << endl;

    const double countyTaxRate = .04;
    double countyTax = sales * countyTaxRate;
    cout << "County Tax: $" << countyTax << endl;

    double totalTax = stateTax + countyTax;
    cout << "Total Tax: $" << totalTax;

    return 0;
}

can make a variable constant by putting const on it

#include <iostream>

using namespace std;

int main() {
    int x = 10;
    int y = 20;
    cout << "x = " << x << endl
         << "y = " << y;
    return 0;
}

A stream represents a sequence of characters //// look at output thing

<< is called stream insertion operator an operator for inserting something
to our output stream

What is C++ Standard Output Stream (cout)? std::cout 
is an object of class ostream that represents the standard 
output stream oriented to narrow characters (of type char). 
It corresponds to the C stream stdout. The standard output 
stream is the default 
destination of characters determined by the environment.

#include <iostream>


int main() {
    // ()
    // * and /
    // + and -
    //double x = (1 + 2) * 3;
   // std::cout << x;
    double x = 10;
    double y = 5;
    double z = (x + 10) / (3 * y);
    std::cout << z;
    return 0;
}

#include <iostream>


int main() {
    int x = 10;
    int y = x++; // x = 11, y = 10
    int z = ++x; // x = 11, z = 11 // be careful with this one
    std::cout << x;
    return 0;
}

// to get decimal number make one variable float the other
can stay int if you want
x-- decrement
x++ increment 
+ = * / %

#include <iostream>


int main() {
    int file_size; // Snake Case
    int FileSize; // Pascal Case
    int fileSize; // Camel Case
    int iFileSize; // Hungarian Notation
    return 0;
}

#include <iostream>


int main() {
    const double pi = 3.14; // be careful with this one go back to mosh video

    return 0;
}


#include <iostream>


int main() {
    const double pi = 3.14;
    pi = 0;
    return 0;
}

#include <iostream>

int main() {
    int a = 1;
    int b = 2;
    int temp = a;
    a = b;
    b = temp;
    std::cout << b;
    return 0;
}

#include <iostream>


int main() {
    int file_size = 0 //, this = 0;
    int counter = 0;
    double sales = 9.99;
    std::cout << file_size;
    return 0;
}

C#

C# is a programming language and . NET is the framework and runtime that C# programs are built with and run on.

C-Sharp is one of the most widely used languages for creating system backends. It's because of its incredible features, such as Windows server automation.

CLR(Common Language Runtime) is the basic and Virtual Machine component of the . NET Framework. It is the run-time environment in the . NET Framework that runs the codes and helps in making the development process easier by providing the various services. Basically, it is responsible for managing the execution of .

In my January 9 column ".NET Framework Basics: the Common Language Runtime" ( http://www.winnetmag.com/articles/index.cfm?articleid=37657 ), I examined the role of the Common Language Runtime (CLR) in the .NET Framework and how CLR's developers intended CLR to make .NET development language-agnostic. The CLR has this capability because of the Common Language Specification (CLS), a set of rules that languages must follow for full compatibility with .NET. The CLR and the CLS are not synonymous. This column will explain the relationship between these two parts of the .NET Framework's support for language diversity.

The CLR is the runtime environment for executing .NET applications. As all runtime environments do, the CLR manages the way applications execute by providing services that the languages in which the programs are written expose. The syntax that accesses runtime environment services varies with the language, but the services themselves don't change. Not all languages can use all the functionality in the CLR because getting optimal functionality from the CLR would entail writing the languages with CLR compatibility in mind.

However, a language doesn't need to support all the features in the runtime environment. The CLS's role is to define a minimum subset of features that languages must support to work with .NET applications. For example, although the CLR supports both signed and unsigned integers, languages conforming to the CLS are required to support only signed integers. (In binary notation, an unsigned integer's most significant bit is data, not a positive or negative sign; a signed integer's most significant bit is its sign. Therefore, unsigned integers are always positive. End of digression.) The rules defined in the CLS apply to features visible outside the assembly (or, if you'll recall, equivalent to a DLL or EXE), where they're defined. For example, the CLS requires that public names--names visible outside their assembly--be case insensitive because some languages don't distinguish between FILENAME, Filename, and filename. These rules keep .NET assemblies from conflicting with one another. (For a complete list of CLS compliance rules, go to http://dotnet.di.unipi.it/EcmaSpec/PartitionI/cont10.html#_Collected_CLS_Rules_1 .)

Again, CLS compliance rules apply only to public features. Features contained within an assembly and not directly addressable by other assemblies don't have to follow these rules.

CLS-compliant languages are either consumers or extenders. Consumers can use any CLS-compliant type: They can call methods, create instances of CLS-compliant types, read and modify fields, and so forth. Extenders are consumers that can also extend base classes, define new types, and otherwise extend the framework. Of Microsoft's CLS-compliant languages, Visual Basic .NET, C#, and C++ with Managed Extensions are extenders, and JScript .NET is a consumer. Not all languages that you can use in .NET applications are, strictly speaking, .NET languages. For example, a third-party tool that creates a .NET component from a Perl class lets .NET applications call Perl modules, but Perl is neither a consumer nor an extender.

In short, the CLR defines all the capabilities available to applications and modules written for the .NET Framework. The CLS defines the set of rules to which languages must conform to work in this framework. 

Assemblies are the fundamental units of deployment, version control, reuse, activation scoping, and security permissions for .NET-based applications. An assembly is a collection of types and resources that are built to work together and form a logical unit of functionality. Assemblies take the form of executable (.exe) or dynamic link library (.dll) files, and are the building blocks of .NET applications. They provide the common language runtime with the information it needs to be aware of type implementations.

In .NET and .NET Framework, you can build an assembly from one or more source code files. In .NET Framework, assemblies can contain one or more modules. This way, larger projects can be planned so that several developers can work on separate source code files or modules, which are combined to create a single assembly. For more information about modules, see How to: Build a multifile assembly.

Assemblies have the following properties:

    Assemblies are implemented as .exe or .dll files.

    For libraries that target .NET Framework, you can share assemblies between applications by putting them in the global assembly cache (GAC). You must strong-name assemblies before you can include them in the GAC. For more information, see Strong-named assemblies.

    Assemblies are only loaded into memory if they're required. If they aren't used, they aren't loaded. Therefore, assemblies can be an efficient way to manage resources in larger projects.

    You can programmatically obtain information about an assembly by using reflection. For more information, see Reflection (C#) or Reflection (Visual Basic).

    You can load an assembly just to inspect it by using the MetadataLoadContext class on .NET and .NET Framework. MetadataLoadContext replaces the Assembly.ReflectionOnlyLoad methods.

Assemblies in the common language runtime

Assemblies provide the common language runtime with the information it needs to be aware of type implementations. To the runtime, a type doesn't exist outside the context of an assembly.

An assembly defines the following information:

    Code that the common language runtime executes. Each assembly can have only one entry point: DllMain, WinMain, or Main.

    The security boundary. An assembly is the unit at which permissions are requested and granted. For more information about security boundaries in assemblies, see Assembly security considerations.

    The type boundary. Every type's identity includes the name of the assembly in which it resides. A type called MyType that's loaded in the scope of one assembly isn't the same as a type called MyType that's loaded in the scope of another assembly.

    The reference-scope boundary: The assembly manifest has metadata that's used for resolving types and satisfying resource requests. The manifest specifies the types and resources to expose outside the assembly and enumerates other assemblies on which it depends. Microsoft intermediate language (MSIL) code in a portable executable (PE) file won't be executed unless it has an associated assembly manifest.

    The version boundary. The assembly is the smallest versionable unit in the common language runtime. All types and resources in the same assembly are versioned as a unit. The assembly manifest describes the version dependencies you specify for any dependent assemblies. For more information about versioning, see Assembly versioning.

    The deployment unit: When an application starts, only the assemblies that the application initially calls must be present. Other assemblies, such as assemblies containing localization resources or utility classes, can be retrieved on demand. This process allows apps to be simple and thin when first downloaded. For more information about deploying assemblies, see Deploy applications.

    A side-by-side execution unit: For more information about running multiple versions of an assembly, see Assemblies and side-by-side execution.

Create an assembly

Assemblies can be static or dynamic. Static assemblies are stored on a disk in portable executable (PE) files. Static assemblies can include interfaces, classes, and resources like bitmaps, JPEG files, and other resource files. You can also create dynamic assemblies, which are run directly from memory and aren't saved to disk before execution. You can save dynamic assemblies to disk after they've been executed.

There are several ways to create assemblies. You can use development tools, such as Visual Studio that can create .dll or .exe files. You can use tools in the Windows SDK to create assemblies with modules from other development environments. You can also use common language runtime APIs, such as System.Reflection.Emit, to create dynamic assemblies.

Compile assemblies by building them in Visual Studio, building them with .NET Core command-line interface tools, or building .NET Framework assemblies with a command-line compiler. For more information about building assemblies using .NET CLI, see .NET CLI overview.

Note

To build an assembly in Visual Studio, on the Build menu, select Build.
Assembly manifest

Every assembly has an assembly manifest file. Similar to a table of contents, the assembly manifest contains:

    The assembly's identity (its name and version).

    A file table describing all the other files that make up the assembly, such as other assemblies you created that your .exe or .dll file relies on, bitmap files, or Readme files.

    An assembly reference list, which is a list of all external dependencies, such as .dlls or other files. Assembly references contain references to both global and private objects. Global objects are available to all other applications. In .NET Core, global objects are coupled with a particular .NET Core runtime. In .NET Framework, global objects reside in the global assembly cache (GAC). System.IO.dll is an example of an assembly in the GAC. Private objects must be in a directory level at or below the directory in which your app is installed.

Assemblies contain information about content, versioning, and dependencies. So the applications that use them don't need to rely on external sources, such as the registry on Windows systems, to function properly. Assemblies reduce .dll conflicts and make your applications more reliable and easier to deploy. In many cases, you can install a .NET-based application simply by copying its files to the target computer. For more information, see Assembly manifest.
Add a reference to an assembly

To use an assembly in an application, you must add a reference to it. When an assembly is referenced, all the accessible types, properties, methods, and other members of its namespaces are available to your application as if their code were part of your source file.

Note

Most assemblies from the .NET Class Library are referenced automatically. If a system assembly isn't automatically referenced, add a reference in one of the following ways:

    For .NET and .NET Core, add a reference to the NuGet package that contains the assembly. Either use the NuGet Package Manager in Visual Studio or add a <PackageReference> element for the assembly to the .csproj or .vbproj project.
    For .NET Framework, add a reference to the assembly by using the Add Reference dialog in Visual Studio or the -reference command line option for the C# or Visual Basic compilers.

In C#, you can use two versions of the same assembly in a single application. For more information, see extern alias.
Related content
Title 	Description
Assembly contents 	Elements that make up an assembly.
Assembly manifest 	Data in the assembly manifest, and how it's stored in assemblies.
Global assembly cache 	How the GAC stores and uses assemblies.
Strong-named assemblies 	Characteristics of strong-named assemblies.
Assembly security considerations 	How security works with assemblies.
Assembly versioning 	Overview of the .NET Framework versioning policy.
Assembly placement 	Where to locate assemblies.
Assemblies and side-by-side execution 	Use multiple versions of the runtime or an assembly simultaneously.
Emit dynamic methods and assemblies 	How to create dynamic assemblies.
How the runtime locates assemblies 	How the .NET Framework resolves assembly references at run time.
Reference

System.Reflection.Assembly
See also

    .NET assembly file format
    Friend assemblies
    Reference assemblies
    How to: Load and unload assemblies
    How to: Use and debug assembly unloadability in .NET Core
    How to: Determine if a file is an assembly
    How to: Inspect assembly contents using MetadataLoadContext


*/