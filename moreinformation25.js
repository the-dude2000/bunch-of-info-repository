/*

JAVA

public class Main {

	public static void main(String[] args) {

		// for loop = executes a block of code a limited amount of times

		for(int i=10; i>=0; i--) {
			System.out.println(i);

		}

		System.out.println("Happy new year!");

	}

}

import java.util.Scanner;



public class Main {



	public static void main(String[] args) {

		

		// nested loops = a loop inside of a loop

		

		Scanner scanner = new Scanner(System.in);

		int rows;

		int columns;

		String symbol = "";

		

		System.out.println("Enter # of rows: ");

		rows = scanner.nextInt();

		System.out.println("Enter # of columns: ");

		columns = scanner.nextInt();

		System.out.println("Enter symbol to use: ");

		symbol = scanner.next();

		

		for(int i=1; i<=rows; i++) {

			System.out.println();

			for(int j=1; j<=columns;j++) {

				System.out.print(symbol);

			}

		}	

	}

}

public class Main {



	public static void main(String[] args) {

			

		// array = used to store multiple values within a single variable

		

		String[] cars = new String[3];

		

		cars[0] = "Camaro";

		cars[1] = "Corvette";

		cars[2] = "Tesla";

			

		for(int i=0; i<cars.length; i++) {

			System.out.println(cars[i]);

		}

	

	}

}

public class Main {



	public static void main(String[] args) {

			

		// 2D array = an array of arrays

		

		String[][] cars = 	{	

								{"Camaro","Corvette","Silverado"},

								{"Mustang","Ranger","F-150"},

								{"Ferrari","Lambo","Tesla"}

							};

		

		

		cars[0][0] = "Camaro";

		cars[0][1] = "Corvette";

		cars[0][2] = "Silverado";

		cars[1][0] = "Mustang";

		cars[1][1] = "Ranger";

		cars[1][2] = "F-150";

		cars[2][0] = "Ferrari";

		cars[2][1] = "Lambo";

		cars[2][2] = "Tesla";

		

		

		for(int i=0; i<cars.length; i++) {

			System.out.println();

			for(int j=0; j<cars[i].length; j++) {

				System.out.print(cars[i][j]+" ");

			}

		}

	}

}

public class Main {

 public static void main(String[] args) {
  
  // String = a reference data type that can store one or more characters
  //   reference data types have access to useful methods
  
  String name = "Bro";
  
  //boolean result = name.equalsIgnoreCase("bro");
  //int result = name.length();
  //char result = name.charAt(0);
  //int result = name.indexOf("o");
  //boolean result = name.isEmpty();
  //String result = name.toUpperCase();
  //String result = name.toLowerCase();
  //String result = name.trim();
  //String result = name.replace('o', 'a');
   
  //System.out.println(result);
 }
 
}

public class Main {

 public static void main(String[] args) {
  
  // wrapper class =  provides a way to use primitive data types as reference data types
  //     reference data types contain useful methods
  //     can be used with collections (ex.ArrayList)
  
  //primitive  //wrapper
  //---------  //-------
  // boolean  Boolean
  // char   Character
  // int   Integer
  // double  Double
  
  // autoboxing = the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes
  // unboxing = the reverse of autoboxing. Automatic conversion of wrapper class to primitive
  
  Boolean a = true;
  Character b = '@';
  Integer c = 123;
  Double d = 3.14;
  
 }
 
}

import java.util.ArrayList;



public class Main {



	public static void main(String[] args) {

			

		// ArrayList = 	a resizable array. 

		//				Elements can be added and removed after compilation phase

		//				store reference data types

		

		ArrayList<String> food = new ArrayList<String>();

		

		food.add("pizza");

		food.add("hamburger");

		food.add("hotdog");

		

		//food.set(0, "sushi");

		//food.remove(2);

		//food.clear();

		

		for(int i=0; i<food.size(); i++) {

			System.out.println(food.get(i));

		}

	}

}

import java.util.*;

public class Main {



	public static void main(String[] args) {

		

		ArrayList<ArrayList<String>> groceryList = new ArrayList();

		

		ArrayList<String> bakeryList = new ArrayList();

		bakeryList.add("pasta");

		bakeryList.add("garlic bread");

		bakeryList.add("donuts");

		

		ArrayList<String> produceList = new ArrayList();

		produceList.add("tomatoes");

		produceList.add("zucchini");

		produceList.add("peppers");

		

		ArrayList<String> drinksList = new ArrayList();

		drinksList.add("soda");

		drinksList.add("coffee");

		

		groceryList.add(bakeryList);

		groceryList.add(produceList);

		groceryList.add(drinksList);

		

		System.out.println(groceryList);

		

	}

}

C#

The more advanced concepts in C# are commonly used in various.net
Project Frameworks like asp.net (core in here too might be two
    separate things) MVC, web API, and Xamarin

If you are a game developer that uses the unity game engine
knowing the more advanced concepts in C# will also be hugely
advantageous

With the entity framework data access technology Lambda expressions
and Link are commonly used

Entity framework is commonly used in asp.net MVC applications and
web API applications

Dependency injection is a built-in feature in the asp.net core 
MVC and web API project Frameworks

.NET 5 has a single unified platform for everything
including Windows,Mac,Web mobile,cloud,iot gaming,machine learning,
and data science

TOME

You can upload,search and create images on Tome

When dealing with images the text automatically sizes to it 
too!

You can record with a camera on or just using an audio recording

Tome might ask you if you want to use your microphone and camera

Can click play in top right corner (alt p) can exit with the x
in the top right

When you refer tome to someone else, you get 100 credits

When in a presentation can click on the + in the bottom left to
add another slide and can choose the layout/type of slide you
want

With a certain hwading option you can add more rows or columns
by clicking on the table settings on the left 

Also gives you the option to show title and wrap text
and distribute columns pretty awesome!

Right click on an image to give you these options:
Distribute widths
Download
Delete backspace

Can alter images by clicking on them and then going to image
settings on the right 

Can hyperlink by selecting text for example and then click chain
looking thing then paste your link in the box once you add a link
in there you have to press enter pressing outside the box will
not make it a hyperlink

Also when you select text can make it . format or 123 format, bold,
put a line through it, can make it a coding part

Can make more or less elaborate using extend and reduce in this thing as well

Use ctrl z to undo changes

Can also rewirte and adjust tone here as well.

AI (the 2's are small) except for x 2

D(SET) = - P/T log2 P/T - N/T log2 N/T

   P/T = 1/2    = (- 1/2 log2 1/2) x 2 = 1
   P/T = 1  = 1  = -1 log2 1 - 0 log2 0
                    {  0  }    {  0  }

10--------x------------  (not exact)


  swirly round triangle  P/T
up --------------smallup->


// Window resize listener using useEffect

import React from 'react';
import WindowSize from './problem';

function App() {
  return (
    <div>
      <h1>Window Size</h1>
      <WindowSize />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Window size: {windowSize.width} x {windowSize.height}</p>
    </div>
  );
};

export default WindowSize;


STARTING THIS GAME INFORMATION

install：

npm i linkup-game -S

or link the script in your html document:

<script src="https://unpkg.com/linkup-game@1.0.0/dist/linkup.min.js"></script>

use like this:

new Matrix(7, 0.3).$mount(
    document.getElementById('app')
)

npx create-vite-app to create a vue page

also have cd might need to do this to get thing working

npm install (or `yarn`)
  npm run dev (or `yarn dev`)

vue language features(volar) in extensions in VSC menu
go to this and download to use vue 



FIGMA

Widgets are big on IOS

When you make a widget for the apple ecosystem that one widget size can apply
to all different mediums like iphones macbooks,ipads

WIdgets are kinda difficult to design in general

They need to be very focused in what they do and be very good at it

Microsoft duo thing look up

Kendel thing widgetlook up

Same size for widgets pretty much applies for all platforms with some small differences depending on the widget


Can also duplicate maybe a project by clicking on the dropdown by the title on the top and clicking duplicate

WHen you are working on auto layout and you want the same consistent spacing throughout,you also need to account for
the edge cases may happen all the time not much of it in that case so is your content gonna change all the time
and if so how can your design adapt to that

So increase text box width or etc. just in case you have a change or more text or whatever needs to go in 

Can select a frame or element by clicking on an element right clicking and going to frame selection 
Keep this in mind when dealing with widgets especially weather ones

los widgets

Keep this in mind can put this in community search bar to give you a lot of widget options

Apple widgets UI Kit

JAVA

public class Main {

 public static void main(String[] args) {
  
  // wrapper class =  provides a way to use primitive data types as reference data types
  //     reference data types contain useful methods
  //     can be used with collections (ex.ArrayList)
  
  //primitive  //wrapper
  //---------  //-------
  // boolean  Boolean
  // char   Character
  // int   Integer
  // double  Double
  
  // autoboxing = the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes
  // unboxing = the reverse of autoboxing. Automatic conversion of wrapper class to primitive
  
  Boolean a = true;
  Character b = '@';
  Integer c = 123;
  Double d = 3.14;
  
 }
 
}

For the wrapper class, the
first letter is capital and
the names are fully spelled out
so ex:
char Character

import java.util.ArrayList;



public class Main {



	public static void main(String[] args) {

			

		// for-each = 	traversing technique to iterate through the elements in an array/collection

		//				less steps, more readable

		//				less flexible

		

		//String[] animals = {"cat","dog","rat","bird"};

		ArrayList<String> animals = new ArrayList<String>();

		

		animals.add("cat");

		animals.add("dog");

		animals.add("rat");

		animals.add("bird");

		

		for(String i : animals) {

			System.out.println(i);

		}

public class Main {

 public static void main(String[] args) {
  
  // method = a block of code that is executed whenever it is called upon
  
  int x = 3;
  int y = 4;
  
  int z = add(x,y);

  System.out.println(z);
 }
 
 static int add(int x, int y) {
  
  int z = x + y;
  return z;
  
 }
 
}

MAVEN

MAVEN COMMAND PROMPT STUFF USE WINDOWS POWERSHELL

cd (folder name)

mvm archetype:generate(When you put in this command
	it will start downloading a bunch of stuff(files)
	which are called maven archetype plug-in which
	are required whenever you are going to create
	your first maven project) and whenever you give
	this maven archetype generate command it's 
	going to search for these plugins(probably something
		like ${home.user}/.m2/repository e.g
		C:\Users\ProgrammingKnowledge\.m2\repository)
in your computer first at a specified location and if
it's not found or if these plugins are not found then maven
is going to download these plugins and then put it in
the directory for you, if you already have these plugins
maven will not download them for you

All the stuff you see there are archetypes from which
you can choose from and by default maven will choose
a maven archetype Quick Start archetype which is
basically to create a maven hello world project with
source and test classes and you can see the number of
this archetype  the number can be different in your 
case because these archetype number changes with time

(artifactid version.extension
	e.g. my-maven-project-1.0-SNAPSHOT.jar)

Stuff in document not exact to tutorial

CYBERSECURITY

Ich_start vs .cap_enter 

Should use ich instead of cap

fd lists

What is QoS in Networking? Quality of service (QoS) is the use of mechanisms or technologies that work on a network to control traffic and ensure the performance 
of critical applications with limited network capacity.


Chapter 24. Opaque Integer Resources
24.1. Overview

Opaque integer resources allow cluster operators to provide new node-level resources that would be otherwise unknown to the system. Users can consume these resources in pod specifications, similar to CPU and memory. The scheduler performs resource accounting so that no more than the available amount is simultaneously allocated to pods.
Note

Opaque integer resources are Alpha currently, and only resource accounting is implemented. There is no resource quota or limit range support for these resources, and they have no impact on QoS.

Opaque integer resources are called opaque because OpenShift Container Platform does not know what the resource is, but will schedule a pod on a node only if enough of that resource is available. They are called integer resources because they must be available, or advertised, in integer amounts. The API server restricts quantities of these resources to whole numbers. Examples of valid quantities are 3, 3000m, and 3Ki.

Opaque integer resources can be used to allocate:

    Last-level cache (LLC)
    Graphics processing unit (GPU) devices
    Field-programmable gate array (FPGA) devices
    Slots for sharing bandwidth to a parallel file system. 

For example, if a node has 800 GiB of a special kind of disk storage, you could create a name for the special storage, such as opaque-int-resource-special-storage. You could advertise it in chunks of a certain size, such as 100 GiB. In that case, your node would advertise that it has eight resources of type opaque-int-resource-special-storage.

Opaque integer resource names must begin with the prefix pod.alpha.kubernetes.io/opaque-int-resource-.
24.2. Creating Opaque Integer Resources

There are two steps required to use opaque integer resources. First, the cluster operator must name and advertise a per-node opaque resource on one or more nodes. Second, application developer must request the opaque resource in pods.

To make opaque integer resources available:

    Allocate the resource and assign a name starting with pod.alpha.kubernetes.io/opaque-int-resource-

    Advertise a new opaque integer resource by submitting a PATCH HTTP request to the API server that specifies the available quantity in the status.capacity for a node in the cluster.

    For example, the following HTTP request advertises five foo resources on the openshift-node-1 node.

    PATCH /api/v1/nodes/openshift-node-1/status HTTP/1.1
    Accept: application/json
    Content-Type: application/json-patch+json
    Host: openshift-master:8080

    [
      {
        "op": "add",
        "path": "/status/capacity/pod.alpha.kubernetes.io~1opaque-int-resource-foo",
        "value": "5"
      }
    ]

    Note

    The ~1 in the path is the encoding for the character /. The operation path value in the JSON-Patch is interpreted as a JSON-Pointer. For more details, refer to IETF RFC 6901, section 3.

    After this operation, the node status.capacity includes a new resource. The status.allocatable field is updated automatically with the new resource asynchronously.
    Note

    Since the scheduler uses the node status.allocatable value when evaluating pod fitness, there might be a short delay between patching the node capacity with a new resource and the first pod that requests the resource to be scheduled on that node. 

The application developer can then consume the opaque resources by editing the pod config to include the name of the opaque resource as a key in the spec.containers[].resources.requests field.

For example: The following pod requests two CPUs and one foo (an opaque resource).

apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-container
    image: myimage
    resources:
      requests:
        cpu: 2
        pod.alpha.kubernetes.io/opaque-int-resource-foo: 1

The pod will be scheduled only if all of the resource requests are satisfied (including CPU, memory, and any opaque resources). The pod will remain in the PENDING state while the resource request cannot be met by any node.

Conditions:
  Type    Status
  PodScheduled  False
...
Events:
  FirstSeen  LastSeen	Count	From		  SubObjectPath	Type	  Reason	    Message
  ---------  --------	-----	----		  -------------	--------  ------	    -------
  14s	     0s		6	default-scheduler		Warning	  FailedScheduling  No nodes are available that match all of the following predicates:: Insufficient pod.alpha.kubernetes.io/opaque-int-resource-foo (1).

This information can also be found in the Developer Guide under Quotas and Limit Ranges. 

Read all of this ///////

gzip

gzip is a file format and a software application used for file compression and decompression. The program was created by Jean-loup Gailly and Mark Adler as a free software replacement for the compress program used in early Unix systems, and intended for use by GNU (from where the "g" of gzip is derived). Version 0.1 was first publicly released on 31 October 1992, and version 1.0 followed in February 1993.

The decompression of the gzip format can be implemented as a streaming algorithm, an important feature for Web protocols, data interchange and ETL (in standard pipes) applications. 

/// Look into other terms found on gzip on wikipedia and 
gzip itself

FIGMA

Google gemini // look into it

Think about your call to actions when you are designing
try to keep it to one primary one

Keep in mind a kanban board maybe for designing 

COLOR MEANINGS AND SYMBOLISM 

Black: Power,luxury,mystery,death,sadness
White: The good,purity,kindness,cleanliness,innocence
Blue: Trust,calm,safety,honesty,work
Red: Love,Excitement,daring,anger,danger
Yellow: Intelligence,optimism,activity,happiness,curiosity
Green: Environment,health,money,growth,prosperity
Orange: Enthusiasm,young,creativity,warmth,fun
Purple: Fantasy,kingdom,wealth,wisdom,influence
Pink: Womanhood,romance,tenderness,selicacy
Brown: Stability,credibility,responsibility
Gray: Seriousness,balance,hardness

MAKE THE MOST OF SOCIAL PROOF

Social proof is basically when a consumer goes through
the process of proofing you out on social media

The 4 P's:

The first P is professionalism

Make sure you have social profiles for your business
set up and they look good

Think about your consumers.
What are they using?
Are they using Instagram or facebook or youtube?
Think about the ones that are important to
your particular business and industry,and then
make sure that you set up social profiles there.

Have a really professional avatar, a nice
professional banner image,a fully populated profile,
all the contents filled out.

Make continual posts on them

Highlight some things that are specific to you,like
how many years you've been in business maybe on your
profile page or awards that you've won or number of
customers and reviews that you've had

The second P is popularity

Third P is proactive

You're proactive with your engagement back with the community
responding back to people

Go like other people's content

You need somebody that's constantly monitoring this on
social media

Comment on other comments and show gratitude


Fourth P is promote

Invest some money to promote your content,to get your
content out there so that more people see it,to promote
your page so more people see it


Promote local charities in your community this is gonna
create a positive outlook on your brand

Also promote maybe the local sports teams,or things
going on around town. Promote more than just your
products,your services,and your business.

Promote others,your community

FIGMA PLUGINS

Icons8 Background Remover

It allows you to remove the background of any image
for free without leaving figma.

You can simply select your desired image run the
plugin and just wait for its magic


Easometric

It lets you convert your 2D design into an isometric
design,it's amazing for creating promotional
materials

FINANCE

profit and loss statement
A profit and loss statement, formally known as an income statement or simply as a P&L, tracks the amount of profit that remains after a business subtracts all of its costs from its revenue during a specific 
accounting period, typically monthly, quarterly and annually.

A profit and loss statement is calculated by totaling all of a business's revenue sources and subtracting from 
that all the business's expenses that are related to revenue.

A P&L statement summarizes the revenues, costs, and expenses of a company during a specific period. It is one of three financial statements that public companies issue quarterly and annually—the other two 
are a balance sheet and a cash flow statement.

// Go back to beginner-bookkeeping.com Accounting profit
how to calcululate profit or loss on income statement
// study it

The objective for most shareholders and most corporate
managers is to maximize NPV.

Motivation

Theory of Market Efficiency:
- No free lunch, No arbitrage
- Prices full reflect all available information
- Prices follow random walks
- Trade-off between risk and expected return
- "Active" management does not add value

When you look at market prices,you should look at them
with a certain degree of awe and respect because it 
aggregstes information like you wouldn't believe

Motivation

Behavioural Finance: (Is the alternative to market efficiency)

- Market Participants are irrational
- Cognitive and behavioural biases
	- Loss Aversion,anchoring,framing
	- Overconfidence
	- Overreaction
	- Herding
	- Mental Accounting

Loss Aversion

- A: $240,000
- B: $1,000,000 With 25% probability
	$0          With 75% probability

Which would you prefer?

- C:   - $ 750,000
- D:   - $1,000,000 With 75% probability
					With 25% probability

Which would you prefer?

- A+D: $240,000 With 25% probability
	- $ 750,000 With 75% probability
- B+C: $250,000 With 25% probability
	- $ 750,000 With 75% probability

Now Which would you prefer?




*/