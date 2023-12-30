/*

FIGMA

Can go to right when in frame and select different size like iphone pro 14 etc. Different
menus

To add image to circle rectangle,etc, right click on it and go to plugins
and click unsplash and select an image.

To make lines around circles and maybe other things like rectangles 

click on it and then go to stroke add it and i'll see three lines section
add it up to increase the boldness of outer lines.

Be careful with fill and stroke can mess up colors if not careful

Decrease opacity maybe to allows other circle pictures to take in bold lines in
other circles

Gradient in fill menu on right

Can change gradient with 2 squares can has a line to manipulate where the gradient goes
increasing opacity and stuff can help

Color can change by moving white dot and bar on bottom to reallu make it appear

To find variant go to assets on top left next to layers

Press t for text (shortcut) and go to menu on right to change font style and other things

Right click on parts to find an add auto layout part(Do this for multiple things
    to keep it organized)

Design system is a set of components to help build your entire interface

Can use assets instead of option(which copies things) to get the same thing can drag it
into project

Keep in mind 8 when designing distance between things

For components, sub components will take the same or different you give to one for ex:
1 changes they all change 1.3 on one 1.3 on the others when it comes to stroke

Components are really sueful for working on multiple things at the same time keep in mind!

Can press on width or height on right menu and press the up arrow or down to change width
or height like that 1 piece at a time

Cant change sizing in sub components can change pictures though

To change the size of the frame without affecting its contents, press and hold the Command key ( Ctrl on Windows) when dragging with your mouse. Ignoring constraints is not possible when changing the width or height via the Design panel. 
To precisely set the size of a frame, you can use the Set Layer Size plugin.

Shift a on mac to add an auto layout as well make sure to make things blue if multiple
auto layout by holding down mouse or pad and putting the blue over mulitple things

Press on a thing and press command d to duplicate that thing on mac

If things are not seen on your screen might hacve something to do with clip conent
uncheck and check this to see and unsee certain things

When you have content that is overflowing, the frame that the content is in needs to be
smaller than the content that is in it

For instance, to help with scrolling drag the lining to the edge of a frame away from overflowing
content helps make scrolling work which to do so click on content go to right menu
on top right a prototype section and from there you can choose what kind of scrolling
you want like vertical,horizontal, both directions,etc.

R for rectangle, o for circle

Be careful with constraint with width and height may may 410.63 and 393 shen you wanted
to have 393 by 393

When working with images should do them outside of the frame to makes things easier

Be careful with images may be bigger when uploading from unsplash than what you want
Make sure you select the component you want to have an image so its stays
within that size range

Can change name of thing by double clicking on it 
can do in menu or on element

When clip content is activated, can increase range of blue lines(or other types
    of lines maybe) to see hidden images

Hug contents This basically means that the container frame will adapt its size to its contents. This is something that can be applied to both width and height, 
and it's a bit what we have seen so far in the other examples.

Components keep you from having to make mutliple same things at once.

Can delete image by getting rid of fill

can delete things in the right menu by selecting them and pressing delete

Detach instance to undo component

can add functionality ////// once you make component go to add variant on top and customize it around on right menu  drag things on elements to apply effects
can mkae things stick and stay in place like instagram title
use rectangle to make header for things

rectangle to make tab bar lock post or whatever to keep problems from arising in certain situations

JAVASCRIPT PROGRAMMING

syntactic sugar not really class its just a really easy way  to read and write it because syntax of objects and prototypes and inheritance in JS is a little
weird and annoying

JSON formatter may need in the future to help with JSON

https://jsonformatter.org/
https://restcountries.com/v3.1/alpha/col
https://restcountries.com/

cd\ to get out of folder

npm install -g create-react-app

package-lock json may not be necessary to keep

npm uninstall -g create-react-app

sudo npx create-react-app probably overtakes everything



<Header title = "Another List" />

<h1>{props.title}</h1>

const Header = (props) => {
    var val = props.title;
  return (
    <header>
        <h1>{val}</h1>
    </header>
  )
}

export default Header;

<Header title = "To Do List" />

impt shortcut for props stuff

<Header title = "Hello" />

 <Header title = {23} />


 <h1 style={{ color: "gray", backgroundColor: "lightgray" }}>{val}</h1>

 REACT

<button className='delete-btn' id='delete'>
            <i className='fa fa-trash' aria-hidden="true"></i>Delete</button>

@import url('https://fonts.googleapis.com/css2?family=Bona+Nova:ital@1&family=Poppins:wght@200&family=Tilt+Prism&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", "sans-serif";
}

.container {
  max-width: 500px;
  margin: 30px auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 15px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  display: inline-block;
}

.delete {
  display: flex;  //// this helps for keeping things in place when scrolling around
  margin-left: 70px;
  position: fixed;
  top: 10.5rem;
}

.move {
 margin-left: 10px;
  
}

import PropTypes from 'prop-types';

const Header =({ title }) => {
   // var val = props.title;
  return (
    
    <header className='header'>
        <h1 style={{ color: "gray", backgroundColor: "lightgray" }}>{title}</h1> 
    </header>
  )
}



Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

 const headingStyle = {
    color: "black",
    backgroundColor: ""
} 

// export default Header;


// Destructing of props can be done in one of the ways...
// 1. {props} .... props.title
// 2. (props) .. val val = props.title
// 3. ({title})

import { useState } from 'react';
import './index.css';
import Header from './components/Header';

function App() {
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

  return (
    <div className ="container">
      <Header />
        <button className='btn' onClick={() => addTodo(input)}>Add</button> 
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <ul className='move'>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button className='delete' onClick={() => deleteTodo(todo.id)}>X</button>
            </li> // &times;
          ))}
        </ul>
    </div>
  ); //// for making a todo list
}

export default App;

FRONT END

 // console.log(post.author);
//  // document.querySelector("#data").innerText += post.author;
//  //  data += post.author;


cd.. to also get out of certain folders

getPosts);

cb


JS REACT CLASS

 <div>{tasks.map((task) =>(<h3>{task.text}</h3>))}</div>

task.text

<h1>{x[0]}</h1>

x[1]
.toString()



 let changeState = () => {
        setPerson({
            name: "Bob Smith", // name: "Bob Smith" alone gives you error
            age:23,
            height:5.4,
            isYoung: false,
        });
    };

*/
/* 
// JS PROGRAMMING PROTOTYPES

const me = new Person();
// undefined
me
//  -> Person {age: 12}
Person.age = 40
// 40
me
// -> Person {age: 12}
me.age
12
Person.prototype.age 
// undefined */
/* const dude = {}; // object literal here simpliest way to make a basic empty object
// undefined
dude
//-> {}
dude.name = 'SINAAAAAAA';
"SINAAAAAAA" // whenever you make an object the object always gets a proto property it points to another object that has all the stuff that your variable is going to be inheriting from and nearly every object in javascript is an instance of object with capital o

dude.age = 34
34
dude
-> {name: "SINAAAAAAAA", age: 34}
dude.talk
// undefined
dude.walk
// undefined
dude.toString
f toString() { [native code] }
dude.valueOf
f valueOf() { [native code] }
dude.anything
// undefined

const myBrothers = ['Ben', 'Sam'];
// undefined
myBrothers
-> (2) ["Ben", "Sam"] // gives you list of methods or whatever /////// various things
const name = "SINA";
undefined
name
"SINA"
name.__proto__ // shows you the prototype of name

// create inherit from human /////// for Object.create stuff also can inherit other like "Human"
class Human {
    talk() { /// go to ENG US on bottom right to change language settings for laptop on windows
        return 'Talking';
    }
}
undefined
class SuperHuman extends Human {
    fly()
        return 'Flying';
    }
}
undefined
const ben = new SuperHuman();
undefined
ben.fly()
"Flying"
ben.talk();
"Talking"
ben.jumpReallyHigh
undefined
ben
// SuperHuman {} bunch of stuff here

const me = {}; // is short for v below

const me = new Object(); 

SYNCHRONOUS AND ASYNCHRONOUS

// synchronous goes from top to bottom asynchronous goes top to bottom but asynch stuff executes on the side and the rest of the code at the same time

let a = 1
let b = 2

setTimeout(function() {
    console.log('Async');
}, 100)

a = 10

fetch('/').then(function() {
    console.log('Fetch');
})

console.log('Synchronous');

console.log(a);
console.log(b);


ASYNC AND AWAIT 

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`) // await pretty much says  the code should wait until this make request is finished and then afterwards it'll execute what comes next
    })
}

makeRequest('Facebook').then(response => {
    console.log('Response Received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err);
}) 

async function doWork() {
    try {
    const response = await makeRequest('Google') // make sure to use await before all of your different code that's going to be asynchronous
    console.log('Response Received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse);
    } catch (err) {
        console.log(err);
    }
}
doWork() 


FIGMA


Try to keep things in frames

any frame can be a prototype

go to icon and on the right menu and go to layer to select various things

for progress bar make two lines make one with opacity or whatever to make one

JAVA

Executor is basically an interface


    BlockingDeque<E> 	
    A Deque that additionally supports blocking operations that wait for the deque to become non-empty when retrieving an element, and wait for space to become available in the deque when storing an element.
    BlockingQueue<E> 	
    A Queue that additionally supports operations that wait for the queue to become non-empty when retrieving an element, and wait for space to become available in the queue when storing an element.
    Callable<V> 	
    A task that returns a result and may throw an exception.
    CompletableFuture.AsynchronousCompletionTask 	
    A marker interface identifying asynchronous tasks produced by async methods.
    CompletionService<V> 	
    A service that decouples the production of new asynchronous tasks from the consumption of the results of completed tasks.
    CompletionStage<T> 	
    A stage of a possibly asynchronous computation, that performs an action or computes a value when another CompletionStage completes.
    ConcurrentMap<K,V> 	
    A Map providing thread safety and atomicity guarantees.
    ConcurrentNavigableMap<K,V> 	
    A ConcurrentMap supporting NavigableMap operations, and recursively so for its navigable sub-maps.
    Delayed 	
    A mix-in style interface for marking objects that should be acted upon after a given delay.
    Executor 	
    An object that executes submitted Runnable tasks.
    ExecutorService 	
    An Executor that provides methods to manage termination and methods that can produce a Future for tracking progress of one or more asynchronous tasks.
    ForkJoinPool.ForkJoinWorkerThreadFactory 	
    Factory for creating new ForkJoinWorkerThreads.
    ForkJoinPool.ManagedBlocker 	
    Interface for extending managed parallelism for tasks running in ForkJoinPools.
    Future<V> 	
    A Future represents the result of an asynchronous computation.
    RejectedExecutionHandler 	
    A handler for tasks that cannot be executed by a ThreadPoolExecutor.
    RunnableFuture<V> 	
    A Future that is Runnable.
    RunnableScheduledFuture<V> 	
    A ScheduledFuture that is Runnable.
    ScheduledExecutorService 	
    An ExecutorService that can schedule commands to run after a given delay, or to execute periodically.
    ScheduledFuture<V> 	
    A delayed result-bearing action that can be cancelled.
    ThreadFactory 	
    An object that creates new threads on demand.
    TransferQueue<E> 	
    A BlockingQueue in which producers may wait for consumers to receive elements.
    Class Summary Class 	Description
    AbstractExecutorService 	
    Provides default implementations of ExecutorService execution methods.
    ArrayBlockingQueue<E> 	
    A bounded blocking queue backed by an array.
    CompletableFuture<T> 	
    A Future that may be explicitly completed (setting its value and status), and may be used as a CompletionStage, supporting dependent functions and actions that trigger upon its completion.
    ConcurrentHashMap<K,V> 	
    A hash table supporting full concurrency of retrievals and high expected concurrency for updates.
    ConcurrentHashMap.KeySetView<K,V> 	
    A view of a ConcurrentHashMap as a Set of keys, in which additions may optionally be enabled by mapping to a common value.
    ConcurrentLinkedDeque<E> 	
    An unbounded concurrent deque based on linked nodes.
    ConcurrentLinkedQueue<E> 	
    An unbounded thread-safe queue based on linked nodes.
    ConcurrentSkipListMap<K,V> 	
    A scalable concurrent ConcurrentNavigableMap implementation.
    ConcurrentSkipListSet<E> 	
    A scalable concurrent NavigableSet implementation based on a ConcurrentSkipListMap.
    CopyOnWriteArrayList<E> 	
    A thread-safe variant of ArrayList in which all mutative operations (add, set, and so on) are implemented by making a fresh copy of the underlying array.
    CopyOnWriteArraySet<E> 	
    A Set that uses an internal CopyOnWriteArrayList for all of its operations.
    CountDownLatch 	
    A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.
    CountedCompleter<T> 	
    A ForkJoinTask with a completion action performed when triggered and there are no remaining pending actions.
    CyclicBarrier 	
    A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.
    DelayQueue<E extends Delayed> 	
    An unbounded blocking queue of Delayed elements, in which an element can only be taken when its delay has expired.
    Exchanger<V> 	
    A synchronization point at which threads can pair and swap elements within pairs.
    ExecutorCompletionService<V> 	
    A CompletionService that uses a supplied Executor to execute tasks.
    Executors 	
    Factory and utility methods for Executor, ExecutorService, ScheduledExecutorService, ThreadFactory, and Callable classes defined in this package.
    ForkJoinPool 	
    An ExecutorService for running ForkJoinTasks.
    ForkJoinTask<V> 	
    Abstract base class for tasks that run within a ForkJoinPool.
    ForkJoinWorkerThread 	
    A thread managed by a ForkJoinPool, which executes ForkJoinTasks.
    FutureTask<V> 	
    A cancellable asynchronous computation.
    LinkedBlockingDeque<E> 	
    An optionally-bounded blocking deque based on linked nodes.
    LinkedBlockingQueue<E> 	
    An optionally-bounded blocking queue based on linked nodes.
    LinkedTransferQueue<E> 	
    An unbounded TransferQueue based on linked nodes.
    Phaser 	
    A reusable synchronization barrier, similar in functionality to CyclicBarrier and CountDownLatch but supporting more flexible usage.
    PriorityBlockingQueue<E> 	
    An unbounded blocking queue that uses the same ordering rules as class PriorityQueue and supplies blocking retrieval operations.
    RecursiveAction 	
    A recursive resultless ForkJoinTask.
    RecursiveTask<V> 	
    A recursive result-bearing ForkJoinTask.
    ScheduledThreadPoolExecutor 	
    A ThreadPoolExecutor that can additionally schedule commands to run after a given delay, or to execute periodically.
    Semaphore 	
    A counting semaphore.
    SynchronousQueue<E> 	
    A blocking queue in which each insert operation must wait for a corresponding remove operation by another thread, and vice versa.
    ThreadLocalRandom 	
    A random number generator isolated to the current thread.
    ThreadPoolExecutor 	
    An ExecutorService that executes each submitted task using one of possibly several pooled threads, normally configured using Executors factory methods.
    ThreadPoolExecutor.AbortPolicy 	
    A handler for rejected tasks that throws a RejectedExecutionException.
    ThreadPoolExecutor.CallerRunsPolicy 	
    A handler for rejected tasks that runs the rejected task directly in the calling thread of the execute method, unless the executor has been shut down, in which case the task is discarded.
    ThreadPoolExecutor.DiscardOldestPolicy 	
    A handler for rejected tasks that discards the oldest unhandled request and then retries execute, unless the executor is shut down, in which case the task is discarded.
    ThreadPoolExecutor.DiscardPolicy 	
    A handler for rejected tasks that silently discards the rejected task.
    Enum Summary Enum 	Description
    TimeUnit 	
    A TimeUnit represents time durations at a given unit of granularity and provides utility methods to convert across units, and to perform timing and delay operations in these units.
    Exception Summary Exception 	Description
    BrokenBarrierException 	
    Exception thrown when a thread tries to wait upon a barrier that is in a broken state, or which enters the broken state while the thread is waiting.
    CancellationException 	
    Exception indicating that the result of a value-producing task, such as a FutureTask, cannot be retrieved because the task was cancelled.
    CompletionException 	
    Exception thrown when an error or other exception is encountered in the course of completing a result or task.
    ExecutionException 	
    Exception thrown when attempting to retrieve the result of a task that aborted by throwing an exception.
    RejectedExecutionException 	
    Exception thrown by an Executor when a task cannot be accepted for execution.
    TimeoutException 	
    Exception thrown when a blocking operation times out.

Package java.util.concurrent Description
Utility classes commonly useful in concurrent programming. This package includes a few small standardized extensible frameworks, as well as some classes that provide useful functionality and are otherwise tedious or difficult to implement. Here are brief descriptions of the main components. See also the java.util.concurrent.locks and java.util.concurrent.atomic packages.
Executors
Interfaces. Executor is a simple standardized interface for defining custom thread-like subsystems, including thread pools, asynchronous I/O, and lightweight task frameworks. Depending on which concrete Executor class is being used, tasks may execute in a newly created thread, an existing task-execution thread, or the thread calling execute, and may execute sequentially or concurrently. ExecutorService provides a more complete asynchronous task execution framework. An ExecutorService manages queuing and scheduling of tasks, and allows controlled shutdown. The ScheduledExecutorService subinterface and associated interfaces add support for delayed and periodic task execution. ExecutorServices provide methods arranging asynchronous execution of any function expressed as Callable, the result-bearing analog of Runnable. A Future returns the results of a function, allows determination of whether execution has completed, and provides a means to cancel execution. A RunnableFuture is a Future that possesses a run method that upon execution, sets its results.

Implementations. Classes ThreadPoolExecutor and ScheduledThreadPoolExecutor provide tunable, flexible thread pools. The Executors class provides factory methods for the most common kinds and configurations of Executors, as well as a few utility methods for using them. Other utilities based on Executors include the concrete class FutureTask providing a common extensible implementation of Futures, and ExecutorCompletionService, that assists in coordinating the processing of groups of asynchronous tasks.

Class ForkJoinPool provides an Executor primarily designed for processing instances of ForkJoinTask and its subclasses. These classes employ a work-stealing scheduler that attains high throughput for tasks conforming to restrictions that often hold in computation-intensive parallel processing.
Queues
The ConcurrentLinkedQueue class supplies an efficient scalable thread-safe non-blocking FIFO queue. The ConcurrentLinkedDeque class is similar, but additionally supports the Deque interface.

Five implementations in java.util.concurrent support the extended BlockingQueue interface, that defines blocking versions of put and take: LinkedBlockingQueue, ArrayBlockingQueue, SynchronousQueue, PriorityBlockingQueue, and DelayQueue. The different classes cover the most common usage contexts for producer-consumer, messaging, parallel tasking, and related concurrent designs.

Extended interface TransferQueue, and implementation LinkedTransferQueue introduce a synchronous transfer method (along with related features) in which a producer may optionally block awaiting its consumer.

The BlockingDeque interface extends BlockingQueue to support both FIFO and LIFO (stack-based) operations. Class LinkedBlockingDeque provides an implementation.
Timing
The TimeUnit class provides multiple granularities (including nanoseconds) for specifying and controlling time-out based operations. Most classes in the package contain operations based on time-outs in addition to indefinite waits. In all cases that time-outs are used, the time-out specifies the minimum time that the method should wait before indicating that it timed-out. Implementations make a "best effort" to detect time-outs as soon as possible after they occur. However, an indefinite amount of time may elapse between a time-out being detected and a thread actually executing again after that time-out. All methods that accept timeout parameters treat values less than or equal to zero to mean not to wait at all. To wait "forever", you can use a value of Long.MAX_VALUE.
Synchronizers
Five classes aid common special-purpose synchronization idioms.

    Semaphore is a classic concurrency tool.
    CountDownLatch is a very simple yet very common utility for blocking until a given number of signals, events, or conditions hold.
    A CyclicBarrier is a resettable multiway synchronization point useful in some styles of parallel programming.
    A Phaser provides a more flexible form of barrier that may be used to control phased computation among multiple threads.
    An Exchanger allows two threads to exchange objects at a rendezvous point, and is useful in several pipeline designs. 

Concurrent Collections
Besides Queues, this package supplies Collection implementations designed for use in multithreaded contexts: ConcurrentHashMap, ConcurrentSkipListMap, ConcurrentSkipListSet, CopyOnWriteArrayList, and CopyOnWriteArraySet. When many threads are expected to access a given collection, a ConcurrentHashMap is normally preferable to a synchronized HashMap, and a ConcurrentSkipListMap is normally preferable to a synchronized TreeMap. A CopyOnWriteArrayList is preferable to a synchronized ArrayList when the expected number of reads and traversals greatly outnumber the number of updates to a list.

The "Concurrent" prefix used with some classes in this package is a shorthand indicating several differences from similar "synchronized" classes. For example java.util.Hashtable and Collections.synchronizedMap(new HashMap()) are synchronized. But ConcurrentHashMap is "concurrent". A concurrent collection is thread-safe, but not governed by a single exclusion lock. In the particular case of ConcurrentHashMap, it safely permits any number of concurrent reads as well as a tunable number of concurrent writes. "Synchronized" classes can be useful when you need to prevent all access to a collection via a single lock, at the expense of poorer scalability. In other cases in which multiple threads are expected to access a common collection, "concurrent" versions are normally preferable. And unsynchronized collections are preferable when either collections are unshared, or are accessible only when holding other locks.

Most concurrent Collection implementations (including most Queues) also differ from the usual java.util conventions in that their Iterators and Spliterators provide weakly consistent rather than fast-fail traversal:

    they may proceed concurrently with other operations
    they will never throw ConcurrentModificationException
    they are guaranteed to traverse elements as they existed upon construction exactly once, and may (but are not guaranteed to) reflect any modifications subsequent to construction. 

Memory Consistency Properties
Chapter 17 of the Java Language Specification defines the happens-before relation on memory operations such as reads and writes of shared variables. The results of a write by one thread are guaranteed to be visible to a read by another thread only if the write operation happens-before the read operation. The synchronized and volatile constructs, as well as the Thread.start() and Thread.join() methods, can form happens-before relationships. In particular:

    Each action in a thread happens-before every action in that thread that comes later in the program's order.
    An unlock (synchronized block or method exit) of a monitor happens-before every subsequent lock (synchronized block or method entry) of that same monitor. And because the happens-before relation is transitive, all actions of a thread prior to unlocking happen-before all actions subsequent to any thread locking that monitor.
    A write to a volatile field happens-before every subsequent read of that same field. Writes and reads of volatile fields have similar memory consistency effects as entering and exiting monitors, but do not entail mutual exclusion locking.
    A call to start on a thread happens-before any action in the started thread.
    All actions in a thread happen-before any other thread successfully returns from a join on that thread. 

The methods of all classes in java.util.concurrent and its subpackages extend these guarantees to higher-level synchronization. In particular:

    Actions in a thread prior to placing an object into any concurrent collection happen-before actions subsequent to the access or removal of that element from the collection in another thread.
    Actions in a thread prior to the submission of a Runnable to an Executor happen-before its execution begins. Similarly for Callables submitted to an ExecutorService.
    Actions taken by the asynchronous computation represented by a Future happen-before actions subsequent to the retrieval of the result via Future.get() in another thread.
    Actions prior to "releasing" synchronizer methods such as Lock.unlock, Semaphore.release, and CountDownLatch.countDown happen-before actions subsequent to a successful "acquiring" method such as Lock.lock, Semaphore.acquire, Condition.await, and CountDownLatch.await on the same synchronizer object in another thread.
    For each pair of threads that successfully exchange objects via an Exchanger, actions prior to the exchange() in each thread happen-before those subsequent to the corresponding exchange() in another thread.
    Actions prior to calling CyclicBarrier.await and Phaser.awaitAdvance (as well as its variants) happen-before actions performed by the barrier action, and actions performed by the barrier action happen-before actions subsequent to a successful return from the corresponding await in other threads. 

Since:
    1.5 

Package java.util.regex 

Metacharacters

This API also supports a number of special characters that affect the way a pattern is matched. Change the regular expression to cat. and the input string to cats. The output will appear as follows:

Enter your regex: cat.
Enter input string to search: cats
I found the text cats starting at index 0 and ending at index 4.

The match still succeeds, even though the dot "." is not present in the input string. It succeeds because the dot is a metacharacter — a character with special meaning interpreted by the matcher. The metacharacter "." means "any character" which is why the match succeeds in this example.

The metacharacters supported by this API are: <([{\^-=$!|]})?*+.>
Note: In certain situations the special characters listed above will not be treated as metacharacters. You'll encounter this as you learn more about how regular expressions are constructed. You can, however, use this list to check whether or not a specific character will ever be considered a metacharacter. For example, the characters @ and # never carry a special meaning.

There are two ways to force a metacharacter to be treated as an ordinary character:

    precede the metacharacter with a backslash, or
    enclose it within \Q (which starts the quote) and \E (which ends it).

When using this technique, the \Q and \E can be placed at any location within the expression, provided that the \Q comes first.

FINANCE

More maybe covariances than variances in the world covariances matter more than variances

Important: When you think about buying a new stock and putting into your portfolio is this going to be highly correlated with my market
portfolio

nodemon index.js

npm install -D nodemon

can use fetch to avoid downloading things like axios and other types of libraries or whatever

FULL STACK

npm add cors


*/










