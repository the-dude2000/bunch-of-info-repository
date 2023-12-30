/*

FIGMA

Figjam go to new file section and next to new desgin file click purple new figjam file its built into figma
great way to collaborate with team

User journey

WHat starting a project ask yourself "what is the goal?"

Use blue rulers to find things

click on circle in a frame in figjam to change color also can change shape and line style

text button on bottom bar

can connect boxes and stuff together in figjam

Always zoom in to see if anything is distorted or looks odd

can do layer blurs in figma go to effects then use reactangles to help

Use figjam and blocks with arrows to plan out apps and designs

Share design plans with clients

JAVA

“A Java Bean is a reusable software component that can be manipulated visually
in a builder tool.”
This covers a wide range of different possibilities.
The builder tools may include web page builders, visual application builders, GUI layout build-
ers, or even server application builders. Sometimes the “builder tool” may simply be a docu-
ment editor that is including some beans as part of a compound document.
Some Java Beans may be simple GUI elements such as buttons and sliders. Other Java Beans
may be sophisticated visual software components such as database viewers, or data feeds.
Some Java Beans may have no GUI appearance of their own, but may still be composed togeth-
er visually using an application builder.
Some builder tools may operate entirely visually, allowing the direct plugging together of Java
Beans. Other builders may enable users to conveniently write Java classes that interact with and
control a set of beans. Other builders may provide a simple scripting language to allow easy
high-level scripting of a set of beans.
Individual Java Beans will vary in the functionality they support, but the typical unifying fea-
tures that distinguish a Java Bean are:
• Support for “introspection” so that a builder tool can analyze how a bean works
• Support for “customization” so that when using an application builder a user can
customize the appearance and behaviour of a bean.
• Support for “events” as a simple communication metaphor than can be used to connect
up beans.
• Support for “properties”, both for customization and for programmatic use.
• Support for persistence, so that a bean can be customized in an application builder and
then have its customized state saved away and reloaded later.
A bean is not required to inherit from any particular base class or interface. Visible beans must
inherit from java.awt.Component so that they can be added to visual containers, but invisible
beans (see 2.7 below) aren’t required to do this.
Note that while beans are primarily targeted at builder tools they are also entirely usable by hu-
man programmers. All the key APIs such as events, properties, and persistence, have been de-
signed to work well both for human programmers and for builder tools.
Many beans will have a strong visual aspect, in both the application builder and in the final con-
structed application, but while this is common it is not required.


Netflix uses spring framework

Frameworks provide strucutre when making frontend backend and databases layers
spring.io website // a lot of information here review it all

java provides an aop(aspect oriented programming support) // might not be exact 3:18:00 around here go back and review


/// go back to tutorial and review everything over

IoC means inversion of control

dependency injection is an implementation of the ioc concept so using the springs dependency injection mechanism you can inject the object of any class
into any class once you do that the spring dependency is going to use the inversion of control concept and create the object

redis // look into this

model view controller(mvc) look into this 
spring is the most popular mvc framework

dispatcher servlet is the component which has knowledge about literally everything happening in your application its the first servlet or component which
receives your web request

BIG PROJECT STUFF

ev.preventDefault();
        try {
            await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({username,password}),
                headers: {'Content-Type':'application/json'},
            })
        } catch (e) {
            alert('Registration failed')

            npm add bcryptjs
            npm i --save-dev @types/bcryptjs




API testing interview questions and stuff

What are all the challenges included under API Testing?

API documentation
Access to DB
Authorization overhead

1. What is the difference between PUT and POST methods?
POST request - creating a new object on the server
Put request, update the object in server with new value

2. What are commonly used HTTP Methods?
GET: It enables you to retrieve data from a server.
POST: It enables you to add data to an existing file or resource in a server.
PUT: It lets you replace an existing file or resource in a server
DELETE: It lets you delete data from a server

Need to know certain things to do API testing

3. List out few authentication techniques used in API's?

Session/ Cookie based authentication
Basic authentication
Digest authentication
OAuth

OAuth 2.0 is the industry-standard protocol for authorization. OAuth 2.0 focuses on 
client developer simplicity while providing specific authorization flows for
 web applications, desktop applications, mobile phones, and living room devices. 
 This specification and its extensions are being developed within the IETF OAuth Working Group.


OAuth Grant Types

The OAuth framework specifies several grant types for different use cases, as well as a framework for creating new grant types.

The most common OAuth grant types are listed below.

    Authorization Code
    PKCE
    Client Credentials
    Device Code
    Refresh Token

    Twitter, facebook,google and others maybe use OAuth authentication

look into edge cases on outsidein.dev
left off at we creat a local props // read the rest

CYBERSECURITY

Confused deputy problem is a specific type of privilege escalation. It happens when a program tricks another more privileged one into misusing its authority. 
On AppleOS, system services are adopted to perform privileged operations when receiving inter-process communication (IPC) request from a user process.

The confused deputy vulnerabilities may result if system services overlook the checking of IPC input. Unfortunately, it is tough to identify such vulnerabilities, which requires to understand the closed-source system services and private frameworks of the complex AppleOS by unraveling the dependencies in binaries.

To this end, we propose iService, a systematic method to automatically detect and evaluate the impact of confused deputies in AppleOS system services. Instead of looking for insecure IPC clients, it focuses on sensitive operations performed by system services, which might compromise the system if abused, ensuring whether the IPC input is properly checked before the invocation of those operations. Moreover, iService evaluates the impact of each confused deputy based on iService is applied to four versions of MacOS (10.14.3, 10.15.7, 11.4, and 12.4) separately. It successfully discovers 11 confused deputies, five of which are zero-day bugs and all of them have been fixed, with three considered high risk. Furthermore, the five zero-day bugs have been confirmed by Apple and assigned with CVE numbers to date.

What Is Sandboxing?

Sandboxing is a cybersecurity practice where you run code, observe and analyze and code in a safe, isolated environment on a network that mimics end-user operating environments. Sandboxing is designed to prevent threats from getting on the network and is frequently used to inspect untested or untrusted code. Sandboxing keeps the code relegated to a test environment so it doesn’t infect or cause damage to the host machine or operating system.

As the name suggests, this isolated test environment functions as a kind of “sandbox,” where you can play with different variables and see how the program works. This is also a safe space, where if something goes wrong, it can’t actively harm your host devices.

The Confused Deputy Problem
n The compiler program is SYSX/FORT.
n Other files under SYSX include STAT and BILL.
n The compiler program needs to write to files in
SYSX directory, so it is given authority to write to
files in SYSX.
n A user who runs SYSX/FORT can provide a file
name to receive output info.
n A malicious user may use SYSX/BILL as the output
name, resulting in billing info being erased

Overview of KeyKOS
n A capability-based microkernel operating
system
n A message-based system
n objects call other objects by sending a key-
addressed message

Basic Concepts in KeyKOS
n Domains
n Similar to processes in UNIX
n A domain has 16 general slots and several special
slots (e.g., address slot)
n A domain is an object and may be identified in a
gate key
n Keys (capabilities)
n A key designates a specific object and certain
authority over the object

fortUID
setuid /// look into these

Ambient authority /// look up

JAVA

spring intitialzr use it to build a spring mvc application recommended way

https://start.spring.io/

web archive also known as a war file
jar file also known as a java archive


thymeleaf is a view technology similar to jsp or servlets technically where you can use thymeleaf templates  which are basically just htmls
with some dynamic values

gradle is very similar to maven

you need to create a controller for almost every url mapping you have in your application

whenever you have to print any variable or a model attribute or any runtime value inside a thymeleaf template then you need to use the
dollar curly braces syntax to do that

need command line for this stuff certain things

(For command prompt stuff MINGW64)

mvn spring-boot:run

apache tomcat is a servlet container not a full-fledged application server but it can be used for that purpose 

Whitelabel Error page /// look up

?name stuff go back and review 3:38:00 around here

REST /// look up 

If you are accessing anything over http then that particular component can be built as a restful component and spring boot is the most popular
choice for building restful web services today

Can build microservices which also run on https using spring boot

in restful web services you dont render the html but you just send back the response

the response body can be pure xml or pure json

Dont worry about rendering with spring boot

if its a maven prject you will see a pom.xml file in it when working on dependency management
if its gradle you will see a .griddle file in it when working on dependency management

for any spring boot project include parent 

// crud repository look into this 

// go to chrome and look up rest client go to advanced REST client to install it /// look more into this find a video covering this

STATISTICS

Estimate and estimator are 2 different things

an estimate is a number.

An estimator is this thing where you keep all the variables free

An estimator is a random variable
An estimate is the realization of a random variable or in other words is the value you get for this random
variable once you plug in the numbers that you've collected

variance /// look up

bias /// look up

bernoulli /// look up

bernoulli is where you have to do the least statistical modeling.

A random variable that takes value 0 or 1 is always a bernoulli

It is the simpliest varialbe you can ever think of

Any variable that takes only 2 possible values can be reduced to a bernoulli

Central limit theorem  /// look up

Statistics is all about replacing expectations with averages

IID /// look up

Independent /// look up

Guassian distribution /// look up

quantiles of a Guassian distribution /// look up

the expectation of the product of independent random variables is a product of the expectations
Expectation of the sum is the sum of the expectation 

C#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld // can get rid of things one by one with ctrl x 
{
    class Program
    {
        static void main(string[] args)
        {
            Console.WriteLine("Hello World");  // methods are indicated by a purple cube. beep is used to play a beep sound
        }
    }
}

/// if you are using resharper you can get rid of all the usings above by pressing
///  alt + enter
///  c# is a case sensitive language
///  can use @int for keywords in c# 
///  hungarian notation is not used in c# 
///  msdn page for primitive types in c# look up 
///  C# by default we dont have overflow checking

/// overflowing will not happen if you use checked
/* checked
{
    byte number = 255;

    number = number + 1;
} 






/* using System.Reflection;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;

// General Information about an assembly is controlled through the following
// set of attributes. Change these attributes values to modify the information
// associated with an assembly.
[assembly: AssemblyTitle("HelloWorld")]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyCompany("")]
[assembly: AssemblyProduct("HelloWorld")]
[assembly: AssemblyCopyright("Copyright (copyright symbol) 2015")]
[assembly: AssemblyTrademark("")]
[assembly: AssemblyCulture("")]


// Setting Comvisible to false makes the types in this assembly not visible
// to COM components. If you need to access a type in this assembly from 
// COM, set the ComVisible attribute to true on that type.
[assembly: ComVisible(false)]

// The following GUID is for the ID of the typelib if this project is exposed to COM
[assembly: Guid("db842f6e-b000-4a-4e-9792-2f982a2ac866")]

// Version information for an assembly consists of the following four values:
//
//       Major Version
//       Minor Version
//       Build Number
//       Revision
//
// You can specify all the values or you can default the Build and Revision Numbers
// by using the '*' as shown below:
// [assembly: AssemblyVersion("1.0.*")]
[assembly: AssemblyVersion("1.0.0.0")]
[assembly: AssemblyFileVersion("1.0.0.0")] 

TECHNOLOGY


InetAddress.IsSiteLocalAddress Property

    Reference

Definition

Namespace:
    Java.Net 

Assembly:
    Mono.Android.dll

Utility routine to check if the InetAddress is a site local address.
C#

public virtual bool IsSiteLocalAddress { [Android.Runtime.Register("isSiteLocalAddress", "()Z", "GetIsSiteLocalAddressHandler")] get; }

Property Value
Boolean

a boolean indicating if the InetAddress is a site local address; or false if address is not a site local unicast address.

Attributes
    RegisterAttribute

Remarks

Java documentation for java.net.InetAddress.isSiteLocalAddress().

Portions of this page are modifications based on work created and shared by the Android Open Source Project and used according to terms described in the Creative Commons 2.5 Attribution License.
Applies to
Product 	Versions
Xamarin.Android 	13 


INDUSTRY MEETING

AI micro credentials

Micheal o'reilly

Software qaqc

Can reach out to jess for employment stuff

Keyin college micro credential courses in AWS cloud computing and cybersecurity

Introduction to generative AI

Technical som

WHat are micro credential courses?

Micro credential courses are short, focused programs
that allow you to gain specific skills and knowledge
in a particular area. Unlike traditional college courses,
which can take years som

Why AWS?

Amazon web services(AWS) is the fastest-growing cloud computing platform in the world
It is used by companies of all sizes to store and process data, run application, and deliver content to users across the globe.

By gaining expertise in AWS, you can open up a wide range of job opportunities in fields such as software development, data science and cloud
architecture. In som

Why cybersecurity?

Cybersecurity is one of the most important issues
facing businesses and organizations today. With cyber attacks becoming more sophisticated
and frequent, there is a growing demand for professionals who can protect sensitive data and prevent breaches

By taking micro credential courses in som

AWS: courses

AWS certified cloud practioner(CCP)

AWS developer associate(DA) 
This course focuses on developing and deploying applications on AWS using various programming languages and tools.

AWS solutions architect(SA)

This course covers advanced such as designing and deploying som

Cybersecurity courses

Certified secure computer user
This course provides an overview of cybersecurity concepts and best practices

Certified cybersecurity technician(CCT) Training in threat intelligence including skills
like identifying and analyzing threat data understanding threat actos and applying this knowledge to improve an organizations
cybersecuity

som

Upcoming courses

100% funded through techNL's find your future in tech program

Start date: end of november

- Intro to generative AI(GAI)

Harness the power of AI, specifically ChatGPT one of the most advanced language models. Gain hands on som

Intro to technical sales professional(TSP)

Designed for those pursuing technical sales som

Intro to software QA/QC 

Gain expertise in software testing fundamentals, automation, performance, security, and usability som

How to enrol and pre-register

Enrolling in our micro credential courses is easy! Simply visit our website and browse our courses som

Thanks

Linkedin

16 for amazon in semester 3

tome.com for micheal's presentation

Certified secure computer user(C|SCU)

Certified cybersecurity technician C|CT

Certified network defender C|ND

Introduction to generative AI

Introduction software QA/QC 

Introduction to technical sales professional

GENERATIVE AI

Generative models are dali 2, google BARD and ChatGPT

It is a tool based on artifical intelligence

It is a form of AI that possesses the capability 
to generate a wide range of content including
audio, text, visuals, and synthetic data
can also create videos 

Generative AI begins with a prompt which 
can take the form of text,images,video,design,audio,musical notes or any input
that an AI system can process

Another fully operational generative AI is microsoft bing

DALLE-2 was developed using open AI GPT implementation
in 2021
It is capable of establishing connection between
various media forms such as vision,text and audio

It specifically links the meaning of words to visual elements

Use cases of generative AI 

Chatbot

Generative AI can be utilized to develop
chatbots for customer service and technical support

Language dubber

Content writing

Generative AI can assist in writing email response
dating profiles resumes and term papers
offering valuable support and generating customized 
content tailor to specific requirement

Art Generation

Product demonstartion videos

Advantages of generative AI

Content creation

It can automate the manual process of writing content
saving time and effort

Responding to emails can be more efficient with generative AI
lessening effort required and improving response time 

Enhanced technical support

Generative AI can improve responses
to technical queries providing accurate
and helpful information to users or customers

Person generation

Summariziation

Generative AI can summarize complex information

Limitations of Generative AI 

Lack of source identification

Assessment of bias

Difficult in identifying inaccurate information

Adaptability to new circumstances

Hatred

Artificial intelligence is a discipline
like physics for example.

Machine learning is a subfield

ML gives computers the ability to learn
without explicit programming

2 of the most common classes of ML models
are unsupervised and supervised models

The key difference between the 2 is that with
supervised models we have labels

Labeled data is data that comes with a tag
like a name, a type or a number

Unlabeled data is data that comes
with no tag

Supervised learning implies the data is
already labeled.

In supervised learning we are learning
from past examples to predict future values




*/





















































































