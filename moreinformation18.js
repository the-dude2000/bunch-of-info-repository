/*

CERTIFIED NETWORK DEFENDER

The purpose of the CND credential is to:

Validate the skills that will help the Network Administrators foster resilency and continuity
of operations during attacks

About the exam:

- Number of questions: 100
Test duration: 4 hours
Test format: Multiple choice
- Test delivery: ECC EXAM
- Exam Prefix:312-38 (ECC EXAM)

Comptia Security+ do this certification

google IT support certificate

do these 2 together to get discount


Cisco certified

CCNA Routing and switching do it

Offensive OSCP do this one

ISACA do it

CISSP do it

CCSK

CCSP

Azure security engineer microsoft certified

REDUX

Middleware and Side Effects

Redux middleware were designed to enable writing logic that has side effects.

A Redux middleware can do anything when it sees a dispatched action: log something, modify the action, delay the action, make an async call, and more. Also, since middleware form a pipeline around the real store.dispatch function, this also means that we could actually pass something that isn't a plain action object to dispatch, as long as a middleware intercepts that value and doesn't let it reach the reducers.

Middleware also have access to dispatch and getState. That means you could write some async logic in a middleware, and still have the ability to interact with the Redux store by dispatching actions.

Because of this, Redux side effects and async logic are normally implemented through middleware.
Side Effects Use Cases

In practice, the single most common use case for side effects in a typical Redux app is fetching and caching data from the server.

Another use case more specific to Redux is writing logic that responds to a dispatched action or state change by executing additional logic, such as dispatching more actions.
Recommendations

We recommend using the tools that best fit each use case (see below for the reasons for our recommendations, as well as further details on each tool):
tip
Data Fetching

    Use RTK Query as the default approach for data fetching and caching
    If RTKQ doesn't fully fit for some reason, use createAsyncThunk
    Only fall back to handwritten thunks if nothing else works
    Don't use sagas or observables for data fetching!

Reacting to Actions / State Changes, Async Workflows

    Use RTK listeners as the default for responding to store updates and writing long-running async workflows
    Only use sagas / observables if listeners don't solve your use case well enough

Logic with State Access

    Use thunks for complex sync and moderate async logic, including access to getState and dispatching multiple actions

Thunks

The Redux "thunk" middleware has traditionally been the most widely used middleware for writing async logic.

Thunks work by passing a function into dispatch. The thunk middleware intercepts the function, calls it, and passes in theThunkFunction(dispatch, getState). The thunk function can now do any sync/async logic and interact with the store.
Thunk Use Cases

Thunks are best used for complex sync logic that needs access to dispatch and getState, or moderate async logic such as one-shot "fetch some async data and dispatch an action with the result" requests.

We have traditionally recommended thunks as the default approach, and Redux Toolkit specifically includes the createAsyncThunk API for the "request and dispatch" use case. For other use cases, you can write your own thunk functions.
Thunk Tradeoffs

    👍: Just write functions; may contain any logic
    👎: Can't respond to dispatched actions; imperative; can't be cancelled

Thunk Examples

const thunkMiddleware =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }

// Original "hand-written" thunk fetch request pattern
const fetchUserById = userId => {
  return async (dispatch, getState) => {
    // Dispatch "pending" action to help track loading state
    dispatch(fetchUserStarted())
    // Need to pull this out to have correct error handling
    let lastAction
    try {
      const user = await userApi.getUserById(userId)
      // Dispatch "fulfilled" action on success
      lastAction = fetchUserSucceeded(user)
    } catch (err) {
      // Dispatch "rejected" action on failure
      lastAction = fetchUserFailed(err.message)
    }
    dispatch(lastAction)
  }
}

// Similar request with `createAsyncThunk`
const fetchUserById2 = createAsyncThunk('fetchUserById', async userId => {
  const user = await userApi.getUserById(userId)
  return user
})

Common Side Effects Approaches

The lowest-level technique for managing side effects with Redux is to write your own custom middleware that listens for specific actions and runs logic. However, that's rarely used. Instead, most apps have historically used one of the common pre-built Redux side effects middleware available in the ecosystem: thunks, sagas, or observables. Each of these has its own different use cases and tradeoffs.

More recently, our official Redux Toolkit package has added two new APIs for managing side effects: the "listener" middleware for writing reactive logic, and RTK Query for fetching and caching server state.

AJAX = Asynchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

    A browser built-in XMLHttpRequest object (to request data from a web server)
    JavaScript and HTML DOM (to display or use the data)

AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

Ajax should be used anywhere in a web application where small amounts of information could be saved or retrieved from the server without posting back the entire pages. A good example of this is data validation on save actions.

Sagas

The Redux-Saga middleware has traditionally been the second most common tool for side effects, after thunks. It's inspired by the backend "saga" pattern, where long-running workflows can respond to events triggered throughout the system.

Conceptually, you can think of sagas as "background threads" inside the Redux app, which have the ability to listen to dispatched actions and run additional logic.

Sagas are written using generator functions. Saga functions return descriptions of side effects and pause themselves, and the saga middleware is responsible for executing the side effect and resuming the saga function with the result. The redux-saga library includes a variety of effects definitions such as:

    call: executes an async function and returns the result when the promise resolves:
    put: dispatches a Redux action
    fork: spawns a "child saga", like an additional thread that can do more work
    takeLatest: listens for a given Redux action, triggers a saga function to execute, and cancels previous running copies of the saga if it's dispatched again

Saga Use Cases

Sagas are extremely powerful, and are best used for highly complex async workflows that require "background thread"-type behavior or debouncing/cancelling.

Saga users have often pointed to the fact that saga functions only return descriptions of the desired effects as a major positive that makes them more testable.
Saga Tradeoffs

    👍: Sagas are testable because they only return descriptions of effects; powerful effects model; pause/cancel capabilities
    👎: generator functions are complex; unique saga effects API; saga tests often only test implementation results and need to be rewritten every time the saga is touched, making them a lot less valuable; do not work well with TypeScript;

Saga Examples

import { call, put, takeEvery } from 'redux-saga/effects'

// "Worker" saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  yield put(fetchUserStarted())
  try {
    const user = yield call(userApi.getUserById, action.payload.userId)
    yield put(fetchUserSucceeded(user))
  } catch (err) {
    yield put(fetchUserFailed(err.message))
  }
}

// "Watcher" saga: starts fetchUser on each `USER_FETCH_REQUESTED` action
function* fetchUserWatcher() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

// Can use also use sagas for complex async workflows with "child tasks":
function* fetchAll() {
  const task1 = yield fork(fetchResource, 'users')
  const task2 = yield fork(fetchResource, 'comments')
  yield delay(1000)
}

function* fetchResource(resource) {
  const { data } = yield call(api.fetch, resource)
  yield put(receiveData(data))
}

Observables

The Redux-Observable middleware lets you use RxJS observables to create processing pipelines called "epics".

Since RxJS is a framework-agnostic library, observable users point to the fact that you can reuse knowledge of how to use it across different platforms as a major selling point. In addition, RxJS lets you construct declarative pipelines that handle timing cases like cancellation or debouncing.
Observable Use Cases

Similar to sagas, observables are powerful and best used for highly complex async workflows that require "background thread"-type behavior or debouncing/cancelling.
Observable Tradeoffs

    👍: Observables are a highly powerful data flow model; RxJS knowledge can be used separate from Redux; declarative syntax
    👎: RxJS API is complex; mental model; can be hard to debug; bundle size

Observable Examples

// Typical AJAX example:
const fetchUserEpic = action$ =>
  action$.pipe(
    filter(fetchUser.match),
    mergeMap(action =>
      ajax
        .getJSON(`https://api.github.com/users/${action.payload}`)
        .pipe(map(response => fetchUserFulfilled(response)))
    )
  )

// Can write highly complex async pipelines, including delays,
// cancellation, debouncing, and error handling:
const fetchReposEpic = action$ =>
  action$.pipe(
    filter(fetchReposInput.match),
    debounceTime(300),
    switchMap(action =>
      of(fetchReposStart()).pipe(
        concat(
          searchRepos(action.payload).pipe(
            map(payload => fetchReposSuccess(payload.items)),
            catchError(error => of(fetchReposError(error)))
          )
        )
      )
    )
  )

Listeners

Redux Toolkit includes the createListenerMiddleware API to handle "reactive" logic. It's specifically intended to be a lighter-weight alternative to sagas and observables that handles 90% of the same use cases, with a smaller bundle size, simpler API, and better TypeScript support.

Conceptually, this is similar to React's useEffect hook, but for Redux store updates.

The listener middleware lets you add entries that match against actions to determine when to run the effect callback. Similar to thunks, an effect callback can be sync or async, and have access to dispatch and getState. They also receive a listenerApi object with several primitives for building async workflows, such as:

    condition(): pauses until a certain action is dispatched or state change occurs
    cancelActiveListeners(): cancel existing in-progress instances of the effect
    fork(): creates a "child task" that can do additional work

These primitives allow listeners to replicate almost all of the effects behaviors from Redux-Saga.
Listener Use Cases

Listeners can be used for a wide variety of tasks, such as lightweight store persistence, triggering additional logic when an action is dispatched, watching for state changes, and complex long-running "background thread"-style async workflows.

In addition, listener entries can be added and removed dynamically at runtime by dispatching special add/removeListener actions. This integrates nicely with React's useEffect hook, and can be used for adding additional behavior that corresponds to a component's lifetime.
Listener Tradeoffs

    👍: Built into Redux Toolkit; async/await is more familiar syntax; similar to thunks; lightweight concepts and size; works great with TypeScript
    👎: Relatively new and not as "battle-tested" yet; not quite as flexible as sagas/observables

Listener Examples

// Create the middleware instance and methods
const listenerMiddleware = createListenerMiddleware()

// Add one or more listener entries that look for specific actions.
// They may contain any sync or async logic, similar to thunks.
listenerMiddleware.startListening({
  actionCreator: todoAdded,
  effect: async (action, listenerApi) => {
    // Run whatever additional side-effect-y logic you want here
    console.log('Todo added: ', action.payload.text)

    // Can cancel other running instances
    listenerApi.cancelActiveListeners()

    // Run async logic
    const data = await fetchData()

    // Use the listener API methods to dispatch, get state,
    // unsubscribe the listener, start child tasks, and more
    listenerApi.dispatch(todoAdded('Buy pet food'))
  }
})

listenerMiddleware.startListening({
  // Can match against actions _or_ state changes/contents
  predicate: (action, currentState, previousState) => {
    return currentState.counter.value !== previousState.counter.value
  },
  // Listeners can have long-running async workflows
  effect: async (action, listenerApi) => {
    // Pause until action dispatched or state changed
    if (await listenerApi.condition(matchSomeAction)) {
      // Spawn "child tasks" that can do more work and return results
      const task = listenerApi.fork(async forkApi => {
        // Can pause execution
        await forkApi.delay(5)
        // Complete the child by returning a value
        return 42
      })

      // Unwrap the child result in the listener
      const result = await task.result
      if (result.status === 'ok') {
        console.log('Child succeeded: ', result.value)
      }
    }
  }
})

Websockets

Many apps use websockets or some other form of persistent connection, primarily to receive streaming updates from the server.

We generally recommend that most websocket usage in a Redux app should live inside a custom middleware, for several reasons:

    Middleware exist for the lifetime of the application
    Like with the store itself, you probably only need a single instance of a given connection that the whole app can use
    Middleware can see all dispatched actions and dispatch actions themselves. This means a middleware can take dispatched actions and turn those into messages sent over the websocket, and dispatch new actions when a message is received over the websocket.
    A websocket connection instance isn't serializable, so it doesn't belong in the store state itself

Depending on the needs of the application, you could create the socket as part of the middleware init process, create the socket on demand in the middleware by dispatching an initialization action, or create it in a separate module file so it can be accessed elsewhere.

Websockets can also be used in an RTK Query lifecycle callback, where they could respond to messages by applying updates to the RTKQ cache.
XState

State machines can be very useful for defining possible known states for a system and the possible transitions between each state, as well as triggering side effects when a transition occurs.

Redux reducers can be written as true Finite State Machines, but RTK doesn't include anything to help with this. In practice, they tend to be partial state machines that really only care about the dispatched action to determine how to update the state. Listeners, sagas, and observables can be used for the "run side effects after dispatch" aspect, but can sometimes require more work to ensure a side effect only runs at a specific time.

XState is a powerful library for defining true state machines and executing them, including managing state transitions based on events and triggering related side effects. It also has related tools for creating state machine definitions via a graphical editor, which can then be loaded into the XState logic for execution.

While there currently is no official integration between XState and Redux, it is possible to use an XState machine as a Redux reducer, and the XState developers have created a useful POC demonstrating using XState as a Redux side effects middleware:

    https://github.com/mattpocock/redux-xstate-poc

Middleware in Redux can be mainly used to either

    create side effects for actions,
    modify or cancel actions, or to
    modify the input accepted by dispatch.

Most use cases fall into the first category: For example Redux-Saga, redux-observable, and RTK listener middleware all create side effects that react to actions. These examples also show that this is a very common need: To be able to react to an action other than with a state change.

Modifying actions can be used to e.g. enhance an action with information from the state or from an external input, or to throttle, debounce or gate them.

The most obvious example for modifying the input of dispatch is Redux Thunk, which transforms a function returning an action into an action by calling it.
When to use custom middleware

Most of the time, you won't actually need custom middleware. The most likely use case for middleware is side effects, and there is plenty of packages who nicely package side effects for Redux and have been in use long enough to get rid of the subtle problems you would run into when building this yourself. A good starting point is RTK Query for managing server-side state and RTK listener middleware for other side effects.

You might still want to use custom middleware in one of two cases:

    If you only have a single, very simple side effect, it might not be worth it to add a full additional framework. Just make sure that you switch to an existing framework once your application grows instead of growing your own custom solution.
    If you need to modify or cancel actions.

Standard patterns for middleware
Create side effects for actions

This is the most common middleware. Here's what it looks like for rtk listener middleware:

const middleware: ListenerMiddleware<S, D, ExtraArgument> =
  api => next => action => {
    if (addListener.match(action)) {
      return startListening(action.payload)
    }

    if (clearAllListeners.match(action)) {
      clearListenerMiddleware()
      return
    }

    if (removeListener.match(action)) {
      return stopListening(action.payload)
    }

    // Need to get this state _before_ the reducer processes the action
    let originalState: S | typeof INTERNAL_NIL_TOKEN = api.getState()

    // `getOriginalState` can only be called synchronously.
    // @see https://github.com/reduxjs/redux-toolkit/discussions/1648#discussioncomment-1932820
    const getOriginalState = (): S => {
      if (originalState === INTERNAL_NIL_TOKEN) {
        throw new Error(
          `${alm}: getOriginalState can only be called synchronously`
        )
      }

      return originalState as S
    }

    let result: unknown

    try {
      // Actually forward the action to the reducer before we handle listeners
      result = next(action)

      if (listenerMap.size > 0) {
        let currentState = api.getState()
        // Work around ESBuild+TS transpilation issue
        const listenerEntries = Array.from(listenerMap.values())
        for (let entry of listenerEntries) {
          let runListener = false

          try {
            runListener = entry.predicate(action, currentState, originalState)
          } catch (predicateError) {
            runListener = false

            safelyNotifyError(onError, predicateError, {
              raisedBy: 'predicate'
            })
          }

          if (!runListener) {
            continue
          }

          notifyListener(entry, action, api, getOriginalState)
        }
      }
    } finally {
      // Remove `originalState` store from this scope.
      originalState = INTERNAL_NIL_TOKEN
    }

    return result
  }

In the first part, it listens to addListener, clearAllListeners and removeListener actions to change which listeners should be invoked later on.

In the second part, the code mainly calculates the state after passing the action through the other middlewares and the reducer, and then passes both the original state as well as the new state coming from the reducer to the listeners.

It is common to have side effects after dispatching th eaction, because this allows taking into account both the original and the new state, and because the interaction coming from the side effects shouldn't influence the current action execution anyways (otherwise, it wouldn't be a side effect).
Modify or cancel actions, or modify the input accepted by dispatch

While these patterns are less common, most of them (except for cancelling actions) are used by redux thunk middleware:

const middleware: ThunkMiddleware<State, BasicAction, ExtraThunkArg> =
  ({ dispatch, getState }) =>
  next =>
  action => {
    // The thunk middleware looks for any functions that were passed to `store.dispatch`.
    // If this "action" is really a function, call it and return the result.
    if (typeof action === 'function') {
      // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
      return action(dispatch, getState, extraArgument)
    }

    // Otherwise, pass the action down the middleware chain as usual
    return next(action)
  }

Usually, dispatch can only handle JSON actions. This middleware adds the ability to also handle actions in the form of functions. It also changes the return type of the dispatch function itself by passing the return value of the function-action to be the return value of the dispatch function.
Rules to make compatible middleware

In principle, middleware is a very powerful pattern and can do whatever it wants with an action. Existing middleware might have assumptions about what happens in the middleware around it, though, and being aware of these assumptions will make it easier to ensure that your middleware works well with existing commonly used middleware.

There are two contact points between our middleware and the other middlewares:
Calling the next middleware

When you call next, the middleware will expect some form of action. Unless you want to explicitly modify it, just pass through the action that you received.

More subtly, some middlewares expect that the middleware is called on the same tick as dispatch is called, so next should be called synchronously by your middleware.
Returning the dispatch return value

Unless the middleware needs to explicitly modify the return value of dispatch, just return what you get from next. If you do need to modify the return value, then your middleware will need to sit in a very specific spot in the middleware chain to be able to do what it is supposed to - you will need to check compatibility with all other middlewares manually and decide how they could work together.

This has a tricky consequence:

const middleware: Middleware = api => next => async action => {
  const response = next(action)

  // Do something after the action hits the reducer
  const afterState = api.getState()
  if (action.type === 'some/action') {
    const data = await fetchData()
    api.dispatch(dataFetchedAction(data))
  }

  return response
}

Even though it looks like we didn't modify the response, we actually did: Due to async-await, it is now a promise. This will break some middlewares like the one from RTK Query.

So, how can we write this middleware instead?

const middleware: Middleware = api => next => action => {
  const response = next(action)

  // Do something after the action hits the reducer
  const afterState = api.getState()
  if (action.type === 'some/action') {
    void loadData(api)
  }

  return response
}

async function loadData(api) {
  const data = await fetchData()
  api.dispatch(dataFetchedAction(data))
}

Just move out the async logic into a separate function so that you can still use async-await, but don't actually wait for the promise to resolve in the middleware. void indicates to others reading the code that you decided to not await the promise explicitly without having an effect on the code.

Meet Redux Undo, a library that provides simple Undo and Redo functionality for any part of your Redux tree.

npm install redux-undo

This installs the package that provides the undoable reducer enhancer.

Wrapping the Reducer

You will need to wrap the reducer you wish to enhance with undoable function. For example, if you exported a todos reducer from a dedicated file, you will want to change it to export the result of calling undoable() with the reducer you wrote:
reducers/todos.js

import undoable from 'redux-undo'


const todos = (state = [], action) => {
    
  }
  
  const undoableTodos = undoable(todos)
  
  export default undoableTodos
  
  There are many other options to configure your undoable reducer, like setting the action type for Undo and Redo actions.
  
  Note that your combineReducers() call will stay exactly as it was, but the todos reducer will now refer to the reducer enhanced with Redux Undo:
  reducers/index.js
  
  import { combineReducers } from 'redux'
  import todos from './todos'
  import visibilityFilter from './visibilityFilter'
  
  const todoApp = combineReducers({
    todos,
    visibilityFilter
  })
  
  export default todoApp
  
  You may wrap one or more reducers in undoable at any level of the reducer composition hierarchy. We choose to wrap todos instead of the top-level combined reducer so that changes to visibilityFilter are not reflected in the undo history.
  Updating the Selectors
  
  Now the todos part of the state looks like this:
  
  {
    visibilityFilter: 'SHOW_ALL',
    todos: {
      past: [
        [],
        [{ text: 'Use Redux' }],
        [{ text: 'Use Redux', complete: true }]
      ],
      present: [
        { text: 'Use Redux', complete: true },
        { text: 'Implement Undo' }
      ],
      future: [
        [
          { text: 'Use Redux', complete: true },
          { text: 'Implement Undo', complete: true }
        ]
      ]
    }
  }
  
  This means you need to access your state with state.todos.present instead of just state.todos:
  containers/VisibleTodoList.js
  
  const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
    }
  }
  
  Adding the Buttons
  
  Now all you need to do is add the buttons for the Undo and Redo actions.
  
  First, create a new container component called UndoRedo for these buttons. We won't bother to split the presentational part into a separate file because it is very small:
  containers/UndoRedo.js
  
  import React from 'react'
  
  
  
  let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
      <button onClick={onUndo} disabled={!canUndo}>
        Undo
      </button>
      <button onClick={onRedo} disabled={!canRedo}>
        Redo
      </button>
    </p>
  )
  
  You will use connect() from React Redux to generate a container component. To determine whether to enable Undo and Redo buttons, you can check state.todos.past.length and state.todos.future.length. You won't need to write action creators for performing undo and redo because Redux Undo already provides them:
  containers/UndoRedo.js

  
  import { ActionCreators as UndoActionCreators } from 'redux-undo'
  import { connect } from 'react-redux'

  
  const mapStateToProps = state => {
    return {
      canUndo: state.todos.past.length > 0,
      canRedo: state.todos.future.length > 0
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onUndo: () => dispatch(UndoActionCreators.undo()),
      onRedo: () => dispatch(UndoActionCreators.redo())
    }
  }
  
  UndoRedo = connect(mapStateToProps, mapDispatchToProps)(UndoRedo)
  
  export default UndoRedo
  
  Now you can add UndoRedo component to the App component:
  components/App.js
  
  import React from 'react'
  import Footer from './Footer'
  import AddTodo from '../containers/AddTodo'
  import VisibleTodoList from '../containers/VisibleTodoList'
  import UndoRedo from '../containers/UndoRedo'
  
  const App = () => (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
      <UndoRedo />
    </div>
  )
  
  export default App
  
  This is it! Run npm install and npm start in the example folder and try it out!

Three Principles

Redux can be described in three fundamental principles:
Single source of truth

The global state of your application is stored in an object tree within a single store.

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

console.log(store.getState())

/* Prints
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}


State is read-only

The only way to change the state is to emit an action, an object describing what happened.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

store.dispatch({
  type: 'COMPLETE_TODO',
  index: 1
})

store.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
})

Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'COMPLETE_TODO':
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return state
  }
}

import { combineReducers, createStore } from 'redux'
const reducer = combineReducers({ visibilityFilter, todos })
const store = createStore(reducer)

That's it! Now you know what Redux is all about.

API

What is Rest API?

REST stands for representational state transfer. It is a set of functions helping
developers in performing requests and receive responses. Interaction is made
through HTTP Protocol in REST API.

What exactly needs to verify in API testing?

In API testing, we send a request to API with the known data and then
analyze the response.

1. We will verify the accuracy of the data.
2. Will see the HTTP status code
3. We will see the response time.
4. Error codes in case API returns any errors
5. Authorization would be check
6. Non-functional testing such as performance testing, security testing

What are path parameters and query parameters for below API
request URL

What are the core components of an HTTP request?

1. HTTP request methods like: PUT,POST,DELETE.
2. Base uniform resource identifier(URI)
3. Resources and parameters
4. Request header, which carries metadata(as key-value pairs) for the HTTP Request message.
5. Request body, which indicates the message content or resource representation

WHat could be the HTTP method for below API scenario? Answer if
it is GET or POST

An API which has endpoint, parameters, headers,cookies and payload
POST

What are the differences between API testing and UI testing?

UI(User interface) testing means the testing of the graphical user interface.
The focus of UI testing is on the look and feel of the application. In user interface testing the main
focus is on how users can interact with app elements such as images, fonts, layout etc. are checked

API testing allows the communication between 2 software systems. API testing works on
backend also known as backend testing

What protocol is used by the RESTFUL Web Services

RESTFUL WEB Services uses the HTTP protocol. They use the HTTP protocol as a medium of communication
between the client and the server

What are Soap Webservices?

SOAP stands for Simple Object Access Protocol It is an XML based messaging protocol. It helps
in exchanging information among computers

BIG PROJECT

yarn add jsonwebtoken 

npm add jsonwebtoken

npm i --save-dev @types/jsonwebtoken

yarn add cookie-parser

npm add cookie-parser

npm i --save-dev @types/cookie-parser



*/