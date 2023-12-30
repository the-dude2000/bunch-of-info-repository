/*

FINANCE

REACT BIG PROJECT FULL STACK

Keep in mind yarnpkg.com/package/react-quill and 
yarnpkg.com for useful things like for making blog
like header,formats,etc.

npm add multer // look into this

SOFTWARE ARCHITECTURE

What is Software Architecture?

Software architecture has many definitions one of the
most famous is from Ralph Johnson
"Architecture is about the important stuff.
Whatever that is"

In software architecture we focus more on the structure
more than the implementation details. 

Focus on structure
Anticipate expensive choices
Core decisions for high quality

Software architecture is also about making the
expensive choices that are costly to change after they are
implemented. It's also about making explicit the core
decisions that will allow the software to have high
quality.

Building an eCommerce Site

First: Get the Context

What should the system do?

Search Inventory
Buy Products
Check Reviews
Review Past Orders
Etc

These are the functional requirements of the application

Need to focus on how should the system behave

Also called the Non-Functional Requirements
These are sometimes defined as the "ilities" that the system 
can have like: functionality,reliability,usability,
efficiency,these kinds of things

How

HTML

A lot of times in HTML the spacing is set to 1

When doing line height try to keep to percentage unless otherwise

em means this is the decimal of the perecentage you want
Ex: 1.2 times the size of the current font
So if your current font is 10 it would increase it to a 12
try to keep font size for a:hover,visited and link the same
20pt for all of them for example

When making boxes try an intial height first before a final one

Try graphing width of boxes,gutters,borders or paddings whatever.

Ex: 1000-25-25 = 950 px to work with make sure everything fits in
that

Keep in minds margin-left ec. for boxes (more boxes)
25 for 1 left and 15 for the right
150 width
for bottom total is 190 25 + 15 + 150 = 190

How much is left 950 - 380 = 570 left over

Use this to determine the size of your boxes

FINANCE

Capital expenditures (CapEx) are funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, buildings, technology, or equipment. CapEx is often used to undertake new projects or investments by a company.

Procurement is obtaining or purchasing goods or services, typically for business purposes. Procurement is most commonly associated with businesses because companies must solicit services or purchase goods, usually on a relatively large scale.


SCALA

Gotta import Array._ before doing anything with concat

// Scala - Arrays

import Array._
object Demo {
  val myarray: Array[Int] = new Array[Int](4);
  val myarray2 = new Array[Boolean](5);
  val myarray3 = Array(1,2,3,4,5,6,8);
  def main(args: Array[String]) {
    myarray(0) = 20;
    myarray(1) = 50;
    myarray(2) = 10;
    myarray(3) = 30;
    println(myarray3.length);
    val result = concat(myarray, myarray3);
    for (x <- result) {
      println(x);
    }

    for (i <- 0 to (myarray.length - 1)) {
     println(myarray(i));
    }
  }
}

const or maybe cons is represented by :: in scala

PYTHON

Find and replace
Press   Ctrl   F   to display the search bar. Press   Ctrl   R   to add another field where you can type the replace string.
In the Find in Files dialog, you can switch to replace by pressing   Ctrl   Shift   R  . Similarly, press   Ctrl   Shift   F   to hide the Replace with field and switch to regular search.


Compute Unified Device Architecture

CUDA® is a parallel computing platform and programming model developed by NVIDIA for general computing on graphical processing units (GPUs). With CUDA, developers are 
able to dramatically speed up computing applications by harnessing the power of GPUs.

jupyter notebook (in anaconda prompt to open it up)

anaconda prompt commands

pip install torch numpy

In VSC can install python extension and make files with .ipynb at the end

GENERATIVE AI

Langchain is a framework that offers flexible abstractions that can be used by developers
to build LLM driven applications, it enables applications that are data aware,so
connecting a model to other sources; agentic, allowing a language model to interact
with it's environment

Vertex AI gives you access to Google's generative AI to build AI-powered applications.
It offers integration with the LangChain's Python SDK, making it convenient to build
applications on top of Vertex AI 

Vertex AI and LangChain have integrations for services like a Vertex AI PaLM API 
for text,chat and text-embeddings, Vertex AI Vector Search, Vertex AI Search

Vertex AI Extensions

A platform to create enterprise extensions and extension-powered applications

Basic example on using the PaLM API and LangChain for summarizing large documents:

First to use the Vertex AI PaLM API and LangChain you make sure that the
vertex AI and LangChain SDK are installed in your environment

pip install google-cloud-aiplatform langchain

Next you have to import the libraries

import langchain
from langchain.llms import VertexAI
from langchain import PromptTemplate

vertex_llm_text = VertexAI(model_name="text-bison@001")

Next you will have to create your prompt templates that you will use as predefined
recipes

map_prompt_template = """Write a summary of this chunk of text that includes
the main points and any important details. {text}"""

map_prompt = PromptTemplate(template=map_prompt_template,
input_variables=["text"])

combine_prompt_template = """Write a concise summary of the following text
delimited by triple backquotes.Return your response in bullet points which covers
the key points of the text.
```{text}```
BULLET POINT SUMMARY:
"""

After defining the templates you intitalize the associated MapReduce chain, and then
generate summaries using the chain.

map_reduce_chain = load_summarize_chain(
    vertex_llm_text,
    chain_type="map_reduce",
    map_prompt=map_prompt,
    combine_prompt=combine_prompt,
    return_intermediate_steps=True,
)

map_reduce_outputs = map_reduce_chain({"input_documents": pages})

LangChain is an abstraction layer

Use cases

Improve customer support through chat 

Explore vast amounts of unstructured data through conversational interfaces
and summarization

Summarize large documents

And many more

Keep in mind https://goo.gle/generative-ai-overview
and https://goo.gle/generative-ai-learn-resources
and https://goo.gle/GenAIforDevs

In the description of Build AI-powered apps on Vertex AI with LangChain
from Google Cloud Tech

JAVA PROBLEM SOLVING

// Java application that handles multiple ATM transactions
Create a Class name as Account and execute the program...
        ----------------------------------------------------------------------
import java.util.ArrayList;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
class Account{
    //instance variables
    private int accountId; //id of the account
    private String holderName; //account holder name
    private double balance; //stores account balance
    private static int numAccounts = 0; //stores number of accounts
    //Constructor
    public Account(String holderName,double initialBalance){
        this.holderName = holderName; //name of the account holder
        accountId = ++numAccounts; //assigning the account number
        balance = initialBalance; //initial account balance
        System.out.println("new account created=> account ID: "+accountId
                +", holder name: "+holderName+", initial balance: "+balance);
    }//end of Constructor
    //account withdraw function
    public synchronized void withdraw(double withdrawAmt) {
        System.out.println(holderName + " " + "is trying to withdraw "+withdrawAmt+"$ from account
                ID: "+accountId);
        try {
            if (balance >= withdrawAmt) {
                try {
                    Thread.sleep(50);
                } catch (Exception exp) {
                    exp.printStackTrace();
                }
                //updating the balance
                balance = balance - withdrawAmt;
                System.out.println(holderName + " " + " successfully completed the withdraw"
                        +", Now current balance : " + balance+"$");
            } else {
                System.out.println(holderName + " " + "doesn't have enough money to withdraw ");
            }
        } catch (Exception exp) {
            exp.printStackTrace();
        }
    }
    //deposit() method
    public synchronized void deposit(double depositAmt) {
        System.out.println(holderName + " " + " is trying to deposit "+depositAmt+"$ to account ID:
                "+accountId);
        try {
            if (depositAmt > 0) {
                //let the thread sleep for some time
                try {
                    Thread.sleep(50);
                } catch (Exception exp) {
                    exp.printStackTrace();
                }
                balance = balance + depositAmt;
                System.out.println(holderName + " " + " completed the deposit"
                        +", Now current balance : " + balance+"$");
            } else {
                System.out.println(holderName + " " + "doesn't have enough money to deposit");
            }
        } catch (Exception exp) {
            exp.printStackTrace();
        }
    }
}//end of class Account
//following class implement a Transaction
class Transaction implements Runnable{
    //instance variables
    private String transactionType; //withdraw or deposit
    private double amount; //amount of transaction
    private Account account; //account to which transation need to be performed
    //Constructor
    public Transaction(String transactionType,double amount,Account account){
        this.transactionType = transactionType;
        this.amount = amount;
        this.account = account;
    }//end of Constructor
    @Override
    public void run() {
        if(transactionType.equalsIgnoreCase("withdraw"))
            account.withdraw(amount);
        else
            account.deposit(amount);
    }//end of run method
}//end of class Transaction
//following class is the tester class
class AccountTest{
    public static void main(String[] args){
//creating instance of accounts
        Account a1 = new Account("John",2000); //passing name and initial balance
        Account a2 = new Account("Peter",5000); //passing name and initial balance
        Account a3 = new Account("David",500); //passing name and initial balance
//creating instance of transactions
        Transaction t1 = new Transaction("withdraw",100,a1);//withdraw 100$ from account a1
        Transaction t2 = new Transaction("deposit",120,a2);//deposit 120$ to account a2
        Transaction t3 = new Transaction("deposit",10,a1);//deposit 10$ to account a1
        Transaction t4 = new Transaction("withdraw",1000,a3);//withdraw 1000$ from account a3
        //creating array list of transactions
        ArrayList<Transaction> transactions = new ArrayList<Transaction>();
//adding the transactions to ArrayList
        transactions.add(t1);
        transactions.add(t2);
        transactions.add(t3);
        transactions.add(t4);
//excuting all the transactions
        ExecutorService myExecutor = Executors.newFixedThreadPool(4);
        for (Transaction t:transactions) {
            myExecutor.execute(t);
        }
        myExecutor.shutdown();
        while (!myExecutor.isTerminated()) {
        }
    }
}

Develop a GUI Java application that will allow the players to submit information about themselves and the games that they are playing on-line. The information will be stored in a simple Oracle database. The database tables are shown in the following picture:

 

 

 

You can use SQL Developer to create your database in Oracle server.

 

You should populate the table Game with titles of games that you have "played" during this semester. 

 

Your GUI should provide the necessary SWING or JavaFX components that will allow the user to enter and display the data. You will use JDBC to provide the following operations:

    Insert game and player information into the database.
    Update the existing player information.
    Display reports with player and played games information. You may use a JTable or other components to display the reports. Allow the user to select player_id.

 

Use prepared statements to implement all database operations.

Overview

To develop a GUI Java application that interacts with an Oracle database, you will need to use JavaFX or Swing for the GUI, JDBC for the database connection, and SQL Developer for database management.
Steps

    Set up the Oracle Database

    Use SQL Developer to create your tables in the Oracle server.

    Create the GUI

    Use JavaFX or Swing to create the GUI. This should include fields for the user to enter their information and the games they are playing.

    Connect to the Database

    Use JDBC to connect your Java application to the Oracle database.

    Implement Database Operations

    Use prepared statements to insert, update, and display data.

Sample Code

Here is a basic example of how you might set up a connection to your database and implement the insert operation.

import java.sql.*;

public class DatabaseConnection {
  private Connection connection;

  public DatabaseConnection() {
  try {
  connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "username", "password");
  } catch (SQLException e) {
  e.printStackTrace();
  }
  }

  public void insertPlayer(String name, String game) {
  String sql = "INSERT INTO players (name, game) VALUES (?, ?)";

  try {
  PreparedStatement statement = connection.prepareStatement(sql);
  statement.setString(1, name);
  statement.setString(2, game);
  statement.executeUpdate();
  } catch (SQLException e) {
  e.printStackTrace();
  }
  }
}

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
        String s = "prepinsta";
        String s1 = "";
        s1 = s.replaceAll("[aeiou]", ""); 
        System.out.println("String after removing vowel : "+s1); 
	}

}

Output

String after removing vowel : prpnst



// Java program to remove vowels from a String
import java.util.Arrays;
import java.util.List;

class Main {
    static String remVowel(String str) {
        return str.replaceAll("[aeiouAEIOU]", "");
    }
    // Driver Code
    public static void main(String[] args) {
        String str = "Prepinsta";
        System.out.println(remVowel(str));
    }

}

Output

Prpnst



JAVA

The Java ExecutorService interface, java. util. concurrent. ExecutorService , represents an asynchronous execution mechanism which is capable of executing tasks concurrently in the background.

Interface ExecutorService. An Executor that provides methods to manage termination and methods that can produce a Future for tracking progress of one or more asynchronous tasks. An ExecutorService can be shut down, which will cause it to reject new tasks.

Introduction to Collections

Virtually any non-trivial program in Java – or any other programming language for that matter – deals with groups of objects organized together within a collecting or containing object. 

The most familiar container object is the indexed array, which is supported by most, if not all, modern general-purpose programming languages.

Arrays, which are typically fixed in size once created, represent a sequential arrangement of like objects where access to individual elements is via a positional index into the array. An array is typically used to represent a (possibly sorted) list of objects that might be traversed in stored order.

Another common collection is the associative array, also known as a map, which is organized non-sequentially in unknown order by key/value pairs, and does not need to be permanently fixed in size when created. The "value" is the element itself (or a reference to it) and the "key" is a unique identifier for that element. Generally the memory position of a value is determined by applying a hashing algorithm to its key. 

Maps represent mappings of items with unique context, such as dictionaries or other keyed lists. Whereas indexed arrays provide element access by sequential position, maps provide element access by named association.  

Each of these types of arrays has its own advantages and disadvantages depending on context, but how these containers are used is another critical concern in terms of ease of use, flexibility, and reusability.  This is where collections frameworks become important.
Collection Frameworks

A collections framework represents a unified application programming interface for not only representing collections of objects, but also for manipulating them in a consistent manner at a high enough level of abstraction to encourage reusability and good object-oriented design. 

Well-designed object-oriented collection frameworks provide an architecture and infrastructure with the following three characteristics:

    Interfaces. Abstract data types for representing collections of objects that provide behaviors for manipulating collections. These interfaces and their methods work independently from implementation details of the objects they collect together.
    Implementations. Concrete implementations of the interfaces that characterize common types of collections. They provide core functionality of the framework without additional development work.
    Algorithms. Methods that provide computations on collections, such as sorting, searching, reversals, and copying.

Why use a collection framework?

Developers and managers both have much to gain by promoting the use of a collections framework.

Many OO programmers understand the benefits of collections frameworks, such as Smalltalk’s collection classes and C++’s Standard Template Library (STL).

Collections frameworks reduce programming effort by providing useful data structures and algorithms commonly used in most software systems, leaving more time to focus on the unique details of a development project. 

They also promote software reuse, since the interfaces and behaviors they define encourage reusability by their very nature.

Moreover, they provide interoperability and consistency between otherwise unrelated interfaces, resulting in reduced inter-object dependencies and increased flexibility, which are important attributes of good object-oriented design.

While versions of Java before the Java 2 platform (jdk1.2) provided collection implementations with Array, Vector, and Hashtable, they did not provide a framework within to use these collections, making efficient and intelligent use of collections non-trivial and time-consuming. 

This is now changed with the introduction of Java 2 and its extensible Collections API. In fact, the Collections API is one of the most important new enhancements to the Java platform.

For those using Java 1.1, the Collections API is also available as a separate package, albeit with some limitations.
The Java Collections API – Interfaces and Implementations

The Java Collections API incorporates all the characteristics listed above for a collections framework. Most of the interfaces and classes are found in java.util while some of the infrastructure interfaces are in java.lang.

The framework itself is organized hierarchically with the Collection interface as the root.
Collection Interface

The Collection interface represents a group of elements and provides a high level of abstraction for transferring data between unrelated interfaces. It is defined as follows:

    public interface Collection {
        // Basic Operations
        int size();
        boolean isEmpty();
        boolean contains(Object element);
        boolean add(Object element);     // Optional
        boolean remove(Object element);  // Optional
        Iterator iterator();
     
        // Bulk Operations
        boolean containsAll(Collection c);
        boolean addAll(Collection c);    // Optional
        boolean removeAll(Collection c); // Optional
        boolean retainAll(Collection c); // Optional
        void clear();                    // Optional
     
        // Array Operations
        Object[] toArray();
        Object[] toArray(Object a[]);
    }

Collection provides all the basic operations one might expect for a collection of objects: creation, addition, deletion, and iteration, as well as query and conversion operations.

Next in the hierarchy from Collection are the Set and List interfaces.
Set Interface

A Set is a Collection with unique elements and prevents duplication within the collection. Two concrete implementations are provided:

    HashSet – stores its elements in a hashtable and provides the best performance
    TreeSet – guarantees iteration order of its elements by storing them in a red-black tree

In addition, an abstract skeletal implementation is provided in AbstractSet for those who want more functionality without the effort of implementing basic operations.
List Interface

A List is a Collection with an ordered sequence of its elements and may contain duplicate objects. 

Lists can be accessed by integer index, giving the user precise control over element position. 

The Vector class is an example of a List that has been retrofitted to implement the List interface in Java 2. 

The List interface adds operations to Collection for positional access, search, and range view. In addition to Vector, two new concrete implementations are provided:

    ArrayList – stores its elements internally as an array and provides best performance under most circumstances
    LinkedList – stores its elements as a doubly-linked list

Maps

The Collections API also supports maps, but within a hierarchy distinct from Collection. 

A Map is an object that maps keys to values, where the list of keys is itself a Collection object. The map can contain duplicate values, but the keys in a map must be distinct.

The top of this hierarchy is the Map interface, which is defined as follows:

    public interface Map {
        // Basic Operations
        Object put(Object key, Object value);
        Object get(Object key);
        Object remove(Object key);
        boolean containsKey(Object key);
        boolean containsValue(Object value);
        int size();
        boolean isEmpty();
     
        // Bulk Operations
        void putAll(Map t);
        void clear();
     
        // Collection Views
        public Set keySet();
        public Collection values();
        public Set entrySet();
     
        // Interface for entrySet elements
        public interface Entry {
            Object getKey();
            Object getValue();
            Object setValue(Object value);
        }
    } 

The Hashtable class is an example of a Map that has also been retrofitted to implement the Map interface in Java 2. 

Two additional concrete implementations of Map are provided:

    HashMap – stores its elements in a hashtable and provides the best performance
    TreeMap – guarantees iteration order of its elements by storing them in a red-black tree

As with the Set interface, an abstract skeletal implementation is provided in AbstractMap.
SortedSet and SortedMap Interfaces

Following from Set in the Collections hierarchy and from Map in the Map hierarchy are SortedSet and SortedMap interfaces for maintaining collections in sorted order.

The Collections API provides support for object ordering in two ways:

    One is with the Comparable interface, which imposes a natural order on classes that implement it.
    For classes that don't implement Comparable, or when one needs even more control over ordering, the Comparator interface is provided.

In Java 2, String, all the wrapper classes (Integer, Double, etc.) and several other standard classes have been retrofitted to implement the Comparable interface, but users of the Collections API with Java 1.1 can create Comparator objects when sorted collections are needed.

Any class that implements either interface can be used in a SortedSet or SortedMap object. The TreeSet and TreeMap classes are concrete implementations of SortedSet and SortedMap respectively.
The Java Collections API – Algorithms

The Collections API also provides reusable functionality with a core set of algorithms that operate on List collections. Furthermore, the polymorphic nature of these algorithms enables their operation on a variety of classes that implement a common interface.

The provided operations include:

    Sorting – reorders a List according to the ordering defined by the Comparable or Comparator implementation of it elements
    Shuffling – does the opposite by destroying the ordering of a List
    Reverse – reverses the order of a List
    Fill – overwrites every List element with a specified value
    Copy – copies elements of one List into another List
    Binary search – searches for a specified List element using a binary search algorithm
    Extreme value search – finds the minimum and maximum values in a collection

The last two algorithms operate on any Collection objects rather than just Lists.
The Java Collections API – Other Features and Benefits

The Collections API has some other important features that add flexibility, performance, and robustness to programs that utilize it.

    Set Algebra – The core operations in Collections provide some powerful tools for performing set algebra, such as finding subsets, intersections, and unions between objects, including Collection views of Maps.
    Performance – Collections have much better performance compared to the older Vector and Hashtable classes with the elimination of synchronization overhead (Vector and Hashtable remain synchronized as before).
    Thread Safety – When synchronization is required, wrapper implementations are provided for temporarily synchronizing existing collection objects.
    Immutability – When immutability is required (such as using a Collection as a bean property), wrapper implementations are provided for making a collection immutable.
    Extensibility – The interfaces and abstract classes provide an excellent starting point for adding functionality and features to create specialized object collections.

Java™ database connectivity (JDBC) is the JavaSoft specification of a standard application programming interface (API) that allows Java programs to access database management systems. The JDBC API consists of a set of interfaces and classes written in the Java programming language.

ODBC is an SQL-based Application Programming Interface (API) created by Microsoft that is used by Windows software applications to access databases via SQL. JDBC is an SQL-based API created by Sun Microsystems to enable Java applications to use SQL for database access.

MILITARY TECHNOLOGY AND WEAPONS

The M1 Abrams (/ˈeɪbrəmz/)[10] is a third-generation American main battle tank designed by Chrysler Defense (now General Dynamics Land Systems)[11] and named for General Creighton Abrams. Conceived for modern armored ground warfare and now one of the heaviest tanks in service at nearly 68 short tons (62 metric tons), it introduced several modern technologies to US armored forces, including a multifuel turbine engine, sophisticated Chobham composite armor, a computer fire control system, separate ammunition storage in a blowout compartment, and NBC protection for crew safety. Initial models of the M1 were armed with a 105 mm M68 gun, while later variants feature a license-produced Rheinmetall 120 mm L/44 designated M256.

The M1 Abrams was developed from the failed MBT-70 project that intended to replace the obsolete M60 tank. There are three main operational Abrams versions, the M1, M1A1, and M1A2, with each new iteration seeing improvements in armament, protection, and electronics.[12]

The Abrams was to be replaced in U.S. Army service by the XM1202 Mounted Combat System, but since that project was canceled, the Army has opted to continue maintaining and operating the M1 series for the foreseeable future by upgrading with improved optics, armor, and firepower.

The M1 Abrams entered service in 1980 and serves as the main battle tank of the United States Army and formerly of the United States Marine Corps (USMC). The export version is used by the armies of Egypt, Kuwait, Saudi Arabia, Australia, Poland and Iraq. The Abrams was first used in combat by the U.S. in the Gulf War and later, both the War in Afghanistan and the Iraq War, while other countries deploying Abrams tanks have been Iraq in the war against the Islamic State and Saudi Arabia in the Yemeni Civil War. 

Hydropneumatic suspension is a type of motor vehicle suspension system, designed by Paul Magès, invented by Citroën, and fitted to Citroën cars, as well as being used under licence by other car manufacturers, notably Rolls-Royce (Silver Shadow), Bmw 5-Series e34 Touring, Maserati (Quattroporte II) and Peugeot. It was also used on Berliet trucks and has been used on Mercedes-Benz cars, where it is known as Active Body Control.[1] The Toyota Soarer UZZ32 "Limited" was fitted with a fully integrated four-wheel steering and a complex, computer-controlled hydraulic Toyota Active Control Suspension in 1991. Similar systems are also widely used on modern tanks and other large military vehicles. The suspension was referred to as fr:Suspension oléopneumatique in early literature, pointing to oil and air as its main components.[2][3]

The purpose of this system is to provide a sensitive, dynamic and high-capacity suspension that offers superior ride quality on a variety of surfaces.[4]

A hydropneumatic system combines the advantages of two technological principles:

    Hydraulic systems use torque multiplication in an easy way, independent of the distance between the input and output, without the need for mechanical gears or levers.
    Pneumatic systems are based on the fact that gas is compressible, so equipment is less subject to shock damage.
    Gas absorbs excessive force, whereas liquid in hydraulics directly transfers force

The suspension system usually features both self-leveling and driver-variable ride height, to provide extra clearance in rough terrain.[5]

The principles illustrated by the successful use of hydropneumatic suspension are now used in a broad range of applications, such as aircraft oleo struts and gas filled automobile shock absorbers, first patented in the U.S. in 1934[6] by Cleveland Pneumatic Tool Co. This type of suspension for automobiles was inspired by the pneumatic suspension used for aircraft landing gear, which was also partly filled with oil for lubrication and to prevent gas leakage, as patented in 1933 by the same company.[7] Other modifications followed, with design changes such as the 1960 "Double stage oleo-pneumatic shock absorber" patented by Peter Fullam John and Stephan Gyurik.[8]
High position
Low position
Citroën suspension sphere
Challenger 2, main battle tank of the British army, uses hydropneumatic suspension for better crew comfort and increased firing accuracy
Effects

Hydropneumatic suspension has a number of natural advantages over steel springs, generally recognized in the auto industry.[9]

Suspension and springing technology is not generally well understood by consumers, leading to a public perception that hydropneumatics are merely "good for comfort". They also have advantages related to handling and control efficiency, solving a number of problems inherent in steel springs that suspension designers have previously struggled to eliminate.[10]

Although auto manufacturers understood the inherent advantages over steel springs, there were two problems. First, it was patented by the inventor, and second it had a perceived element of complexity, so automakers like Mercedes-Benz, British Leyland (Hydrolastic, Hydragas), and Lincoln sought to create simpler variants using a compressed air suspension.[11][12]

Citroën's application of the system had the disadvantage that only garages equipped with special tools and knowledge were qualified to work on the cars, making them radically different from ordinary cars with common mechanicals.[13]

France was noted for the poor quality of its roads after World War II, but the hydropneumatic suspension as fitted to the Citroën ID/DS and later cars reportedly ensured a smooth and stable ride there.[4][14][15]

Hydropneumatic suspension offers no natural roll stiffness. There have been many improvements to the system over the years, including steel anti-roll bars, variable ride firmness (Hydractive), and active control of body roll (Citroën Activa).[16]
Basic mechanical layout
Blue: Nitrogen gas; Gold: Hydraulic fluid under pressure from engine-driven pump

This system uses a belt or camshaft driven pump from the engine to pressurise a special hydraulic fluid, which then powers the brakes, suspension and power steering.[10][17] It can also power any number of features such as the clutch, turning headlamps and even power windows.[10]

Nitrogen is used as the trapped gas to be compressed, since it is unlikely to cause corrosion. The actuation of the nitrogen spring reservoir is performed through an incompressible hydraulic fluid inside a suspension cylinder.[4] By adjusting the filled fluid volume within the cylinder, a leveling functionality is implemented.[4] The nitrogen gas within the suspension sphere is separated from the hydraulic oil by a rubber membrane.[4]
History
1954 Citroën Traction Avant 15CVH - high position

Citroën first introduced this system in 1954 on the rear suspension of the Traction Avant.[18] The first four-wheel implementation was in the advanced DS in 1955.[19] Major milestones of the hydropneumatics design were:

    During World War II, Paul Magès, an employee of Citroën, with no formal training in engineering, secretly develops the concept of an oil and air suspension to combine a new level of softness with vehicle control and self-levelling.[20]
    1954 Traction Avant 15H: Rear suspension, using LHS hydraulic fluid.
    1955 Citroën DS: Suspension, power steering, brakes and gearbox/clutch assembly powered by high pressure hydraulic assistance. A belt driven 7-piston pump, similar in size to a power steering pump, generates this pressure when the engine is running.[21]
    1960 The United States Patent and Trademark Office issues A U.S. Patent 2959410 A for a Double stage oleo-pneumatic shock absorber using concepts very similar to those developed earlier by Paul Magès - Patent forms the basis for aircraft oleo struts and gas-filled shock absorbers[8]
    1965 Rolls-Royce licenses Citroën technology for the suspension of the new Silver Shadow[22]
    1967 The superior non-hygroscopic LHM mineral fluid is introduced
    1969 Citroën M35: The Citroën M35 was a coupé derived from the Ami 8, and equipped with a Wankel engine and a hydropneumatic suspension. The bodies were produced by Heuliez from 1969 to 1971.
    1969 National Highway Traffic Safety Administration legalizes LHM mineral fluid in the United States
    1970 Citroën GS: Adaptation of the hydropneumatic suspension to a small car
    1970 Citroën SM: Variable speed auto-returning power steering, dubbed DIRAVI, and hydraulically actuated directional high beams. The beams of all six headlights are maintained parallel to the road surface by a hydraulic system separate from the directional long range high beams. The headlights’ steering and leveling systems are totally separate from the central system that powers the suspension, steering and brakes and use a different fluid, a glycerine type.
    1972 BMW E12 5-series released with optional hydropneumatic rear suspension. Coil springs are retained, though softer than conventional coils for the same car. This system was offered in most BMW 5-, 6-, and 7-series models, as well as the E30 Touring (station wagon/estate), into the 1990s when it was replaced with an air suspension. Until late 1987, the hydraulic circuit was separate from the power steering, and the pump electrically-powered.
    1974 National Highway Traffic Safety Administration bans vehicles with height adjustable suspension, impacting consumers in the United States. Ban repealed 1981.
    1974 Citroën CX: The car was one of the most modern of its time, combining Citroën's unique hydro-pneumatic integral self-leveling suspension and speed-adjustable DIRAVI power steering (first introduced on the Citroën SM). The suspension was attached to sub frames that were fitted to the body through flexible mountings, to improve even more the ride quality and to reduce road noise. The British magazine Car described the sensation of driving a CX as hovering over road irregularities, much like a ship traversing above the ocean floor.
    1974 Maserati Quattroporte II: was on an extended Citroën SM chassis, available since Citroën had purchased the Italian company and was the only Maserati Quattroporte to feature hydropneumatic suspension and front-wheel drive
    1975 The Mercedes-Benz 450SEL 6.9 W116 replaces the air suspension of the 6.3 with hydropneumatic suspension, with the pump driven by the engine's timing chain instead of an external belt. This adaptation was used only for the suspension. Power steering and brakes were conventional hydraulic- and vacuum-powered, respectively.
    1980 Mercedes-Benz W126 500SEL used hydropneumatic suspension as optional, later this system was available on 420SEL and 560SEL models.
    1983 Citroën BX, built as a 4WD in 1990[23]
    1984 Mercedes-Benz W124 selected models of E class had this technology (rear only hydraulic suspension) height adjustable suspension and self-levelling suspension mixed with coil springs.
    1987 BMW E30 3-series Touring (station wagon/estate) begins production in July, offering the same self-leveling hydropneumatic rear suspension as previous BMW, with the difference that the pump is a parallel circuit on the belt-driven steering assist pump, and shares its fluid. Starting in September, the E32 7-series (in production since June '86) switches to this pump from the previous electric pump. The BMW E34 5-series begins production in November, also with this new pump.
    1989 Citroën XM: Hydractive Suspension, electronic regulation of the hydropneumatic system; sensors measure acceleration and other factors [24]
    1990 Peugeot 405 Mi16x4: first Peugeot equipped with rear hydropneumatic suspension[citation needed]
    1990 JCB Fastrac high speed agricultural tractor uses this system for its rear suspension.[citation needed]
    1991 Toyota Soarer UZZ32 used hydraulic struts controlled by an array of sensors with yaw velocity sensors, vertical G sensors, height sensors, wheel speed sensors, longitudinal and lateral G sensors) that detected cornering, acceleration and braking force.
    1993 Citroën Xantia used hydropneumatic, on 1995 Optional Activa (active suspension) system, eliminating body roll by acting on anti-roll bars.[24] A Xantia Activa was able to reach more than 1g lateral acceleration, and still holds the record speed (85 km/h (53 mph)) through the moose test maneuver, due to its active anti-roll bars.[25] This test is conducted by the magazine Teknikens Värld's, as a test of avoiding a moose in the road. The second place car, Porsche 997 GT3 RS was able to manage 82 km/h (51 mph).[26][24]
    1995 Mercedes-Benz E-Class (W210) on estate (wagon) models on rear suspension used hydraulic suspension with spheres height adjustable suspension and self-levelling suspension mixed with coil springs.
    1999 Mercedes-Benz CL-Class (C215) and Mercedes-Benz S-Class (W220) introduce optional Active Body Control - an electronically controlled hydropneumatic system [27]
    2001 Citroën C5: Hydractive 3 removes the need for central hydraulic pressure generation; combined pump/sphere unit for the suspension only and with electric height adjustment sensors. Hydractive 3+ was available on some models[citation needed]
    2005 Citroën C6: An improved version of the C5 system known as Hydractive 3+ (also fitted to some C5 models), C6 with a V6 engine was fitted with AMVAR version of Hydractive 3+ (sometimes called Hydractive 4)[citation needed]
    2007 Citroën C5 II: Hydractive 3+ as optional on Exclusive models. other versions of the car have normal spring suspension.
    2008 JCB Fastrac high speed 7000 series agricultural tractors now use this system for front and rear suspension.[citation needed]
    2019 Mercedes-Benz 450 GLE introduces eActive Body Control on a Sport utility vehicle, discarding mechanical roll bars, notably enhancing performance.[28]
    2023 BYD Auto introduces advanced active hydropneumatic suspension systems on the Yangwang U8 SUV and U9 sportscar. The suspension features the ability to drive with only three wheels fitted, and jump in the air while parked remaining level.[29]

Functioning
Diagram of the Hydractive system, showing centre spheres and stiffness valves

At the heart of the system, acting as pressure sink as well as suspension elements, are the so-called spheres, five or six in all; one per wheel and one main accumulator as well as a dedicated brake accumulator on some models. On later cars fitted with Hydractive or Activa suspension, there may be as many as ten spheres. Spheres consist of a hollow metal ball, open to the bottom, with a flexible Desmopan rubber membrane, fixed at the 'equator' inside, separating top and bottom. The top is filled with nitrogen at high pressure, up to 75 bar, the bottom connects to the car's hydraulic fluid circuit. The high pressure pump, powered by the engine, pressurizes the hydraulic fluid (LHM – liquide hydraulique minéral) and an accumulator sphere maintains a reserve of hydraulic power. This part of the circuit is at between 150 and 180 bars. It powers the front brakes first, prioritised via a security valve, and depending on type of vehicle, can power the steering, clutch, gear selector, etc.

Pressure flows from the hydraulic circuit to the suspension cylinders, pressurizing the bottom part of the spheres and suspension cylinders. Suspension works by means of a piston forcing LHM into the sphere, compressing the nitrogen in the upper part of the sphere; damping is provided by a two-way 'leaf valve' in the opening of the sphere. LHM has to squeeze back and forth through this valve which causes resistance and controls the suspension movements. It is the simplest damper and one of the most efficient. Ride height correction (self leveling) is achieved by height corrector valves connected to the anti-roll bar, front and rear. When the car is too low, the height corrector valve opens to allow more fluid into the suspension cylinder (e.g., the car is loaded). When the car is too high (e.g. after unloading) fluid is returned to the system reservoir via low-pressure return lines. Height correctors act with some delay in order not to correct regular suspension movements. The rear brakes are powered from the rear suspension circuit. Because the pressure there is proportional to the load, so is the braking power.
Working fluid

Citroën quickly realized that standard brake fluid was not ideally suited to high pressure hydraulics, and developed a special red-coloured hydraulic fluid named LHS (Liquide Hydraulique Synthétique), which they used from 1954 to 1967. The chief problem with LHS was that it absorbed moisture and dust from the air, which caused corrosion in the system. Most hydraulic brake systems are sealed from the outside air by a rubber diaphragm in the reservoir filler cap, but the Citroën system had to be vented to allow the fluid level in the reservoir to rise and fall, thus it was not hermetically sealed. Consequently, each time the suspension would rise, the fluid level in the reservoir dropped, drawing in fresh moisture-laden air. The large surface of the fluid in the reservoir readily absorbed moisture. Since the system recirculates fluid continually through the reservoir, all the fluid was repeatedly exposed to the air and its moisture content.
LHM reservoir and green suspension sphere in a Citroën Xantia

To overcome these shortcomings of LHS, Citroën developed a new green fluid, LHM (Liquide Hydraulique Minéral). LHM is a mineral oil, quite close to automatic transmission fluid. Mineral oil is hydrophobic, unlike standard brake fluid; therefore, water-vapour bubbles do not form in the system, as would be the case with standard brake fluid, creating a "spongy" brake feel. Use of mineral oil has thus spread beyond Citroën, Rolls-Royce, Peugeot, and Mercedes-Benz, to include Jaguar, Audi, and BMW.[30]

LHM, being a mineral oil, absorbs only an infinitesimal proportion of moisture, plus it contains corrosion inhibitors. The dust inhalation problem continued, so a filter assembly was fitted into the hydraulic reservoir. Cleaning the filters and changing the fluid at the recommended intervals removes most dust and wear particles from the system, ensuring the longevity of the system. Failure to keep the oil clean is the main cause of problems. It is also imperative to always use the correct fluid for the system; the two types of fluids and their associated system components are not interchangeable. If the wrong type of fluid is used, the system must be drained and rinsed with Hydraflush (Total's Hydraurincage), before draining again and filling with the correct fluid. These procedures are clearly described in DIY manuals obtainable from automotive retailers.

The latest Citroën cars with Hydractive 3 suspension have a new orange coloured LDS hydraulic fluid. This lasts longer and requires less frequent attention. It conforms to DIN 51524-3 for HVLP.[31]
Manufacturing
	
This section needs additional citations for verification. Please help improve this article by adding citations to reliable sources in this section. Unsourced material may be challenged and removed. (June 2018) (Learn how and when to remove this template message)

The whole high pressure part of the system is manufactured from steel tubing of small diameter, connected to valve control units by Lockheed type pipe unions with special seals made from Desmopan, a type of polyurethane thermoplastic compatible with the LHM fluid. The moving parts of the system, e.g., suspension strut or steering ram, are sealed by contact seals between the cylinder and piston for tightness under pressure. The other plastic/rubber parts are return tubes from valves such as the brake control or height corrector valves, also catching seeping fluid around the suspension push-rods. Height corrector, brake master valve and steering valve spools, and hydraulic pump pistons have extremely small clearances (1–3 micrometres) within their cylinders, permitting only a very low leakage rate. The metal and alloy parts of the system rarely fail, even after excessively high mileages, but the elastomer components (especially those exposed to the air) can harden and leak, typical failure points for the system.

Spheres are not subject to mechanical wear, but suffer pressure loss, due to the pressurised nitrogen diffusing through the membrane. They can, however, be recharged, which is cheaper than replacing them. When Citroën designed their Hydractive 3 suspension they redesigned the spheres with new nylon membranes, which greatly slow the rate of deflation. These are recognisable by their grey colouring.

Classic (non-saucer) green- (and grey-) coloured suspension spheres typically last between 60,000 and 100,000 km. Spheres originally had a threaded plug on top for recharging. Newer ('saucer') spheres do not have this plug, but it can be retrofitted, enabling them to be recharged with gas. The sphere membrane has an indefinite life unless run at low pressure, which leads to rupture. Timely recharging, approximately every 3 years, is thus vital. A ruptured membrane means suspension loss at the attached wheel; however, ride height is unaffected. With no springing other than the (slight) flexibility of tyres, hitting a pothole with a flat sphere can bend the suspension parts or dent a wheel rim. In the case of main accumulator sphere failure, the high pressure pump is the only source of braking pressure for the front wheels. Some older cars had a separate front brake accumulator on power steering models.

The old LHS and LHS2 (coloured red) cars used a different elastomer in the diaphragms and seals that is not compatible with green LHM. The orange LDS fluid in Hydractive cars is also incompatible with other fluids.
Hydractive

Hydractive Suspension is an automotive technology introduced by Citroën in 1990. The prototype debuted in 1988 on the Citroën Activa concept. It describes a development of the 1954 hydropneumatic suspension design using additional electronic sensors and driver control of suspension performance. The driver can make the suspension stiffen (sport mode) or ride in outstanding comfort (soft mode). Sensors in the steering, brakes, suspension, throttle pedal and gearbox feed information on the car's speed, acceleration, and road conditions to an on-board computer, which in turn activates or deactivates an extra pair of suspension spheres on the circuit, to enable either a more smooth supple ride or tighter handling in corners. On the Activa and Activa 2, the car leaned inwards by one degree in turns - Citroën acknowledged that this was somewhat of a marketing gimmick, and that a lean of zero degrees was optimal.[32]

An additional, perhaps unexpected, benefit of active suspension is that fuel consumption and tire wear is lowered overall. The negative camber designed into most suspensions in order to maximize the size of the contact patch when turning leads to tire scrub, which wears out tires and increases fuel consumption.[32]
Hydractive 1 and Hydractive 2

Citroën Hydractive (and later Hydractive 2) suspension was available on several models, including the XM and Xantia, which had a more advanced sub-model known as the Activa. The first Hydractive suspension systems (now known as Hydractive 1) had two user presets, Sport and Auto. In the Sport setting the car's suspension was always kept in its firmest mode. In the Auto setting, the suspension was switched from soft to firm mode temporarily when a speed-dependent threshold in accelerator pedal movement, brake pressure, steering wheel angle, or body movement was detected by one of several sensors.[24]

In Hydractive 2, the preset names were changed to Sport and Normal. In this new version the Sport setting would no longer keep the suspension system in firm mode, but instead lowered the thresholds significantly for any of the sensor readings also used in Normal mode, allowing for a similar level of body firmness during cornering and acceleration, without the sacrifice in ride quality the Sport mode in Hydractive 1 systems had caused.

Whenever the Hydractive 1 or 2 computers received abnormal sensor information, often caused by malfunctioning electrical contacts, the car's suspension system would be forced into its firm setting for the remainder of the ride.

Starting with Xantia model year 1994 and XM model year 1995, all models featured an additional sphere and valve that together functioned as a pressure reservoir for rear brakes because of new hydraulic locks, letting the car retain normal ride height for several weeks without running the engine. Correctly called the SC/MAC sphere, it often became known as the 'anti-sink' sphere, because of its ability to better maintain rear suspension height.
Hydractive 3

The 2001 Citroën C5 has continued development of Hydractive suspension with Hydractive 3. Compared to earlier cars, the C5 stays at normal ride height even when the engine is turned off for an extended period, through the use of electronics. The C5 also uses orange synthetic hydraulic fluid named LDS fluid in place of the green LHM mineral oil used in millions of hydropneumatic vehicles.[31]

A further improved Hydractive 3+ variation was for cars with top engines on the Citroën C5 and in 2005 was standard on the Citroën C6. Hydractive 3+ systems contain additional spheres that can be engaged and disengaged via a Sport button, resulting in a firmer ride.

The Hydractive 3 hydraulic suspension has 2 automatic modes:

    Motorway position (lowering by 15 mm of the vehicle height above 110 km/h)
    Poor road surface position (raising by 13 mm of the vehicle height below 70 km/h)

The BHI of the Hydractive 3 suspension calculates the optimum vehicle height, using the following information:

    Vehicle speed
    Front and rear vehicle heights

The 3+ Hydractive hydraulic suspension has 3 automatic modes:

    Motorway position (lowering by 15 mm of the vehicle height above 110 km/h)
    Poor road surface position (raising by 13 mm of the vehicle height below 70 km/h)
    Comfort or dynamic suspension (variation of suspension firmness)

The BHI of the 3+ Hydractive suspension calculates the optimum vehicle height, using the following information:

    Vehicle speed
    Front and rear vehicle heights
    Rotation speed of steering wheel
    Angle of rake of steering wheel
    Vehicle's longitudinal acceleration
    Vehicle's lateral acceleration
    Speed of suspension travel
    Movement of the accelerator throttle

C5 I (2001–2004)

    Hydractive hydraulic suspension 3: EW7J4 and DW10TD engines.
    Hydractive hydraulic suspension 3+: EW10J4, EW10D, ES9J4S and DW12TED4 engines.

C5 II (2004–2007)

    Hydractive hydraulic suspension 3: EW7J4, EW10A, DV6TED4 and DW10BTED4 engines.
    Hydractive hydraulic suspension 3+: ES9A and DW12TED4 engines (prior to RPO No 10645).

C6 (2005–2012)

    Hydractive hydraulic suspension 3+: Standard on all models.

C5 III X7 (2007–2017)

    Hydractive hydraulic suspension 3+: Depends on country and trim.

See also

    Hydrolastic - a type of automotive suspension system used in many cars produced by British Leyland and its successor companies.
    Hydragas - is an improved form of Hydrolastic, using nitrogen-pressurised gas springs, rather than rubber.
    Hydraulic recoil mechanism - uses the same principal for artillery.
    Oleo strut - suspension for most large aircraft, using the same physical properties of air and hydraulic fluid.
    Active Body Control - ABC, is the Mercedes-Benz brand name used to describe hydropneumatic fully active suspension, that allows control of the vehicle body motions and therefore virtually eliminates body roll in many driving situations including cornering, accelerating, and braking.
    Air suspension - a type of vehicle suspension powered by an electric or engine-driven air pump or compressor. This compressor pumps the air into a flexible bellows, usually made from textile-reinforced rubber. The air pressure inflates the bellows, and raises the chassis from the axle.
    Electronic Air Suspension (EAS) is the air suspension system installed on the second version of the Range Rover. Five suspension heights are offered by this system.

// Go back to Hydropneumatic suspension on wikipedia
and study it

To make your own tank you will need a 41 tons of steel , armour, 14 wheels, 50 ft of track
 and a turret with 1 cannon and 3 machine guns. A gas turbine engine

Step 1: Build hull and turrent

Your tank will consist of 2 primary components:
A hull which moves the tank, and a turret which contains
all it's firepower. For the best results
construct each component separately before final
assembly

The driver sits in the hull which is the body the base
of the tank and in the turret you got the gunner, the
commander and the loader. The space inside the turret is
only 7ft in diameter 

Step 2: Add top-secret armor

Incase your hull and turret with multiple layers of
armor 

There is steel,ceramic, and kevlar and depleted uranium

Depleted uranium (DU; also referred to in the past as Q-metal, depletalloy or D-38) is uranium with a lower content of the fissile isotope 235
U
than natural uranium.[2] Natural uranium contains about 0.72% 235
U
, while the DU used by the U.S. Department of Defense contains 0.3% 235
U
or less. The less radioactive and non-fissile 238
U
constitutes the main component of depleted uranium.

Depleted uranium is notable for the extremely high density of its metallic form: at 19.1 grams per cubic centimetre (0.69 lb/cu in), DU is 68.4% denser than lead. Civilian uses include counterweights in aircraft, radiation shielding in medical radiation therapy and industrial radiography equipment, and containers for transporting radioactive materials. Military uses include armor plating and armor-piercing projectiles.

Depleted uranium has lower mass fractions—up to three times less—of 235
U
and 234
U
than natural uranium. Since 238
U
has a much longer half-life than the lighter isotopes, DU is about 40% less radioactive than natural uranium.[2][3][4] Most of the alpha radiation comes from 238
U
and 234
U
[notes 1] whereas beta radiation comes from 234
Th
and 234
Pa
that are formed within a few weeks.

Most depleted uranium arises as a by-product of the production of enriched uranium for use as fuel in nuclear reactors and in the manufacture of nuclear weapons. Enrichment processes generate uranium with a higher-than-natural concentration of lower-mass-number uranium isotopes (in particular 235
U
, which is the uranium isotope supporting the fission chain reaction) with the bulk of the feed ending up as depleted uranium.

The use of DU in munitions is controversial because of concerns about potential long-term health effects.[5][6] Normal functioning of the kidney, brain, liver, heart, and numerous other systems can be affected by exposure to uranium, a toxic metal.[7] It is only weakly radioactive because of the long radioactive half-life of 238
U
(4.468 × 109 or 4,468,000,000 years) and the low amounts of 234
U
(half-life about 246,000 years) and 235
U
(half-life 700 million years). The biological half-life (the average time it takes for the human body to eliminate half the amount in the body) for uranium is about 15 days.[8] The aerosol or spallation frangible powder produced by impact and combustion of depleted uranium munitions can potentially contaminate wide areas around the impact sites, leading to possible inhalation by human beings.[9]

The actual level of acute and chronic toxicity of DU is also controversial. Several studies using cultured cells and laboratory rodents suggest the possibility of leukemogenic, genetic, reproductive, and neurological effects from chronic exposure.[5] According to an article in Al Jazeera, DU from American artillery is suspected to be one of the major causes of an increase in the general mortality rate in Iraq since 1991.[10] A 2005 epidemiology review concluded "In aggregate the human epidemiological evidence is consistent with increased risk of birth defects in offspring of persons exposed to DU."[11] A 2021 study concluded that DU from exploding munitions did not lead to Gulf War illness in American veterans deployed in the Gulf War.[12] According to a 2013 study, despite the use of DU by coalition forces in Fallujah, no DU has been found in soil samples taken from the city,[13] although another study of 2011 had indicated elevated levels of uranium in tissues of the city inhabitants.[14] 

// Go back to Depleted Uranium on wikipedia
and study it

Depleted uranium is a byproduct of making nuclear
weapons but it's 2 1/2 times denser than steel

JAVA

(commands for java in vsc)

java --version

javac --version

jshell

class Hello {
    public static void main(String args[]) {

        int a = 257;
        byte k = (byte) a;
        System.out.println(k);
        
    }
}












*/