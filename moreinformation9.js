/*

REACT

set functions, like setSomething(nextState) ///// go back to react.dev useState to learn more

The set function returned by useState lets you update the state to a different value and trigger a re-render. You can pass the next state directly, or a function that calculates it from the previous state:

const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...

Parameters

    nextState: The value that you want the state to be. It can be a value of any type, but there is a special behavior for functions.
        If you pass a function as nextState, it will be treated as an updater function. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state. See an example below.

Returns

set functions do not have a return value.
Caveats

    The set function only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.

    If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. Although in some cases React may still need to call your component before skipping the children, it shouldn’t affect your code.

    React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use flushSync.

    Calling the set function during rendering is only allowed from within the currently rendering component. React will discard its output and immediately attempt to render it again with the new state. This pattern is rarely needed, but you can use it to store information from the previous renders. See an example below.

    In Strict Mode, React will call your updater function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your updater function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.


useState(initialState)

Call useState at the top level of your component to declare a state variable.

import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...

The convention is to name state variables like [something, setSomething] using array destructuring.

See more examples below.
Parameters

    initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.
        If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state. See an example below.

Returns

useState returns an array with exactly two values:

    The current state. During the first render, it will match the initialState you have passed.
    The set function that lets you update the state to a different value and trigger a re-render.

Caveats

    useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.
    In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior. The result from one of the calls will be ignored.


Updating state based on the previous state

Suppose the age is 42. This handler calls setAge(age + 1) three times:

function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}

However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

To solve this problem, you may pass an updater function to setAge instead of the next state:

function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}

Here, a => a + 1 is your updater function. It takes the pending state and calculates the next state from it.

React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:

    a => a + 1 will receive 42 as the pending state and return 43 as the next state.
    a => a + 1 will receive 43 as the pending state and return 44 as the next state.
    a => a + 1 will receive 44 as the pending state and return 45 as the next state.

There are no other queued updates, so React will store 45 as the current state in the end.

By convention, it’s common to name the pending state argument for the first letter of the state variable name, like a for age. However, you may also call it like prevAge or something else that you find clearer.

React may call your updaters twice in development to verify that they are pure.


import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}

useState

useState is a React Hook that lets you add a state variable to your component.

const [state, setState] = useState(initialState);

First you have to import the useLocation hook

import { useLocation } from "react-router-dom";

then set

const location = useLocation();

now you can use the location object which has the following properties: key, pathname, search, hash, state

{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: undefined
}

Here's another demo screenshot to what location object looks like:
/// go look at screenshot on stack overflow in regards to useLocation
console.log of 'location' object
Share
Improve this answer 

Real-World Use Case:

The useLocation hook is incredibly useful in scenarios where we need to access and utilize information about the current URL. We can use it to dynamically render components based on the current route, fetch data based on query parameters, or apply specific styles or behavior depending on the current path. For example, in an e-commerce application, we can use the useLocation hook to display different product details based on the route and query parameters.
Best Practices and Things to Avoid:

    Use useLocation within a component that is rendered within a <Router> component to ensure access to the current location object.
    Avoid excessive reliance on the useLocation hook for complex logic or business rules. Instead, consider using it to gather information and pass it to other components or functions.
    Be mindful of potential performance impacts when utilizing the useLocation hook excessively within deeply nested components. Consider optimizing rerenders if needed.

Summary:

In this article, we explored the useLocation hook in React Router DOM, which allows us to access and interact with the current location object within our React applications. We examined its significance, provided a code snippet with an explanation, and discussed its real-world use cases. By utilizing the useLocation hook, we can create dynamic and responsive UIs that adapt based on the current URL and its parameters.

useLocation This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.

The useLocation hook provided by React Router DOM gives us access to the current location object. The location object contains information about the current URL and can be used to access query parameters, path names, and other details related to the current route.
Code Snippet and Explanation:

Let’s examine an example that demonstrates the usage of the useLocation hook in a multi-page React application:

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useLocation } from 'react-router-dom';
const Home = () => <h1>Welcome to the Home Page!</h1>;
const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>About Page</h1>
      <p>Current Path: {location.pathname}</p>
      <p>Search Parameters: {location.search}</p>
    </div>
  );
};
const Contact = () => <h1>Contact Us</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;
const App = () => {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
export default App;

In this example, we import the necessary components and hooks from react-router-dom. The useLocation hook is used in the About component to access the location object. We can then utilize properties of the location object, such as pathname and search, to display information about the current route. The Route components define the paths and their corresponding components within the Switch component, which ensures that only one route is rendered at a time.

import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    // Google Analytics
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}


JAVA

java.net /// go back and research all of these things
Interface CookieStore


    public interface CookieStore

    A CookieStore object represents a storage for cookie. Can store and retrieve cookies.

    CookieManager will call CookieStore.add to save cookies for every incoming HTTP response, and call CookieStore.get to retrieve cookie for every outgoing HTTP request. A CookieStore is responsible for removing HttpCookie instances which have expired.

    Since:
        1.6

        Method Summary
        All MethodsInstance MethodsAbstract Methods Modifier and Type 	Method and Description
        void 	add(URI uri, HttpCookie cookie)
        Adds one HTTP cookie to the store.
        List<HttpCookie> 	get(URI uri)
        Retrieve cookies associated with given URI, or whose domain matches the given URI.
        List<HttpCookie> 	getCookies()
        Get all not-expired cookies in cookie store.
        List<URI> 	getURIs()
        Get all URIs which identify the cookies in this cookie store.
        boolean 	remove(URI uri, HttpCookie cookie)
        Remove a cookie from store.
        boolean 	removeAll()
        Remove all cookies in this cookie store.

        Method Detail
            add

            void add(URI uri,
                     HttpCookie cookie)

            Adds one HTTP cookie to the store. This is called for every incoming HTTP response.

            A cookie to store may or may not be associated with an URI. If it is not associated with an URI, the cookie's domain and path attribute will indicate where it comes from. If it is associated with an URI and its domain and path attribute are not specified, given URI will indicate where this cookie comes from.

            If a cookie corresponding to the given URI already exists, then it is replaced with the new one.

            Parameters:
                uri - the uri this cookie associated with. if null, this cookie will not be associated with an URI
                cookie - the cookie to store
            Throws:
                NullPointerException - if cookie is null
            See Also:
                get(java.net.URI)

            get

            List<HttpCookie> get(URI uri)

            Retrieve cookies associated with given URI, or whose domain matches the given URI. Only cookies that have not expired are returned. This is called for every outgoing HTTP request.

            Parameters:
                uri - the uri associated with the cookies to be returned
            Returns:
                an immutable list of HttpCookie, return empty list if no cookies match the given URI
            Throws:
                NullPointerException - if uri is null
            See Also:
                add(java.net.URI, java.net.HttpCookie)

            getCookies

            List<HttpCookie> getCookies()

            Get all not-expired cookies in cookie store.

            Returns:
                an immutable list of http cookies; return empty list if there's no http cookie in store

            getURIs

            List<URI> getURIs()

            Get all URIs which identify the cookies in this cookie store.

            Returns:
                an immutable list of URIs; return empty list if no cookie in this cookie store is associated with an URI

            remove

            boolean remove(URI uri,
                           HttpCookie cookie)

            Remove a cookie from store.

            Parameters:
                uri - the uri this cookie associated with. if null, the cookie to be removed is not associated with an URI when added; if not null, the cookie to be removed is associated with the given URI when added.
                cookie - the cookie to remove
            Returns:
                true if this store contained the specified cookie
            Throws:
                NullPointerException - if cookie is null

            removeAll

            boolean removeAll()

            Remove all cookies in this cookie store.

            Returns:
                true if this store changed as a result of the call



java.net package

///// go back and study on all java.lang and java.util methods

It creates a new instance of the class of the current object and initializes all its fields with exactly the contents of the corresponding fields of this object.
Methods for Performing Object Cloning in Java

There are 3 methods for creating Object Cloning in Java that are mentioned below:

    Using Assignment Operator to create a copy of the reference variable
    Creating a copy using the clone() method
    Usage of clone() method – Deep Copy

1. Using Assignment Operator to create a copy of the reference variable

In Java, there is no operator to create a copy of an object. Unlike C++, in Java, if we use the assignment operator then it will create a copy of the reference variable and not the object. This can be explained by taking an example. The following program demonstrates the same.

Below is the implementation of the above topic:

// Java program to demonstrate that assignment operator 
// only creates a new reference to same object 
import java.io.*; 
  
// A test class whose objects are cloned 
class Test { 
    int x, y; 
    Test() 
    { 
        x = 10; 
        y = 20; 
    } 
} 
  
// Driver Class 
class Main { 
    public static void main(String[] args) 
    { 
        Test ob1 = new Test(); 
  
        System.out.println(ob1.x + " " + ob1.y); 
  
        // Creating a new reference variable ob2 
        // pointing to same address as ob1 
        Test ob2 = ob1; 
  
        // Any change made in ob2 will 
        // be reflected in ob1 
        ob2.x = 100; 
  
        System.out.println(ob1.x + " " + ob1.y); 
        System.out.println(ob2.x + " " + ob2.y); 
    } 
}
Output

10 20
100 20
100 20

2. Creating a copy using the clone() method

The class whose object’s copy is to be made must have a public clone method in it or in one of its parent classes.  

    Every class that implements clone() should call super.clone() to obtain the cloned object reference.
    The class must also implement java.lang.Cloneable interface whose object clone we want to create otherwise it will throw CloneNotSupportedException when the clone method is called on that class’s object.

Syntax:

protected Object clone() throws CloneNotSupportedException

i) Usage of clone() method -Shallow Copy

Note – In the below code example the clone() method does create a completely new object with a different hashCode value, which means its in a separate memory location. But due to the Test object c being inside Test2, the primitive types have achieved deep copy but this Test object c is still shared between t1 and t2. To overcome that we explicitly do a deep copy for object variable c, which is discussed later. 

// A Java program to demonstrate 
// shallow copy using clone() 
import java.util.ArrayList; 
  
// An object reference of this class is 
// contained by Test2 
class Test { 
    int x, y; 
} 
  
// Contains a reference of Test and 
// implements clone with shallow copy. 
class Test2 implements Cloneable { 
    int a; 
    int b; 
    Test c = new Test(); 
    public Object clone() throws CloneNotSupportedException 
    { 
        return super.clone(); 
    } 
} 
  
// Driver class 
public class Main { 
    public static void main(String args[]) 
        throws CloneNotSupportedException 
    { 
        Test2 t1 = new Test2(); 
        t1.a = 10; 
        t1.b = 20; 
        t1.c.x = 30; 
        t1.c.y = 40; 
  
        Test2 t2 = (Test2)t1.clone(); 
  
        // Creating a copy of object t1 
        // and passing it to t2 
        t2.a = 100; 
  
        // Change in primitive type of t2 will 
        // not be reflected in t1 field 
        t2.c.x = 300; 
  
        // Change in object type field will be 
        // reflected in both t2 and t1(shallow copy) 
        System.out.println(t1.a + " " + t1.b + " " + t1.c.x 
                           + " " + t1.c.y); 
        System.out.println(t2.a + " " + t2.b + " " + t2.c.x 
                           + " " + t2.c.y); 
    } 
}
Output

10 20 300 40
100 20 300 40

In the above example, t1.clone returns the shallow copy of the object t1. To obtain a deep copy of the object certain modifications have to be made in the clone method after obtaining the copy.
ii) Usage of clone() method – Deep Copy 

    If we want to create a deep copy of object X and place it in a new object Y then a new copy of any referenced objects fields are created and these references are placed in object Y. This means any changes made in referenced object fields in object X or Y will be reflected only in that object and not in the other. In the below example, we create a deep copy of the object.
    A deep copy copies all fields and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

// A Java program to demonstrate 
// deep copy using clone() 
  
// An object reference of this 
// class is contained by Test2 
class Test { 
    int x, y; 
} 
  
// Contains a reference of Test and 
// implements clone with deep copy. 
class Test2 implements Cloneable { 
    int a, b; 
  
    Test c = new Test(); 
  
    public Object clone() throws CloneNotSupportedException 
    { 
        // Assign the shallow copy to 
        // new reference variable t 
        Test2 t = (Test2)super.clone(); 
  
        // Creating a deep copy for c 
        t.c = new Test(); 
        t.c.x = c.x; 
        t.c.y = c.y; 
  
        // Create a new object for the field c 
        // and assign it to shallow copy obtained, 
        // to make it a deep copy 
        return t; 
    } 
} 
  
public class Main { 
    public static void main(String args[]) 
        throws CloneNotSupportedException 
    { 
        Test2 t1 = new Test2(); 
        t1.a = 10; 
        t1.b = 20; 
        t1.c.x = 30; 
        t1.c.y = 40; 
  
        Test2 t3 = (Test2)t1.clone(); 
        t3.a = 100; 
  
        // Change in primitive type of t2 will 
        // not be reflected in t1 field 
        t3.c.x = 300; 
  
        // Change in object type field of t2 will 
        // not be reflected in t1(deep copy) 
        System.out.println(t1.a + " " + t1.b + " " + t1.c.x 
                           + " " + t1.c.y); 
        System.out.println(t3.a + " " + t3.b + " " + t3.c.x 
                           + " " + t3.c.y); 
    } 
}
Output

10 20 30 40
100 20 300 40

In the above example, we can see that a new object for the Test class has been assigned to copy an object that will be returned to the clone method. Due to this t3 will obtain a deep copy of the object t1. So any changes made in the ‘c’ object fields by t3, will not be reflected in t1.
Deep Copy vs Shallow Copy

    There are certain differences between using clone() as a deep copy vs that as a shallow copy as mentioned below:

        Shallow copy is the method of copying an object and is followed by default in cloning. In this method, the fields of an old object X are copied to the new object Y. While copying the object type field the reference is copied to Y i.e object Y will point to the same location as pointed out by X. If the field value is a primitive type it copies the value of the primitive type.
        Therefore, any changes made in referenced objects in object X or Y will be reflected in other objects.

    Shallow copies are cheap and simple to make. In the above example, we created a shallow copy of the object.

Why use the clone method() or Advantages of the Clone Method

    If we use the assignment operator to assign an object reference to another reference variable then it will point to the same address location of the old object and no new copy of the object will be created. Due to this any changes in the reference variable will be reflected in the original object.
    If we use a copy constructor, then we have to copy all the data over explicitly i.e. we have to reassign all the fields of the class in the constructor explicitly. But in the clone method, this work of creating a new copy is done by the method itself. So to avoid extra processing we use object cloning.


Java.Util package you have to import to use the classes in it

dont have to import java.lang into your java program
because you dont need to java provides this automatically
the moment you create a file etc. ///// look at more 1:55:45 advance java simplilearn



Throwable 	
The Throwable class is the superclass of all errors and exceptions in the Java language.

The super keyword in Java is a reference variable that is used to refer parent class objects. The super() in Java is a reference variable that is used to refer parent class constructors. super can be used to call parent class' variables and methods.

The super keyword in java is a reference variable that is used to refer parent class objects. The keyword “super” came into the picture with the concept of Inheritance. Basically this form of super is used to initialize superclass variables when there is no constructor present in superclass. On the other hand, it is generally used to access the specific variable of a superclass.

Example

// Java Program to Illustrate super keyword
 
// Class 1
// Base class
// Here it is vehicle class
class Vehicle {
 
    // Attribute
    int maxSpeed = 120;
}
 
// Class 2
// sub class Car extending vehicle
class Car extends Vehicle {
    int maxSpeed = 180;
 
    // Method
    void display()
    {
        // Printing maxSpeed of parent class (vehicle) as
        // super keyword refers to parent class
        System.out.println("Maximum Speed: "
                           + super.maxSpeed);
    }
}
 
// Class 3
// Main class
class GFG {
 
    // Main driver method
    public static void main(String[] args)
    {
        // Creating an object of child class
        Car small = new Car();
 
        // Calling out method defined inside child class
        small.display();
    }
}
Output

Maximum Speed: 120

Now we already have seen that super keyword refers to parent class which can be perceived from the output itself. Now let us dwell onto second concept known as super()  which more programmers are lesser aware and do not implement same barely knowing it all  

Concept: super()

The super keyword can also be used to access the parent class constructor by adding ‘()’ after it, i.e. super(). Also do remember that ‘super()’ can call both parametric as well as non-parametric constructors depending upon the situation.

Example: 

// Java code to demonstrate super()
 
// Class 1
// Helper class
// Parent class - Superclass
class Person {
 
    // Constructor of superclass
    Person()
    {
        // Print statement of this class
        System.out.println("Person class Constructor");
    }
}
 
// Class 2
// Helper class
// Subclass extending the above  superclass
class Student extends Person {
    Student()
    {
        // Invoking the parent class constructor
        // with the usage of super() word
        super();
 
        // Print styatement whenever subclass constructor is
        // called
        System.out.println("Student class Constructor");
    }
}
 
// Class 3
// Main class
class GFG {
 
    // Main driver method
    public static void main(String[] args)
    {
        // Creating object of subclass
        // inside main() method
        Student s = new Student();
    }
}
Output: 

Person class Constructor
Student class Constructor

 

Finally after having an adequate understanding of the above topics let us do finally conclude out differences between them which are listed in the tabular format below as follows:
super 	super() /// go back to page to understand clearly difference between these geeksforgeeks
The super keyword in Java is a reference variable that is used to refer parent class objects. 	The super() in Java is a reference variable that is used to refer parent class constructors.
super can be used to call parent class’ variables and methods. 	super() can be used to call parent class’ constructors only.
The variables and methods to be called through super keyword can be done at any time, 	Call to super() must be first statement in Derived(Student) Class constructor.
If one does not explicitly invoke a superclass variables or methods, by using super keyword, then nothing happens 	If a constructor does not explicitly invoke a superclass constructor by using super(), the Java compiler automatically inserts a call to the no-argument constructor of the superclass.

DEVOPS



C++

#include <iostream>

int main() {
    std::cout << "Hello world";
    return 0;
}

In Clion for mac on top click preferences then 
appearance themes option with different
choices can get more themes

Intermediate topics in C++:

Structures
Enumerations // others here too but covered them
already

advanced topics in C++:

Classes
Exceptions
Templates
Containers

DEVOPS

Good chance a devops interview will star with 
questions about yourself

Tell me about yourself and what technologies you have used
in the previous project?

what is your team size? describe the team members roles

What is your role in the team?

How good are you with programming?

Are you from the dev side or the Ops side 

CODEWARS REGULAR EXPRESSION FOR BINARY NUMBERS DIVISIBLE BY N

E = 'e' # means empty str

class State():
    def __init__(self, number, prior_state = [], post_state = []):
        self.id = number
        self.prior_state = prior_state
        self.post_state = post_state

def initStatesArches(number):
    states = []
    for i in range(number):
        states.append(State(i, [], []))
    
    arches = [[None for i in range(number)] for j in range(number)]
    
    for i in range(number):
        addArch(states, arches, i, i * 2 % number, '0')       # State i -> State mod(2i/n)
        addArch(states, arches, i, (i * 2 + 1) % number, '1') # State i => State mod(2i+1/n) 

    return states, arches

def addArch(states, arches, begin, end, string):
    if begin != end:
        states[begin].post_state.append(end)
        states[end].prior_state.append(begin)
    arches[begin][end] = string

def deleteArch(state, is_prior, value):
    lista =  state.prior_state if is_prior else state.post_state
    if value not in lista: return
    lista.remove(value)

def reduceState(states, arches, cur_state):
    for origin in cur_state.prior_state:
        for goal in cur_state.post_state:
            pre_state = states[origin] # Pre State
            pos_state = states[goal]   # Post State

            # Values assigned to each arch the tie
            # together the three states analized
            arch_origin_goal = arches[origin][goal]
            arch_origin_cur = arches[origin][cur_state.id]
            arch_cur_goal = arches[cur_state.id][goal]
            arch_cur_cur = arches[cur_state.id][cur_state.id]
            # arch_origin_goal | arch_origin_cur(arch_cur_cur) * arch_cur_goal
            if arch_cur_cur:
                if len(arch_cur_cur) > 1:
                    term = '(?:{})*'.format(arch_cur_cur)
                else:
                    term = '{}*'.format(arch_cur_cur)
            else:
                term = E
            half_exp = addExp(arch_origin_goal, concatExp(arch_origin_cur, term, arch_cur_goal))

            deleteArch(pre_state, False, pos_state.id)
            deleteArch(pos_state, True, pre_state.id)
            addArch(states, arches,  pre_state.id, pos_state.id, half_exp)

            deleteArch(pre_state, False, cur_state.id)
            deleteArch(pos_state, True, cur_state.id)
            
            print(cur_state.id, origin, goal, '-', arches[origin][goal])


def addExp(*args):
    not_E_not_empty = [term for term in args if term and term != E]
    return cleverJoin(not_E_not_empty, '|')

def concatExp(*args):
    not_E = [term for term in args if term != E]
    has_empty_set = False in args
    return '' if has_empty_set else cleverJoin(not_E, '')

def cleverJoin(expression, sep):
    if len(expression) == 1: 
        return expression[0]
    return sep.join(['(?:{})'.format(term) if '|' in term else term for term in expression])
    


def regex_divisible_by(n):
    # Your Code Here
    if n == 1: return '^(0|1)+$'

    states, arches = initStatesArches(n)
    for state in states:
        if state.id is not 0:
            reduceState(states, arches, state)
    
    expression = arches[0][0]

    return '^(?:{})+$'.format(expression)

print(regex_divisible_by(3))

*/