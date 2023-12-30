/*

C#

Namespaces are used in C# to keep one set of names separated from another. This is done to organize the classes so that they are easy to handle. If there are two classes with the same names in different namespaces, they do not conflict with one another.

IL code statements are like assembly language instructions, but they are executed by . NET Core's virtual machine, known as the CoreCLR. At runtime, the CoreCLR loads the IL code from the assembly, JIT compiles it into native CPU instructions, and then it is executed by the CPU on your machine.

IL code (intermediate code) or half compiled code, it's creates at compile time. When this program will run at user system, this run time IL code is converted into machine code by JIT (just-in-time) compiler. JIT Compiler converted IL Code into Machine Code.

View intermediate language (IL)﻿

To assign a shortcut, go to Tools | Options | Environment | Keyboard and find the ReSharper_ShowIlViewerWindow command. ReSharper allows you to study your source code and decompiled symbols as intermediate language (IL) or as C# with different levels of syntax sugar.

Primitive data types are predefined data types such as Byte, SByte, Boolean, Int16, UInt16, Int32, UInt32, Char, Double, Int64, UInt64, Single, etc. Whereas non-primitive data types are user-defined data types such as enum, class, etc.

In C#, Sbyte Struct comes under the System namespace which represents an 8-bit signed integer. The SByte value type represents integers with values ranging from -128 to +127.

.NET is not limited to C# there sr different languages that can target
that framework and build applications using that framework
Examples: F sharp or vb.net

.NET consists of 2 components:
CLR and class library

8086 processor architecture

In java when you compile your code it's not translated directly
into the machine code it's translated into an intermediate language
called bytecode

Same concept in C#

CLR is essentially an application that is sitting in the memory
whose job is to translate the il code into the machine code and
this process is called just-in-time compilation or JIT

namespaces everywhere

assembly physically is a file on the disk which can either be an
executable or a DLL which stands for dynamically linked library
So when you compile an application the compiler builds one or more
assemblies depending on how you partition your code.


REACT

 <ThemeContext.Provider value ={darkTheme}>

class version of context and function version of context
Both are very different
When using context it's broken into 2 different sections:
You have your context provider want to wrap all the code that needs
access to the information in the context in here. Has
a single prop called value like ThemeContext.Provider value={darkTheme} for example

everything in the provider has access to variable inside the value 
prop

JAVA

The isAnyLoaclAddress() method of Java InetAddress class is used to check whether the InetAddress is a wildcard address or not.
Syntax:

    public boolean isAnyLocalAddress()  

Returns

The isAnyLoaclAddress() method returns a boolean indicating if the InetAddress is a unpredictable address.
Example 1

    import java.net.InetAddress;  
    public class JavaInetAddressIsAnyLocalAddressExample1 {  
      public static void main(String[] args) throws Exception {  
        InetAddress add = InetAddress.getByName("www.javatpoint.com");  
        System.out.println("Name is : " + add.getHostName());  
        System.out.println("Address is : " + add.getHostAddress());  
        System.out.println(add.isAnyLocalAddress());  
      }  
    }  

Output:

Name is : www.javatpoint.com
Address is : 195.201.10.8
false


Java InetAddress isLinkLocalAddress() method

The isLinkLocalAddress() method of Java InetAddress is used to check if the InetAddress is a link local address or not.
Syntax:

    public boolean isLinkLocalAddress()  

Returns

This method returns true if this address represents a local address; or false if address is not link local unicast address.
Example 1

    import java.net.InetAddress;  
    public class JavaInetAddressisLinkLocalAddressExample1 {  
        public static void main(String[] argv) throws Exception {  
        InetAddress add = InetAddress.getByName("www.javatpoint.com");  
        System.out.println("Name is: " + add.getHostName());  
        System.out.println("Address is : " + add.getHostAddress());  
        System.out.println(add.isLinkLocalAddress());  
      }  
    }  

Output:

Name is: www.javatoint.com
Address is: 96.126.103.245
false

Java InetAddress isLoopbackAddress() method

The isLoopbackAddress() method of Java InetAddress class is used to check if the InetAddress is a loop back address or not.
Syntax:

    public boolean isLoopbackAddress()  

Returns

It returns a boolean value 'true' if this address represents a loopback address, else it returns false if address is not loop back unicast address.
Example 1

    import java.net.InetAddress;  
    public class JavaInetAddressIsLoopbackAddressExample1 {   
      public static void main(String[] args) throws Exception {  
        InetAddress addr = InetAddress.getLoopbackAddress();  
        System.out.println("Name is : " + addr.getHostName());  
        System.out.println("Address is : " + addr.getHostAddress());  
        System.out.println(addr.isLoopbackAddress());  
      }  
    }  

Output:

Name is: localhost
Address is: 127.0.0.1
true

The IP address 127.0. 0.1 is called a loopback address. Packets sent to this address never reach the network but are looped through the network interface card only. This can be used for diagnostic purposes to 
verify that the internal path through the TCP/IP protocols is working.

What is a loopback address for dummies?
loopback address: IP shorthand for you — actually, your computer. The loopback is a special IP address (127.0. 0.1) that isn't physically connected to any network hardware. You use it to test TCP/IP 
services and applications without worrying about hardware problems.

//// go back to geeksforgeeks.org what is a loopback address
and study this more

Advantages of loopback address:

    It is an efficient method to find a device on the network.
    It can be configured as the router ID for protocols such as BGP and OSPF.
    It is used as a source and destination address for testing network connectivity.
    It can also be used for testing IP software.

Disadvantages:

    Just like physical interfaces, it needs a unique address.


1. Introduction

In this article, we describe how one-to-all (Broadcast) and one-to-many (Multicast) communications can be handled in Java. The broadcast and multicast concepts outlined in this article are based on the UDP protocol.

We start with a quick recap of datagrams and broadcasting and how it is implemented in Java. We also look into disadvantages of broadcasting and propose multicasting as an alternative to broadcasting.

Finally, we conclude by discussing support for these two addressing methods in both IPv4 and IPv6.
2. Datagram Recap

As per the official definition of a datagram, “A datagram is an independent, self-contained message sent over the network whose arrival, arrival time, and content are not guaranteed”.

In Java, the java.net package exposes the DatagramPacket and DatagramSocket classes that can be used for communication via the UDP protocol. UDP is typically used in scenarios where lower latency is more important than guaranteed delivery, such as audio/video streaming, network discovery, etc.
freestar

To learn more about UDP and datagrams in Java, refer to A Guide to UDP in Java.
3. Broadcasting

Broadcasting is a one-to-all type of communication, i.e. the intention is to send the datagram to all the nodes in the network. Unlike in the case of point-to-point communication, we don’t have to know the target host’s IP Address. Instead, a broadcast address is used.

As per IPv4 Protocol, a broadcast address is a logical address, on which devices connected to the network are enabled to receive packets. In our example, we use a particular IP address, 255.255.255.255, which is the broadcast address of the local network.

By definition, routers connecting a local network to other networks don’t forward packets sent to this default broadcast address. Later we also show how we can iterate through all NetworkInterfaces, and send packets to their respective broadcast addresses.

First, we demonstrate how to broadcast a message. To this extent, we need to call the setBroadcast() method on the socket to let it know that the packet is to be broadcasted:
freestar

public class BroadcastingClient {
    private static DatagramSocket socket = null;

    public static void main((String[] args)) throws IOException {
        broadcast("Hello", InetAddress.getByName("255.255.255.255"));
    }

    public static void broadcast(
      String broadcastMessage, InetAddress address) throws IOException {
        socket = new DatagramSocket();
        socket.setBroadcast(true);

        byte[] buffer = broadcastMessage.getBytes();

        DatagramPacket packet 
          = new DatagramPacket(buffer, buffer.length, address, 4445);
        socket.send(packet);
        socket.close();
    }
}

The next snippet shows how to iterate through all NetworkInterfaces to find their broadcast address:

List<InetAddress> listAllBroadcastAddresses() throws SocketException {
    List<InetAddress> broadcastList = new ArrayList<>();
    Enumeration<NetworkInterface> interfaces 
      = NetworkInterface.getNetworkInterfaces();
    while (interfaces.hasMoreElements()) {
        NetworkInterface networkInterface = interfaces.nextElement();

        if (networkInterface.isLoopback() || !networkInterface.isUp()) {
            continue;
        }

        networkInterface.getInterfaceAddresses().stream() 
          .map(a -> a.getBroadcast())
          .filter(Objects::nonNull)
          .forEach(broadcastList::add);
    }
    return broadcastList;
}

freestar

Once we have the list of broadcast addresses, we can execute the code in the broadcast() method shown above for each of these addresses.

There is no special code required on the receiving side to receive a broadcasted message. We can reuse the same code that receives a normal UDP datagram. A Guide to UDP in Java contains more details on this topic.
4. Multicasting

Broadcasting is inefficient as packets are sent to all nodes in the network, irrespective of whether they are interested in receiving the communication or not. This may be a waste of resources.

Multicasting solves this problem and sends packets to only those consumers who are interested. Multicasting is based on a group membership concept, where a multicast address represents each group.
freestar

In IPv4, any address between 224.0.0.0 to 239.255.255.255 can be used as a multicast address. Only those nodes that subscribe to a group receive packets communicated to the group.

In Java, MulticastSocket is used to receive packets sent to a multicast IP. The following example demonstrates the usage of MulticastSocket:

public class MulticastReceiver extends Thread {
    protected MulticastSocket socket = null;
    protected byte[] buf = new byte[256];

    public void run() {
        socket = new MulticastSocket(4446);
        InetAddress group = InetAddress.getByName("230.0.0.0");
        socket.joinGroup(group);
        while (true) {
            DatagramPacket packet = new DatagramPacket(buf, buf.length);
            socket.receive(packet);
            String received = new String(
              packet.getData(), 0, packet.getLength());
            if ("end".equals(received)) {
                break;
            }
        }
        socket.leaveGroup(group);
        socket.close();
    }
}

After binding the MulticastSocket to a port, we call the joinGroup() method, with the multicast IP as an argument. This is necessary to be able to receive the packets published to this group. The leaveGroup() method can be used to leave the group.
freestar

The following example shows how to publish to a multicast IP:

public class MulticastPublisher {
    private DatagramSocket socket;
    private InetAddress group;
    private byte[] buf;

    public void multicast(
      String multicastMessage) throws IOException {
        socket = new DatagramSocket();
        group = InetAddress.getByName("230.0.0.0");
        buf = multicastMessage.getBytes();

        DatagramPacket packet 
          = new DatagramPacket(buf, buf.length, group, 4446);
        socket.send(packet);
        socket.close();
    }
}

5. Broadcast and IPv6

IPv4 supports three types of addressing: unicast, broadcast, and multicast. Broadcast, in theory, is a one-to-all communication, i.e. a packet sent from a device has the potential of reaching the entire internet.

As this is undesired for obvious reasons, the scope of the IPv4 broadcast was significantly reduced. Multicast, which also serves as a better alternative to broadcast, came in much later and hence lagged in adoption.

In IPv6, multicast support has been made mandatory, and there is no explicit concept of broadcasting. Multicast has been extended and improved so that all broadcasting features can now be implemented with some form of multicasting.

In IPv6, the left-most bits of an address are used to determine its type. For a multicast address, the first 8 bits are all ones, i.e. FF00::/8. Further, bit 113-116 represent the scope of the address, which can be either one of the following 4: Global, Site-local, Link-local, Node-local.
freestar

In addition to unicast and multicast, IPv6 also supports anycast, in which a packet can be sent to any member of the group, but need not be sent to all members.
6. Summary

In this article, we explored the concepts of one-to-all and one-to-many type of communication using the UDP protocol. We saw examples of how to implement these concepts in Java.

Finally, we also explored IPv4 and IPv6 support.

Full example code is available over on Github.

netAddress.IsSiteLocalAddress Property

    Reference

Definition

Namespace:
    Java.Net 

Assembly:
    Mono.Android.dll

Utility routine to check if the InetAddress is a site local address.
C#

public virtual bool IsSiteLocalAddress { [Android.Runtime.Register("isSiteLocalAddress", "()Z", "GetIsSiteLocalAddressHandler")] get; }

Property Value
Boolean

a boolean indicating if the InetAddress is a site local address; or false if address is not a site local unicast address.

Attributes
    RegisterAttribute


  SCALA

  You can view the list of all usages of a class, method or variable across the whole project, and quickly navigate to the selected item. Place the caret at a symbol and press   Ctrl   Alt   F7   (Edit | Find Usages | Show Usages).
To jump to a usage, select it from the list and press   Enter  .

Can install scala in intellij by going to setting then plugins then
clicking on scala

AIRCRAFT DESIGN /// go back and look at all of this

Flight controllers are personnel who aid space flight by working in such Mission Control Centers as NASA's Mission Control Center or ESA's European Space Operations Centre. Flight controllers work at computer consoles and use telemetry to monitor various technical aspects of a space mission in real-time. Each controller is an expert in a specific area and constantly communicates with additional experts in the "back room". The flight director, who leads the flight controllers, monitors the activities of a team of flight controllers, and has overall responsibility for success and safety.

This article primarily discusses NASA's flight controllers at the Johnson Space Center (JSC) in Houston. The various national and commercial flight control facilities have their own teams, which may be described on their own pages.
NASA's flight controllers

The room where the flight controllers work was called the mission operations control room (MOCR, pronounced "moh-ker"), and now is called the flight control room (FCR, pronounced "ficker"). The controllers are experts in individual systems, and make recommendations to the flight director involving their areas of responsibility. Any controller may call for an abort if the circumstances require it. Before significant events, the flight director will "go around the room", polling each controller for a go/no go decision, a procedure also known as a launch status check. If all factors are good, each controller calls for a go, but if there is a problem requiring a hold or an abort, the call is no go. Another form of this is stay/no stay, when the spacecraft has completed a maneuver and has now "parked" in relation to another body, including spacecraft, orbiting the Earth or the Moon, or the lunar landings.

Controllers in MOCR/FCR are supported by the "backrooms", teams of flight controllers located in other parts of the building or even at remote facilities. The backroom was formerly called the staff support room (SSR), and is now called the multi-purpose support room (MPSR, pronounced "mipser"). Backroom flight controllers are responsible for the details of their assigned system and for making recommendations for actions needed for that system. "Frontroom" flight controllers are responsible for integrating the needs of their system into the larger needs of the vehicle and working with the rest of the flight control team to develop a cohesive plan of action, even if that plan is not necessarily in the best interests of the system they are responsible for. Within the chain of command of the MCC, information and recommendations flow from the backroom to the frontroom to Flight, and then, potentially, to the on board crew. Generally, a MOCR/FCR flight control team is made up of the more seasoned flight controllers than the SSR/MPSR, though senior flight controllers cycle back to support in the backroom periodically. One example of the usefulness of this system occurred during the descent of the Apollo 11 Lunar Module Eagle, when "1202" and "1201" program alarms came from the LM. GUIDO Steve Bales, not sure whether to call for an abort, trusted the experts in the guidance backroom, especially Jack Garman, who told him that the problem was a computer overload, but could be ignored if it was intermittent. Bales called "Go!", Flight Director Gene Kranz accepted the call and the mission continued to success. Without the support of the backroom, a controller might make a bad call based on faulty memory or information not readily available to the person on the console. The nature of quiescent operations aboard the International Space Station (ISS) today is such that the full team is not required for 24/7/365 support. FCR flight controllers accept responsibility for operations without MPSR support most of the time, and the MPSR is only staffed for high-intensity periods of activity, such as joint Shuttle/ISS missions.

The flight controllers in the FCR and MPSR are further supported by hardware and software designers, analysts and engineering specialists in other parts of the building or remote facilities. These extended support teams have more detailed analysis tools and access to development and test data that is not readily accessible to the flight control team. These support teams were referred to by the name of their room in Mission Control, the mission operations integration room (MOIR), and are now collectively referred to by the name of their current location, the mission evaluation room (MER). While the flight controllers and their backrooms are responsible for real-time decision making, the MOIR/MER provides the detailed data and history needed to solve longer-term issues.

Uncrewed U.S. space missions also have flight controllers but are managed from separate organizations, either the Jet Propulsion Laboratory or the Johns Hopkins University Applied Physics Laboratory for deep-space missions or Goddard Space Flight Center for near-Earth missions.

Each flight controller has a unique call sign, which describes the position's responsibilities. The call sign and responsibility refer to the particular console, not just the person, since missions are managed around the clock and with each shift change a different person takes over the console.

Flight controller responsibilities have changed over time, and continue to evolve. New controllers are added, and tasks are reassigned to other controllers to keep up with changing technical systems. For example, the EECOM handled command and service module communication systems through Apollo 10, which was afterward assigned to a new position called INCO.
Responsibility

Flight controllers are responsible for the success of the mission and for the lives of the astronauts under their watch. The Flight Controllers' Creed states that they must "always be aware that suddenly and unexpectedly we may find ourselves in a role where our performance has ultimate consequences." Well-known actions taken by flight controllers include:

    The Apollo 11 Lunar Module computer was overloaded because the astronauts forgot to switch off their upper-stage radar before switching on the downward-pointing radar. Guidance officer Steve Bales had only a few seconds to determine whether it was safe to land anyway or to abort the mission mere feet above the Moon. Bales was later honored for his role in the mission, when he was selected to accept the NASA Group Achievement Award from President Richard Nixon on behalf of the Apollo 11 mission operations team.
    During the launch of Apollo 12, the Saturn V was struck by lightning which knocked out all telemetry and multiple command module systems. Seconds before mission abort, EECOM controller John Aaron determined that switching to the backup electrical power distribution telemetry conditioning would reveal the true nature of the issue.
    During Space Shuttle mission STS-51-F, a main engine failed during ascent to orbit. Subsequently, indications were received of a second engine beginning to fail, which would have caused a mission abort, possibly including loss of the shuttle. Booster officer Jenny Howard Stein determined that the anomalous readings on the second engine were a sensor error and not an engine problem. At her direction the crew inhibited the sensor, which saved the mission and possibly the crew.

Common flight control positions
Flight Director's insignia at JSC

There are some positions that have and will serve the same function in every vehicle's flight control team. The group of individuals serving in those positions may be different, but they will be called the same thing and serve the same function.[1]

Flight director
NASA chief flight director Gene Kranz at his console on May 30, 1965, in the Mission Operations Control Room, Mission Control Center, Houston.

Leads the flight control team. Flight has overall operational responsibility for missions and payload operations and for all decisions regarding safe, expedient flight. This person monitors the other flight controllers, remaining in constant verbal communication with them via intercom channels called "loops".
Flight operations directorate (FOD)

Is a representative of the senior management chain at JSC, and is there to help the flight director make those decisions that have no safety-of-flight consequences, but may have cost or public perception consequences. The FOD cannot overrule the flight director during a mission. The former mission operations directorate (MOD) position was renamed FOD when the flight crew operations directorate (FCOD) was merged back with MOD beginning in August 2014.
Spacecraft communicator (CAPCOM)
For the video game company, see Capcom.

Generally, only the spacecraft communicator communicates directly with the crew of a crewed space flight. The acronym dates back to Project Mercury when the spacecraft was originally termed a "capsule." NASA felt it important for all communication with the astronauts in space to pass through a single individual in the Mission Control Center. That role was first designated the capsule communicator or CAPCOM and was filled by another astronaut, often one of the backup- or support-crew members. NASA believes that an astronaut is most able to understand the situation in the spacecraft and pass information in the clearest way.

For long-duration missions there is more than one CAPCOM, each assigned to a different shift team. After control of U.S. spaceflights moved to the Johnson Space Center in the early 1960s, each CAPCOM used the radio call-sign Houston. When non-astronauts are communicating directly with the spacecraft, CAPCOM acts as the communications controller.

As of 2011, due to the shrinking size of the astronaut corps at the end of the Shuttle program, fewer astronauts are available to perform CAPCOM duties, so non-astronauts from the space flight training and flight controller branches also function as CAPCOM during ISS missions, while the role was filled solely by astronauts for the Apollo and Shuttle missions. Astronauts still take the CAPCOM position during critical events such as docking and EVA.

In the context of potential crewed missions to Mars, NASA Ames Research Center has conducted field trials of advanced computer-support for astronaut and remote science teams, to test the possibilities for automating CAPCOM.[2]
Flight surgeon

The flight surgeon directs all medical activities during the mission – monitors crew health via telemetry, provides crew consultation, and advises the flight director. A private communication channel can be established between astronauts and the flight surgeon, to provide doctor–patient confidentiality.
Public affairs officer (PAO)

Provides mission commentary to supplement and explain air-to-ground transmissions and flight control operations to the news media and the public. The individual filling this role is often referred to colloquially as The Voice of Mission Control.
Apollo flight control positions

The flight control positions used during the Apollo era were predominantly identical to the positions used for the Mercury and Gemini vehicles. This was because of the similarity of the vehicle design of the capsules used for the three programs.
Booster systems engineer

The booster systems engineer monitored and evaluated performance of propulsion-related aspects of the launch vehicle during prelaunch and ascent. During the Apollo program there were three booster positions, who worked only until trans-lunar injection (TLI); after that, their consoles were vacated. Booster had the power to send an abort command to the spacecraft. All booster technicians were employed at the Marshall Space Flight Center and reported to JSC for the launches.
Control officer

The control officer was responsible for the Apollo Lunar Module guidance, navigation, and control systems – essentially the equivalent of the GNC for the Command and Service Module.
Electrical, environmental, and consumables manager (EECOM)

The EECOM monitored cryogenic levels for fuel cells, and cabin cooling systems; electrical distribution systems; cabin pressure control systems; and vehicle lighting systems. EECOM originally stood for electrical, environmental and communication systems. The Apollo EECOM was responsible for CSM communications through Apollo 10. Afterward the communication task was moved to a new console named INCO.

Perhaps the most famous NASA EECOMs are Seymour "Sy" Liebergot, the EECOM on duty at the time of the oxygen tank explosion on Apollo 13, and John Aaron, who designed the drastically reduced power budget for its return.[3] Aaron also saved the Apollo 12 mission by realizing that using the backup power supply for telemetry of analog capsule sensors would allow diagnosis of all the seemingly-unrelated problems caused by a lightning strike.
Flight activities officer (FAO)

The FAO planned and supported crew activities, checklists, procedures and schedules.
Flight director

The flight directors held overall control of all of the individual positions in the MOCR. Some Apollo era directors were:

    Gene Kranz, White Flight. Apollo missions 7, 9, 11, 13, 15, 16 and 17.
    Glynn Lunney, Black Flight. Apollo missions 7, 8, 10, 11, 13, 14 and 15.
    Gerry Griffin, Gold Flight. Apollo missions 7, 9, 11, 12, 13, 14, 15, 16 and 17.
    Milt Windler, Maroon Flight. Apollo missions 8, 10, 12, 13, 14 and 15.
    Clifford E. Charlesworth, Green Flight. Apollo missions 8, 11 and 12.
    M. P. (Pete) Frank, Orange Flight. Apollo missions 9, 12, 16, 17, and Apollo–Soyuz.

Flight dynamics officer (FDO or FIDO)

Responsible for the flight path of the space vehicle, both atmospheric and orbital. During lunar missions the FDO was also responsible for the lunar trajectory. The FDO monitored vehicle performance during the powered flight phase and assessed abort modes, calculated orbital maneuvers and resulting trajectories, and monitored vehicle flight profile and energy levels during reentry.
Guidance officer (GUIDANCE or GUIDO)

The guidance officer monitored on board navigational systems and on board guidance computer software. Responsible for determining the position of the spacecraft in space. One well-known guidance officer was Steve Bales, who gave the go call when the Apollo 11 guidance computer came close to overloading during the first lunar descent.
Guidance, navigation, and controls systems engineer (GNC)

The GNC monitored all vehicle guidance, navigation, and control systems. Also responsible for propulsion systems such as the service propulsion system and reaction control system (RCS).
Integrated communications officer (INCO)

The INCO was responsible for all data, voice and video communications systems, including monitoring the configuration of in-flight communications and instrumentation systems. Duties also included monitoring the telemetry link between the vehicle and the ground, and overseeing the uplink command and control processes. The position was formed from the combination of LEM and CSM communicator positions.
Network

Supervised the network of ground stations that relayed telemetry and communications from the spacecraft.
Organization and procedures officer (O&P)

Supervised the application of mission rules and established techniques to the conduct of the flight.
Retrofire officer (RETRO)

Drew up abort plans and was responsible for determination of retrofire times. During lunar missions the RETRO planned and monitored Trans Earth Injection (TEI) maneuvers, where the Apollo Service Module fired its engine to return to Earth from the Moon.
Telemetry, electrical, EVA mobility unit officer (TELMU)

Monitored the lunar module electrical and environmental systems, plus lunar astronaut spacesuits. Essentially the equivalent of the EECOM for the lunar module.
Shuttle and Space Station flight controllers

NASA currently has a group of flight controllers at the Johnson Space Center in Houston for the International Space Station (ISS). The Space Shuttle flight control team (as well as those for the earlier Gemini, Apollo, and Skylab programs) were also based there. Console manning for short-duration and extended operations differed in operational philosophy.

The Space Shuttle (and prior program) flight controllers worked relatively brief periods: The several minutes of ascent, the few days the vehicle was in orbit, and reentry. The duration of operations for Space Shuttle flight controllers was short and time-critical. A failure on the Shuttle could leave flight controllers little time for talking, putting pressure on them to respond quickly to potential failures. The Space Shuttle flight controllers generally had limited capability to send commands to the shuttle for system reconfigurations.

In contrast, the ISS flight controllers work 24 hours a day, 365 days a year. This allows the ISS flight controllers time to discuss off-nominal telemetry. The ISS flight controllers have the opportunity to interface with many groups and engineering experts. The mentality of an ISS flight controller is to preempt a failure. Telemetry is closely monitored for any signatures that may begin to indicate future catastrophic failures. Generally, ISS flight controllers take a prophylactic approach to space vehicle operations. There are command capabilities that ISS flight controllers use to preclude a potential failure.
Shuttle flight control positions (1981-2011)

Many Apollo program mission control positions were carried forward to the Space Shuttle program. However, other positions were eliminated or redefined, and new positions were added.

Positions remaining generally the same:

    Booster
    FAO
    FDO
    Guidance (became guidance and procedures officer, or GPO)
    GNC
    INCO (became instrumentation and communications officer)

Positions eliminated or modified:

    RETRO
    EECOM (duties split up)
    TELMU
    CONTROL

After retirement of the Space Shuttle in 2011, the operational concept of flight control of a launched crewed vehicle was used as the basis for the Boeing CST-100 Commercial Crew vehicle starting in 2019.
Assembly and checkout officer (ACO)/payloads

Responsible for all Space Shuttle-based activities related to construction and operation of the Space Station, including logistics and transfer items stored in a multi-purpose logistics module (MPLM) or Spacehab. Also responsible for all Shuttle payloads, from Spacehab to the Hubble Space Telescope to deployable satellites. On Shuttle missions that did not dock with the ISS, this position was known as payloads.
Booster systems engineer (BOOSTER)

Monitored and evaluated performance of propulsion-related aspects of the launch vehicle during prelaunch and ascent, including the main engines and solid rocket boosters.[4]
Data processing system engineer (DPS)

Responsible for data processing systems in a space flight. This included monitoring the on board General Purpose Computers (GPCs), flight-critical, launch and payload data buses, the multi-function electronic display system (MEDS), solid-state mass memory (SSMM) units, flight critical and payload multiplexer/de-multiplexer (MDM) units, master timing unit (MTU), backup flight control (BFC) units and system-level software.

The Space Shuttle general purpose computers were a critical subsystem, and the vehicle cannot fly without them.
Emergency, environmental, and consumables management (EECOM)

EECOM's revamped Space Shuttle responsibilities included the atmospheric pressure control and revitalization systems, the cooling systems (air, water, and freon), and the supply/waste water system.

MPSR positions

    Life support – monitored atmospheric pressure control systems, O2/N2/CO2 maintenance and management, air cooling equipment, waste water systems,
    Thermal – monitored water and refrigerant coolant loop systems, supply water maintenance

EECOM's critical function was to maintain the systems, such as atmosphere and thermal control, that keep the crew alive.
Electrical generation and integrated lighting systems engineer (EGIL)

Monitored cryogenic levels for the fuel cells, electrical generation and distribution systems on the spacecraft, and vehicle lighting. This was a portion of the job formerly done by EECOM.

MPSR positions

    EPS – provided expert support monitoring of the fuel cells, cryo system, and electrical bus system

Extravehicular activity officer (EVA)

Responsible for all spacesuit and spacewalking-related tasks, equipment and plans when the EVA took place from the shuttle.
Flight activities officer (FAO)

Planned and supported crew activities, checklists, procedures, schedules, attitude maneuvers and timelines.

MPSR positions

    Attitude and pointing officer (Pointing) – Generated and maintained the attitude timeline, monitored the executions of all attitude maneuvers, provided attitude maneuver inputs for the crew, generated star pairs and attitudes for IMU aligns.
    Message and timeline support (MATS) – Created messages based on MCC inputs, created the execute package, monitored crew activities and assessed impacts to the timeline.
    Orbital communications officer (OCA) – Transferred electronic messages to the crew, synced the crews e-mail, uplinked and downlinked files for the crew.
    Timeline – Generated the pre-flight timelines for the flight plan, monitored in-flight crew activities, coordinated activities with other flight controllers.

Flight dynamics officer (FDO or FIDO)

Responsible for the flight path of the Space Shuttle, both atmospheric and orbital. FDO monitored vehicle performance during the powered flight phase and assessed abort modes, calculated orbital maneuvers and resulting trajectories, and monitored vehicle flight profile and energy levels during re-entry.

MPSR positions

    Abort support (ascent only) – provided expert support during the powered flight portion of an RTLS or TAL
    ARD support (ascent only) – maintained the abort region determinator processor which is used to predict trajectory capabilities during powered flight
    Ascent support team (ascent only) – monitored the winds and weather at the launch site, help compute day-of-launch updates
    Dynamics – maintained the inputs to the mission operation computer for all processors
    Entry console – provided expert support for entry, approach, and landing
    Entry support team (ascent and entry) – monitored the winds and weather at the various potential landing sites, prepare trajectory adjustments
    Landing support officer (LSO) team – maintained the airspace at any landing site, dispatch Search and Rescue teams if needed, act as first liaison in case of a landing outside the US
    Nav support team – responsible for maintaining the on-board navigation (telemetry) and the ground navigation (tracking)
    Profile support (rendezvous only) – assisted the FDO with rendezvous profile evaluation and determination
    Range safety team (ascent only) – tracked the falling external tank and solid rocket boosters
    Targeting (ascent only) – provided expert support for abort to orbit (ATO) or abort once around (AOA) trajectories
    Track – coordinated tracking site data flow and data requests
    Weather – a member of the spaceflight meteorology group who provided worldwide weather data

Ground controller (GC)

Directed maintenance and operation activities affecting Mission Control hardware, software and support facilities; coordinated space flight tracking and data network, and Tracking and Data Relay Satellite system with Goddard Space Flight Center.
Guidance, navigation, and controls systems engineer (GNC)

Monitored all shuttle guidance, navigation and control systems.

MPSR positions

    GNC Support: Provided support to the orbit GNC officer during the orbit phase of flight.
    Control: Provided support to the ascent/entry GNC officer during those phases of flight.
    Sensors: Provided support to the ascent/entry GNC officer during those phases of flight.

Instrumentation and communications officer (INCO)

Responsible for all data, voice and video communications systems, including monitoring the configuration of in-flight communications and instrumentation systems. Duties also included monitoring the telemetry link between the vehicle and the ground, and overseeing the uplink command and control processes. The INCO was the only position that uplinked commands to the orbiter. This position was a direct evolution of the integrated communications officer from the Apollo program.

MPSR positions

    RF COMM: MPSR lead and responsible for the Ku-band and S-band communication systems.
    INST: Responsible for uplinking commands and telemetry flows.
    DATA COMM: Responsible for recording and downlinking telemetry that was not streamed live and the FM communication system.

Mechanical, maintenance, arm, and crew systems (MMACS)

Responsible for Space Shuttle structural and mechanical systems, monitoring auxiliary power units and hydraulic systems, managing payload bay door, external tank umbilical door, vent door, radiator deploy/stow, Ku-band antenna deploy/stow, and payload retention latch operations, landing gear/deceleration systems (landing gear deploy, tires, brakes/antiskid, and drag chute deploy), and monitoring the orbiter docking system. MMACS also followed use of on board crew hardware and in-flight equipment maintenance. This represented another portion of the job formerly done by EECOM, with additional responsibilities added by the specific requirements of Space Shuttle operations. The MMACS officer served as the point of contact for PDRS, Booster, and EVA during periods in a mission when these positions did not require constant staffing.

MPSR positions

    MECH – provided expert support monitoring of mechanical, hydraulic, and landing gear systems
    MECH 2 – provided extra support during the dynamic ascent and entry phases of flight
    IFM – In-flight maintenance support
    Crew systems/escape – responsible for operations of on board crew hardware and the crew's launch and entry suits
    Photo/TV – responsible for the "loose" camera operation and maintenance, such as still cameras and camcorders, and the integration of video into and out of the orbiter's TV monitors

Payload deployment and retrieval system (PDRS)

Responsible for Space Shuttle remote manipulator system (RMS) or "robot arm".
Propulsion engineer (PROP)

Managed the reaction control thrusters and orbital maneuvering engines during all phases of flight, monitored fuel usage and propellant tank status, and calculated optimal sequences for thruster firings.
MPSR Positions

    OMS & RCS Engine Officer (OREO): Monitored health of shuttle on-orbit engines
    Consumables: Monitored fuel usage and mass properties through the mission

Rendezvous (RNDZ)

Responsible for activities such as trajectory operations related to the rendezvous and docking/capture with another spacecraft, including Mir, the ISS, and satellites such as the Hubble Space Telescope.
Trajectory officer (TRAJ)

Assisted the FDO during time-critical operations, responsible for maintaining the various processors that helped determine the shuttle's current and potential trajectories. A FDO was certified as a TRAJ first. Shares the FCR with FDO.
Transoceanic abort landing communicator (TALCOM)

One of the few members of Shuttle Mission Control not physically present in Houston. If an emergency had occurred, such as loss of one or more main engine during a Space Shuttle launch, requiring the shuttle to land at one of the contingency landing sites in Africa, Europe or the Middle East, TALCOM would have assumed the role of CAPCOM providing communications with astronauts aboard the crippled orbiter. Like CAPCOM, the TALCOM role was filled by an astronaut. Three astronauts were deployed to the alternate landing sites in Zaragoza Air Base and Moron Air Base in Spain, and Istres Air Base in France. These astronauts flew aboard weather reconnaissance aircraft to provide support at the selected landing site.[5]
ISS flight control positions to 2010

The International Space Station flight control positions used by NASA in Houston are different from those used by previous NASA programs. These differences exist primarily to stem the potential confusion that might otherwise follow from conflicting use of the same name in two different rooms during the same operations, such as when the space shuttle was conducting mated operations with the space station. There are also differences in the control positions because of differences in the operation of the two. The following is a list of those flight controllers located in Mission Control Center – Houston. There are several other control centers which house dozens of other flight controllers that support the vastly complex vehicle.

Positions formerly used but eliminated or modified:

    Assembly and checkout officer (ACO) – Retired position at end of shuttle. Was responsible for the integration of assembly and activation tasks for all ISS systems and elements. Coordinated with station and shuttle flight controllers on the execution of these operations. Was also the front room position to ACO Transfer who was responsible for the exchange of cargo between the shuttle and the ISS.
    Cargo integration officer (CIO) – Former front room position that answered for ISO and PLUTO
    Station duty officer (SDO) – During early phases of ISS, when the vehicle was free-flying (no shuttle present) and uncrewed, the SDO and GC were the only positions on duty, and would call in the appropriate personnel if any problems arose.

Starting in 2001, the ISS flight control room has consolidated six of the below positions into just two, to reduce staffing during low-activity periods. This concept is known as Gemini. After Assembly complete, the Gemini concept was eliminated in the realignment of the core ISS flight control positions.

    TITAN (Telemetry, Information Transfer, and Attitude Navigation) is responsible for Communication & Tracking (CATO), Command & Data Handling (ODIN), and Motion Control Systems (ADCO).
    ATLAS (Atmosphere, Thermal, Lighting and Articulation Specialist) is responsible for Thermal Control (THOR), Environmental Control & Life Support (ECLSS), and Electrical Power Systems (PHALCON). ATLAS is also responsible for monitoring Robotics (ROBO) and Mechanical Systems (OSO) heaters, as those consoles are not supported during the majority of Gemini shifts.

Attitude determination and control officer (ADCO)

Works in partnership with Russian controllers to determine and manage the station's orientation, controlled by the on board motion control systems. This position also plans and calculates future orientations and maneuvers for the station and is responsible for docking the ISS with other vehicles.

MPSR positions

    HawkI – Pronounced (Hawk-eye) – provides expert support monitoring of all US GNC systems, leaving the ADCO to coordinate with other flight controllers and MCC-M. Hawki is actually a strung-together set of common engineering abbreviations for quantities that affect or reflect ISS attitude, primarily chosen because they fit well enough to make a name:
        H – Momentum.
        α – angular rate.
        ω – angular velocity.
        k – kinetic energy.
        I – moment of inertia.

Biomedical engineer (BME)

The BME monitors health-related station systems and Crew Health Care Systems (CHeCS) equipment. The BME provides technical and operational support for CHeCS and all other medical operations activities. Along with the SURGEON, the BME serves as a Medical Operations Branch representative to the USOS Flight Control Team.
Communication and tracking officer (CATO)

Responsible for management and operations of the U.S. communication systems, including audio, video, telemetry and commanding systems.
Environmental control and life support system (ECLSS)

Responsible for the assembly and operation of systems related to atmosphere control and supply, atmosphere revitalization, cabin air temperature and humidity control, circulation, fire detection and suppression, water collection and processing and crew hygiene equipment, among other areas.

MPSR Position ACE (Atmosphere and Consumables Engineer)
Extravehicular activity officer (EVA)

Responsible for all spacesuit and spacewalking-related tasks, equipment and plans when the EVA takes place from the ISS.
Inventory and stowage officer (ISO)

Responsible for the daily tracking and inventory of all US cargo on the ISS. ISO is the integrator for all cargo that is delivered to and from the ISS for ATV, HTV, Dragon, and Cygnus vehicles.
Integration systems engineer (ISE)

A specialist position, the ISE is the systems liaison between ISS and visiting vehicles that are berthed to the US side of ISS. The ISE flight control is responsible for the safety of the ISS such that the visiting vehicle can safely approach, berth, and integrate with the ISS. This includes HTV, Dragon, Cygnus, and even special missions like the deployment of Bigelow Expandable Activity Module (BEAM). ISE works closely with VVO.
Onboard data interfaces and networks (ODIN)

The ODIN is responsible for the Command and Data Handling (C&DH) system, the Portable Computer System (PCS) computers, the Caution & Warning (C&W) system, overall responsibility for commanding, and interfaces with International Partner avionics systems. The C&DH system consists of the Multiplexer/DeMultiplexers (MDMs) which are the ISS computers. Core software in each MDM (not User Application Software), the MIL-STD-1553 data busses, Automated Payload Switches (APSs), fiber optic network, Payload Ethernet Hub Gateway (PEHG), and the Ethernet network. This does not include the Ops LAN, Station Support Computers (SSC), or file server.

MPSR positions

    Resource avionics engineer (RAVEN)

Operations planner (OPSPLAN)

Leads the coordination, development and maintenance of the station's short-term plan, including crew and ground activities. The plan includes the production and uplink of the on board station plan and the coordination and maintenance of the on board inventory and stowage listings.

MPSR positions

    Real time planning engineer (RPE)
    Real time planning engineer support (RPE-Support)
    Orbital communications adapter officer (OCA)
    on board data file and procedures officer (ODF)

Operations support officer (OSO)

Charged with those logistics support functions that address on-orbit maintenance, support data and documentation, logistics information systems, maintenance data collection and maintenance analysis. The OSO is also responsible for mechanical systems—such as those used to attach new modules or truss sections to the vehicle during assembly.

MPSR position

    OSO Support

Plug-in port utilization officer (PLUTO)

The name PLUTO is inherited from the flight controller's original role, which was to maintain and coordinate changes to the U.S. segment of the electrical plug-in plan (PiP). The PiP is the tracking of portable electronic equipment, making sure equipment connected is compatible and does not violate constraints, and will not overdraw the power source. Along with this, PLUTO is responsible for maintaining the OPSLAN (Operations Local Area Network) and the JSL (Joint Station LAN). PLUTO has remote desktop administration and monitoring capability to the network from the ground. The PLUTO is also responsible for certain Station Developmental Test Objectives, or SDTOs during the mission. This includes programming the Wireless Instrumentation System (WIS) and also remote desktop commanding for ROBONAUT activities.

MPSR position

    Hydra

Power, heating, articulation, lighting control officer (PHALCON)

Manages the power generation, storage, and power distribution capabilities.
Remote interface officer (RIO)

Formerly known as the Russian interface officer. Responsible for integrating operations between MCC-Houston (MCC-H) and the other International Partner (IP) Control Centers. RIO is a FCR-1 position in MCC-Houston and works closely in conjunction with the Houston Support Group (HSG) teams located at the IP Control Centers:

    HSG-Moscow (HSG-M): Team of NASA Flight Controllers working with Russian Flight Controllers at MCC-Moscow (MCC-M). Responsible for integrating operations between MCC-H and MCC-M. HSG-M also has taken over operations of the US segment of ISS during Hurricanes Lili and Rita (2002 and 2005, respectively). MSFC in Huntsville took over ISS Backup Control Center operations from HSG-M in 2008.
    HSG-Columbus (HSG-C): Small team of NASA Flight Controllers that were responsible for integrating MCC-H and Columbus Control Center (COL-CC) operations at Oberpfaffenhofen, near Munich, Germany. Following completion of Columbus commissioning in August 2008, this team discontinued operations.
    HSG-ATV (HSG-A): Small team of NASA Flight Controllers responsible for integrating MCC-H and Autonomous Transfer Vehicle (ATV) operations at ATV-CC near Toulouse, France. Following completion of the ATV5 mission in February 2015, this team discontinued operations.
    HSG-Japan (HSG-J): Small team of NASA Flight Controllers responsible for integrating MCC-H and Japanese Experiment Module (JEM) and H-II Transfer Vehicle (HTV) operations at the Space Station Integration and Promotions Center (SSIPC) at Tsukuba, Japan near Tokyo. This team discontinued permanent operations in October 2008, but afterwards did temporarily support the STS-127 and HTV-1 missions.

Robotics operations systems officer (ROBO)

Responsible for the operations of the Canadian Mobile Servicing System (MSS), which includes a mobile base system, station robotic arm, station robotic hand or special purpose dexterous manipulator. (Call sign: ROBO) represents a joint NASA-Canadian Space Agency team of specialists to plan and execute robotic operations.

    MPSR Position: MSS Systems
    MPSR Position: MSS Task

Thermal operations and resources (THOR)

Responsible for the assembly and operation of multiple station subsystems which collect, distribute, and reject waste heat from critical equipment and payloads.
Trajectory operations officer (TOPO)

Responsible for the station trajectory. The TOPO works in partnership with Russian controllers, ADCO, and the U.S. Space Command to maintain data regarding the station's orbital position. TOPO plans all station orbital maneuvers.
Visiting vehicle officer (VVO)

A specialist position, the VVO is the guidance and navigation liaison between the ISS and "visiting vehicles" such as Progress, Soyuz or Dragon.
ISS flight control positions 2010–present

After "Assembly Complete" in 2010 (which was the name given to the phase following the completion of the ISS assembly using the Space Shuttle), the core ISS flight control positions were realigned and the Gemini manning concept eliminated. While the other specialty positions – ADCO, BME, EVA, ISO, ISE, OPSPLAN, OSO, PLUTO, RIO, ROBO, TOPO, and VVO – remain the same, the new core positions are:
Communications RF on board networks utilization specialist (CRONUS)

This is a combination of the previous ODIN and CATO positions. Responsibilities for this group include the control and monitoring of on-board command and data systems (i.e. computers). Video cameras, both on board and external, are managed by CRONUS. The Caution And Warning System is also used to alert the crew and flight controllers to serious and dangerous safety situations. Communication radios, both for space-to-ground communication (S-Band and Ku-Band) and space-to-space communication (C2V2) are operated by CRONUS.

    MPSR Position: RAPTOR

Environmental and Thermal operating systems (ETHOS)

This consists of the ECLSS system responsibilities as well as the internal thermal control systems from THOR.

    MPSR position: TREC

Station power, articulation, thermal, and analysis (SPARTAN)

This consists of the electrical power (old PHALCON) and external thermal control systems from THOR.

    MPSR position: SPOC

Exploration Flight Test-1 (2014)

The Orion program, later to become part of the Artemis program, had its own flight control team, mostly derived from Space Shuttle flight control positions. The Primary Team sat in the main flight control room (FCR), while the Support Team sat in the various multi-purpose support rooms (MPSRs) nearby. All positions named below had similar responsibilities to their Shuttle counterparts.[6][7] The Orion flight control team operated out of the Blue FCR, which had previously been used in the early days of ISS. As this was an uncrewed mission, the CAPCOM and SURGEON were not needed on console.
Command and Data Handling (C&DH)

Responsible for the command and data handling system, including the flight control module, the on-board storage module, the Orion data network and portions of the power and data units.

    Support Team position: C&DH Support

Emergency, Environmental, and Consumables manager (EECOM)

Responsible for spacecraft pressure control and active thermal control systems.

    Support Team position: EECOM Support

Electrical Power System Officer (EPS)

Responsible for spacecraft electrical and mechanical systems.

    Support Team position: EPS MPSR

Flight Dynamics Officer (FDO)

Responsible for the pre-launch heading alignment update and orbit and entry trajectory predictions.

    Support Team position: DOD-H
    Support Team position: Landing Support Officer (LSO) - responsible for relaying mission status and milestones to external interfaces, such as the State Department, the Department of Defense, the recovery team, NASA Headquarters and others as required
    Support Team position: Trajectory Officer (TRAJ)
    Support Team position: Weather - responsible for providing landing and contingency weather forecasts, as well as sea state information; located in a supporting room in the Mission Control Center

Flight Director (FLIGHT)

The responsible authority for the spacecraft between liftoff and the post-splashdown handover to the Orion recovery team. Provide a go or no-go decision for Orion's launch to the Mission Management Team and provide recommendations on operations outside the flight rules as needed.
Flight Operations Directorate (FOD)

Formerly known as MOD (Mission Operations Directorate), the console position representing the Directorate was renamed when the directorate itself was, taking the Apollo-era name of Flight Operations Directorate.
Ground Control Officer (GC)

Responsible for ground data systems and data flows that interface with the Mission Control Center.
Guidance Navigation and Control Officer (GNC)

Responsible for operations of the navigation hardware, including inertial measurement units, barometric altimeters and the GPS receiver and antennas.

    Support Team position: GNC Support
    Support Team position: Nav

Guidance Officer (GUIDANCE)

Responsible for the onboard navigation performance; launch vehicle and onboard navigation state vector quality assessments; guidance performance monitoring and associated flight test objectives evaluations; ground navigation processing and best state vector source determination; and the Mission Control Center contingency state vector update command.

    Support Team position: Pointing

Instrumentation and Communications Officer (INCO)

Responsible for Orion's communication systems, development flight instrumentation systems, video systems and recovery beacon; INCO sends all nominal and contingency commands to Orion.

    Support Team position: INCO Support

Public Affairs Officer (PAO)
Propulsion Officer (PROP)

Responsible for the propulsion system hardware and software.

    Support Team position: PROP Support

Commercial Crew, 2019-present

While SpaceX manages its own Mission Control Center for Dragon 2 vehicles in Hawthorne, CA, the management of the Boeing CST-100 Starliner launch, orbit, and entry operations is controlled from various flight control rooms in MCC Houston (MCC-H) collectively known as MCC-CST. The concept of operations in MCC-CST is derived from the Space Shuttle flight control room, and the following positions are largely unchanged from Shuttle responsibilities: CAPCOM, EECOM, FAO, FDO, Flight, FOD, GC, GNC, INCO, PAO, PROP, RNDZ, Surgeon, and TRAJ.[8]

Some positions were formerly Shuttle back-room positions: Crew Systems, Nav, Pointing, Profile, Timeline, and Weather

And the positions newly invented for CST-100: CDH, FDF, MPO (combining the Shuttle's EGIL and MMACS controllers), Recovery, SDO, and Tablet

Newly invented position for SpaceX Crew Dragon 2 is CORE (replaces CAPCOM among other roles)
Command and Data Handling (CDH)

CDH is responsible for monitoring the health and status of the CST-100 avionics systems including the on board computers, display units, keyboards, on board data bus, wireless networks, tablets, on board software, data services for payloads and more.
Crew Systems and Photo/TV

The roles and responsibilities for CREW SYSTEMS include developing operations products supporting crew and cargo integration and being hardware experts for flight crew equipment that deal with crew escape, human habitability, productivity, and well-being. The docking system centerline camera and digital imagery experts from Photo/ TV group will be relied upon for direct mission support and training.
Emergency, Environmental, and Consumables Management (EECOM)

EECOM is responsible for the environmental control and life support systems; monitoring and control of the active thermal control subsystems; atmosphere; suits; consumables management and reporting; cooling services for payloads and ingress/egress support. EECOM leads an integrated team response to emergencies (fire/cabin leak/toxic atmosphere/loss of cooling), and to internal and EECOM system leaks.
Flight Data File (FDF)

FDF manages the development and publication of FDF books for use by the crew and flight controllers. FDF provides real-time support for crew procedures and other FDF related activities. Duties include coordinating technical changes to procedures with flight directors, flight controllers, crew, and international partners. The FDF develops software requirements for procedures tools.
Flight Activities Officer (FAO)

FAO leads the coordination and integration of the crew activities, ground activities and attitude timeline into an integrated flight plan that meets the mission requirements defined by the program. For missions to the International Space Station (ISS), the FAO also works with the ISS Operations Planner to integrate CST-100 vehicle operations and preparations into the station timeline during both the joint-mission timeframe and during quiescent operations.
Flight Dynamics Officer (FDO)

FDO is responsible for pre-mission planning and real-time execution of all CST-100 trajectory operations, including launch, undocking re-entry and landing.
Ground Control (GC)

The GC team is responsible for the ground systems infrastructure and ground communications necessary to perform planning, training, testing, execution and evaluation of human spaceflight mission operations at the Johnson Space Center Mission Control Center for Boeing CST Mission Operations (MCC-CST).
Guidance, Navigation, and Control (GNC)

GNC manages guidance, navigation and control hardware, and associated software during all phases of flight, including GPS, attitude controllers, the Vision-based Electro-optical Sensor Tracking Assemblies (VESTAs) and more.
Integrated Communications Officer (INCO)

INCO is responsible for monitoring the health and status of the communications avionics including the Space-to-Ground (S/G) and Space-to-Space (S/S) systems, handheld radio communication, command encryption, audio systems and associated loose equipment functionality such as handheld microphones and headsets.
Mechanical and Power Officer (MPO)

MPO is responsible for the CST-100 spacecraft electrical, mechanical, structural, and landing and recovery systems. These systems include batteries, solar arrays, power converters, interior lighting, vehicle structure, thermal protection, parachutes, airbags, crew hardware and more.
Navigation (NAV)

NAV is responsible for ensuring both the on board and ground segments of the CST-100 navigation system is operating properly. NAV monitors performance of the on board navigation hardware and software, sensor status and performance, acceptability of sensor data, navigation convergence, VESTA performance and the VESTA Ground Station. NAV supports the GNC officer for issues related to relative and inertial navigation hardware, and for inertial navigation performance. NAV supports FDO for relative navigation performance monitoring and troubleshooting.
Public Affairs Officer (PAO)

PAO duties will be shared between NASA and Boeing. PAO coordinates news media events between the news media and the crew and/or Mission Control, and provides mission commentary to supplement and explain air-to-ground transmissions and flight control operations to the news media and the public.
Pointing

The Pointing console is responsible the integration of all CST-100 Tracking and Data Relay Satellite (TDRS) communication requirements, communication predictions and unique target lines-of-sight analysis for payloads and on board systems. Pointing also provides attitude optimization to support unique pointing requirements, as needed.
Profile

The Profile console monitors the CST-100 relative trajectory and translational maneuvers to ensure performance within defined limits. Profile assists in monitoring the progress of crew and automated procedures related to rendezvous and proximity operations. Profile monitors vehicle compliance with applicable flight rules and provides to the Rendezvous position a go/no-go recommendation prior to Authority to Proceed (ATP) points. Profile maintains awareness of potential vehicle automated responses to failure conditions and the resulting abort trajectories.
Propulsion (PROP)

PROP is responsible for all aspects of the operation and management of the propulsion system hardware and software used during all phases of flight. This includes thruster performance and propellant usage, translation burns and attitude control maneuvers, and consumables budgeting, management and reporting.
Recovery

The Recovery position is responsible for planning CST-100 recovery and executing recovery operations once the vehicle has landed.
Rendezvous (RNDZ)

The Rendezvous position monitors the CST-100 during integrated operations with the space station and ensures that all space station trajectory safety requirements are satisfied. Rendezvous is the primary interface to the space station Visiting Vehicle Officer (VVO) and monitors relative navigation, guidance, and trajectory performance in the proximity operations, docking, separation and flyaround phases of flight.
Starliner Duty Officer (SDO)

For the OFT mission only, the SDO is responsible for monitoring the CST-100 while it is docked to the space station in a quiescent configuration while the remainder of the CST-100 Flight Control Team is on-call. The SDO is responsible for leading the ground and crew response to Starliner events that result in cautions or warnings on the space station.
Tablet

The Tablet position monitors crew usage of the tablet devices and provides assistance/advice to the crew as needed.
Timeline

The Timeline position assists the FAO in all aspects of preflight mission planning and coordination, and in real-time planning and replanning operations. TIMELINE generates the pre-flight timelines for the flight plan, monitors in-flight crew activities and coordinates activities with other flight controllers.
Trajectory (TRAJ)

TRAJ tracks the spacecraft's position in orbit to support acquisitions, plotting, external notifications, conjunction screening, and debris conjunction message evaluation and notification. TRAJ coordinates trajectory planning and events with the mission planning team, and is the primary member of the team responsible for running the CST-100 simulation to accomplish replanning and position update tasks.
Weather

The Weather officer provides weather forecasts and real-time weather observations for launch and landing operations to the mission management community, Flight Director, and flight control team. The Weather officer manages meteorological forecasting models and computer systems that access and assemble radar and satellite imagery, and provides mission-critical inputs to the flight director for go-for-launch and go-for-deorbit decisions.
Crew Operations and Resources Engineer (CORE)

CORE or Crew Operations and Resources Engineer is SpaceX Crew Dragon 2 specific position that replaces CAPCOM and is the point person between Mission Control and crew on board the Dragon 2 spacecraft.
See also
Space centers and mission control centers

    Baikonur Cosmodrome (launch control center for the Russian Federal Space Agency, Tyuratam, Kazakhstan)
    Beijing Aerospace Command and Control Center (mission control center for the China National Space Administration, Beijing, People's Republic of China)
    Christopher C. Kraft Jr. Mission Control Center (mission control center for NASA, Houston, Texas)
    John H. Chapman Space Centre, the Canadian Space Agency Robotics Misison Control centre, Longueuil, Quebec
    European Space Operations Centre (mission control center for the European Space Agency, Darmstadt, Germany)
    German Space Operations Center (mission control center for the German Aerospace Center, including Columbus Control Centre for the European Space Agency, Oberpfaffenhofen, Germany)
    Guiana Space Centre (launch control center for the European Space Agency, the French space agency CNES, and the commercial Arianespace, Kourou, French Guiana)
    Kennedy Space Center (NASA launch center, Cape Canaveral, Florida)
    Johnson Space Center (NASA field center, Houston, Texas)
    Payload Operations and Integration Center (Marshall Space Flight Center, Huntsville, AL)
    RKA Mission Control Center (mission control center for the Russian Federal Space Agency, Korolyov, Russia)
    SpaceX Headquarters and Mission Control Center (mission control center for SpaceX Dragon 2, Hawthorne, California)
    Tanegashima Space Center (launch control center for JAXA, Tanegashima Island, Japan)
    Tsukuba Space Center (mission control center for JAXA, Tsukuba, Japan)

Current and former NASA human space flight programs

    Mercury program
    Gemini program
    Apollo program
        Skylab
    Space Shuttle program
    International Space Station

Former NASA flight controllers

    John Aaron, EECOM
    Steve Bales, GUIDO
    Jay Greene, FDO, Range Safety, Flight Director
    John Hodge, Flight Director
    Christopher C. Kraft, Jr., Flight Director
    Eugene Kranz, Flight Director
    Sy Liebergot, EECOM
    Glynn Lunney, FDO, Flight Director
    Roger Balettie, FDO
    William (Bill) Gravett, PHALCON (Apollo), EGIL (STS)

*/