/*

REDUX

Create a React Redux App

The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

# Vite with our Redux+TS template
# (using the `degit` tool to clone and extract the template)
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app

# Next.js using the `with-redux` template
npx create-next-app --example with-redux my-app

Redux Core

The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:

# NPM
npm install redux

# Yarn
yarn add redux

It is also available as a precompiled UMD package that defines a window.Redux global variable. The UMD package can be used as a <script> tag directly.

For more details, see the Installation page.

Here are some suggestions on when it makes sense to use Redux:

    You have reasonable amounts of data changing over time
    You need a single source of truth for your state
    You find that keeping all your state in a top-level component is no longer sufficient

What Does the Redux Core Do?

The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

    createStore to actually create a Redux store
    combineReducers to combine multiple slice reducers into a single larger reducer
    applyMiddleware to combine multiple middleware into a store enhancer
    compose to combine multiple store enhancers into a single store enhancer

Other than that, all the other Redux-related logic in your app has to be written entirely by you.

The good news is that this means Redux can be used in many different ways. The bad news is that there are no helpers to make any of your code easier to write.

For example, a reducer function is just a function. Prior to Redux Toolkit, you'd typically write that reducer with a switch statement and manual updates. You'd also probably have hand-written action creators and action type constants along with it:

createEntityAdapter: prebuilt reducers and selectors for CRUD operations on normalized state

Calculating Derived Data with Selectors

In a typical Redux application, the logic for deriving data is usually written as functions we call selectors.

Selectors are primarily used to encapsulate logic for looking up specific values from state, logic for actually deriving values, and improving performance by avoiding unnecessary recalculations.

You are not required to use selectors for all state lookups, but they are a standard pattern and widely used.
Basic Selector Concepts

A "selector function" is any function that accepts the Redux store state (or part of the state) as an argument, and returns data that is based on that state.

Selectors don't have to be written using a special library, and it doesn't matter whether you write them as arrow functions or the function keyword. For example, all of these are valid selector functions:

// Arrow function, direct lookup
const selectEntities = state => state.entities

// Function declaration, mapping over an array to derive values
function selectItemIds(state) {
  return state.items.map(item => item.id)
}

// Function declaration, encapsulating a deep lookup
function selectSomeSpecificField(state) {
  return state.some.deeply.nested.field
}

// Arrow function, deriving values from an array
const selectItemsWhoseNamesStartWith = (items, namePrefix) =>
  items.filter(item => item.name.startsWith(namePrefix))

A selector function can have any name you want. However, we recommend prefixing selector function names with the word select combined with a description of the value being selected. Typical examples of this would look like selectTodoById, selectFilteredTodos, and selectVisibleTodos.

If you've used the useSelector hook from React-Redux, you're probably already familiar with the basic idea of a selector function - the functions that we pass to useSelector must be selectors:

function TodoList() {
  // This anonymous arrow function is a selector!
  const todos = useSelector(state => state.todos)
}

Selector functions are typically defined in two different parts of a Redux application:

    In slice files, alongside the reducer logic
    In component files, either outside the component, or inline in useSelector calls

A selector function can be used anywhere you have access to the entire Redux root state value. This includes the useSelector hook, the mapState function for connect, middleware, thunks, and sagas. For example, thunks and middleware have access to the getState argument, so you can call a selector there:

function addTodosIfAllowed(todoText) {
  return (dispatch, getState) => {
    const state = getState()
    const canAddTodos = selectCanAddTodos(state)

    if (canAddTodos) {
      dispatch(todoAdded(todoText))
    }
  }
}

It's not typically possible to use selectors inside of reducers, because a slice reducer only has access to its own slice of the Redux state, and most selectors expect to be given the entire Redux root state as an argument.

Alternative Selector Libraries

While Reselect is the most widely used selector library with Redux, there are many other libraries that solve similar problems, or expand on Reselect's capabilities.
proxy-memoize

proxy-memoize is a relatively new memoized selector library that uses a unique implementation approach. It relies on ES6 Proxy objects to track attempted reads of nested values, then compares only the nested values on later calls to see if they've changed. This can provide better results than Reselect in some cases.

A good example of this is a selector that derives an array of todo descriptions:

import { createSelector } from 'reselect'

const selectTodoDescriptionsReselect = createSelector(
  [state => state.todos],
  todos => todos.map(todo => todo.text)
)

Unfortunately, this will recalculate the derived array if any other value inside of state.todos changes, such as toggling a todo.completed flag. The contents of the derived array are identical, but because the input todos array changed, it has to calculate a new output array, and that has a new reference.

The same selector with proxy-memoize might look like:

import { memoize } from 'proxy-memoize'

const selectTodoDescriptionsProxy = memoize(state =>
  state.todos.map(todo => todo.text)
)

Unlike Reselect, proxy-memoize can detect that only the todo.text fields are being accessed, and will only recalculate the rest if one of the todo.text fields changed.

It also has a built-in size option, which lets you set the desired cache size for a single selector instance.

It has some tradeoffs and differences from Reselect:

    All values are passed in as a single object argument
    It requires that the environment supports ES6 Proxy objects (no IE11)
    It's more magical, whereas Reselect is more explicit
    There are some edge cases regarding the Proxy-based tracking behavior
    It's newer and less widely used

All that said, we officially encourage considering using proxy-memoize as a viable alternative to Reselect.

re-reselect

https://github.com/toomuchdesign/re-reselect improves Reselect's caching behavior, by allowing you to define a "key selector". This is used to manage multiple instances of Reselect selectors internally, which can help simplify usage across multiple components.

import { createCachedSelector } from 're-reselect'

const getUsersByLibrary = createCachedSelector(
  // inputSelectors
  getUsers,
  getLibraryId,

  // resultFunc
  (users, libraryId) => expensiveComputation(users, libraryId)
)(
  // re-reselect keySelector (receives selectors' arguments)
  // Use "libraryName" as cacheKey
  (_state_, libraryName) => libraryName
)

reselect-tools

Sometimes it can be hard to trace how multiple Reselect selectors relate to each other, and what caused a selector to recalculate. https://github.com/skortchmark9/reselect-tools provides a way to trace selector dependencies, and its own DevTools to help visualize those relationships and check selector values.
redux-views
https://github.com/josepot/redux-views is similar to re-reselect, in that it provides a way to select unique keys for each item for consistent caching. It was designed as a near-drop-in replacement for Reselect, and actually proposed as an option for a potential Reselect version 5.

Using Selectors Effectively

While selectors are a common pattern in Redux applications, they are often misused or misunderstood. Here are some guidelines for using selector functions correctly.
Define Selectors Alongside Reducers

Selector functions are often defined in the UI layer, directly inside of useSelector calls. However, this means that there can be repetition between selectors defined in different files, and the functions are anonymous.

Like any other function, you can extract an anonymous function outside the component to give it a name:

const selectTodos = state => state.todos

function TodoList() {
  const todos = useSelector(selectTodos)
}

However, multiple parts of the application may want to use the same lookups. Also, conceptually, we may want to keep the knowledge of how the todos state is organized as an implementation detail inside the todosSlice file, so that it's all in one place.

Because of this, it's a good idea to define reusable selectors alongside their corresponding reducers. In this case, we could export selectTodos from the todosSlice file:
src/features/todos/todosSlice.js

import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload)
    }
  }
})

export const { todoAdded } = todosSlice.actions
export default todosSlice.reducer

// Export a reusable selector here
export const selectTodos = state => state.todos

That way, if we happen to make an update to the structure of the todos slice state, the relevant selectors are right here and can be updated at the same time, with minimal changes to any other parts of the app.
Balance Selector Usage

It's possible to add too many selectors to an application. Adding a separate selector function for every single field is not a good idea! That ends up turning Redux into something resembling a Java class with getter/setter functions for every field. It's not going to improve the code, and it's probably going to make the code worse - maintaining all those extra selectors is a lot of additional effort, and it will be harder to trace what values are being used where.

Similarly, don't make every single selector memoized!. Memoization is only needed if you are truly deriving results, and if the derived results would likely create new references every time. A selector function that does a direct lookup and return of a value should be a plain function, not memoized.

Some examples of when and when not to memoize:

What is a "thunk"?

The word "thunk" is a programming term that means "a piece of code that does some delayed work". Rather than execute some logic now, we can write a function body or code that can be used to perform the work later.

For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

Using thunks requires the redux-thunk middleware to be added to the Redux store as part of its configuration.

Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching. However, they can be used for a variety of tasks, and can contain both synchronous and asynchronous logic.
Writing Thunks

A thunk function is a function that accepts two arguments: the Redux store dispatch method, and the Redux store getState method. Thunk functions are not directly called by application code. Instead, they are passed to store.dispatch():
Dispatching thunk functions

const thunkFunction = (dispatch, getState) => {
  // logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction)

A thunk function may contain any arbitrary logic, sync or async, and can call dispatch or getState at any time.

In the same way that Redux code normally uses action creators to generate action objects for dispatching instead of writing action objects by hand, we normally use thunk action creators to generate the thunk functions that are dispatched. A thunk action creator is a function that may have some arguments, and returns a new thunk function. The thunk typically closes over any arguments passed to the action creator, so they can be used in the logic:
Thunk action creators and thunk functions

// fetchTodoById is the "thunk action creator"
export function fetchTodoById(todoId) {
  // fetchTodoByIdThunk is the "thunk function"
  return async function fetchTodoByIdThunk(dispatch, getState) {
    const response = await client.get(`/fakeApi/todo/${todoId}`)
    dispatch(todosLoaded(response.todos))
  }
}

Thunk functions and action creators can be written using either the function keyword or arrow functions - there's no meaningful difference here. The same fetchTodoById thunk could also be written using arrow functions, like this:
Writing thunks using arrow functions

export const fetchTodoById = todoId => async dispatch => {
  const response = await client.get(`/fakeApi/todo/${todoId}`)
  dispatch(todosLoaded(response.todos))
}

In either case, the thunk is dispatched by calling the action creator, in the same way as you'd dispatch any other Redux action:

function TodoComponent({ todoId }) {
  const dispatch = useDispatch()

  const onFetchClicked = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(fetchTodoById(todoId))
  }
}

Why Use Thunks?

Thunks allow us to write additional Redux-related logic separate from a UI layer. This logic can include side effects, such as async requests or generating random values, as well as logic that requires dispatching multiple actions or access to the Redux store state.

Redux reducers must not contain side effects, but real applications require logic that has side effects. Some of that may live inside components, but some may need to live outside the UI layer. Thunks (and other Redux middleware) give us a place to put those side effects.

It's common to have logic directly in components, such as making an async request in a click handler or a useEffect hook and then processing the results. However, it's often necessary to move as much of that logic as possible outside the UI layer. This may be done to improve testability of the logic, to keep the UI layer as thin and "presentational" as possible, or to improve code reuse and sharing.

In a sense, a thunk is a loophole where you can write any code that needs to interact with the Redux store, ahead of time, without needing to know which Redux store will be used. This keeps the logic from being bound to any specific Redux store instance and keeps it reusable.

Thunk Use Cases

Because thunks are a general-purpose tool that can contain arbitrary logic, they can be used for a wide variety of purposes. The most common use cases are:

    Moving complex logic out of components
    Making async requests or other async logic
    Writing logic that needs to dispatch multiple actions in a row or over time
    Writing logic that needs access to getState to make decisions or include other state values in an action

Thunks are "one-shot" functions, with no sense of a lifecycle. They also cannot see other dispatched actions. So, they should not generally be used for initializing persistent connections like websockets, and you can't use them to respond to other actions.

Thunks are best used for complex synchronous logic, and simple to moderate async logic such as making a standard AJAX request and dispatching actions based on the request results.

Redux Thunk Middleware

Dispatching thunk functions requires that the redux-thunk middleware has been added to the Redux store as part of its configuration.
Adding the Middleware

The Redux Toolkit configureStore API automatically adds the thunk middleware during store creation, so it should typically be available with no extra configuration needed.

If you need to add the thunk middleware to a store manually, that can be done by passing the thunk middleware to applyMiddleware() as part of the setup process.
How Does the Middleware Work?

To start, let's review how Redux middleware work in general.

Redux middleware are all written as a series of 3 nested functions:

    The outer function receives a "store API" object with {dispatch, getState}
    The middle function receives the next middleware in the chain (or the actual store.dispatch method)
    The inner function will be called with each action as it's passed through the middleware chain

It's important to note that middleware can be used to allow passing values that are not action objects into store.dispatch(), as long as the middleware intercepts those values and does not let them reach the reducers.

With that in mind, we can look at the specifics of the thunk middleware.

The actual implementation of the thunk middleware is very short - only about 10 lines. Here's the source, with additional added comments:
Redux thunk middleware implementation, annotated

// standard middleware definition, with 3 nested functions:
// 1) Accepts `{dispatch, getState}`
// 2) Accepts `next`
// 3) Accepts `action`
const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(dispatch, getState)
    }

    // Otherwise, it's a normal action - send it onwards
    return next(action)
  }

In other words:

    If you pass a function into dispatch, the thunk middleware sees that it's a function instead of an action object, intercepts it, and calls that function with (dispatch, getState) as its arguments
    If it's a normal action object (or anything else), it's forwarded to the next middleware in the chain

Thunk setup with an extra argument

import thunkMiddleware from 'redux-thunk'

const serviceApi = createServiceApi('/some/url')

const thunkMiddlewareWithArg = thunkMiddleware.withExtraArgument({ serviceApi })

Redux Toolkit's configureStore supports this as part of its middleware customization in getDefaultMiddleware:
Thunk extra argument with configureStore

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { serviceApi }
      }
    })
})

There can only be one extra argument value. If you need to pass in multiple values, pass in an object containing those.

The thunk function will then receive that extra value as its third argument:
Thunk function with extra argument

export const fetchTodoById =
  todoId => async (dispatch, getState, extraArgument) => {
    // In this example, the extra arg is an object with an API service inside
    const { serviceApi } = extraArgument
    const response = await serviceApi.getTodo(todoId)
    dispatch(todosLoaded(response.todos))
  }

Thunk Usage Patterns
Dispatching Actions

Thunks have access to the dispatch method. This can be used to dispatch actions, or even other thunks. This can be useful for dispatching multiple actions in a row (although this is a pattern that should be minimized), or orchestrating complex logic that needs to dispatch at multiple points in the process.
Example: thunks dispatching actions and thunks

// An example of a thunk dispatching other action creators,
// which may or may not be thunks themselves. No async code, just
// orchestration of higher-level synchronous logic.
function complexSynchronousThunk(someValue) {
  return (dispatch, getState) => {
    dispatch(someBasicActionCreator(someValue))
    dispatch(someThunkActionCreator())
  }
}

Accessing State

Unlike components, thunks also have access to getState. This can be called at any time to retrieve the current root Redux state value. This can be useful for running conditional logic based on the current state. It's common to use selector functions when reading state inside of thunks rather than accessing nested state fields directly, but either approach is fine.
Example: Conditional dispatching based on state

const MAX_TODOS = 5

function addTodosIfAllowed(todoText) {
  return (dispatch, getState) => {
    const state = getState()

    // Could also check `state.todos.length < MAX_TODOS`
    if (selectCanAddNewTodo(state, MAX_TODOS)) {
      dispatch(todoAdded(todoText))
    }
  }
}

It's preferable to put as much logic as possible in reducers, but it's fine for thunks to also have additional logic inside as well.

Since the state is synchronously updated as soon as the reducers process an action, you can call getState after a dispatch to get the updated state.
Example: checking state after dispatch

function checkStateAfterDispatch() {
  return (dispatch, getState) => {
    const firstState = getState()
    dispatch(firstAction())

    const secondState = getState()

    if (secondState.someField != firstState.someField) {
      dispatch(secondAction())
    }
  }
}

One other reason to consider accessing state in a thunk is to fill out an action with additional info. Sometimes a slice reducer really needs to read a value that isn't in its own slice of state. A possible workaround to that is to dispatch a thunk, extract the needed values from state, and then dispatch a plain action containing the additional info.
Example: actions containing cross-slice data

// One solution to the "cross-slice state in reducers" problem:
// read the current state in a thunk, and include all the necessary
// data in the action
function crossSliceActionThunk() {
  return (dispatch, getState) => {
    const state = getState()
    // Read both slices out of state
    const { a, b } = state

    // Include data from both slices in the action
    dispatch(actionThatNeedsMoreData(a, b))
  }
}

Async Logic and Side Effects

Thunks may contain async logic, as well as side effects such as updating localStorage. That logic may use Promise chaining such as someResponsePromise.then(), although the async/await syntax is usually preferable for readability.

When making async requests, it's standard to dispatch actions before and after a request to help track loading state. Typically, a "pending" action before the request and a loading state enum is marked as "in progress". If the request succeeds, a "fulfilled" action is dispatched with the result data, or a "rejected" action is dispatched containing the error info.

Error handling here can be trickier than most people think. If you chain resPromise.then(dispatchFulfilled).catch(dispatchRejected) together, you may end up dispatching a "rejected" action if some non-network error occurs during the process of handling the "fulfilled" action. It's better to use the second argument of .then() to ensure you only handle errors related to the request itself:
Example: async request with promise chaining

function fetchData(someValue) {
  return (dispatch, getState) => {
    dispatch(requestStarted())

    myAjaxLib.post('/someEndpoint', { data: someValue }).then(
      response => dispatch(requestSucceeded(response.data)),
      error => dispatch(requestFailed(error.message))
    )
  }
}

With async/await, this can be even trickier, because of how try/catch logic is usually organized. In order to ensure that the catch block only handles errors from the network level, it may be necessary to reorganize the logic so that the thunk returns early if there's an error, and "fulfilled" action only happens at the end:
Example: error handling with async/await

function fetchData(someValue) {
  return async (dispatch, getState) => {
    dispatch(requestStarted())

    // Have to declare the response variable outside the try block
    let response

    try {
      response = await myAjaxLib.post('/someEndpoint', { data: someValue })
    } catch (error) {
      // Ensure we only catch network errors
      dispatch(requestFailed(error.message))
      // Bail out early on failure
      return
    }

    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(requestSucceeded(response.data))
  }
}

Note that this issue isn't exclusive to Redux or thunks - it can apply even if you're only working with React component state as well, or any other logic that requires additional processing of a successful result.

This pattern is admittedly awkward to write and read. In most cases you can probably get away with a more typical try/catch pattern where the request and the dispatch(requestSucceeded()) are back-to-back. It's still worth knowing that this can be an issue.

Redux reducers must never contain "side effects". A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. Some common kinds of side effects are things like:

    Logging a value to the console
    Saving a file
    Setting an async timer
    Making an AJAX HTTP request
    Modifying some state that exists outside of a function, or mutating arguments to a function
    Generating random numbers or unique random IDs (such as Math.random() or Date.now())

AI 

Identification Tree go to medium.com and look at and study formulas


Identification trees are robust to irrelevant attributes (i.e. noise) and are fast at prediction.

Decision Tree

Go to wiki decision tree learning and study this

Occam's razor look up

MECHANICAL ENGINEERING

Pool boiling is a mode of boiling where
the fluid is stationary in the beginning
with respect to the heating surface.

Pool boiling process

Curve Stages of Boiling

O-A Free Convection Boiling
A-B-C Nucleate Boiling
C-D Transition Boiling
D-E Film Boiling (graph stuff probably not important these letters stuff)

Curve OA represents Free Convection Boiling
When we light the burner, Heat Transfer takes place between the
vessel and water due to free or natural convection.
Thus, the values of Heat Flux and delta T excess starts increasing,
and when the temperature of water reaches its saturation temperature,
i.e, when delta T excess attains +Ve value then boiling takes place.
This stage of boiling is known as free convection boiling

// go back and look at graph

Curve AB represents liquid entrainment
Due to continuous heating, the value of delta T excess increases and the bubbles
are formed at the bottom surface of the vessel. These bubbles move upwards
but they collapse after covering
some distance in the water. Rising bubbles carry some water along with them. This is 
known as liquid entrainment

Disturbance caused by liquid entrainment in the water,
increases the heat transfer coefficient, so heat flux also increases

In curve BC at delta T excess further increases, bubbles starts forming at a faster rate.
These vapor bubbles move upwards and merge to form numerous continuous columns of vapor in
the liquid. The bubbles in column then move upwards to the free surface, where they break up
and release their vapor content. Due to this the heat flux attains its maximum value
known as critical heat flux. THus, stage of boiling from A to C is known as nucleate boiling

Curve Cd, represents Transition Boiling
When the value of delta T excess increases beyond the critical point, the heat flux start decreasing.
This is because a large fraction of the heated surface of the vessel is covered with a vapor film.This vapour film acts as
an insulator as its thermal conductivity is lower than water. Thus the value of heat flux attains its minimum value. Point D corresponding
to the minimum value of heat flux is known as Leiden-Frost point.

SCALA

in eclipse can format code with ctrl shift f
Scala string interpolation

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
if else

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


You cannot do ++ or -- or +- -+ in scala


JAVA


Package java.nio
Defines buffers, which are containers for data, and provides an overview of the other NIO packages.

See: Description

    Class Summary Class 	Description
    Buffer 	
    A container for data of a specific primitive type.
    ByteBuffer 	
    A byte buffer.
    ByteOrder 	
    A typesafe enumeration for byte orders.
    CharBuffer 	
    A char buffer.
    DoubleBuffer 	
    A double buffer.
    FloatBuffer 	
    A float buffer.
    IntBuffer 	
    An int buffer.
    LongBuffer 	
    A long buffer.
    MappedByteBuffer 	
    A direct byte buffer whose content is a memory-mapped region of a file.
    ShortBuffer 	
    A short buffer.
    Exception Summary Exception 	Description
    BufferOverflowException 	
    Unchecked exception thrown when a relative put operation reaches the target buffer's limit.
    BufferUnderflowException 	
    Unchecked exception thrown when a relative get operation reaches the source buffer's limit.
    InvalidMarkException 	
    Unchecked exception thrown when an attempt is made to reset a buffer when its mark is not defined.
    ReadOnlyBufferException 	
    Unchecked exception thrown when a content-mutation method such as put or compact is invoked upon a read-only buffer.

Package java.nio Description
Defines buffers, which are containers for data, and provides an overview of the other NIO packages.

The central abstractions of the NIO APIs are:

    Buffers, which are containers for data;

    Charsets and their associated decoders and encoders,
    which translate between bytes and Unicode characters;

    Channels of various types, which represent connections
    to entities capable of performing I/O operations; and

    Selectors and selection keys, which together with
    selectable channels define a multiplexed, non-blocking
    I/O facility.

The java.nio package defines the buffer classes, which are used throughout the NIO APIs. The charset API is defined in the java.nio.charset package, and the channel and selector APIs are defined in the java.nio.channels package. Each of these subpackages has its own service-provider (SPI) subpackage, the contents of which can be used to extend the platform's default implementations or to construct alternative implementations.

    Buffers
    	

    Description
    Buffer 	Position, limit, and capacity;
    clear, flip, rewind, and mark/reset
      ByteBuffer 	Get/put, compact, views; allocate, wrap
        MappedByteBuffer   	A byte buffer mapped to a file
      CharBuffer 	Get/put, compact; allocate, wrap
      DoubleBuffer 	    ' '
      FloatBuffer 	    ' '
      IntBuffer 	    ' '
      LongBuffer 	    ' '
      ShortBuffer 	    ' '
    ByteOrder 	Typesafe enumeration for byte orders

A buffer is a container for a fixed amount of data of a specific primitive type. In addition to its content a buffer has a position, which is the index of the next element to be read or written, and a limit, which is the index of the first element that should not be read or written. The base Buffer class defines these properties as well as methods for clearing, flipping, and rewinding, for marking the current position, and for resetting the position to the previous mark.

There is a buffer class for each non-boolean primitive type. Each class defines a family of get and put methods for moving data out of and in to a buffer, methods for compacting, duplicating, and slicing a buffer, and static methods for allocating a new buffer as well as for wrapping an existing array into a buffer.

Byte buffers are distinguished in that they can be used as the sources and targets of I/O operations. They also support several features not found in the other buffer classes:

    A byte buffer can be allocated as a direct buffer, in which case the Java virtual machine will make a best effort to perform native I/O operations directly upon it.

    A byte buffer can be created by mapping a region of a file directly into memory, in which case a few additional file-related operations defined in the MappedByteBuffer class are available.

    A byte buffer provides access to its content as either a heterogeneous or homogeneous sequence of binary data of any non-boolean primitive type, in either big-endian or little-endian byte order.

Unless otherwise noted, passing a null argument to a constructor or method in any class or interface in this package will cause a NullPointerException to be thrown.

Since:
    1.4

cassette api // look into


look into javabeans spec and learn more about this

MILITARY TECHNOLOGY

Hunter 2s  look up

Manta ray UUV mold look into

Quantum radar  look into this

Tactically exploited reconnaissance   and UAV   same as above

Military exoskeletons yeah

Orca XLUUV BOEING yep stands for extra-large unmanned underwater vehicle it is powered by a diesel electric hybrid propulsion systemg giving it a range
of over 6500 nautical miles

A nautical mile is a unit of length used in air, marine, and space navigation, and for the definition of territorial waters.[2][3] Historically, it was defined as the meridian arc length corresponding to one minute (1/60 of a degree) of latitude at the equator, such that Earth's polar circumference is very near to 21,600 nautical miles (that is 60 minutes × 360 degrees). Today the international nautical mile is defined as 1,852 metres (about 6,076 ft; 1.151 mi).[4] The derived unit of speed is the knot, one nautical mile per hour.
Unit symbol
Historical definition – 1 nautical mile // look a little more into this on wikipedia

There is no single internationally agreed symbol, with several symbols in use.[1]

    NM is used by the International Civil Aviation Organization.[5][6]
    nmi is used by the Institute of Electrical and Electronics Engineers[7] and the United States Government Publishing Office.[8]
    M is used as the abbreviation for the nautical mile by the International Hydrographic Organization.[9]
    nm is a non-standard abbreviation used in many maritime applications and texts, including U.S. Government Coast Pilots and Sailing Directions.[10] It conflicts with the SI symbol for nanometre.

Adaptiv camouflage

Unmanned submarine hunter

Autonomous
multi-domain launcher (AMDL)

Hermeus darkhorse

UAS means uncrewed aerial system

The turbofan or fanjet is a type of airbreathing jet engine that is widely used in aircraft propulsion. The word "turbofan" is a combination of the preceding generation engine technology of the turbojet, and a reference to the additional fan stage added. It consists of a gas turbine engine which achieves mechanical energy from combustion,[1] and a ducted fan that uses the mechanical energy from the gas turbine to force air rearwards. Thus, whereas all the air taken in by a turbojet passes through the combustion chamber and turbines, in a turbofan some of that air bypasses these components. A turbofan thus can be thought of as a turbojet being used to drive a ducted fan, with both of these contributing to the thrust.

The ratio of the mass-flow of air bypassing the engine core to the mass-flow of air passing through the core is referred to as the bypass ratio. The engine produces thrust through a combination of these two portions working together; engines that use more jet thrust relative to fan thrust are known as low-bypass turbofans, conversely those that have considerably more fan thrust than jet thrust are known as high-bypass. Most commercial aviation jet engines in use today are of the high-bypass type,[2][3] and most modern military fighter engines are low-bypass.[4][5] Afterburners are used on low-bypass turbofan engines with bypass and core mixing before the afterburner.

Modern turbofans have either a large single-stage fan or a smaller fan with several stages. An early configuration combined a low-pressure turbine and fan in a single rear-mounted unit. 
// look into turbofans on wikipedia


Engine bypass ratios
Turbofan Bypass Ratio Evolution
Turbofan engines Model 	First 	BPR 	Thrust 	Major applications
P&W PW1000G[24] 	2008 	9.0–12.5 	67–160 kN 	A320neo, A220, E-Jets E2, Irkut MC-21
R-R Trent 1000 	2006 	10.8–11[25] 	265.3–360.4 kN 	B787
CFM LEAP[26] 	2013 	9.0–11.0 	100–146 kN 	A320neo, B737Max, Comac C919
GE GE90 	1992 	8.7–9.9[25] 	330–510 kN 	B777
R-R Trent XWB 	2010 	9.6:1[27] 	330–430 kN 	A350XWB
GE GEnx[28] 	2006 	8.0–9.3 	296-339 kN 	B747-8, B787
EA GP7000 	2004 	8.7[25] 	311–363 kN 	A380
R-R Trent 900 	2004 	8.7[25] 	340–357 kN 	A380
R-R Trent 500 	1999 	8.5[25] 	252 kN 	A340-500/600
GE TF39[29] 	1964 	8.0 		Lockheed C-5 Galaxy
CFM56 	1974 	5.0–6.6[25] 	97.9-151 kN 	A320, A340-200/300, B737, KC-135, DC-8
P&W PW4000 	1984 	4.8–6.4[25] 	222–436 kN 	A300/A310, A330, B747, B767, B777, MD-11
GE CF34 	1982 	5.3–6.3[25] 	41–82.3 kN 	Challenger 600, CRJ, E-jets
Silvercrest 	2012 	5.9[30] 	50.9 kN 	Cit. Hemisphere, Falcon 5X
R-R Trent 800 	1993 	5.7–5.79 	411–425 kN 	B777
GE Passport 	2013 	5.6[31] 	78.9–84.2 kN 	Global 7000/8000
P&WC PW800 	2012 	5.5[32] 	67.4–69.7 kN 	Gulfstream G500/G600
GE CF6 	1971 	4.3–5.3[25] 	222–298 kN 	A300/A310, A330, B747, B767, MD-11, DC-10
D-36 	1977 	5.6[25] 	63.75 kN 	Yak-42, An-72, An-74
R-R AE 3007 	1991 	5.0[25] 	33.7 kN 	ERJ, Citation X
R-R Trent 700 	1990 	4.9[25] 	320 kN 	A330
IAE V2500 	1987 	4.4–4.9[25] 	97.9-147 kN 	A320, MD-90
P&W PW6000 	2000 	4.90[25] 	100.2 kN 	Airbus A318
R-R BR700 	1994 	4.2–4.5[25] 	68.9–102.3 kN 	B717, Global Express, Gulfstream V
P&WC PW300 	1988 	3.8–4.5[25] 	23.4–35.6 kN 	Cit. Sovereign, G200, F. 7X, F. 2000
HW HTF7000 	1999 	4.4[25] 	28.9 kN 	Challenger 300, G280, Legacy 500
PS-90 	1992 	4.4[25] 	157–171 kN 	Il-76, Il-96, Tu-204
PowerJet SaM146 	2008 	4.4:1[33] 	71.6–79.2 kN 	Sukhoi Superjet 100
Williams FJ44 	1985 	3.3–4.1[25] 	6.7–15.6 kN 	CitationJet, Cit. M2
P&WC PW500 	1993 	3.90[25] 	13.3 kN 	Citation Excel, Phenom 300
HW TFE731 	1970 	2.66–3.9[25] 	15.6–22.2 kN 	Learjet 70/75, G150, Falcon 900
R-R Tay 	1984 	3.1–3.2[25] 	61.6–68.5 kN 	Gulfstream IV, Fokker 70/100
GE-H HF120 	2009 	2.9[34] 	7.4 kN 	HondaJet
P&WC PW600 	2001 	1.83–2.80[25] 	6.0 kN 	Cit. Mustang, Eclipse 500, Phenom 100
GE F101[35] 	1973 	2.1 		B-1
GE CF700[36] 	1964 	2.0 		Falcon 20, Sabreliner 75A,
P&W JT8D-200[37] 	1979 	1.74 		MD-80, 727 Super 27
P&W JT3D[38] 	1958 	1.42 		707-130B, 707-320B, DC-8-50, DC-8-60
P&W JT8D[39] 	1960 	0.96 		DC-9, 727, 737 Original
GE F110-100/400[40] 	1980-1984 	0.87 		F-16 (-100), F-14B/D (-400)
R-R Turbomeca Adour[41] 	1968 	0.75-0.80 		T-45, Hawk, Jaguar
GE F110-129[40] 	Mid-1980s 	0.76 		F-16, F-15EX
P&W F100-220[42] 	1986 	0.71 		F-15, F-16
GE F110-132[40] 	2003-2005 	0.68 		F-16 Blk.60
R-R Spey[43] 	1964 	0.64 		Trident, 1-11, Gulfstream II/III, Fokker F28
P&W F135[44] 	2006 	0.57 		F-35
Saturn AL-31[45] 		0.56 		Su-27, Su-30, J-10
Honeywell/ITEC F124[46] 	1979 	0.49 		L-159, M-346
Eurojet EJ200[47] 	1991 	0.40 		Typhoon
P&W F100-229[42] 	1989 	0.36 		F-16, F-15
GE F404[48] 	1978 	0.34 		F/A-18, T-50, F-117
R-R Conway[49] 	1952 	0.30 		707-420, DC-8-40, VC-10, Victor
GE F414[50] 	1993 	0.25 		F/A-18E/F
Turbojets 		0.0 		early jet aircraft, Concorde
References

"Bypass ratio | engineering".
Ilan Kroo and Juan Alonso. "Aircraft Design: Synthesis and Analysis, Propulsion Systems: Basic Concepts Archive" Stanford University School of Engineering, Department of Aeronautics and Astronautics. Quote: "When the bypass ratio is increased to 10-20 for very efficient low speed performance, the weight and wetted area of the fan shroud (inlet) become large, and at some point it makes sense to eliminate it altogether. The fan then becomes a propeller and the engine is called a turboprop. Turboprop engines provide efficient power from low speeds up to as high as M=0.8 with bypass ratios of 50-100."
Prof. Z. S. Spakovszky. "11.5 Trends in thermal and propulsive efficiency Archive" MIT turbines, 2002. Thermodynamics and Propulsion
Nag, P.K. "Basic And Applied Thermodynamics[permanent dead link]" p550. Published by Tata McGraw-Hill Education. Quote: "If the cowl is removed from the fan the result is a turboprop engine. Turbofan and turboprop engines differ mainly in their bypass ratio 5 or 6 for turbofans and as high as 100 for turboprop."
Animated Engines
"Archived copy" (PDF). Archived from the original (PDF) on 2017-05-16. Retrieved 2016-12-25.
Gas Turbine Aerodynamics, Sir Frank Whittle, Pergamon Press 1981, p.217
Aircraft Engine Design Second Edition, Mattingley, Heiser, Pratt, AIAA Education Series, ISBN 1-56347-538-3, p.539
"1964 - 2596". Archived from the original on 2016-12-24. Retrieved 2016-12-24.
Jane's All The World's Aircraft 1975-1976, edited by John W.R. Taylor, Jane's Yearbooks, Paulton House, 8 Sheperdess Walk, London N1 7LW, p.748
Zipkin, M. A. (1984). "The PW1120: A High Performance, Low Risk F100 Derivative". Volume 2: Aircraft Engine; Marine; Microturbines and Small Turbomachinery. doi:10.1115/84-GT-230. ISBN 978-0-7918-7947-4.
"Never Told Tales of Pratt & Whitney by Dr. Bob Abernethy".
"The turbofan engine Archived 2015-04-18 at the Wayback Machine", page 7. SRM Institute of Science and Technology, Department of aerospace engineering
Gas Turbine Theory Second Edition, Cohen, Rogers and Saravanamuttoo, Longmans Group Limited 1972, ISBN 0 582 44927 8, p.85
Aero Engine Development for the Future, H.W. Bennett, Proc Instn Mech Engrs Vol 197A, Power Industries Division, July 1983, Fig.5
Paul Bevilaqua : The shaft driven Lift Fan propulsion system for the Joint Strike Fighter Archived 2011-06-05 at the Wayback Machine page 3. Presented May 1, 1997. DTIC.MIL Word document, 5.5 MB. Accessed: 25 February 2012.
Bensen, Igor. "How they fly - Bensen explains all Archived 2015-01-09 at the Wayback Machine" Gyrocopters UK. Accessed: 10 April 2014.
Johnson, Wayne. Helicopter theory pp3+32, Courier Dover Publications, 1980. Accessed: 25 February 2012. ISBN 0-486-68230-7
Wieslaw Zenon Stepniewski, C. N. Keys. Rotary-wing aerodynamics p3, Courier Dover Publications, 1979. Accessed: 25 February 2012. ISBN 0-486-64647-5
Philip Walsh, Paul Fletcher. "Gas Turbine Performance", page 36. John Wiley & Sons, 15 April 2008. Quote: "It has better fuel consumption than a turbojet or turbofan, due to a high propulsive efficiency.., achieving thrust by a high mass flow of air from the propeller at low jet velocity. Above 0.6 Mach number the turboprop in turn becomes uncompetitive, due mainly to higher weight and frontal area."
"Rolls-Royce Aero Engines" Bill Gunston, Patrick Stevens Limited, ISBN 1-85260-037-3, p.147
"Propeller thrust Archived 2021-03-19 at the Wayback Machine" Glenn Research Center (NASA)
"Turboprop Engine Archived 2009-05-31 at the Wayback Machine" Glenn Research Center (NASA)
"PW1000G". MTU. Archived from the original on 2018-08-18. Retrieved 2020-11-06.
Jane's All the World's Aircraft. 2005. pp. 850–853. ISSN 0075-3017.
"The Leap Engine". CFM International.
"Trent-XWB infographic" (PDF). Rolls-Royce. May 2017.
"GEnx". GE.
"50 years ago: GE roars back into the airline industry". General Electric.
"Silvercrest 2D for the Dassault Aviation Falcon 5X". Safran Aircraft Engines.
"type certificate data sheet E00091EN, revision 0" (PDF). FAA. 29 April 2016. Archived from the original (PDF) on 15 November 2016. Retrieved 23 May 2023.
Fred George (Nov 1, 2014). "Gulfstream Unveils G500 and G600". Business & Commercial Aviation. Aviation Week.
"SaM146 | PowerJet". www.powerjet.aero. Archived from the original on 2014-11-08. Retrieved 2023-05-23.
"HF120 Turbofan Engine". Honda Worldwide. Retrieved September 29, 2017.
"General Electric F101". global security.
"General Electric CF700-2D-2". aircraft-database.
"Pratt & Whitney JT8D-200". MTU Aero Engines.
"Pratt & Whitney JT3D-3B". aircraft-database.
"Pratt & Whitney JT8D / Volvo RM8". all-aero.
"General Electric F110". MTU Aero Engines.
"Adour Uninstalled Engine Test Facility". thermofluids.co.
"Pratt & Whitney F100". Purdue University.
"Rolls-Royce Spey". all-aero.
"Pratt & Whitney F135". worldwide-military.
"Saturn AL-31". United Engine Corporation.
"Honeywell F124". militaryleak.
"Eurojet EJ200". MTU Aero Engines.
"General Electric F404". Purdue University.
"Rolls-Royce Conway". Shannon Aviation Museum.

    "General Electric F414". MTU Aero Engines.

    vte

Jet engines and aircraft gas turbines
Categories:

    Engineering ratiosJet engines

    This page was last edited on 3 November 2023, at 02:5

    /// go to wikipedia bypass ratio page and look into other stuff

    JSP

     //<div>
       // <h1>{name}</h1>
        //<button onClick={changeState}>Update</button>
   // </div>

 const [list, setList] = useState([]);
  const [input, setInput] = useState("");


 const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }

    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  }


        <button className='btn' onClick={() => addTodo(input)}>Add</button> 
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <ul className='move'>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button className='delete' onClick={() => deleteTodo(todo.id)}>X</button>
            </li> // &times;   // <Tasks /> below <Header /> // <Temp1 />
          ))}
        </ul>


.delete {
  display: flex;
  margin-left: 70px;
  position: fixed;
  top: 10.5rem;
}

.move {
 margin-left: 10px;
  
}












*/

