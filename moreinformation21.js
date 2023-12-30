/*

C#


using System;

namespace TypeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = 1;
            var b = 2;
            var c = 3;

            Console.WriteLine(!(a != b));
        }
    }
}

BRAIN GAME

Try to wait a little bit and think before acting

Lesser than I might think
Look really focused on the screen
and lock my vision onto it 

INDUSTRY 

Dean

Part of genesis

30 newcomers for som

Starting pathway called evolution

A league program meet eveey week with people teach you basics

Self paced online module can do yourself

At the end can apply for evolution+ about 6 to 9 months depending som

Whos interested in it

Emotional connections

Try to get into enterprise about 3 year program

WIll ask questions when you are going in 

You get money in this program

25,000 dollars avaible after a while

Has an ecosystem of companies

Various comopanies fixing cancer, ai som,
verafin is an enterprise company

Royalty agreement 

Cares more about sustainability

TechNL is very important to them


Various programming languages used in their ecosystem maybe like Python

Tries to help people build their own business ideas


Was in Belgium

Lots of companies in multiple incubators

Learn more about incubators

Can do this anywhere

Better to be in st johns for certain stuff

Competitve application process

About 20 to 30 ideas they'll take

More you go up in the program more costs emerge

som per month

Verafin goes to genesis and talks to employers

The mom test book look up

SCALA



/*object HelloWorld {
  def main(args: Array[String]) {
    val name = "mark"
    val age = 18.5
    println(name + " is "+ age + " years old")
    println(s"$name is $age years old")
    println(f"$name%s is $age%f years old")
    println(s"Hello \nworld")
   // println(raw"Hello \nworld")
  //  println("Hello, world!")
  }
}


object Demo {
  def main(args: Array[String]) {
    val x = 20;
    val y = 30;
    var res = "";

    if (x < 20 || y > 30) {
      res = "x == 20 && y == 30";
    } else {
      res = "x != 20";
    }

    println(res);

    println(if (x != 20) "x == 20" else "x !=20");
  }
}




object Demo {
  def main(args: Array[String]) {
    var x = 0;

    while (x < 10) {
      println("x = "+ x);
      x +=1; // x = x + 1
    }
    var y = 0;
    do {
      println("y = " + y);
      y +=1;
    } while (y < 10);

  }
  }



// for loops in Scala
object Demo {
  def main(args: Array[String]): Unit = {

    for (i <- 1.to(5)) { // <- is called the generator
        println("i using to " + i);
    }

    for (i <- 1 to 9; j <- 1 to 3) {
      println("i using multiple ranges " + i + " " + j);
    }

    val lst = List(1, 2, 3, 5, 4, 6, 78, 9, 6, 5);

    for (i <= lst) {
      println("i using lst " + i);
    }

    for (i <- lst; if i < 6) {
      println("i using Filters " + i);
    }

    val result = for {i <- lst; if i < 6} yield { // use yield if its for loop expression and curly brackets instead of parentheses
      i * i /// can also remove semicolon here
    }

    println("result = "+ result);

  }
}

  

// Scala Match Expressions
object Demo {
    def main(args: Array[String]) {
      val age = "50";
  
      age match {
        case "20" => println(age); // output here 20
        case "18" => println(age);
        case "30" => println(age);
        case "40" => println(age);
        case "50" => println(age); // _ means default case
  
        case _ => println("default");
      }
  
      age match {
        case "20" => println(age);
        case "18" => println(age);
        case "30" => println(age);
        case "40" => println(age);
        case "50" => println(age);
  
        case _ => println("default");
      }
    }
  }

object Demo {
  def main(args: Array[String]) {
    val age = "50";

    age match {
      case "20" => println(age); // output here 20
      case "18" => println(age);
      case "30" => println(age);
      case "40" => println(age);
      case "50" => println(age); // _ means default case

      case _ => println("default");
    }

    var result = age match {
      case "20" => age;
      case "18" => age;
      case "30" => age;
      case "40" => age;
      case "50" => age;

      case _ => "default";
    }

    println("result = "+result);

    i match {
      case 1 | 3 | 5 | 7 | 7 => println("odd");
      case
    }
    
  }
}

// Functions in Scala

object Demo {

  object Math {
    def add(x: Int, y: Int): Int = {
      return x + y;
    }
    def square(x: Int) = x*x;
  }
  def subtract(x: Int, y: Int): Int = {
    x - y;
  }
  def multiply(x: Int, y: Int): Int = x * y;

  def divide(x: Int, y: Int) = x / y;

  def main(args: Array[String]) {
    println(Math.add(45,15));
    println(Math.square 3);
    println(add(45, 15));
    println(subtract(45, 15));
    println(multiply(45, 15));
    println(divide(45, 15));
  }
}

// Functions in Scala

object Demo {

  object Math {
    def +(x: Int, y: Int): Int = {   /// czn put int = 4 here
      return x + y;
    }
    def **(x: Int) = x*x;
  }

  def print(x: Int, y : Int): Unit = {
    println(x+y);
  }

  def main(args: Array[String]) {

    var add = (x : Int, y : Int) => x + y;
    println(add(300, 500));
    val sum = 10 * 20;
    print(100, 200);
    println(Math.+(60, 15));
    println(Math ** 3);
  }
}

CLASS

You can use it to retrieve route parameters from the component rendered by the matching route.

How to use the useParams hook

As explained in the section above, you can declare a route with URL parameters so that React router dynamically captures the corresponding values in the URL when there is a match. It is useful when dynamically rendering the same component for multiple paths.

<Routes>
  <Route path="/blog/:id" element={<Blog />} /> 
</Routes>

Assuming you have the route above in your React router setup, you can retrieve the route parameters in the Blog component using the useParams hook. It returns an object. The object keys are the parameter names declared in the path string in the Route definition, and the values are the corresponding URL segment from the matching URL.

You can use the useParams hook in the rendered component to retrieve the parameters like so:

import { useParams } from "react-router-dom";

const Blog = () => {
  const routeParams = useParams();
};

If the matching route is/blog/use-params for the example above, the useParams hook will return the object below. You can then use the returned object in the rendered Component the way you want.

{
  id: "use-params"
}

REACT

spread syntax
These three dots are called the spread syntax or spread operator. The spread syntax is a feature of ES6, and it's also used in React. Spread syntax allows you to deconstruct an array or object into separate variables.

filter() Method

filter method is used to extract elements from an array based on a condition and create a new array containing only the elements that satisfy that condition.

    Here is the syntax for using the filter⁣ method – ⁣array.filter(callbackFunction)

The filter method is called on an array and takes a callback function as an argument. The callback function is executed for each element in the array, and only the elements that satisfy a specified condition are included in the new array.

The new array, containing the filtered elements, is returned as the result of the filter method.

Let’s say you have a list of numbers, and you want to extract only the even numbers. Instead of manually iterating over the array and checking each element, you can use the filter method.
Ezoic

First, let us use the traditional for loop method.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
// Output: [2, 4]

In the above code example, we initialize an empty array called evenNumbers to store the filtered elements. We use a for loop to iterate over each element of the numbers array. Inside the loop, we check if the current number is divisible by 2 (i.e., an even number) using the condition numbers[i] % 2 === 0.

If the condition is true, we push the number into the evenNumbers array.

After the loop finishes, the evenNumbers array contains only the even numbers from the original numbers array, which in this case is [2, 4].

Using the filter method provides a more concise and readable way to filter elements from an array based on a condition.

Now let’s use the filter method.

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4]

In the above code example, we have the same array called numbers containing [1, 2, 3, 4, 5]. By using the filter method on the numbers array, we provide a function (callback function) as an argument.

This function takes each number from the array, checks if it is divisible by 2 (i.e., an even number) using the condition num % 2 === 0, and returns true or false accordingly.

The filter method evaluates the condition for each number in the array. It collects only the numbers for which the condition returns true and creates a new array (evenNumbers) with those numbers.

In this example, the resulting evenNumbers array contains [2, 4], which are the even numbers from the original numbers array.

JAVA

public class Main {

	public static void main(String[] args) {
		System.out.println(" I love pizza\n"); // this \n gives you a new empty line
		System.out.println("It's really good!"); // shows I love pizzaIt's really good!

	}

}

public class Main {

	public static void main(String[] args) {
		System.out.println("\tI love pizza"); // this like htting tab on the keyboard 
		System.out.println("It's really good!");
// output here is                  I love pizza
						// It's really good!
	}

}

public class Main {

	public static void main(String[] args) {
		System.out.println("\"I love pizza\""); //"I love pizza"
		System.out.println("It's really good!");

						
	}

}

public class Main {

	public static void main(String[] args) {
		System.out.println("\\I love pizza"); //I love pizza
		System.out.println("It's really good!");

						
	}

}

find replace in intellij idea in edit

public class Main {

	public static void main(String[] args) {
		System.out.println("\\I love pizza"); //I love pizza
		System.out.println("It's really good!");
		System.out.println(); // sysout then ctrl space to get this
		System.out.println(); // edit find and replace very useful
	} // spaces dont really matter here in this case prints out fine even with a lot of spaces
// window editor to zoom in and out
}

JAVA


public static void main(String[] args) {
	
	String x = "juice";
	String y = "gatorade";
	String thing;
	
	temp = x;
	x=y;
	y=thing;
	
	System.out.println("x: "+x);
	System.out.println("y: "+y);
}
}

press 0 next to right arrow key 
to get rid of white thing in eclipse
maybe in others as well

import java.util.Scanner;


public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("What is your name? ");
		String name = scanner.nextline();
		System.out.println("How old are you? ");
		int age = scanner.nextInt();
		
		System.out.println("What is your favorite food?");
		String food = scanner.nextLine();
		
		System.out.println("Hello "+name);
		System.out.println("You are "+age+" years old);    
		System.out.println("You like "+food);		
	}
}

friends = friends % 2;


FIGMA

Human centered design one key thing about it is speaking to people

Keep in mind viability(Will this work for the business)

Good typograph is invisible,bad typography is everywhere

When in dark mode or in black background might have to space things out a bit more than usual

A lot of UI is typography

Look for typography you like

Why is it effective?

Super important to think about meaning behind fonts

Helvetica is very common in our world

Picking a typeface
Combining typefaces
Tips and tricks

Does it have a variety of weights and styles?
Make sure it has a true italic

San serif has no squiggly lines
Serif does

San serif is considered more modern

Look for typefaces that have a lot of variety/ alot of styles

Try to stick to 1 typeface

Are you using it for headings or body text?

Headings can be more complex

This is body type.Keep body type simple and easy to read.Never use lorem ipsum!It's important to use copy
that's representative of real data.

Headings should have a shorter line height

Body text should have a taller line height

Are the characteristics differentiated?

ag These letters are more differentiated from each, so they will be easier to read at small sizes.
ag(different g) These letters are less differentiated from each other, so they will be harder to read 
at small sizes.

What personality do you want to convey?

Serious     Source Serif Pro is has harder edges and gives off a more professional and serious personality
Whimsical   Nunito can appear unprofessional in most scenarios, but could be good for a kid's application

Rule #1: Create contrast!
Rule #2: Only change one thing at a time.
Ex: One bold and big another light and big same font size though

Starting point

Choose 1 sans-serif typeface(Open Sans,Roboto,Lato) and only use that typeface with a variety of weights and sizes
to create a typographic hierachy

Tip 1: Stick to 1 font family

2: Avoid using all caps
This is highly dependent on the typeface


When you read, you are really reading from the top of our words 

Every word is like a shape,and the more we distort that shape of that word
our brain has to do some thinking of what it is it has to pay closer attention
to the letter forms

With all caps that form is elminated more difficult to read

#3: Dont change the letter spacing
when you ch  ange t he le   tter spacing your text look s like this
Spacing the letters/words makes it harder to read
Takes brain longer to read stuff

4: Left-alignment is the most legible.
Sometimes,center alignment is good for headings

5: Line length should be a max of characters.
Look at medium for inspiration
For reading optimization

When you drag ruler line from left or top to keep content maybe in the lines
To get rid of them press delete on them or drag them back to the ruler on left or right

GENERATIVE AI

In ML, parameters are often called hyperparameters.
Parameters are basically the memories and the
knowledge that the machine learned from the
model training.

Parameters define the skill of a model in solving
a problem such as predicting text.

General purpose means that the models are
sufficient to solve common problems

Large language models
- Large
. Large training dataset
. Large number of parameters
- General purpose
. Commonality of human languages
. Resource restriction
- Pre-trained and fine-tuned
meaning to pre-train a large language model for a
general purpose with a large data set and then 
fine tune it for specific aims with a much smaller
data set

Benefits of using large language models

In machine learning few shot refers to training a
model with minimal data,and zer oshot implies that
a model can recognize things that have not 
explicitly been taught in the training before

- A single model can be used for different tasks
- The fine-tune process requires minimal field data
- The performance is continuously growing with more
data and parameters
- Orchestrates distributed computation for 
accelerators

Pathways Language Model(PaLM)
This is a 540 billion-parameter model that
achieves a state of the art performance across
multiple language tasks
It is a dense decoder-only transformer model
- Leverages the new pathway system which has enabled
Google to efficiently train a single model across
multiple TPU V4 pods

Fourth generation TPU TPU v4 improved performance by more than 2x over TPU v3 chips. Pichai said "A single v4 pod contains 4,096 v4 chips, and each pod has 10x the interconnect bandwidth per chip at scale, 
compared to any other networking technology.”

Tensor Processing Unit (TPU) is an AI accelerator application-specific integrated circuit (ASIC) developed by Google for neural network machine learning, using Google's own TensorFlow software.[1] Google began using TPUs internally in 2015, and in 2018 made them available for third party use, both as part of its cloud infrastructure and by 
offering a smaller version of the chip for sale. 

Comparison to CPUs and GPUs

Compared to a graphics processing unit, TPUs are designed for a high volume of low precision computation (e.g. as little as 8-bit precision)[2] with more input/output operations per joule, without hardware for rasterisation/texture mapping.[3] The TPU ASICs are mounted in a heatsink assembly, which can fit in a hard drive slot within a data center rack, according to Norman Jouppi.[4]

Different types of processors are suited for different types of machine learning models. TPUs are well suited for CNNs, while GPUs have benefits for some fully-connected neural networks, 
and CPUs can have advantages for RNNs.[5] 

Transformer model 

Transformer
Encoding      Decoding
component     component

LaMDA = Language Model for Dialogue Applications
and PaLM
ingest very,very large data from multiple sources
across the internet and build foundation language
models we can use simply by asking a question

LLM Development vs. Traditional Development

LLM Development
(Using pre-trained APIs)
- NO ML expertise needed
- No training examples
- NO need to train a model
-Thinks about prompt design

Traditional ML Development 
- YES ML expertise needed
- YES training examples
- Yes need to train a mdel
- YES compute time + + hardware
- Thinks about minimizing a loss function

FIGMA

User journey map 
Journey Maps are a UX visualization document 
that showcases the steps that a user takes in a process to accomplish a goal. Personas are created with information 
gathered from user and stakeholder interviews.As a result of these activities, you can identify the most important functionality an audience needs.

Customer journeys map out various buyer interactions in order to track how and why prospects become paying customers. The customer journey consists of 5 broad stages: Awareness, 
Consideration, Decision, Retention, and Advocacy.

Persona: What segment of users are you trying to understand (current or target)? Scenario: What interaction are you trying to map out (real or anticipated)? Stages of the journey: 
What are the high-level phases of the scenario?

Dont pick odd numbers pick numbers divisible by 8
sometimes by 4 if 8 pixels is too much spacing,etc.

When you select a frame in figma,go right to find
layout grid
When you click + there its going to give you a grid
of 10px by default
click on dot sqaure to customize it 
like type in 8 to give yourself an 8px grid system

hold z click and drag to maybe zoom in to a 
particular part
Try to always use a grid
Can change color of grid as well

Use eye to hide things
In the grid customize menu there is a drop down menu
click on it to show grid,columns and rows

12 is standard for the number of columns can put in
12 for desktop
Can set columns to be on the left,right,center, or
stretch
Gutter means all space between our columns
Keep in mind divisible by 8 DO THIS when dealing with gutter
number and other things

Usually for desktop you don't wanna go much larger
than something like 1120 is probably the widest
you wanna go for content

Rows can be useful when setting type
Can set count in rows to auto

Try to keep rows more narrow good technique when setting
type
Change colors as well to differentiate rows and
columns

Hold shift while adjusting size to help out with things

ctrl g to hide and show columns and maybe whole grid

When dealing with icons it might help to hide fill
and select stroke and customize it around

to make stroke stuff round go to triple dots on right
go to join which has a few options one of them is
round

Stroke can be in different positions:
Center,inside and outside

May have to change positions to really see
rounded effects

Reducing opacity can make things in stroke look better

Adding effects also helps go to menu on right click
on + in effects gives you options like inner shadow,
drop shadow,layer blur and background blur

SCALA

max and min in scala

// Scala - Higher-Order Functions
object Demo {


  def main(args: Array[String]) {
    def math(x: Double, y:Double, z:Double, f: (Double, Double)=>Double): Double = f(f(x, y), z);

    def main(args: Array[String]) {
      val result = math(50, 20, 10, _max_); // underscore is known as a wild card
      println(result);
    }
  }
}

// Scala - Partially Applied Functions
import java.util.Date
object Demo {


  def log(date: Date, message: String) = {
    println(date + "   " + message);
  }

  def main(args: Array[String]) {
    val sum = (a: Int, b: Int, c: Int) => a + b + c
    val f = sum(10, _: Int, _ : Int)
    println(f(100, 200));

    val date = new Date;
    val newLog = log(date, _:String);
    newLog("The message 1");
    newLog("The message 2");
    newLog("The message 3");
    newLog("The message 4");

    
  }
}

REACT

React-quill // look up

npm add react-quill // might be the one to use here

TOME

When you sign into Tome you can see all the different AI features

Can add recordings into certain presentations or all of them maybe

It also helps you with creating all the tips for a specific topic,
how to be more creative depending on what type of topic you wish to create

Different designs or templates that you can use for the presentation

Once you sign in you get a lot of templates and different features you can use

You can also look into your own personal account or your personal presentations that
you've created previously

To create your own presentation just click on the pink button on the top right
called create

Once in there you will see a box at the bottom which is where you'll be
writing the prompt for ex: create a presentation about it and then you just input
the topic of the presentation so you can even adjust how many slides it will 
generate for you and it's in the corner on the top left where you will or should
see a number

Can put the name of the topic in the box, when you click and enter 
it will generate the outline for you and provide pictures,short paragraphs or details
about the topic that you chose

You need 250 credits for creating a presentation here and it would cost you for
each sheet so you would use those credits in order for you
 to create the slides in the presentation

Go to the right of a presentation to find the Set theme option(alt o)
Things here are: Tome  Page
Tone theme
Page
Heading   Paragraph
Auto color
Save theme
Can customize all kinds of stuff here 
Can save all the changes by clicking Save theme
When you click on the + icon on the right here you can add an image





*/