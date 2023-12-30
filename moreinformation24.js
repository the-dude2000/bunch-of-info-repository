/*

GEOMETRY

// look more into time complexity on wikipedia

Constraint optimization, or constraint programming (CP), is the name given to identifying feasible solutions out of a very large set of candidates, 
where the problem can be modeled in terms of arbitrary constraints.

The doubly connected edge list (DCEL), also known as half-edge data structure, is a data structure to represent an 
embedding of a planar graph in the plane, and polytopes in 3D.

This data structure provides efficient[quantify] manipulation of the topological information associated with the objects in question (vertices, edges, faces). It is used in many algorithms of computational geometry to handle polygonal subdivisions of the plane, commonly called planar straight-line graphs (PSLG). For example, a Voronoi diagram is commonly represented by a DCEL inside a bounding box.

This data structure was originally suggested by Muller and Preparata[1] for representations of 3D convex polyhedra.

Later, a somewhat different data structure[citation needed] was suggested, but the name "DCEL" was retained.

For simplicity, only connected graphs are considered[by whom?], however the DCEL structure may be extended to handle disconnected graphs as well by 
introducing dummy edges between disconnected components.[2] 

Data structure
Each half-edge has exactly one previous half-edge, next half-edge and twin.

DCEL is more than just a doubly linked list of edges. In the general case, a DCEL contains a record for each edge, vertex and face of the subdivision. Each record may contain additional information, for example, a face may contain the name of the area. Each edge usually bounds two faces and it is, therefore, convenient to regard each edge as two "half-edges" (which are represented by the two edges with opposite directions, between two vertices, in the picture on the right). Each half-edge is "associated" with a single face and thus has a pointer to that face. All half-edges associated with a face are clockwise or counter-clockwise. For example, in the picture on the right, all half-edges associated with the middle face (i.e. the "internal" half-edges) are counter-clockwise. A half-edge has a pointer to the next half-edge and previous half-edge of the same face. To reach the other face, we can go to the twin of the half-edge and then traverse the other face. Each half-edge also has a pointer to its origin vertex (the destination vertex can be obtained by querying the origin of its twin, or of the next half-edge).

Each vertex contains the coordinates of the vertex and also stores a pointer to an arbitrary edge that has the vertex as its origin. Each face stores a pointer to some half-edge of its outer boundary (if the face is unbounded then pointer is null). It also has a list of half-edges, one for each hole that may be incident within the face. If the vertices or faces do not hold any interesting information, there is no need to store them, 
thus saving space and reducing the data structure's complexity. 


In computer graphics, the winged edge data structure is a way to represent polygon meshes in computer memory. It is a type of boundary representation and describes both the geometry and topology of a model. Three types of records are used: vertex records, edge records, and face records. Given a reference to an edge record, one can answer several types of adjacency queries (queries about neighboring edges, vertices and faces) in constant time. This kind of adjacency information is useful for algorithms such as subdivision surface.
Features

The winged edge data structure explicitly describes the geometry and topology of faces, edges, and vertices when three or more surfaces come together and meet at a common edge. The ordering is such that the surfaces are ordered counter-clockwise with respect to the innate orientation of the intersection edge. Moreover the representation allows numerically unstable situations like that depicted below.[clarification needed]

The winged edge data structure allows for quick traversal between faces, edges, and vertices due to the explicitly linked structure of the network. It serves adjacency queries in constant time with little storage overhead. This rich form of specifying an unstructured grid is in contrast to simpler specifications of polygon meshes such as a node and element list, or the implied connectivity of a regular grid. An alternative to the winged edge data structure is the Half-edge data structure.
Structure and pseudocode

The face and vertex records are relatively simple, while the edge record is more complex.

    For each vertex, its record stores only the vertex's position (e.g. coordinates) and a reference to one incident edge. The other edges can be found by following further references in the edge.
    Similarly each face record only stores a reference to one of the edges surrounding the face. There is no need to store the direction of the edge relative to the face (CCW or CW) as the face can be trivially compared to the edge's own left and right faces to obtain this information.
    Finally, the structure of the edge record is as follows. An edge is assumed to be directed. The edge record contains two references to the vertices that make up the endpoints of the edge, two references to the faces on either side of the edge, and four references to the previous and next edges surrounding the left and right face.

In short, the edge record has references to all its adjacent records, both when traversing around an adjacent vertex or around an adjacent face.

class Edge
{
    Vertex *vert_origin, *vert_destination;
    Face *face_left, *face_right;
    Edge *edge_left_cw,
         *edge_left_ccw,
         *edge_right_cw,
         *edge_right_ccw;
}

class Vertex
{
    float x, y, z;
    Edge *edge;
}

class Face
{
    Edge *edge;
}


Quad-edge data structure
Combinatorial maps // look into all these terms
Doubly linked face list
Half-edge data structure

INDUSTRY

Matt has ton of knowledge in software and stuff

Quality in software: WHat is is it , and why should
it matter to you 

Matthew Middleton
BeyondTrust

Matt is a software tester by trade worked for 15 years

BeyondTrust

100% remote
COunter tester som

Discussion

Quality views are important

What is quality?

"Quality is value to some person(s)"
Gerald Weinberg


Who matters?
What is value?
How do we derive quality from all this?
WHy should you care!

Quality anf the role of doftware testers
"Software Testing is the feedback mechanism to check that expectations
are being met(right product built right)"- Paul Carvalho

What can you do?

Credits

- Dr. Cem kramer (kaner.com,context-driven-testing.com)

- Gerald Weinberg (geraldmweinberg.com)

- Paul Carvalho (staqs.com)

Software QA/QC 

REACT USEEFFECT

Use setTimeout() to count 1 second after initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

// MAKE SURE THE COMPONENTS ARE NOT COMMENTED OUT WHEN USING THEM

/* import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const R = () => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          setTimeout(() => {
            setCount((count) => count + 1);
          }, 1000);
        });
    
  return (
    <h1>I've rendered {count} times!</h1>
  
  );
};

export default R; 

import { useState } from "react";
// this is in case you need to vanish something
but need to refresh to bring something back


const R = () => {

const [sentence, setSentence] = useState("Try to hide this");
const [aSentence, setASentence] = useState()
const vanish = () => {
    setSentence();
}


  return (
    <>
    <button onClick={vanish}>Hide Thing</button>
    <p>{sentence}</p>
    
    
    </>
  )
}

/// To show or hide something a sentence in this case

import { useState } from "react";

const R = () => {

const [sentence, setSentence] = useState(true);
  return (
    <>
     <button onClick={() => setSentence(!sentence)}>Show/Hide</button>  
    {sentence ? <h4>Try to hide this</h4> : null}
    
    </>
  )
}

export default R;

MAVEN

What is Maven?

"Maven is a software management and comprehension tool based on
the concept of Project Object Model(POM) which can manage project
build,reporting,and documentation from a central piece of
information"

All build systems are essentially the same:

- Compile Source code
- Copy resource
- Compile and Run Tests
- Package Project
- Deploy Project
- Cleanup

Developers of maven wanted
- A standard way to build the projects
- A clear definition of what the project consisted of
- An easy way to publish project information and a way to share
JARs across several projects
- The result is a tool that can now be used for building and
managing any Java-based project
- Intended to make the day-to-day work of java developers easier
and generally help with the comprehension of any Java-based
project.

What is POM?

"As a fundamental unit of work in Maven,POM is an XML file that
contains information about project and configuration details
used by Maven to build the project"

POM stands for Project Object Model

- Describes a project
- Name and Version,Artifact Type,Source Code Locations,Dependencies
- Plugins
- Profiles(Alternate build configurations)
- Uses XML by Default
- Not the way Ant uses XML

Maven's Objectives

- Making the build process easy
- Providing a uniform build system
- Providing quality project information
- Providing guidelines for best practices development
- Allowing transparent migration to new features

Install Maven

- Make sure JDK is installed, and "JAVA_HOME" variable is added
as Windows environment variable.

- Add both M2_HOME and MAVEN_HOME variables in the windows
environment,and point it to your Maven folder

To check if its installed open search box and search for system
then click on advanced system settings then click on 
environment variables // finish here


JAVA

public class Main {



    public static void main(String[] args) {



        // logical operators = used to connect two or more expressions

        //

        //						&& = (AND) both conditions must be true

        // 						|| = (OR) either condition must be true

        //						! = (NOT) reverses boolean value of condition


// -------------------------------- Example 1 --------------------------------

/*
		int temp = 15;

		

		if(temp>30) {

			System.out.println("It is hot outside");

		}

		else if(temp>=20 && temp<=30) {

			System.out.println("It is warm outside");

		}

		else {

			System.out.println("It is cold outside");

		}


*/
// -------------------------------- Example 2 --------------------------------
/*
		Scanner scanner = new Scanner(System.in);

		

		System.out.println("You are playing a game! Press q or Q to quit");

		String response = scanner.next();

		

		if(!response.equals("q") && !response.equals("Q")) {

			System.out.println("YOu are still playing the game *pew pew*");

		}

		else {

			System.out.println("You quit the game");

		}

}

}

public class Main {

    public static void main(String[] args){

        // swtich = statement that allows a variable to be tested for equality against a list of values

        String day = "Friday";

        switch(day) {
            case "Sunday":
                System.out.println("It is Sunday!");
                break;
            case "Monday":
                System.out.println("It is Monday!");
                break;
            case "Tuesday":
                System.out.println("It is Tuesday!");
                break;
            case "Wednesday":
                System.out.println("It is Wednesday!");
                break;
            case "Thursday":
                System.out.println("It is Thursday!");
                break;
            case "Friday":
                System.out.println("It is Friday!");
                break;
            case "Saturday":
                System.out.println("It is Saturday!");
                break;
            default:
                System.out.println("That is not a day!");
        }

    }
}

public class Main {

    public static void main(String[] args){

        // if statement = performs a block of code if it's condition evaluates to be true

        int age = 75;

        if(age==75){
            System.out.println("Ok Boomer!");
        }
        else if(age>=18) {
            System.out.println('You are an adult!');
        } else if(age>=13) {
            System.out.println("You are a teenager");
        }
        else {
            System.out.println("You are not an adult!");
        }

    }
}

The Java Scanner is a class in the Java Utilities Package, and it serves the purpose of creating bi-directional communication between the software and its user. In other words, it provides a way for the user to enter 
information that the software can use to inform its behavior.

What is JAR?

JAR stands for Java ARchive. It's a file format based on the popular ZIP file format and is used for aggregating many files into one. Although JAR can be used as a general archiving tool, the primary motivation for its development was so that Java applets and their requisite components (.class files, images and sounds) can be downloaded to a browser in a single HTTP transaction, rather than opening a new connection for each piece. This greatly improves the speed with which an applet can be loaded onto a web page and begin functioning. The JAR format also supports compression, which reduces the size of the file and improves download time still further. Additionally, individual entries in a JAR file may be digitally 
signed by the applet author to authenticate their origin.

JAR is:

    the only archive format that is cross-platform
    the only format that handles audio and image files as well as class files
    backward-compatible with existing applet code
    an open standard, fully extendable, and written in java
    the preferred way to bundle the pieces of a java applet

JAR consists of a zip archive, as defined by PKWARE, containing a manifest file and potentially signature files, as defined in the JAR File Specification.
The APPLET tag
Changing the APPLET tag in your HTML page to accomodate a JAR file is simple. The JAR file on the server is identified by the ARCHIVE parameter, where the directory location of the jar file should be relative to the location of the html page:

    <applet code=Animator.class 
      archive="jars/animator.jar"
      width=460 height=160>
      <param name=foo value="bar">
    </applet>

Note that the familiar CODE=myApplet.class parameter must still be present. The CODE parameter, as always, identifies the name of the applet where execution begins. However, the class file for the applet and all of its helper classes are loaded from the JAR file.

Th ARCHIVE attribute describes one or more JAR files containing classes and other resources that will be "preloaded". The classes are loaded using an instance of an AppletClassLoader with the given CODEBASE. It takes the form archive = archiveList. The archives in archiveList are separated by ",".

Once the archive file is identified, it is downloaded and separated into its components. During the execution of the applet, when a new class, image or audio clip is requested by the applet, it is searched for first in the archives associated with the applet. If the file is not found amongst the archives that were downloaded, it is searched for on the applet's server, relative to the CODEBASE (that is, it is searched for as in JDK1.0.2).

The archive tag may specify multiple JAR files. Each JAR file must be separated by "," (comma). Each file is downloaded in turn:

    <applet code=Animator.class 
      archive="classes.jar ,  images.jar ,  sounds.jar"
      width=460 height=160>
      <param name=foo value="bar">
    </applet>

There can be any amount of white space between entries within the archive parameter. In addition, the archive tag itself is case-insensitive; it can be lower-case, upper-case, or any combination of lower- and upper-case letters, such as ArCHiVe.
Executable JAR Files
On Microsoft Windows systems, the Java 2 Runtime Environment's installation program will register a default association for JAR files so that double-clicking a JAR file on the desktop will automatically run it with javaw -jar. Dependent extensions bundled with the application will also be loaded automatically. This feature makes the end-user runtime environment easier to use on Microsoft Windows systems.

The Solaris 2.6 kernel has already been extended to recognize the special "magic" number that identifies a JAR file, and to invoke java -jar on such a JAR file as if it were a native Solaris executable. A application packaged in a JAR file can thus be executed directly from the command line or by clicking an icon on the CDE desktop.


GIT

git diff

Why Maven?

Before maven:

Challenges:
- For each project you need to keep adding a set of Jars
- Even a minor mistake in the structure of servlet doesn't give the
right output.
- Building and deploying a project takes up a lot of time

After Maven:

Solution:
Maven has live templates in its central repository.So,a user has
to declare only the dependencies that he requires

Maven will download and deploy the dependencies with the application

What is Maven?

Maven is an automation tool which helps to build and manage software
projects within a short period of time

It supports parallel builds,is easy to use,instant access to new
features with no additional configurations,easy build process

Architecture of Maven

Maven commands are executed in pom file

POM is a XML file which consists details of the project and configuration
in order to build software

Pom file
Checks the dependencies -> Fetches from   Maven local repository
Builds plugins       -> Software is built   (not exact)
Builds profile

public class Main {



    public static void main(String[] args) {



        // logical operators = used to connect two or more expressions

        //

        //						&& = (AND) both conditions must be true

        // 						|| = (OR) either condition must be true

        //						! = (NOT) reverses boolean value of condition


// -------------------------------- Example 1 --------------------------------

/*
		int temp = 15;



		if(temp>30) {

			System.out.println("It is hot outside");

		}

		else if(temp>=20 && temp<=30) {

			System.out.println("It is warm outside");

		}

		else {

			System.out.println("It is cold outside");

		}


*/
// -------------------------------- Example 2 --------------------------------
/*
		Scanner scanner = new Scanner(System.in);



		System.out.println("You are playing a game! Press q or Q to quit");

		String response = scanner.next();



		if(!response.equals("q") && !response.equals("Q")) {

			System.out.println("YOu are still playing the game *pew pew*");

		}

		else {

			System.out.println("You quit the game");

		}

}

}

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		// while loop = executes a block of code as long as it's condition remains true

		Scanner scanner = new Scanner(System.in);
		String name = "";

		while(name.isBlank()) {
			System.out.print("Enter your name: ");
			name = scanner.nextLine();
		}

		System.out.println("Hello "+name);

	}
}

C#

LINQ = Language Integrated Query

LINQ enables the developer to write queries against strongly
typed collections of objects by using language keywords and
familiar operators

Ex: var employeeNames = employeeList.where(e => e.Salary > 30000)
                        .Select(e => e)
                        .where(d => d.DepartmentID == 2)
                        .Select(e => e.EmployeeName);

Extension methods enable the developer to add methods to existing
types without creating a new derived type recompiling or otherwise
modifying the original type 

Ex:
 (Probably not exact)
Extension Method

    public static class MyExtensions
    {
        public static int wordcount(this String str)
        {

            return str.split(new char[]{'','.','?'},
                        StringSplitOptions.RemoveEmptyEntries).length;
        }
    }

A delegate is a type that represents references to methods with a
particular parameter list and return type 

Ex: (Maybe not exact)

class Program
{
    delegate void Del(int i,double j);

    static void Main(String[] args)
    {
        Del d = MultiplyNumbers;

        for(int i = 1; i <= 5; i++)
        {
            d(i,2);
        }


    }
    static void MultiplyNumbers(int m, double n)
    {
        console.write(m * n + "");
    }
}

A lambda expression is a shorter way of representing an anonymous
using special syntax. The funk type provides a way to store 
anonymous methods in a generalized and simple way

(Finish typing this stuff)

GOBLIN

This tool is actually a website that provides a variety of simple organizational tools powered by AI. 

Goblin Tools is a simple and effective AI-powered productivity tool that can be helpful for everyone. I use it to help break down tasks, manage my time, and improve my productivity. Try the Chef function to 
get started by creating a meal from a list of ingredients.

It was designed for neurodivergent users (someone who has a brain that functions differently from what is considered “typical” and have different strengths and challenges) but is useful for anyone.

Goblin Tools, provides:

Assistance with task management helps individuals break down complex tasks into smaller, more manageable steps, making it easier to stay organized and focused. This can be especially helpful for people who struggle with executive function challenges, such as those with ADHD or autism.

Increased productivity: By providing tools and features tailored to the needs of individuals, it can help improve productivity and efficiency in daily activities. For example, the Magic To Do tool can automatically break down tasks into smaller steps, helping users manage and organise their to-do lists more effectively.

Support for neurodivergent individuals: Goblin Tools is designed to meet the needs of neurodivergent individuals, such as those with ADHD, autism, and other conditions. It aims to provide a supportive and inclusive environment where everyone can feel comfortable using the tools.

Simplified user experience: The app and website are designed to be user-friendly and easy to navigate, making it accessible to a wide range of users. This is important for people who may have difficulty using traditional productivity tools.

The specific tools available on Goblin Tools include:

    Magic To Do: This tool automatically breaks down tasks into smaller steps, helping users manage and organise their to-do lists more effectively.
    Formalizer: The Formalizer tool helps transform language to be more formal, sociable, and concise. This can be helpful for people who struggle with writing or who want to improve their communication skills.
    Judge: The Judge tool assists with interpreting the tone of written content, helping users better understand the intended meaning. This can be helpful for people who are easily overwhelmed by social cues or who want to avoid misunderstandings.
    Estimator: The Estimator tool can guess the timeframe or duration of an activity, providing users with an estimate. This can be helpful for people who struggle with time management or who want to make sure they have enough time to complete a task.
    Compiler: The Compiler tool takes brain dumps or scattered thoughts and turns them into actionable tasks, helping users organise their ideas. This can be helpful for people who have difficulty brainstorming or who want to get their thoughts down on paper.

To use Goblin Tools, simply create an account and start using the tools that are most relevant to your needs. You can also customise the tools to fit your preferences. For example, you can set the “spiciness level” for the Magic To Do tool to determine how detailed you want the task breakdown to be.

Goblin Tools is a free tool, but there is also a premium plan that offers additional features, such as unlimited task creation and access to all tools.

Goblin Tools is a simple and effective AI-powered productivity tool that can be helpful for everyone. I use it to help break down tasks, manage my time, and improve my productivity.

Try the Chef function to get started by creating a meal from a list of ingredients.

With half bold you can paste text into a box in there

Maybe gives you options itself for random text

Highligts letters in words to make it easier to
anchor your gaze to particular words and read it

text sniper look up

With Arranger you can send a list of times and
people will actually vote for the dates and can
even make this on different times and you can see
who and when everyone's available and then see
the maximum number of slots where everyone's
available and then pick the best results

With Wheel of Names it can help with dealing
with big tasks

Tinywow.com provides you with a bunch of small tools
to just do common tasks like Merge PDF and other one

REACT PRACTICE

import React from 'react';
import ValidatedInput from './Components/R';

function App() {
  const validateLength = (value) => value.length >= 5;

  return (
    <div>
      <h1>Validated Input</h1>
      <ValidatedInput
        validationFunction={validateLength}
        errorMessage="Input is too short (minimum 5 characters)"
      />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';

const ValidatedInput = ({ validationFunction, errorMessage }) => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={isValid ? '' : 'error'}
      />
      {!isValid && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ValidatedInput;

REDUX

When making an article or possibly other things make a folder called
data and make a json file with data in it to help with the code

const { createStore } = Redux;
const { Provider, connect } = ReactRedux;
// You have learned to use 'import' to bring in components from libraries in your React project. Using const is another way to do it that works better in Codepen. Do not be concerned about the difference at this time.

 Data 
const INSTRUCTORS = [{
	name: 'Michael Steinberg',
  id: 0,
	color: 'blue',
  course: 'React',
}, {
	name: 'James Pritchett',
  id: 1,
	color: 'green',
  course: 'React',  
}, {
	name: 'Mathew Moser',
  id: 2,  
	color: 'orange',
  course: 'React',  
}, {
  name: 'Brent Schneider',
  id: 3,
  color: 'purple',
  course: 'React',  
}];

 ------ START PAYING ATTENTION HERE ------------------------------------- 

 REACT COMPONENTS 
 A React component is able to get the application state as props from the Redux Store when it is: 
   1) Nested inside a component that is wrapped in a <Provider> that is connected to a store (created somewhere with createStore)
   2) It is subscribed to the store - you will not use store.subscribe() directly, but instead you will use connect() with mapStateToProps(), which handles subscribe() for you.
   
   If mapDispatchToProps() is also used with connect(), the component will be able to dispatch actions to the Redux Store as well. 

class App extends React.Component {
  
  render() {    
    return (
      <div>
        <h1>Nucamp Instructors</h1>
        <hr />
        <AddInstructor addInstructor={this.props.addInstructor} />
        <hr />
        <InstructorsList instructors={this.props.instructors} />
       </div>
     )
  }
}

class InstructorsList extends React.Component {
  render() {



    return (
				<ul>
					{this.props.instructors.map((instructor) =>
						<li key={instructor.id}>
							<Instructor instructor={instructor} />
						</li>
					)}
				</ul>     
    )
  }
}

class AddInstructor extends React.Component {

  constructor(props) {
    super(props);
    
    this.inputName = null;
    this.inputCourse = null;
    this.inputColor = null;

    
    this.setTextInputRef = inputElement => {
      console.log(inputElement.id);
      switch(inputElement.id) {
        case "name": this.inputName = inputElement; break;
        case "course": this.inputCourse = inputElement; break;
        case "color": this.inputColor = inputElement; break;
      }
    };    
  }
  
  handleSubmit = (e) =>{
    e.preventDefault(); 
    this.props.addInstructor(this.inputName.value, this.inputCourse.value, this.inputColor.value);  
    e.target.reset();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Name </label>
        <input id="name" type="text" ref={this.setTextInputRef} />
        <label for="course"> Course Taught: </label>
        <input id="course" type="text" ref={this.setTextInputRef} />        
        <label for="color"> Color: </label>
        <input id="color" type="text" ref={this.setTextInputRef} />        
        <button type="submit"> Add Instructor</button>
      </form>
     )
  }
}

class Instructor extends React.Component {
  render() {
    let style = {background: this.props.instructor.color};
    return (            
      <p style={style} className="instructor">
        {this.props.instructor.name} - {this.props.instructor.course}
      </p>
    )
  }
}


 ACTION TYPE 
const ADD_INSTRUCTOR = 'ADD_INSTRUCTOR';


 ACTION 
const addInstructor = (name, course,color) => ({
  type: ADD_INSTRUCTOR,
  payload: {
    name: name,
    course: course,
    color:color
  }
});


 REDUCER 

const Reducer = (state = INSTRUCTORS, action) => {
  switch (action.type) {
    case ADD_INSTRUCTOR:
      let instructor = action.payload;
      instructor.id = state.length;
      return state.concat(instructor);
    default:
      return state;
  }
};


 STORE & CONNECTIONS TO STORE 

const store = createStore(Reducer, INSTRUCTORS);

const mapStateToProps = state => {
  return {
    instructors: state
  }
};

 This is a slightly different syntax for mapDispatchToProps than you've seen in your course project - as a function rather than as an object. See https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-a-function for an explanation. The syntax is not too different, and you will encounter this style in many projects. 
const mapDispatchToProps = dispatch => ({
  addInstructor: (name, course, color) => dispatch(addInstructor(name, course, color))
});


// The below line is written in a specific way to work with Codepen. Outside of Codepen, you would export default connect([args])(App). 
const AppExport = connect(mapStateToProps, mapDispatchToProps)(App);

/* FINAL RENDER - here, we have wrapped our root component with <Provider>  
ReactDOM.render(<Provider store={store}><AppExport /></Provider>, document.getElementById("root"));









*/