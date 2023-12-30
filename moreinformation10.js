/*

REACT

Basic Routing Example

It's worth noting that dynamic routing rules the Internet. Routing Information Protocol (RIP), Open Shortest Path First (OSPF), and Enhanced Interior Gateway Routing Protocol are examples of dynamic-routing protocols and algorithms (EIGRP).

    Routing Information Protocol (RIP)

A distance-vector routing protocol is the Routing Information Protocol (RIP). Distance-vector protocol routers communicate all or a portion of their routing tables to their neighbors in routing-update messages. The hosts can be configured as part of a RIP network using RIP.  

    Open Shortest Path First (OSPF)

It is a routing protocol for the Internet Protocol (IP). It is one of the sets of internal gateway protocols (IGPs) that operate within a single autonomous system and employs the link-state routing (LSR) algorithm (AS).

    Enhanced Interior Gateway Routing Protocol (EIGRP)

It is a sophisticated distance-vector routing protocol that automates routing decisions and configuration on a computer network. Cisco Systems built the protocol as a proprietary protocol that could only be used on Cisco routers.
Nested Routing Example

The ability to nest routes is a powerful feature. While most people believe React Router merely directs a user from one page to the next, it lets you swap out individual view fragments based on the current route. For example, numerous tabs (e.g., Profile, Account) are offered to move through users' information on a user page. The URL in the browser changes when you click these tabs. However, only the tab's content is changed instead of altering the entire page.

We'll use React Router to reproduce this scenario. We'll start with the following example to demonstrate how this works and how you can construct nested routes in React step by step:

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

 return (

   <>

     <h1>React Router</h1>

     <nav>

       <Link to="/home">Home</Link>

       <Link to="/user">User</Link>

     </nav>

     <Routes>

       <Route index element={<Home />} />

       <Route path="home" element={<Home />} />

       <Route path="user" element={<User />} />

       <Route path="*" element={<NoMatch />} />

     </Routes>

   </>

 );

};


If you click on either link, you will notice that both links correctly load their respective sites. However, if you click on any other connection than the two we've described above, you'll see that nothing occurs because all different routes have yet to be established. Hence there is no match for them (hence no action). These routes must be defined so that they may be loaded into our app by just clicking on them.
Conclusion

A Router in React JS is a router component, a valuable routing component for react-native applications. The router component's key characteristic is that it only works with Static and Web Dynamic URLs. It integrates easily with the React framework and includes useful features such as asynchronous URL changes, offloading the entire load (thus avoiding conflicts), etc. It is among the most widely used Routers components among ReactJS developers since it integrates well with other features such as loaders, local data management, SEO, etc. It aids in the development of your application into a usable form.

The Reactor router is a React Router v4 API implementation. It's worth noting that you could omit the render or component prop entirely and instead use the component you wish to connect with a route as a child of Route:

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (

    <Router>

      <Route path="/about">

        <About />

      </Route>

    </Router>

  );

}

Components may also be used for styling: if you want a part (such as a navbar) to appear on every page, place it above (or below) the stated routes in the browser router:

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (

    <Router>

      <Navbar />

      <Route path="/" component={Home} />

      <Route path="/about" component={About} />

    </Router>

  );

}

function Navbar() {

  // visible on every page

  return <>navbar</>

}

function Home() {

  return <>home</>;

}

function About() {

  return <>about</>;

}

Components in React Router

React Router's heart is the Router component. It's in charge of controlling the URL and ensuring that it may match routes and details.

Within the Router in React JS component, we declare routes as children. We may specify as many ways as we like, but each course, path, and part (or render) must have at least two props:

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {

  return (

    <Router>

      <Route path="/about" component={About} />

    </Router>

  );

}

function About() {

  return <>about</>   

}

There are various properties we need to put on a Reactor.Router> component to building up a Reactor router:

The path property describes where a specific route is situated in our app.

We utilize the render or component props to show a specific component for our route.

This command may send only a reference to a single component to component props. However, render is more commonly used to add conditional logic to render one part or another. You may either use a reference to an element or a function to generate:

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {

  return (

    <Router>

      <Route path="/" render={() => <Home />} />

      <Route path="/about" component={About} />

    </Router>

  );

}

function Home() {

  return <>home</>;

}

function About() {

  return <>about</>;

}

How to Add and Set up a React Router?

/// be careful with this command

All you have to do to install React Router is run npm, install react-router-dom@6 in your project terminal and wait for it to finish.

Use the command yarn add react-router-dom@6 if you're using yarn.

After you've finished installing the Router in React JS, the first thing you should do is make it accessible from wherever in your app. Open the src folder's index.js file, import BrowserRouter from react-router-dom, and wrap the root component (the App component).

The index.js file looked like this at first:

import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  document.getElementById('root')

);

Create a new Router in React JS project once that's done. It should keep your project folder in your main folder under src/components. This process indicates that the component's name should be App.js.

import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

  <BrowserRouter>

    <App />

  </BrowserRouter>,

  document.getElementById("root")

);

The Router in React JS library is a robust routing tool for reacting. It is based on the same principles as respond in that it separates visuals from processing and data storage. This separation gives you complete control over your layout and makes it simple to create dynamic user interfaces. React It may use a router with any application, including browser-based, mobile, and desktop applications.

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

Overriding context for a part of the tree // go bakc
/// and figure out useContext stuff on react.dev useContext

You can override the context for a part of the tree by wrapping that part in a provider with a different value.

<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>

You can nest and override providers as many times as you need.
Examples of overriding context
Example 1 of 2:
Overriding a theme

Here, the button inside the Footer receives a different context value ("light") than the buttons outside ("dark").
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
import { createContext, useContext } from 'react';
export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <ThemeContext.Provider value="light">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
}

function Footer() {
  return (
    <footer>
      <Button>Settings</Button>
    </footer>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      {title && <h1>{title}</h1>}
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}



import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}


Updating data passed via context

Often, you’ll want the context to change over time. To update context, combine it with state. Declare a state variable in the parent component, and pass the current state down as the context value to the provider.

function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button onClick={() => {
        setTheme('light');
      }}>
        Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}

Now any Button inside of the provider will receive the current theme value. If you call setTheme to update the theme value that you pass to the provider, all Button components will re-render with the new 'light' value.

Usage
Passing data deeply into the tree

Call useContext at the top level of your component to read and subscribe to context.

import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  // ...

useContext returns the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.

To pass context to a Button, wrap it or one of its parent components into the corresponding context provider:

function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... renders buttons inside ...
}

It doesn’t matter how many layers of components there are between the provider and the Button. When a Button anywhere inside of Form calls useContext(ThemeContext), it will receive "dark" as the value.
Pitfall

useContext() always looks for the closest provider above the component that calls it. It searches upwards and does not consider providers in the component from which you’re calling useContext().
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}



Caveats

    useContext() call in a component is not affected by providers returned from the same component. The corresponding <Context.Provider> needs to be above the component doing the useContext() call.
    React automatically re-renders all the children that use a particular context starting from the provider that receives a different value. The previous and the next values are compared with the Object.is comparison. Skipping re-renders with memo does not prevent the children receiving fresh context values.
    If your build system produces duplicates modules in the output (which can happen with symlinks), this can break context. Passing something via context only works if SomeContext that you use to provide context and SomeContext that you use to read it are exactly the same object, as determined by a === comparison.


Call useContext at the top level of your component to read and subscribe to context.

import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...

useContext is a React Hook that lets you read and subscribe to context from your component.

const value = useContext(SomeContext)

jest /// go back to browserstack.com and look more into it

on unit-testing-of-react-apps

What is Unit Testing for React Apps? Why is it important?

Unit Testing is a testing method that tests an individual unit of software in isolation. Unit testing for React Apps means testing an individual React Component.

“Unit testing is a great discipline, which can lead to 40% – 80% reductions in bug density.” – Eric Elliotte

Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages. Some of the core benefits of Unit Testing are:

    Process Becomes Agile: Agile Testing process is the main advantage of unit testing. When you add more features to the software, it might affect the older designs and you might need to make changes to the old design and code later. This can be expensive and require extra effort. But if you do unit testing, the whole process becomes much faster and easier.
    Quality of code: Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.
    Facilitates change: Refactoring the code or updating the system library becomes much easier when you test each component of the app individually.
    Smooth Debugging: The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.
    Reduction in cost: When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let’s say during production, which can be really expensive.

Read More: Unit Testing Frameworks in Selenium to run Automated Tests
How to perform Unit testing of React Apps using JEST?

Jest is a JavaScript testing framework that allows developers to run tests on JavaScript and TypeScript code and can be easily integrated with React JS.

Step 1: Create a new react app

For unit testing a react app, let’s create one using the command given below:

npx create-react-app react-testing-tutorial

Open the package.json, and you will find that when you use create-react-app for creating a react project, it has default support for jest and react testing library. This means that we do not have to install them manually.

Step 2: Create a component

Let’s create a component called Counter, which simply increases and decreases a numeric value at the click of respective buttons.

import React, { useState } from "react";

const Counter = () => {
const [counter, setCounter] = useState(0);

const incrementCounter = () => {
setCounter((prevCounter) => prevCounter + 1);
};

const decrementCounter = () => {
setCounter((prevCounter) => prevCounter - 1);
};

return (
<>
<button data-testid="increment" onClick={incrementCounter}>
+
</button>
<p data-testid="counter">{counter}</p>
<button disabled data-testid="decrement" onClick={decrementCounter}>
-
</button>
</>
);
};

export default Counter;

Here, the important thing to note is the data-testid attributes that will be used to select these elements in the test file.

Tip: It’s a good practice to run your unit tests on Real Devices rather than Emulators. Try Testing on Real Device Cloud.

Step 3: Write a unit test for the react component

Before writing an actual unit test, let’s understand the general structure of a test block:

    A test is usually written in a test block.
    Inside the test block, the first thing we do is to render the component that we want to test.
    Select the elements that we want to interact with
    Interact with those elements
    Assert that the results are as expected.

The unit test of react component can be written as seen in the code snippet below:

import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "../components/Counter";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Counter />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveTextContent("1");
});

Note: In order to let jest know about this test file, it’s important to use the extension .test.js.

The above test can be described as:

    The test block can be written either using test() or it(). Either of the two methods takes two parameters:
        The first parameter is to name the test. For example, increments counter.
        The second parameter is a callback function, which describes the actual test.
    Using the render() method from the react testing library in the above test to render the Counter component in a virtual DOM.
    The screen property from the react testing library helps select the elements needed to test by the test ids provided earlier.
    To interact with the button, using the fireEvent property from the react testing library in the test.
    And finally, it is asserted that the counter element will contain a value ‘1’.

Step 4: Run the test

Run the test using the following command:

npm run test

Test Result

Test Result of Unit Testing of React Apps

 

Read More: Best Practices for Unit Testing
Mocking Data with Jest

Let’s create a component and fetch some data using Axios. For that first install Axios using the following command:

npm i axios

Create a new component inside the components folder as given below:

import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
const [todoList, setTodoList] = useState(null);

useEffect(() => {
(async () => {
const todos = await axios.get(
"https://jsonplaceholder.typicode.com/todos"
);
setTodoList(todos.data);
})();
}, []);

return todoList ? (
<ul>
{todoList.map((todo, index) => (
<li key={index} data-testid=’todo’>{todo.title}</li>
))}
</ul>
) : (
<p>Loading....</p>
);
};

export default Todos;

The above component is simply rendering a list of todos on the browser. Now in order to test this component, one approach can be that the test function itself makes a call to the endpoint of the API and then tests whether the result obtained is correct or not.

But there are a couple of issues with this approach:

    It can be expensive to create multiple requests.
    Making requests and getting responses can be a slow operation.
    There is an external dependency in the test i.e. Axios.

So the solution to all the above problems is mocking. The purpose of mocking is to isolate the code tested from external dependencies such as API calls. This is achieved by replacing dependencies with controlled objects that simulate those dependencies.

Read More: How to perform UI testing for ReactJS Apps

For creating a mock with jest, first import Axios using the following command:

import axios from 'axios'

Then mock it using the below command:

jest.mock('axios')

Then create dummy data that has a similar format to the actual result, and return the mocked value:

const dummyTodos = [
{
userId: 1,
id: 1,
title: "todo 1",
completed: false,
},
{
userId: 1,
id: 2,
title: "todo 2",
completed: false,
},
{
userId: 1,
id: 3,
title: "todo 3",
completed: false,
},
];

axios.get.mockResolvedValue({ data: dummyTodos});

Here is the complete code in tests/Todos.test.js file:

import { render, waitFor, screen } from "@testing-library/react";
import Todos from "../components/Todos";
import axios from "axios";

jest.mock("axios");

const dummyTodos = [
{
userId: 1,
id: 1,
title: "todo 1",
completed: false,
},
{
userId: 1,
id: 2,
title: "todo 2",
completed: false,
},
{
userId: 1,
id: 3,
title: "todo 3",
completed: false,
},
];

test("todos list", async () => {
axios.get.mockResolvedValue({ data: dummyTodos });
render(<Todos />);

const todoList = await waitFor(() => screen.findAllByTestId("todo"));

expect(todoList).toHaveLength(3);
});

Test Result

After running the test, the result obtained can be seen below:

Mocking Data in a React Unit Test with Jest
Code Coverage using Jest

Code Coverage means determining how much code has been executed while running the test. Generating a code coverage with jest is quite simple. If you are using npm, run the below code to get the code coverage:

npm test – –coverage

With yarn, run the following command to get the code coverage:

yarn test –coverage

The result will look something like this:

Code Coverage of React Unit Test using Jest

Read More: Difference between Code Coverage and Test Coverage
Best practices for testing React Apps with JEST

    Avoid unnecessary tests: Consider a test where you expect some element to be defined and then expect it to have some property on it. Now the latter one becomes unnecessary, because what is the point if the element was not defined at all.
    Don’t test implementation details: If your test does something that your user doesn’t, chances are that you are testing implementation details. For example, you may be exposing a private function just to test your component. This is a code smell — don’t do it. A refactor can easily break your test.
    Push business logic into pure functions rather than UI components: Consider, having a Shopping Cart UI component that should not compute the cart total. This should be pushed to a pure function because it is easier to test.

Conclusion

Unit testing is the easiest way to improve the quality of your React applications since it helps in finding bugs and defects in your code. Moreover, the early discovery of code bugs in the SDLC reduces the overall cost of development because less time is spent on bug fixing in the later stage of the project. This leads to overall customer satisfaction and helps in gaining more trustworthy clients.

Once, the unit testing is done, it is suggested to test the application end to end on real devices and browsers for identifying bottlenecks in the user experience. Using a real device cloud, like BrowserStack, allows you to test on 3000+ browser device combinations, under real user conditions.

BrowserStack is compatible with different automation frameworks like Selenium, Cypress, Playwright, Puppeteer, etc. It is also compatible with CI/CD tools like Jenkins, Travis CI, CircleCI, Bamboo, etc. facilitating test automation in Agile Teams to test on real browsers and devices, thus accelerating the software development cycle. It also supports parallel testing, which helps save time by running tests on multiple browsers and devices simultaneously.


*/