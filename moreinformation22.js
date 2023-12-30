/*

JAVA

//package com.example.demo;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

//@Retention(RetentionPolicy.RUNTIME)
//@Target(ElementType.TYPE)
// public @interface MarkerAnnotation { // a marker annotation is just an empty annotation without having any metadata logic at all.

//}

// when making custom

public class Main {

    public static void main(String[] args) {

        // expression = operands & operators
        // operands =   values,variables, numbers, quantity
        // operators = + - * / %

        double friends = 10;

        friends = (double) friends / 3;

        System.out.println(friends);
        
    }
}

FIGMA

Try to align things in the pixels when using grid use zooming in and out to help

Can use arrow keys to move any element

Lock objects

    Mac: ⌘ Command ⇧ Shift L.
    Windows: Control Shift L.

    Can also lock things by clicking on lock on elements or right clicking
    and locking them that in lock/unlock on bottom

Make sure with icons they always have a frame encapsulating them
Sometimes may have extra pixel around it since icons need a little more
spacing themselves
Make sure the bounding box follows the 8 rule

With auto layout  can align things to center etc.

In  auto layout can click and drag things to different spots

Can generate lines,circles,triangles in figma

Can ungroup things by right clicking on an element and clicking
it

Click and drag an anchor point(in the corners) to make content fit in a certain way

Enter always remains when making content box smaller

To have text flow dynamically try to avoid using enters in content boxes

Can align text to the right center left,middle,top,bottom

<-> means auto width(auto width of text box)

sqaure allows you to adjust text box they way you want

Right click to create a component go to create component

Top bar create component as well
+ diamond on top means you can create a variant of that component
Things similar to that component different state

Add variant on top

On right side when clicking on a variant you get current variant and most
likely get thing called default can change this name

Also shows parent component part on right as well

can click or maybe copy it and put it in variant box and get rid of original
after clicking on it a few times

Can also copy then go the element and right click and click paste and release

To add special stuff to the components and variables go to prototype on the top right
and on borders you get a + you can drag to variants or whatever
Can set unique things to it then and can drag it back to reset or other things

Can store things in assets like components and other stuff too

CLASS STUFF

RTL Queries

- Rendering teh components-render() method from RTL
- FInd an element rendered by the component-screen.getBy.()method from RTL(.iswhateveryouwannaget)
- Assert against the element found expect()."matcher function"

- Queries are the methods that Testing Library provides to find elements on the page

To find a single element on the page, we have
-getBy..
-queryBy..
-findBy..

- To find the multiple elements on the page, we have
-getAllBy..
-queryAllBy..
-findAllBy..
The suffix".." can be one of Role,LabelText,PlaceHolderText,Text,DisplayValue,AltText,Title and finally TestId

getByRole

- getByRole queries for elements with the given role

- Role refers to the ARIA(Accessible Rich Internet Applications) role which provides semantic meanign to the content to ensure
people using assistive technologies are able to use them.

- By default, many semantic elements in HTML have a role

- Button element has a button role,anchor element has a link role,h1 to h6 elements have a heading role,checkboxes have a checkbox role,
radio buttons have a ratio role and so on.

- If there is not default role,the role attribute can be used to add the desired role.For ex: <a role='button'> will make anchor's role
as button here.

Demo for getByRole()

- const nameElement = screen.getByRole('textbox'); // when a text box is present on the component
- const comboElement = screen.getByRole('combobox'); // where there is a combobox in component.
- const checkBoxElement = screen.getByRole('checkbox'); // where there is a checkbox in component.
- const comboElement = screen.getByRole('combobox'); // where there is a combobox in component.
- const submitButton = screen.getByRole('button'); // where there is a <button> element in the component.

What if 2 elements have the same role?

- Interestingly,2 elements can have the same role.What to do in this situation?

- For example:textbox and texarea have same roles!

Here comes the concept of getByRole Options:

name: The accessible name is for simple cases equal to
1. the label of a form element
2. the text content of a button or
3. the value of the aria-label attribute

For ex: If we have a textbox and textarea together in a form

const nameElement = screen.getByRole("textbox",{
name:"Name"}); // Name being the text of the label attached to the name input field

const cityElement = screen.getByRole("textbox",{
name:"City"}); // City being the text of the label attached to the textarea field

Two headings together?

- const pageHeading = screen.getByRole("heading");

- const pageHeading = screen.getByRole("heading",{
name:"I am Heading 1"}); // I am Heading 1 being the content of the h1..

- const pageHeading = screen.getByRole("heading",{
level:1}); // for H1

- const pageHeading = screen.getByRole("heading",{
level:2}); // for H2

getRole Options continued

.name
. level
.hidden 
. selected 
. checked 
. pressed

getByLabelText

- getByLabelText will search for the label that matches the given text,then find the element associated with the label
- Its same as applying "name" with getByRole.. 
- [by using getByRole with option "name"]
const nameElement = screen.getByRole("textbox",{ /// not exact all these are
    -name:"Name"}); // Name being the text of the label attached to the name input field

getByPlaceHolderText and getByText

- getByPlaceHolderText()
- Finds the element with the given PlaceHolderText

- getByText("given text");
- Finds the element with this text

getByDisplayValue


- getByDisplayValue returns the input,textarea, or select element that has the matching display value

- To demo this:
-Assign a value attribute to the input box: We might get a warning here,if yes, let's add a onChange() handler to the element too

getByAltText()

- getByAltText will find the element with the given Alt text with img

- We can test after bringing up an img in our form

getByTitle

- Returns the element that has matching title attribute
- To demo apply "title" attribute to any of the elements and access it

getByTestId

- Matching data-testid="any"

Priority order for queries

- "Your test should resemble how users interact with your code(component,page,etc.) as much as possible" 

1. getByRole
2. getByLabelText
3. getByPlaceHolderText
4. getByText
5. getByDisplayValue
6. getByAltText
7. getByTitle
8. getByTestId

RTL getAllBy Queries

- Find multiple elements in the DOM

- getAllBy returns an array of matching nodes for a query,and throws an error if no elements match

- The methods will be same as getBy.. 

Demo of getAllBy

What is TextMatch? - The first argument to the query methods

- It represents a type can be either
- A string
- Regex
- function


TexttMatch - string

- <div>Hello World</div>
- screen.getByText("Hello World"); // full string match
- screen.getByText("llo Worl",{exact:false}); // sub string match
- screen.getByText("hello world",{exact:false}); // ignore case

TextMatch - regex

- <div>Hello World</div>
- screen.getByText(/World/); substring match
- screen.getByText(/world/i); // sub string match
- screen.getByText(/hello world$/i); // ignore case

TextMatch - custom function

- <div>Hello World</div>

- screen.getByText((content)=>content.startsWith("Hello"))

How to check if something is not there on component

- getRoleBy or getAllRoleBy  throw error when they don't find an element

queryBy
-returns the matching node for a query, and return null if no elements match
- Useful for asserting an element that is not present
- Throws an error if more than 1 match is found

queryAllBy
- Returns an array of all matching nodes for a query, and return an empty array if no elements match

Appearance/Disappearance 

- What if elements are not present in the DOM to begin but make their way into the DOM after some time?

For ex: data that is fetched from a server will be rendered only after a few milliseconds

getByRole not a good fit for this

findBy:
- Returns a Promise which resolves when an element is found which matches the given query

- The promise is rejected if no element is found or if more than 1 element is found after a default timeout of 1000ms

findAllBy:
- Returns a promise which resolves to an array of elements when any elements are found which match the given query
- The promise is rejected if no elements are found after a default timeout of 1000ms

To increase the timeout

{timeout:2000} for example

Manual Queries

- RTL Queries

- Manual Queries on the other hand we can use as the regular querySelector DOM API to find element

const{container} = render(<AnyComponent/>)

const foo = container.querySelectorAll('[data-foo="bar"]');

Debugging

screen.debug()

logRoles.. 

testing playground extension // study more

user-event

- A companion library for Testing Library that simulates user interactions by dispatching the events
that would happen if the interaction took place in a browser

- It is the recommended way to test user interactions with RTL

Pointer interactions // look into this

Convenience APIs
click()
dblClick()
tripleClick()
hover()
unhover()

fireEvent vs user-event

- fireEvent is a method from RTL which is used to dispatch DOM events

- User-event simulates full interactions, which may fire multiple events and do additional checks along the way 

- For example,we can dispatch the change event on an input filed using fireEvent

- When a user types into a text box, the element must be focused,and the keyboard and input events are fired and the selection
and value on the element are manipulated as they type

- User-event allows to describe a user interaction instead of a concrete event. It adds visibility and intractability checks along the way
and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. would not let a user
click a hidden element or a type in a disabled text box

- Good news: user-event is already there in Package.json


CYBERSECURITY

A file system is a prime example of a global namespace

Not a good thing in caspicum global namespaces are

In Unix and Unix-like computer operating systems, a file descriptor (FD, less frequently fildes) is a process-unique identifier (handle) for a file or other input/output resource, such as a pipe or network socket.

File descriptors typically have non-negative integer values, with negative values being reserved to indicate "no value" or error conditions.

File descriptors are a part of the POSIX API. Each Unix process (except perhaps daemons) should have three standard POSIX file descriptors, corresponding to the three standard streams:
Integer value 	Name 	<unistd.h> symbolic constant[1] 	<stdio.h> file stream[2]
0 	Standard input 	STDIN_FILENO 	stdin
1 	Standard output 	STDOUT_FILENO 	stdout
2 	Standard error 	STDERR_FILENO 	stderr
Overview
File descriptors for a single process, file table and inode table. Note that multiple file descriptors can refer to the same file table entry (e.g., as a result of the dup system call[3]: 104 ) and that multiple file table entries can in turn refer to the same inode (if it has been opened multiple times; the table is still simplified because it represents inodes by file names, even though an inode can have multiple names). File descriptor 3 does not refer to anything in the file table, signifying that it has been closed.

In the traditional implementation of Unix, file descriptors index into a per-process file descriptor table maintained by the kernel, that in turn indexes into a system-wide table of files opened by all processes, called the file table. This table records the mode with which the file (or other resource) has been opened: for reading, writing, appending, and possibly other modes. It also indexes into a third table called the inode table that describes the actual underlying files.[3] To perform input or output, the process passes the file descriptor to the kernel through a system call, and the kernel will access the file on behalf of the process. The process does not have direct access to the file or inode tables.

On Linux, the set of file descriptors open in a process can be accessed under the path /proc/PID/fd/, where PID is the process identifier. File descriptor /proc/PID/fd/0 is stdin, /proc/PID/fd/1 is stdout, and /proc/PID/fd/2 is stderr. As a shortcut to these, any running process can also access its own file descriptors through the folders /proc/self/fd and /dev/fd.[4]

In Unix-like systems, file descriptors can refer to any Unix file type named in a file system. As well as regular files, this includes directories, block and character devices (also called "special files"), Unix domain sockets, and named pipes. File descriptors can also refer to other objects that do not normally exist in the file system, such as anonymous pipes and network sockets.

The FILE data structure in the C standard I/O library usually includes a low level file descriptor for the object in question on Unix-like systems. The overall data structure provides additional abstraction and is instead known as a file handle.
Operations on file descriptors

The following lists typical operations on file descriptors on modern Unix-like systems. Most of these functions are declared in the <unistd.h> header, but some are in the <fcntl.h> header instead.
Creating file descriptors

    open()
    creat()[5]
    socket()
    accept()
    socketpair()
    pipe()
    epoll_create() (Linux)
    signalfd() (Linux)
    eventfd() (Linux)
    timerfd_create() (Linux)
    memfd_create() (Linux)
    userfaultfd() (Linux)
    fanotify_init() (Linux)
    inotify_init() (Linux)
    clone() (with flag CLONE_PIDFD, Linux)
    pidfd_open() (Linux)
    open_by_handle_at() (Linux)
    kqueue() (BSD)
    pdfork() (kFreeBSD)

Deriving file descriptors

    dirfd()
    fileno()

Operations on a single file descriptor

    read(), write()
    readv(), writev()
    pread(), pwrite()
    recv(), send()
    recvfrom(), sendto()
    recvmsg(), sendmsg() (also used for sending FDs to other processes over a Unix domain socket)
    recvmmsg(), sendmmsg()
    lseek(), llseek()
    fstat()
    fstatvfs()
    fchmod()
    fchown()
    ftruncate()
    fsync()
    fdatasync()
    fdopendir()
    fgetxattr(), fsetxattr() (Linux)
    flistxattr(), fremovexattr() (Linux)
    statx (Linux)
    setns (Linux)
    vmsplice() (Linux)
    pidfd_send_signal() (Linux)
    pdkill() (kFreeBSD)
    waitid() (with P_PIDFD ID type, Linux)
    fdopen() (stdio function:converts file descriptor to FILE*)
    dprintf() (stdio function: prints to file descriptor)

Operations on multiple file descriptors

    select(), pselect()
    poll(), ppoll()
    epoll_wait(), epoll_pwait(), epoll_pwait2() (Linux, takes a single epoll filedescriptor to wait on many other file descriptors)
    epoll_ctl() (for Linux)
    kqueue() (for BSD-based systems).
    sendfile()
    splice(), tee() (for Linux)
    copy_file_range() (for Linux)

Operations on the file descriptor table

The fcntl() function is used to perform various operations on a file descriptor, depending on the command argument passed to it. There are commands to get and set attributes associated with a file descriptor, including F_GETFD, F_SETFD, F_GETFL and F_SETFL.

    close()
    closefrom() (BSD and Solaris only; deletes all file descriptors greater than or equal to specified number)
    close_range() (for Linux)[6]
    dup() (duplicates an existing file descriptor guaranteeing to be the lowest number available file descriptor)
    dup2(), dup3() (Close fd1 if necessary, and make file descriptor fd1 point to the open file of fd2)
    fcntl (F_DUPFD)

Operations that modify process state

    fchdir() (sets the process's current working directory based on a directory file descriptor)
    mmap() (maps ranges of a file into the process's address space)

File locking

    flock()
    fcntl() (F_GETLK, F_SETLK and F_SETLKW)
    lockf()

Sockets
See also: Berkeley sockets

    connect()
    bind()
    listen()
    accept() (creates a new file descriptor for an incoming connection)
    getsockname()
    getpeername()
    getsockopt()
    setsockopt()
    shutdown() (shuts down one or both halves of a full duplex connection)

Miscellaneous

    ioctl() (a large collection of miscellaneous operations on a single file descriptor, often associated with a device)

Upcoming operations

A series of new operations on file descriptors has been added to many modern Unix-like systems, as well as numerous C libraries, to be standardized in a future version of POSIX.[7] The at suffix signifies that the function takes an additional first argument supplying a file descriptor from which relative paths are resolved, the forms lacking the at suffix thus becoming equivalent to passing a file descriptor corresponding to the current working directory. The purpose of these new operations is to defend against a certain class of TOCTOU attacks.

    openat()
    faccessat()
    fchmodat()
    fchownat()
    fstatat()
    futimesat()
    linkat()
    mkdirat()
    mknodat()
    readlinkat()
    renameat()
    symlinkat()
    unlinkat()
    mkfifoat()
    fdopendir()

File descriptors as capabilities

Unix file descriptors behave in many ways as capabilities. They can be passed between processes across Unix domain sockets using the sendmsg() system call. Note, however, that what is actually passed is a reference to an "open file description" that has mutable state (the file offset, and the file status and access flags). This complicates the secure use of file descriptors as capabilities, since when programs share access to the same open file description, they can interfere with each other's use of it by changing its offset or whether it is blocking or non-blocking, for example.[8][9] In operating systems that are specifically designed as capability systems, there is very rarely any mutable state associated with a capability itself.

A Unix process' file descriptor table is an example of a C-list. 

// look into later

Berkeley sockets is an application programming interface (API) for Internet sockets and Unix domain sockets, used for inter-process communication (IPC). It is commonly implemented as a library of linkable modules. It originated with the 4.2BSD Unix operating system, which was released in 1983.

A socket is an abstract representation (handle) for the local endpoint of a network communication path. The Berkeley sockets API represents it as a file descriptor (file handle) in the Unix philosophy that provides a common interface for input and output to streams of data.

Berkeley sockets evolved with little modification from a de facto standard into a component of the POSIX specification. The term POSIX sockets is essentially synonymous with Berkeley sockets, but they are also known as BSD sockets, acknowledging the first implementation in the Berkeley Software Distribution. 
// go back to wikipedia and research this more

Name

openat - open a file relative to a directory file descriptor
Synopsis

#include <fcntl.h>

int openat(int dirfd, const char *pathname, int flags);
int openat(int dirfd, const char *pathname, int flags, mode_t mode);

Feature Test Macro Requirements for glibc (see feature_test_macros(7)):

openat():
    Since glibc 2.10: 
    _XOPEN_SOURCE >= 700 || _POSIX_C_SOURCE >= 200809L 
    Before glibc 2.10: 
    _ATFILE_SOURCE 

Description

The openat() system call operates in exactly the same way as open(2), except for the differences described in this manual page.

If the pathname given in pathname is relative, then it is interpreted relative to the directory referred to by the file descriptor dirfd (rather than relative to the current working directory of the calling process, as is done by open(2) for a relative pathname).

If pathname is relative and dirfd is the special value AT_FDCWD, then pathname is interpreted relative to the current working directory of the calling process (like open(2)).

If pathname is absolute, then dirfd is ignored.
Return Value

On success, openat() returns a new file descriptor. On error, -1 is returned and errno is set to indicate the error.
Errors

The same errors that occur for open(2) can also occur for openat(). The following additional errors can occur for openat():

EBADF

dirfd is not a valid file descriptor.
ENOTDIR
    pathname is relative and dirfd is a file descriptor referring to a file other than a directory. 

Versions

openat() was added to Linux in kernel 2.6.16; library support was added to glibc in version 2.4.
Conforming To

POSIX.1-2008. A similar system call exists on Solaris.
Notes

openat() and other similar system calls suffixed "at" are supported for two reasons.

First, openat() allows an application to avoid race conditions that could occur when using open(2) to open files in directories other than the current working directory. These race conditions result from the fact that some component of the directory prefix given to open(2) could be changed in parallel with the call to open(2). Such races can be avoided by opening a file descriptor for the target directory, and then specifying that file descriptor as the dirfd argument of openat().

Second, openat() allows the implementation of a per-thread "current working directory", via file descriptor(s) maintained by the application. (This functionality can also be obtained by tricks based on the use of /proc/self/fd/dirfd, but less efficiently.) 

faccessat - check user's permissions of a file relative to a directory file descriptor
Synopsis

#include <fcntl.h> /* Definition of AT_* constants 
#include <unistd.h>

int faccessat(int dirfd, const char *pathname, int mode, int flags);

Feature Test Macro Requirements for glibc (see feature_test_macros(7)):

faccessat():
    Since glibc 2.10: 
    _XOPEN_SOURCE >= 700 || _POSIX_C_SOURCE >= 200809L 
    Before glibc 2.10: 
    _ATFILE_SOURCE 

Description

The faccessat() system call operates in exactly the same way as access(2), except for the differences described in this manual page.

If the pathname given in pathname is relative, then it is interpreted relative to the directory referred to by the file descriptor dirfd (rather than relative to the current working directory of the calling process, as is done by access(2) for a relative pathname).

If pathname is relative and dirfd is the special value AT_FDCWD, then pathname is interpreted relative to the current working directory of the calling process (like access(2)).

If pathname is absolute, then dirfd is ignored.

flags is constructed by ORing together zero or more of the following values:

AT_EACCESS
    Perform access checks using the effective user and group IDs. By default, faccessat() uses the real IDs (like access(2)). 
AT_SYMLINK_NOFOLLOW
    If pathname is a symbolic link, do not dereference it: instead return information about the link itself. 

Return Value

On success, (all requested permissions granted) faccessat() returns 0. On error, -1 is returned and errno is set to indicate the error.
Errors

The same errors that occur for access(2) can also occur for faccessat(). The following additional errors can occur for faccessat():

EBADF

dirfd is not a valid file descriptor.

EINVAL

Invalid flag specified in flags.
ENOTDIR
    pathname is relative and dirfd is a file descriptor referring to a file other than a directory. 

Versions

faccessat() was added to Linux in kernel 2.6.16; library support was added to glibc in version 2.4.
Conforming To

POSIX.1-2008.
Notes

See openat(2) for an explanation of the need for faccessat().

Warning: faccessat() is subject to the same kinds of races as access(2) and euidaccess(3).

Glibc notes

The AT_EACCESS and AT_SYMLINK_NOFOLLOW flags are actually implemented within the glibc wrapper function for faccessat(). If either of these flags are specified, then the wrapper function employs fstatat(2) to determine access permissions. 

// https://linux.die.net/man/2/faccessat go to this site and study the rest

Process descriptor aka pdfork when it creates a child process it actually
sticks a reference to that child process into your file descriptor table somewhere

SCALA

// Scala - Closures
// A closure is a function which uses one or more variables declared outside this function.
import java.util.Date
object Demo {
  var number = 10;
  val add = (x: Int) => {
    number = x + number;
    number;
  };

  def main(args: Array[String]) {
    number = 100;
    println(add(20));
    println(number)
  }
} // impure closure happens whenever the data type of this number varible is var
// which means the variable value can change from inside the closure or from outside
// the closure

// Scala - Closures
// A closure is a function which uses one or more variables declared outside this function.
import java.util.Date
object Demo {
  var number = 10;
  val add = (x: Int) => {
    number = x + number;
  }

  def main(args: Array[String]) {
    println(add(20));
    println(number)
  }
} // impure closure happens whenever the data type of this number varible is var
// which means the variable value can change from inside the closure or from outside
// the closure

// a pure closure involves using val and you cannot change the val thing and thus this makes it
// a pure closure ex:
// var number = 10;
//  val add = (x: Int) => {
//    number = x + number;
//  }

FIGMA

Press F to show various frames you can use

Hit K to change cursor to scale tool 

It resizes your design elements and keeps their ratios like strokes for icons etc.

Good to get a feel for what sizing you might want

To see content not in the frame range click on it then go to clip content on right
and if you uncheck that it allows you to see the out of bounds content

Think about what problems and what the user will think using your product

Can go to community on top left where the sphere is 
all kinds of stuff you can use here
Right click go to plugins and click unsplash find a whole bunch of pictures there might have to right click on a frame etc. to get it working
Look at advanced UI design in the future

Can make things fade a bit by going next to their fill and bringing 100% down

Can increase margin in columns and maybe other things

Using soft gradient can help make difficult to read text easy to understand

for ex: moving the rectangle to the back of the time and stuff

can click and drag layers around on the left

when you add an image from unsplash it gonna show up in the fill for customization purposes

rectangles more often than not will not go behind the frame since its the ultimate sublayer and it has a fill
of that image

can decrease opacity(make something fade with bar underneath color bar in fill)

can alter gradient in fill menu 2nd option and adjust things around

Don't do drop shadows or strokes for text not recommended

When it comes to gradients try to keep to 2 or 3

When you alter square you are changing the color
the circle changes the angle of the gradient

Gradients can go outside your rectangles  and frames as well

Increasing height of recatngles can help 

Feathering // look up

Dont do white text on a white background

You can only link to other frames with prototype not other elements

Can change names of elements by clicking on their names 

To do cool things click on frame then go to prototype to get the + then drag
to another frame to get awesome options

Open overlay an option in there

move in 

left right top bottom directions

can choose bottom center top left or center other options here as well dropdown menu

can check close when clicking outside
Add background as well very subtle to show that we're showing a new layer above so it adds a little background  to the layers behind it dynamically

Reset? dont know 

MECHANICAL ENGINEERING

Curve CD. represents Transition Boiling

When the value of delta T excess increases beyond the Critical
Poin,the heat flux start decreasing. This is because a large
fraction of the Heated Surface of the Vessel is covered with a
Vapor Film. THis Vapour Film acts as an insulator as its
Thermal Conductivity is Lower than Water. Thus,the value of Heat
Flux attains it's Minimum Value. Point D corresponding to the 
Minimum Value of Heat Flux is known as Leiden-frost point

Curve DE(go back to video to fully understand)
represents Film Boiling. After the Transition Phase, the
delta T excess further Increases due to which the vessel surface
is completely covered by a Continuous Stable Vapor Film. Because
of high temperature, the Radiation Heat Transfer takes place
between the Heated Surface and the Water through the vapor
film.Thus, this stage is known as Film Boiling

The earth's mantle is a thick layer between the crust and
the core is mostly solid but it is not rigid

The rock closest to the molten outer regions of the core gets
so hot that it become slightly more pliable like
warmed candle wax And like the hot air above a candle

The Warm rock rises in convection currents
over millions of years spreading heat more evenly throughout
the planet. This stirring carries tremendous amounts of heat
from the core to the crust, fueling volcanoes, maybe helping
to drive plate tectonics and heating mine shafts to
temperatures that make earth seem like it's fresh out of the
cosmic oven even though its not


A jet engine keeps an aircraft moving forward using a very
simple principle which is newton's third law of motion
which is also what is used to make an air-filled balloon move 

The reaction force produced by the air moves the balloon
and the reaction force produced by the high speed jet at the
tail of the jet engine makes it move forward

The higher the speed of the jet the greater the thrust force
which is what makes the aircraft move forward












*/