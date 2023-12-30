/*

PYTHON

# Program to play a guessing game

import random

Number = random.randint(1,101)

print("Mo's Guessing Game")
print("Think of a number between 1 and 100...")
print()
GuessCtr = 0
while True:
    Guess = int(input("Enter your guess: "))
    GuessCtr += 1
    if Guess == Number:
        print()
        print("You are correct. The number was " + str(Number) + ".") 
        break
    elif Guess < Number:
        print()
        print("The number is higher than your current guess.")
    else:
        print()
        print("The number is lower than your current guess.")
        
print("You had" + str(GuessCtr) + " guesses.")
print()
print("Thanks for playing our little game.")
print()

Anykey = input("Press any key to continue.")


CALCULUS

The inverse tangent is what's also known as arctangent
just another notation for the same thing

BRAIN

JAVA

Show usages
You can view the list of all usages of a class, method or variable across the whole project, and quickly navigate to the selected item. Place the caret at a symbol and press   Ctrl   Alt   F7   (Edit | Find Usages | Show Usages).
To jump to a usage, select it from the list and press   Enter  .

In Java, the final keyword is used to indicate that a variable, method, or class cannot be modified or extended. Here are some of its characteristics:

    Final variables: When a variable is declared as final, its value cannot be changed once it has been initialized. This is useful for declaring constants or other values that should not be modified.
    Final methods: When a method is declared as final, it cannot be overridden by a subclass. This is useful for methods that are part of a class’s public API and should not be modified by subclasses.
    Final classes: When a class is declared as final, it cannot be extended by a subclass. This is useful for classes that are intended to be used as is and should not be modified or extended.
    Initialization: Final variables must be initialized either at the time of declaration or in the constructor of the class. This ensures that the value of the variable is set and cannot be changed.
    Performance: The use of final can sometimes improve performance, as the compiler can optimize the code more effectively when it knows that a variable or method cannot be changed.
    Security: final can help improve security by preventing malicious code from modifying sensitive data or behavior.

Overall, the final keyword is a useful tool for improving code quality and ensuring that certain aspects of a program cannot be modified or extended. By declaring variables, methods, and classes as final, developers can write more secure, robust, and maintainable code. 

In java can make things blue then right click and can
encapsulate fields 

click refactor then can find encapsulate fields 

can make getter methods /////////////

C



#include <stdio.h> ////////////////
#include <stdlib.h>

int main()
{
    printf("Answer: %f", cube(7.0));

   return 0;
}

double cube(double num){
    return num * num * num;
}


int main()
{
    sayHi("Ethan", 50);
    sayHi("Tom", 24);
    sayHi("Lucius", 80);
   return 0;
}

void sayHi(char name[], int age){
    printf("Hello %s, you are %d\n", name, age);
}

start with void for functions /////////

void basically means that this function isn't going to
return any information.

int main()
{
   int luckyNumbers[] = {4, 8, 15, 16, 23, 42}
   luckyNumbers[1] = 400;
                         0  1  2   3   4   5
   printf("%d", luckyNumbers[0]);
   return 0;
}

 int luckyNumbers[10];
    luckyNumbers[1] = 80;
    printf("%d", luckyNumbers[1]);
    return 0;

char phrase[20] = "Array";

    printf("%d", luckyNumbers[0]);

with arrays can do doubles floats, etc. 

char color[20];
    char pluralNoun[20];
    char celebrityF[20];
    char celebrityL[20];

    printf("Enter a color: ");
    scanf("%s", color);
    printf("Enter a plural noun: ");
    scanf("%s", pluralNoun);
    printf("Enter a celebrity: ");
    scanf("%s%s", celebrityF, celebrityL);


    printf("Roses are %s\n", color);
    printf("%s are blue\n", pluralNoun);
    printf("I love %s %s\n", celebrityF, celebrityL);

    return 0;
}

can scan for multiple characters like scanf("%s%s", celebrityF, celebrityL); 
////////

 double num1;
    double num2;
    printf("Enter first number: ");
    scanf("%lf", &num1);
    printf("Enter second number: ");
    scanf("%lf", &num2);

    printf("Answer: %f", num1 + num2);

////////
if your scanning for a number use lf like %lf
for printf use %f

char name[20];
    printf("Enter your name: ");
    fgets(name, 20, stdin);
    printf("Your name is %s asdf", name);
////////////////////////
scanf

when you're using scanf and you want to store
info inside of like an integer or a float you 
need to use the ampersand //////

////
printf("%d", 90);


///////
 const int FAV_NUM = 5;
    printf("%d\n", num);
    num = 8;
    printf("%d", num);

//////////////


   printf("Comments are fun");
///

 printf("%f", floor(36.656) );

any operation between an integer and
a floating-point number is going to give
you a floating number back




int favNum = 90;
    char myChar = 'i';
    printf("My favorite %c is %f", myChar , favNum);



////////////
 int age = 40;
    double gpa = 3.6;
    char grade = 'A';
    char phrase[] = "Giraffe Academy";

char characterName[] = "Tom";
    int characterAge = 38;
    printf("There once was a man named %s\n", characterName);
    printf("he was %d years old.\n", characterAge);

    characterAge = 30;
    printf("He really liked the name %s\n", characterName);
    printf("but did not like being %d.\n", characterAge);

press on - to hide code + to get it back //////

#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Hello world!\n");
    printf("Hello world!\n");
    return 0;
}

gear icon called build next to play in code blocks allows
you to build a program 
also an option called build and run on right next
to play


///// maybe when writing instructions in C
end with semicolon

////// ctrl s to save

///// order matters here

 printf("  /___|\n");
    printf("     /|\n");
    printf("    / |\n");
    printf("   /  |\n");



TDD

Cycle that goes from Pass to Refactor to Fail ////

Jest ///

Cypress //

Red Green Refactor //////

Failing test first red for fail
then you write some code to get it passing green
then you go back and optimize or refactor the code for refactor

//////

Unit testing //////////

Integration testing /////////

End-to-end testing //////////////////

Acceptance testing is a form of testing that 
makes sure that the software meets all the clients
requirements

system testing ///

Sanity tests /////////////

Smoke tests /////////


npm init @vitejs/app


npm run test

npm install @types/jest    /////////////////

Wallaby.js ///////////// extension //////

describe function /////

test function or it////

toBe is a matcher that will test the actual value to the
correct value

todo allows the test to pass while you figure things
out even if there's an error

can add multiple expect to a single test

toEqual checks for value equality instead of the 
object reference itself 

Jest has a set of helper functions:

beforeAll 
beforeEach /////////////
test
afterEach
afterAll

jest-puppeteer package

npm install cypress -D ////////////


BIOLOGY

Protein folding - Secondary structure - Driven
by hydrogen-bonding of peptide bonds!

////

a-helix /////////

Secondary structure is higher oder than just the
primary sequence

and it's established by non-covalent bonds

alpha-helix

R-groups

SS is important because it is very prevalent in a
lot of proteins

anti-parallel beta sheet //////

beta turn //////

Tertiary structure

It;s enabled by all these other interactions,
electrostatic,hydrogen bonding, hydrophobic forces
/////////

Protein folding - Tertiary structure

Electrostatic interactions; Hydrogen-bonds; hydrophobic
interactions and van der Waals forces.

ab-initio

GB1 is a very small protein that holds reversibly under
appropriate conditions

nascent helix ////

molten globules ////////////////

In molecular biology, the term molten globule (MG) refers to protein states that are more or less compact (hence the "globule"), but are lacking the specific tight packing of amino acid residues which creates the solid state-like tertiary structure of completely folded proteins (hence the "molten").

Protein folding is navigated by a dynamic interplay of secondary and tertiary interactions. Two extreme folding pathway models have been formulated. In the first - the framework model - rapidly formed secondary structure elements assemble into a native tertiary structure.[1] In the second - the hydrophobic collapse model - the formation of a loosely packed tertiary structure precedes secondary structure acquisition.[2] A nucleation-condensation mechanism involving concomitant formation of short and long-range interactions combines features of both extreme models and thereby represents a unifying mechanism of protein folding.[3]

During folding, proteins span a continuum of conformers starting from the denature and ending at the native state. Although often considered a statistical random coil, the denatured state can retain residual structure that mediates (re)folding.[4] For instance, staphylococcal nuclease retains native-like topology in 8M urea,[5] while nonnative lysozyme contains hydrophobic clusters held together by long-range interactions.[6] By rapidly adjusting experimental conditions to favor native structure formation, relatively compact protein folding intermediates have been observed.[7] These kinetic intermediates - coined molten globules[8] - exhibit native-like secondary structure and fluctuating tertiary structure.

The molten globule state can also be thermodynamically accessed under mildly denaturing conditions. It was found, for example, in cytochrome c, which conserves a native-like secondary structure content but without the tightly packed protein interior, under low pH and high salt concentration. For cytochrome c and some other proteins, it has been shown that the molten globule state is a "thermodynamic state" clearly different both from the native and the denatured state, demonstrating for the first time the existence of a third equilibrium (i.e., intermediate) state.

The term "molten globule" may be used to describe various types of partially-folded protein states[9] found in slightly denaturing conditions such as low pH (generally pH = 2), mild denaturant, or high temperature. Molten globules are collapsed and generally have some native-like secondary structure but a dynamic tertiary structure as seen by far-UV and near-UV circular dichroism (CD) spectroscopy, respectively. These traits are similar to those observed in the transient intermediate states found during the folding of certain proteins, especially globular proteins that undergo hydrophobic collapse, and therefore the term "molten globule" is also used to refer to certain protein folding intermediates corresponding to the narrowing region of the folding funnel higher in energy than the native state but lower than the denatured state. The molten globule ensembles sampled during protein folding and unfolding are thought to be roughly similar.

The MG structure is believed to lack the close packing of amino acid side chains that characterize the native state ( N {\displaystyle {\ce {N}}}) of a protein. The transition from a denatured ( U {\displaystyle {\ce {U}}}) state to a molten globule may be a two state process

    U ⟷ MG {\displaystyle {\ce {U <-> MG}}}

Or it may be a continuous transition, with no cooperativity and no apparent "switch" from one form to the other. The folding of some proteins can be modeled as a three-state kinetic process:

    U ⟷ MG ⟷ N {\displaystyle {\ce {U <-> MG <-> N}}}

One of the difficulties in de novo protein design is achieving the side chain packing needed to create a stable native state rather than an ensemble of molten globules. Given a desired backbone conformation, side chain packing can be designed using variations of the dead-end elimination algorithm; however, attempts to design proteins of novel folds have difficulty using this method due to an absence of plausible backbone models. 

Overview

Staph infections are caused by staphylococcus bacteria. These types of germs are commonly found on the skin or in the nose of many healthy people. Most of the time, these bacteria cause no problems or cause relatively minor skin infections.

But staph infections can turn deadly if the bacteria invade deeper into your body, entering your bloodstream, joints, bones, lungs or heart. A growing number of otherwise healthy people are developing life-threatening staph infections.

Treatment usually involves antibiotics and cleaning of the infected area. However, some staph infections no longer respond, or become resistant, to common antibiotics. To treat antibiotic-resistant staph infections, health care providers may need to use antibiotics that can cause more side effects.


Symptoms

Staph infections can range from minor skin problems to life-threatening illness. For example, endocarditis, a serious infection of the inner lining of your heart (endocardium) can be caused by staph bacteria. Signs and symptoms of staph infections vary widely, depending on the location and severity of the infection.

Staph infection

infections start out as small red bumps that can quickly turn into deep, painful abscesses.
Skin infections

Skin infections caused by staph bacteria include:

    Boils. The most common type of staph infection is the boil. This is a pocket of pus that develops in a hair follicle or oil gland. The skin over the infected area usually becomes red and swollen.

    If a boil breaks open, it will probably drain pus. Boils occur most often under the arms or around the groin or buttocks.
    Impetigo. This contagious, often painful rash can be caused by staph bacteria. Impetigo usually has large blisters that may ooze fluid and develop a honey-colored crust.
    Cellulitis. Cellulitis is an infection of the deeper layers of skin. It causes redness and swelling on the surface of your skin. Sores or areas of oozing discharge may develop, too.
    Staphylococcal scalded skin syndrome. Toxins produced by the staph bacteria may cause staphylococcal scalded skin syndrome. Affecting mostly babies and children, this condition includes a fever, a rash and sometimes blisters. When the blisters break, the top layer of skin comes off. This leaves a red, raw surface that looks like a burn.

Food poisoning

Staph bacteria are one of the most common causes of food poisoning. The bacteria multiply in food and produce toxins that make you sick. Symptoms come on quickly, usually within hours of eating a contaminated food. Symptoms usually disappear quickly, too, often lasting just half a day.

A staph infection in food usually doesn't cause a fever. Signs and symptoms you can expect with this type of staph infection include:

    Nausea and vomiting
    Diarrhea
    Dehydration
    Low blood pressure

Bacteremia

Also known as a bloodstream infection, bacteremia occurs when staph bacteria enter the bloodstream. A fever and low blood pressure are signs of bacteremia. The bacteria can travel to locations deep within your body to cause infections that affect:

    Internal organs, such as your brain (meningitis), heart (endocarditis) or lungs (pneumonia)
    Bones and muscles
    Surgically implanted devices, such as artificial joints or cardiac pacemakers

Toxic shock syndrome

This life-threatening condition results from toxins produced by some strains of staph bacteria. The condition has been linked to certain types of tampons, skin wounds and surgery. It usually develops suddenly with:

    A high fever
    Nausea and vomiting
    A rash on your palms and soles that looks like a sunburn
    Confusion
    Muscle aches
    Diarrhea
    Stomach pain

Septic arthritis

Septic arthritis is often caused by a staph infection. The bacteria often target the knees, shoulders, hips, and fingers or toes. Artificial joints may also be at risk of infection. Signs and symptoms may include:

    Joint swelling
    Severe pain in the affected joint
    Fever

When to see a doctor

Go to your health care provider if you or your child has:

    An area of red, irritated or painful skin
    Pus-filled blisters
    Fever
FINISH THIS mayoclinic.org staph infections
You may also want to talk to your provider if:
----------------------------------------------

Cyclin A 

Cyclin A is involved in cell cycle

GFP - Green fluorescent protein

Triose phosphate isomerase /////

Protein folding - Quaternary structure

The Compact structure of multiple protein molecules
- Same non-covalent forces

but:
between protein molecules ("subunits") instead of
within a single protein molecule - 

Intermolecular vs Intramolecular

Reasons for quaternary structure?

e.g Hemogoblin

Heme group  //////


Proteins made up of >1 identical subunits are Homooligomers
Proteins made up of >1 different subunits are heterooligomers

polypeptide chains /////

prototypic ////

hemogoblin is the protein that carries oxygen around 
in your blood

Hemogoblin is made up of two alpha and 2 beta
subunits

the features of the quaternary structure
are very important for the proper transport of
oxygen and single mutations can really mess things up

----------------------- write rest here

tetrameric quaternary



Heme (American English), or haem (Commonwealth English, both pronounced /hi:m/ HEEM), is a precursor to hemoglobin, which is necessary to bind oxygen in the bloodstream. Heme is biosynthesized in both the bone marrow and the liver.[1]

In biochemical terms, heme is a coordination complex "consisting of an iron ion coordinated to a porphyrin acting as a tetradentate ligand, and to one or two axial ligands."[2] The definition is loose, and many depictions omit the axial ligands.[3] Among the metalloporphyrins deployed by metalloproteins as prosthetic groups, heme is one of the most widely used[4] and defines a family of proteins known as hemoproteins. Hemes are most commonly recognized as components of hemoglobin, the red pigment in blood, but are also found in a number of other biologically important hemoproteins such as myoglobin, cytochromes, catalases, heme peroxidase, and endothelial nitric oxide synthase.[5][6]

The word haem is derived from Greek αἷμα haima meaning "blood".
Space-filling model of the Fe-protoporphyrin IX subunit of heme B. Axial ligands omitted. Color scheme: grey=iron, blue=nitrogen, black=carbon, white=hydrogen, red=oxygen
Function
The heme group of succinate dehydrogenase bound to histidine, an electron carrier in the mitochondrial electron transfer chain. The large semi-transparent sphere indicates the location of the iron ion. From PDB: 1YQ3​.

Hemoproteins have diverse biological functions including the transportation of diatomic gases, chemical catalysis, diatomic gas detection, and electron transfer. The heme iron serves as a source or sink of electrons during electron transfer or redox chemistry. In peroxidase reactions, the porphyrin molecule also serves as an electron source, being able to delocalize radical electrons in the conjugated ring. In the transportation or detection of diatomic gases, the gas binds to the heme iron. During the detection of diatomic gases, the binding of the gas ligand to the heme iron induces conformational changes in the surrounding protein.[7] In general, diatomic gases only bind to the reduced heme, as ferrous Fe(II) while most peroxidases cycle between Fe(III) and Fe(IV) and hemeproteins involved in mitochondrial redox, oxidation-reduction, cycle between Fe(II) and Fe(III).

It has been speculated that the original evolutionary function of hemoproteins was electron transfer in primitive sulfur-based photosynthesis pathways in ancestral cyanobacteria-like organisms before the appearance of molecular oxygen.[8]

Hemoproteins achieve their remarkable functional diversity by modifying the environment of the heme macrocycle within the protein matrix.[9] For example, the ability of hemoglobin to effectively deliver oxygen to tissues is due to specific amino acid residues located near the heme molecule.[10] Hemoglobin reversibly binds to oxygen in the lungs when the pH is high, and the carbon dioxide concentration is low. When the situation is reversed (low pH and high carbon dioxide concentrations), hemoglobin will release oxygen into the tissues. This phenomenon, which states that hemoglobin's oxygen binding affinity is inversely proportional to both acidity and concentration of carbon dioxide, is known as the Bohr effect.[11] The molecular mechanism behind this effect is the steric organization of the globin chain; a histidine residue, located adjacent to the heme group, becomes positively charged under acidic conditions (which are caused by dissolved CO2 in working muscles, etc.), releasing oxygen from the heme group.[12]
Types
Major hemes

There are several biologically important kinds of heme:
	Heme A 	Heme B 	Heme C 	Heme O
PubChem number 	7888115 	444098 	444125 	6323367
Chemical formula 	C49H56O6N4Fe 	C34H32O4N4Fe 	C34H36O4N4S2Fe 	C49H58O5N4Fe
Functional group at C3 		–CH(OH)CH2Far 	–CH=CH2 	–CH(cystein-S-yl)CH3 	–CH(OH)CH2Far
Functional group at C8 	–CH=CH2 	–CH=CH2 	–CH(cystein-S-yl)CH3 	–CH=CH2
Functional group at C18 	–CH=O 	–CH3 	–CH3 	–CH3
Structure of Fe-porphyrin subunit of heme B.
Structure of Fe-porphyrin subunit of heme A.[13] Heme A is synthesized from heme B. In two sequential reactions a 17-hydroxyethylfarnesyl moiety is added at the 2-position and an aldehyde is added at the 8-position.[14]

The most common type is heme B; other important types include heme A and heme C. Isolated hemes are commonly designated by capital letters while hemes bound to proteins are designated by lower case letters. Cytochrome a refers to the heme A in specific combination with membrane protein forming a portion of cytochrome c oxidase.[15]
Other hemes

    The following carbon numbering system of porphyrins is an older numbering used by biochemists and not the 1–24 numbering system recommended by IUPAC which is shown in the table above.

    Heme l is the derivative of heme B which is covalently attached to the protein of lactoperoxidase, eosinophil peroxidase, and thyroid peroxidase. The addition of peroxide with the glutamyl-375 and aspartyl-225 of lactoperoxidase forms ester bonds between these amino acid residues and the heme 1- and 5-methyl groups, respectively.[16] Similar ester bonds with these two methyl groups are thought to form in eosinophil and thyroid peroxidases. Heme l is one important characteristic of animal peroxidases; plant peroxidases incorporate heme B. Lactoperoxidase and eosinophil peroxidase are protective enzymes responsible for the destruction of invading bacteria and virus. Thyroid peroxidase is the enzyme catalyzing the biosynthesis of the important thyroid hormones. Because lactoperoxidase destroys invading organisms in the lungs and excrement, it is thought to be an important protective enzyme.[17]
    Heme m is the derivative of heme B covalently bound at the active site of myeloperoxidase. Heme m contains the two ester bonds at the heme 1- and 5-methyl groups also present in heme l of other mammalian peroxidases, such as lactoperoxidase and eosinophil peroxidase. In addition, a unique sulfonamide ion linkage between the sulfur of a methionyl amino-acid residue and the heme 2-vinyl group is formed, giving this enzyme the unique capability of easily oxidizing chloride and bromide ions to hypochlorite and hypobromite. Myeloperoxidase is present in mammalian neutrophils and is responsible for the destruction of invading bacteria and viral agents. It perhaps synthesizes hypobromite by "mistake". Both hypochlorite and hypobromite are very reactive species responsible for the production of halogenated nucleosides, which are mutagenic compounds.[18][19]
    Heme D is another derivative of heme B, but in which the propionic acid side chain at the carbon of position 6, which is also hydroxylated, forms a γ-spirolactone. Ring III is also hydroxylated at position 5, in a conformation trans to the new lactone group.[20] Heme D is the site for oxygen reduction to water of many types of bacteria at low oxygen tension.[21]
    Heme S is related to heme B by having a formal group at position 2 in place of the 2-vinyl group. Heme S is found in the hemoglobin of a few species of marine worms. The correct structures of heme B and heme S were first elucidated by German chemist Hans Fischer.[22]

The names of cytochromes typically (but not always) reflect the kinds of hemes they contain: cytochrome a contains heme A, cytochrome c contains heme C, etc. This convention may have been first introduced with the publication of the structure of heme A.
Use of capital letters to designate the type of heme

The practice of designating hemes with upper case letters was formalized in a footnote in a paper by Puustinen and Wikstrom[23] which explains under which conditions a capital letter should be used: "we prefer the use of capital letters to describe the heme structure as isolated. Lowercase letters may then be freely used for cytochromes and enzymes, as well as to describe individual protein-bound heme groups (for example, cytochrome bc, and aa3 complexes, cytochrome b5, heme c1 of the bc1 complex, heme a3 of the aa3 complex, etc)." In other words, the chemical compound would be designated with a capital letter, but specific instances in structures with lowercase. Thus cytochrome oxidase, which has two A hemes (heme a and heme a3) in its structure, contains two moles of heme A per mole protein. Cytochrome bc1, with hemes bH, bL, and c1, contains heme B and heme C in a 2:1 ratio. The practice seems to have originated in a paper by Caughey and York in which the product of a new isolation procedure for the heme of cytochrome aa3 was designated heme A to differentiate it from previous preparations: "Our product is not identical in all respects with the heme a obtained in solution by other workers by the reduction of the hemin a as isolated previously (2). For this reason, we shall designate our product heme A until the apparent differences can be rationalized.".[24] In a later paper,[25] Caughey's group uses capital letters for isolated heme B and C as well as A.
Synthesis
Main article: Porphyrin § Biosynthesis
Further information: Cobalamin biosynthesis
Heme synthesis in the cytoplasm and mitochondrion

The enzymatic process that produces heme is properly called porphyrin synthesis, as all the intermediates are tetrapyrroles that are chemically classified as porphyrins. The process is highly conserved across biology. In humans, this pathway serves almost exclusively to form heme. In bacteria, it also produces more complex substances such as cofactor F430 and cobalamin (vitamin B12).[26]

The pathway is initiated by the synthesis of δ-aminolevulinic acid (dALA or δALA) from the amino acid glycine and succinyl-CoA from the citric acid cycle (Krebs cycle). The rate-limiting enzyme responsible for this reaction, ALA synthase, is negatively regulated by glucose and heme concentration. Mechanism of inhibition of ALAs by heme or hemin is by decreasing stability of mRNA synthesis and by decreasing the intake of mRNA in the mitochondria. This mechanism is of therapeutic importance: infusion of heme arginate or hematin and glucose can abort attacks of acute intermittent porphyria in patients with an inborn error of metabolism of this process, by reducing transcription of ALA synthase.[27]

The organs mainly involved in heme synthesis are the liver (in which the rate of synthesis is highly variable, depending on the systemic heme pool) and the bone marrow (in which rate of synthesis of Heme is relatively constant and depends on the production of globin chain), although every cell requires heme to function properly. However, due to its toxic properties, proteins such as Hemopexin (Hx) are required to help maintain physiological stores of iron in order for them to be used in synthesis.[28] Heme is seen as an intermediate molecule in catabolism of hemoglobin in the process of bilirubin metabolism. Defects in various enzymes in synthesis of heme can lead to group of disorder called porphyrias, these include acute intermittent porphyria, congenital erythropoetic porphyria, porphyria cutanea tarda, hereditary coproporphyria, variegate porphyria, erythropoietic protoporphyria.[29][citation needed]
Synthesis for food

Impossible Foods, producers of plant-based meat substitutes, use an accelerated heme synthesis process involving soybean root leghemoglobin and yeast, adding the resulting heme to items such as meatless (vegan) Impossible burger patties. The DNA for leghemoglobin production was extracted from the soybean root nodules and expressed in yeast cells to overproduce heme for use in the meatless burgers.[30] This process claims to create a meaty flavor in the resulting products.[31][32]
Degradation
Heme breakdown

Degradation begins inside macrophages of the spleen, which remove old and damaged erythrocytes from the circulation. In the first step, heme is converted to biliverdin by the enzyme heme oxygenase (HO).[33] NADPH is used as the reducing agent, molecular oxygen enters the reaction, carbon monoxide (CO) is produced and the iron is released from the molecule as the ferrous ion (Fe2+).[34] CO acts as a cellular messenger and functions in vasodilation.[35]

In addition, heme degradation appears to be an evolutionarily-conserved response to oxidative stress. Briefly, when cells are exposed to free radicals, there is a rapid induction of the expression of the stress-responsive heme oxygenase-1 (HMOX1) isoenzyme that catabolizes heme (see below).[36] The reason why cells must increase exponentially their capability to degrade heme in response to oxidative stress remains unclear but this appears to be part of a cytoprotective response that avoids the deleterious effects of free heme. When large amounts of free heme accumulates, the heme detoxification/degradation systems get overwhelmed, enabling heme to exert its damaging effects.[28]
heme 	heme oxygenase-1 	biliverdin + Fe2+
	  	
H+ + NADPH + O2 	NADP+ + CO
	
 
  		

In the second reaction, biliverdin is converted to bilirubin by biliverdin reductase (BVR):[37]
biliverdin 	biliverdin reductase 	bilirubin
	  	
H+ + NADPH 	NADP+
	
 
  		

Bilirubin is transported into the liver by facilitated diffusion bound to a protein (serum albumin), where it is conjugated with glucuronic acid to become more water-soluble. The reaction is catalyzed by the enzyme UDP-glucuronosyltransferase.[38]
bilirubin 	UDP-glucuronosyltransferase 	bilirubin diglucuronide
	  	
2 UDP-glucuronide 	2 UMP + 2 Pi
	
 
  		

This form of bilirubin is excreted from the liver in bile. Excretion of bilirubin from liver to biliary canaliculi is an active, energy-dependent and rate-limiting process. The intestinal bacteria deconjugate bilirubin diglucuronide and convert bilirubin to urobilinogens. Some urobilinogen is absorbed by intestinal cells and transported into the kidneys and excreted with urine (urobilin, which is the product of oxidation of urobilinogen, and is responsible for the yellow colour of urine). The remainder travels down the digestive tract and is converted to stercobilinogen. This is oxidized to stercobilin, which is excreted and is responsible for the brown color of feces.[39]
In health and disease

Under homeostasis, the reactivity of heme is controlled by its insertion into the “heme pockets” of hemoproteins.[citation needed] Under oxidative stress however, some hemoproteins, e.g. hemoglobin, can release their heme prosthetic groups.[40][41] The non-protein-bound (free) heme produced in this manner becomes highly cytotoxic, most probably due to the iron atom contained within its protoporphyrin IX ring, which can act as a Fenton's reagent to catalyze in an unfettered manner the production of free radicals.[42] It catalyzes the oxidation and aggregation of protein, the formation of cytotoxic lipid peroxide via lipid peroxidation and damages DNA through oxidative stress. Due to its lipophilic properties, it impairs lipid bilayers in organelles such as mitochondria and nuclei.[43] These properties of free heme can sensitize a variety of cell types to undergo programmed cell death in response to pro-inflammatory agonists, a deleterious effect that plays an important role in the pathogenesis of certain inflammatory diseases such as malaria[44] and sepsis.[45]
Cancer

There is an association between high intake of heme iron sourced from meat and increased risk of colon cancer.[46] The heme content of red meat is 10 times higher than that of white meat such as chicken.[47]

The American Institute for Cancer Research (AICR) and World Cancer Research Fund International (WCRF) concluded in a 2018 report that there is limited but suggestive evidence that foods containing heme iron increase risk of colorectal cancer.[48] A 2019 review found that heme iron intake is associated with increased breast cancer risk.[49]
Genes

The following genes are part of the chemical pathway for making heme:

    ALAD: aminolevulinic acid, δ-, dehydratase (deficiency causes ala-dehydratase deficiency porphyria)[50]
    ALAS1: aminolevulinate, δ-, synthase 1
    ALAS2: aminolevulinate, δ-, synthase 2 (deficiency causes sideroblastic/hypochromic anemia)
    CPOX: coproporphyrinogen oxidase (deficiency causes hereditary coproporphyria)[51]
    FECH: ferrochelatase (deficiency causes erythropoietic protoporphyria)
    HMBS: hydroxymethylbilane synthase (deficiency causes acute intermittent porphyria)[52]
    PPOX: protoporphyrinogen oxidase (deficiency causes variegate porphyria)[53]
    UROD: uroporphyrinogen decarboxylase (deficiency causes porphyria cutanea tarda)[54]
    UROS: uroporphyrinogen III synthase (deficiency causes congenital erythropoietic porphyria)



    Hemoglobin (also spelled haemoglobin[a], abbreviated Hb or Hgb), is the iron-containing oxygen-transport protein present in erythrocytes (red blood cells) of almost all vertebrates[3] (the exception being the fish family Channichthyidae)[4] as well as the tissues of some invertebrate animals. Hemoglobin in blood carries oxygen from the respiratory organs (lungs or gills) to the other tissues of the body, where it releases the oxygen to enable aerobic respiration which powers the animal's metabolism. A healthy human has 12 to 20 grams of hemoglobin in every 100 mL of blood. Hemoglobin is a metalloprotein, a chromoprotein as well as a globulin.

In mammals, hemoglobin makes up about 96% of a red blood cell's dry weight (excluding water), and around 35% of the total weight (including water).[5] Hemoglobin has an oxygen-binding capacity of 1.34 mL O2 per gram,[6] which increases the total blood oxygen capacity seventy-fold compared to dissolved oxygen in blood plasma alone.[7] The mammalian hemoglobin molecule can bind and transport up to four oxygen molecules.[8]

Hemoglobin also transports other gases. It carries off some of the body's respiratory carbon dioxide (about 20–25% of the total)[9] as carbaminohemoglobin, in which CO2 binds to the heme protein. The molecule also carries the important regulatory molecule nitric oxide bound to a thiol group in the globin protein, releasing it at the same time as oxygen.[10]

Hemoglobin is also found in other cells, including in the A9 dopaminergic neurons of the substantia nigra, macrophages, alveolar cells, lungs, retinal pigment epithelium, hepatocytes, mesangial cells of the kidney, endometrial cells, cervical cells, and vaginal epithelial cells.[11] In these tissues, hemoglobin absorbs unneeded oxygen as an antioxidant, and regulates iron metabolism.[12] Excessive glucose in the blood can attach to hemoglobin and raise the level of hemoglobin A1c.[13]

Hemoglobin and hemoglobin-like molecules are also found in many invertebrates, fungi, and plants.[14] In these organisms, hemoglobins may carry oxygen, or they may transport and regulate other small molecules and ions such as carbon dioxide, nitric oxide, hydrogen sulfide and sulfide. A variant called leghemoglobin serves to scavenge oxygen away from anaerobic systems such as the nitrogen-fixing nodules of leguminous plants, preventing oxygen poisoning.

The medical condition hemoglobinemia, a form of anemia, is caused by intravascular hemolysis, in which hemoglobin leaks from red blood cells into the blood plasma.
Research history
Max Perutz won the Nobel Prize for chemistry for his work determining the molecular structure of hemoglobin and myoglobin[15]

In 1825, Johann Friedrich Engelhart discovered that the ratio of iron to protein is identical in the hemoglobins of several species.[16][17] From the known atomic mass of iron, he calculated the molecular mass of hemoglobin to n × 16000 (n = number of iron atoms per hemoglobin molecule, now known to be 4), the first determination of a protein's molecular mass. This "hasty conclusion" drew ridicule from colleagues who could not believe that any molecule could be so large. However, Gilbert Smithson Adair confirmed Engelhart's results in 1925 by measuring the osmotic pressure of hemoglobin solutions.[18]

Although blood had been known to carry oxygen since at least 1794,[19][20] the oxygen-carrying property of hemoglobin was described by Hünefeld in 1840.[21] In 1851, German physiologist Otto Funke published a series of articles in which he described growing hemoglobin crystals by successively diluting red blood cells with a solvent such as pure water, alcohol or ether, followed by slow evaporation of the solvent from the resulting protein solution.[22][23] Hemoglobin's reversible oxygenation was described a few years later by Felix Hoppe-Seyler.[24]

With the development of X-ray crystallography, it became possible to sequence protein structures.[25] In 1959, Max Perutz determined the molecular structure of hemoglobin.[26][27] For this work he shared the 1962 Nobel Prize in Chemistry with John Kendrew, who sequenced the globular protein myoglobin.[25][28]

The role of hemoglobin in the blood was elucidated by French physiologist Claude Bernard. The name hemoglobin is derived from the words heme and globin, reflecting the fact that each subunit of hemoglobin is a globular protein with an embedded heme group. Each heme group contains one iron atom, that can bind one oxygen molecule through ion-induced dipole forces. The most common type of hemoglobin in mammals contains four such subunits.
Genetics

Hemoglobin consists of protein subunits (globin molecules), which are polypeptides, long folded chains of specific amino acids which determine the protein's chemical properties and function. The amino acid sequence of any polypeptide is translated from a segment of DNA, the corresponding gene. The amino acid sequence that determines the protein's chemical properties and function.

There is more than one hemoglobin gene. In humans, hemoglobin A (the main form of hemoglobin in adults) is coded by genes HBA1, HBA2, and HBB.[29] Alpha 1 and alpha 2 subunits are respectively coded by genes HBA1 and HBA2 close together on chromosome 16, while the beta subunit is coded by gene HBB on chromosome 11. The amino acid sequences of the globin subunits usually differ between species, with the difference growing with evolutionary distance. For example, the most common hemoglobin sequences in humans, bonobos and chimpanzees are completely identical, with exactly the same alpha and beta globin protein chains.[30][31][32] Human and gorilla hemoglobin differ in one amino acid in both alpha and beta chains, and these differences grow larger between less closely related species.

Mutations in the genes for hemoglobin can result in variants of hemoglobin within a single species, although one sequence is usually "most common" in each species.[33][34] Many of these mutations cause no disease, but some cause a group of hereditary diseases called hemoglobinopathies. The best known hemoglobinopathy is sickle-cell disease, which was the first human disease whose mechanism was understood at the molecular level. A mostly separate set of diseases called thalassemias involves underproduction of normal and sometimes abnormal hemoglobins, through problems and mutations in globin gene regulation. All these diseases produce anemia.[35]
Protein alignment of human hemoglobin proteins, alpha, beta, and delta subunits respectively. The alignments were created using UniProt's alignment tool available online.

Variations in hemoglobin sequences, as with other proteins, may be adaptive. For example, hemoglobin has been found to adapt in different ways to the thin air at high altitudes, where lower partial pressure of oxygen diminishes its binding to hemoglobin compared to the higher pressures at sea level. Recent studies of deer mice found mutations in four genes that can account for differences between high- and low-elevation populations. It was found that the genes of the two breeds are "virtually identical—except for those that govern the oxygen-carrying capacity of their hemoglobin. . . . The genetic difference enables highland mice to make more efficient use of their oxygen."[36] Mammoth hemoglobin featured mutations that allowed for oxygen delivery at lower temperatures, thus enabling mammoths to migrate to higher latitudes during the Pleistocene.[37] This was also found in hummingbirds that inhabit the Andes. Hummingbirds already expend a lot of energy and thus have high oxygen demands and yet Andean hummingbirds have been found to thrive in high altitudes. Non-synonymous mutations in the hemoglobin gene of multiple species living at high elevations (Oreotrochilus, A. castelnaudii, C. violifer, P. gigas, and A. viridicuada) have caused the protein to have less of an affinity for inositol hexaphosphate (IHP), a molecule found in birds that has a similar role as 2,3-BPG in humans; this results in the ability to bind oxygen in lower partial pressures.[38]

Birds' unique circulatory lungs also promote efficient use of oxygen at low partial pressures of O2. These two adaptations reinforce each other and account for birds' remarkable high-altitude performance.

Hemoglobin adaptation extends to humans, as well. There is a higher offspring survival rate among Tibetan women with high oxygen saturation genotypes residing at 4,000 m.[39] Natural selection seems to be the main force working on this gene because the mortality rate of offspring is significantly lower for women with higher hemoglobin-oxygen affinity when compared to the mortality rate of offspring from women with low hemoglobin-oxygen affinity. While the exact genotype and mechanism by which this occurs is not yet clear, selection is acting on these women's ability to bind oxygen in low partial pressures, which overall allows them to better sustain crucial metabolic processes.
Synthesis

Hemoglobin (Hb) is synthesized in a complex series of steps. The heme part is synthesized in a series of steps in the mitochondria and the cytosol of immature red blood cells, while the globin protein parts are synthesized by ribosomes in the cytosol.[40] Production of Hb continues in the cell throughout its early development from the proerythroblast to the reticulocyte in the bone marrow. At this point, the nucleus is lost in mammalian red blood cells, but not in birds and many other species. Even after the loss of the nucleus in mammals, residual ribosomal RNA allows further synthesis of Hb until the reticulocyte loses its RNA soon after entering the vasculature (this hemoglobin-synthetic RNA in fact gives the reticulocyte its reticulated appearance and name).[41]
Structure of heme
Heme b group

Hemoglobin has a quaternary structure characteristic of many multi-subunit globular proteins.[42] Most of the amino acids in hemoglobin form alpha helices, and these helices are connected by short non-helical segments. Hydrogen bonds stabilize the helical sections inside this protein, causing attractions within the molecule, which then causes each polypeptide chain to fold into a specific shape.[43] Hemoglobin's quaternary structure comes from its four subunits in roughly a tetrahedral arrangement.[42]

In most vertebrates, the hemoglobin molecule is an assembly of four globular protein subunits. Each subunit is composed of a protein chain tightly associated with a non-protein prosthetic heme group. Each protein chain arranges into a set of alpha-helix structural segments connected together in a globin fold arrangement. Such a name is given because this arrangement is the same folding motif used in other heme/globin proteins such as myoglobin.[44][45] This folding pattern contains a pocket that strongly binds the heme group.

A heme group consists of an iron (Fe) ion held in a heterocyclic ring, known as a porphyrin. This porphyrin ring consists of four pyrrole molecules cyclically linked together (by methine bridges) with the iron ion bound in the center.[46] The iron ion, which is the site of oxygen binding, coordinates with the four nitrogen atoms in the center of the ring, which all lie in one plane. The heme is bound strongly (covalently) to the globular protein via the N atoms of the imidazole ring of F8 histidine residue (also known as the proximal histidine) below the porphyrin ring. A sixth position can reversibly bind oxygen by a coordinate covalent bond,[47] completing the octahedral group of six ligands. This reversible bonding with oxygen is why hemoglobin is so useful for transporting oxygen around the body.[48] Oxygen binds in an "end-on bent" geometry where one oxygen atom binds to Fe and the other protrudes at an angle. When oxygen is not bound, a very weakly bonded water molecule fills the site, forming a distorted octahedron.

Even though carbon dioxide is carried by hemoglobin, it does not compete with oxygen for the iron-binding positions but is bound to the amine groups of the protein chains attached to the heme groups.

The iron ion may be either in the ferrous Fe2+ or in the ferric Fe3+ state, but ferrihemoglobin (methemoglobin) (Fe3+) cannot bind oxygen.[49] In binding, oxygen temporarily and reversibly oxidizes (Fe2+) to (Fe3+) while oxygen temporarily turns into the superoxide ion, thus iron must exist in the +2 oxidation state to bind oxygen. If superoxide ion associated to Fe3+ is protonated, the hemoglobin iron will remain oxidized and incapable of binding oxygen. In such cases, the enzyme methemoglobin reductase will be able to eventually reactivate methemoglobin by reducing the iron center.

In adult humans, the most common hemoglobin type is a tetramer (which contains four subunit proteins) called hemoglobin A, consisting of two α and two β subunits non-covalently bound, each made of 141 and 146 amino acid residues, respectively. This is denoted as α2β2. The subunits are structurally similar and about the same size. Each subunit has a molecular weight of about 16,000 daltons,[50] for a total molecular weight of the tetramer of about 64,000 daltons (64,458 g/mol).[51] Thus, 1 g/dL = 0.1551 mmol/L. Hemoglobin A is the most intensively studied of the hemoglobin molecules.

In human infants, the hemoglobin molecule is made up of 2 α chains and 2 γ chains. The γ chains are gradually replaced by β chains as the infant grows.[52]

The four polypeptide chains are bound to each other by salt bridges, hydrogen bonds, and the hydrophobic effect.
Oxygen saturation

In general, hemoglobin can be saturated with oxygen molecules (oxyhemoglobin), or desaturated with oxygen molecules (deoxyhemoglobin).[53]
Oxyhemoglobin

Oxyhemoglobin is formed during physiological respiration when oxygen binds to the heme component of the protein hemoglobin in red blood cells. This process occurs in the pulmonary capillaries adjacent to the alveoli of the lungs. The oxygen then travels through the blood stream to be dropped off at cells where it is utilized as a terminal electron acceptor in the production of ATP by the process of oxidative phosphorylation. It does not, however, help to counteract a decrease in blood pH. Ventilation, or breathing, may reverse this condition by removal of carbon dioxide, thus causing a shift up in pH.[54]

Hemoglobin exists in two forms, a taut (tense) form (T) and a relaxed form (R). Various factors such as low pH, high CO2 and high 2,3 BPG at the level of the tissues favor the taut form, which has low oxygen affinity and releases oxygen in the tissues. Conversely, a high pH, low CO2, or low 2,3 BPG favors the relaxed form, which can better bind oxygen.[55] The partial pressure of the system also affects O2 affinity where, at high partial pressures of oxygen (such as those present in the alveoli), the relaxed (high affinity, R) state is favoured. Inversely, at low partial pressures (such as those present in respiring tissues), the (low affinity, T) tense state is favoured.[56] Additionally, the binding of oxygen to the iron(II) heme pulls the iron into the plane of the porphyrin ring, causing a slight conformational shift. The shift encourages oxygen to bind to the three remaining heme units within hemoglobin (thus, oxygen binding is cooperative).

Classically, the iron in oxyhemoglobin is seen as existing in the iron(II) oxidation state. However, the complex of oxygen with heme iron is diamagnetic, whereas both oxygen and high-spin iron(II) are paramagnetic. Experimental evidence strongly suggests heme iron is in the iron(III) oxidation state in oxyhemoglobin, with the oxygen existing as superoxide anion (O2•−) or in a covalent charge-transfer complex.[57]
Deoxygenated hemoglobin

Deoxygenated hemoglobin (deoxyhemoglobin) is the form of hemoglobin without the bound oxygen. The absorption spectra of oxyhemoglobin and deoxyhemoglobin differ. The oxyhemoglobin has significantly lower absorption of the 660 nm wavelength than deoxyhemoglobin, while at 940 nm its absorption is slightly higher. This difference is used for the measurement of the amount of oxygen in a patient's blood by an instrument called a pulse oximeter. This difference also accounts for the presentation of cyanosis, the blue to purplish color that tissues develop during hypoxia.[58]

Deoxygenated hemoglobin is paramagnetic; it is weakly attracted to magnetic fields.[59][60] In contrast, oxygenated hemoglobin exhibits diamagnetism, a weak repulsion from a magnetic field.[60]
Evolution of vertebrate hemoglobin

Scientists agree that the event that separated myoglobin from hemoglobin occurred after lampreys diverged from jawed vertebrates.[61] This separation of myoglobin and hemoglobin allowed for the different functions of the two molecules to arise and develop: myoglobin has more to do with oxygen storage while hemoglobin is tasked with oxygen transport.[62] The α- and β-like globin genes encode the individual subunits of the protein.[29] The predecessors of these genes arose through another duplication event also after the gnathosome common ancestor derived from jawless fish, approximately 450–500 million years ago.[61] Ancestral reconstruction studies suggest that the preduplication ancestor of the α and β genes was a dimer made up of identical globin subunits, which then evolved to assemble into a tetrameric architecture after the duplication.[63] The development of α and β genes created the potential for hemoglobin to be composed of multiple distinct subunits, a physical composition central to hemoglobin's ability to transport oxygen. Having multiple subunits contributes to hemoglobin's ability to bind oxygen cooperatively as well as be regulated allosterically.[62][63] Subsequently, the α gene also underwent a duplication event to form the HBA1 and HBA2 genes.[64] These further duplications and divergences have created a diverse range of α- and β-like globin genes that are regulated so that certain forms occur at different stages of development.[62]

Most ice fish of the family Channichthyidae have lost their hemoglobin genes as an adaptation to cold water.[4]
Cooperativity
A schematic visual model of oxygen-binding process, showing all four monomers and hemes, and protein chains only as diagrammatic coils, to facilitate visualization into the molecule. Oxygen is not shown in this model, but, for each of the iron atoms, it binds to the iron (red sphere) in the flat heme. For example, in the upper-left of the four hemes shown, oxygen binds at the left of the iron atom shown in the upper-left of diagram. This causes the iron atom to move backward into the heme that holds it (the iron moves upward as it binds oxygen, in this illustration), tugging the histidine residue (modeled as a red pentagon on the right of the iron) closer, as it does. This, in turn, pulls on the protein chain holding the histidine.

When oxygen binds to the iron complex, it causes the iron atom to move back toward the center of the plane of the porphyrin ring (see moving diagram). At the same time, the imidazole side-chain of the histidine residue interacting at the other pole of the iron is pulled toward the porphyrin ring. This interaction forces the plane of the ring sideways toward the outside of the tetramer, and also induces a strain in the protein helix containing the histidine as it moves nearer to the iron atom. This strain is transmitted to the remaining three monomers in the tetramer, where it induces a similar conformational change in the other heme sites such that binding of oxygen to these sites becomes easier.

As oxygen binds to one monomer of hemoglobin, the tetramer's conformation shifts from the T (tense) state to the R (relaxed) state. This shift promotes the binding of oxygen to the remaining three monomers' heme groups, thus saturating the hemoglobin molecule with oxygen.[65]

In the tetrameric form of normal adult hemoglobin, the binding of oxygen is, thus, a cooperative process. The binding affinity of hemoglobin for oxygen is increased by the oxygen saturation of the molecule, with the first molecules of oxygen bound influencing the shape of the binding sites for the next ones, in a way favorable for binding. This positive cooperative binding is achieved through steric conformational changes of the hemoglobin protein complex as discussed above; i.e., when one subunit protein in hemoglobin becomes oxygenated, a conformational or structural change in the whole complex is initiated, causing the other subunits to gain an increased affinity for oxygen. As a consequence, the oxygen binding curve of hemoglobin is sigmoidal, or S-shaped, as opposed to the normal hyperbolic curve associated with noncooperative binding.

The dynamic mechanism of the cooperativity in hemoglobin and its relation with low-frequency resonance has been discussed.[66]
Binding of ligands other than oxygen

Besides the oxygen ligand, which binds to hemoglobin in a cooperative manner, hemoglobin ligands also include competitive inhibitors such as carbon monoxide (CO) and allosteric ligands such as carbon dioxide (CO2) and nitric oxide (NO). The carbon dioxide is bound to amino groups of the globin proteins to form carbaminohemoglobin; this mechanism is thought to account for about 10% of carbon dioxide transport in mammals. Nitric oxide can also be transported by hemoglobin; it is bound to specific thiol groups in the globin protein to form an S-nitrosothiol, which dissociates into free nitric oxide and thiol again, as the hemoglobin releases oxygen from its heme site. This nitric oxide transport to peripheral tissues is hypothesized to assist oxygen transport in tissues, by releasing vasodilatory nitric oxide to tissues in which oxygen levels are low.[67]
Competitive

The binding of oxygen is affected by molecules such as carbon monoxide (for example, from tobacco smoking, exhaust gas, and incomplete combustion in furnaces). CO competes with oxygen at the heme binding site. Hemoglobin's binding affinity for CO is 250 times greater than its affinity for oxygen,[68][69] meaning that small amounts of CO dramatically reduce hemoglobin's ability to deliver oxygen to the target tissue.[70] Since carbon monoxide is a colorless, odorless and tasteless gas, and poses a potentially fatal threat, carbon monoxide detectors have become commercially available to warn of dangerous levels in residences. When hemoglobin combines with CO, it forms a very bright red compound called carboxyhemoglobin, which may cause the skin of CO poisoning victims to appear pink in death, instead of white or blue. When inspired air contains CO levels as low as 0.02%, headache and nausea occur; if the CO concentration is increased to 0.1%, unconsciousness will follow. In heavy smokers, up to 20% of the oxygen-active sites can be blocked by CO.

In similar fashion, hemoglobin also has competitive binding affinity for cyanide (CN−), sulfur monoxide (SO), and sulfide (S2−), including hydrogen sulfide (H2S). All of these bind to iron in heme without changing its oxidation state, but they nevertheless inhibit oxygen-binding, causing grave toxicity.

The iron atom in the heme group must initially be in the ferrous (Fe2+) oxidation state to support oxygen and other gases' binding and transport (it temporarily switches to ferric during the time oxygen is bound, as explained above). Initial oxidation to the ferric (Fe3+) state without oxygen converts hemoglobin into "hemiglobin" or methemoglobin, which cannot bind oxygen. Hemoglobin in normal red blood cells is protected by a reduction system to keep this from happening. Nitric oxide is capable of converting a small fraction of hemoglobin to methemoglobin in red blood cells. The latter reaction is a remnant activity of the more ancient nitric oxide dioxygenase function of globins.
Allosteric
Further information: Oxygen-hemoglobin dissociation curve

Carbon dioxide occupies a different binding site on the hemoglobin. At tissues, where carbon dioxide concentration is higher, carbon dioxide binds to allosteric site of hemoglobin, facilitating unloading of oxygen from hemoglobin and ultimately its removal from the body after the oxygen has been released to tissues undergoing metabolism. This increased affinity for carbon dioxide by the venous blood is known as the Bohr effect. Through the enzyme carbonic anhydrase, carbon dioxide reacts with water to give carbonic acid, which decomposes into bicarbonate and protons:

    CO2 + H2O → H2CO3 → HCO3− + H+

The sigmoidal shape of hemoglobin's oxygen-dissociation curve results from cooperative binding of oxygen to hemoglobin.

Hence, blood with high carbon dioxide levels is also lower in pH (more acidic). Hemoglobin can bind protons and carbon dioxide, which causes a conformational change in the protein and facilitates the release of oxygen. Protons bind at various places on the protein, while carbon dioxide binds at the α-amino group.[71] Carbon dioxide binds to hemoglobin and forms carbaminohemoglobin.[72] This decrease in hemoglobin's affinity for oxygen by the binding of carbon dioxide and acid is known as the Bohr effect. The Bohr effect favors the T state rather than the R state. (shifts the O2-saturation curve to the right). Conversely, when the carbon dioxide levels in the blood decrease (i.e., in the lung capillaries), carbon dioxide and protons are released from hemoglobin, increasing the oxygen affinity of the protein. A reduction in the total binding capacity of hemoglobin to oxygen (i.e. shifting the curve down, not just to the right) due to reduced pH is called the root effect. This is seen in bony fish.

It is necessary for hemoglobin to release the oxygen that it binds; if not, there is no point in binding it. The sigmoidal curve of hemoglobin makes it efficient in binding (taking up O2 in lungs), and efficient in unloading (unloading O2 in tissues).[73]

In people acclimated to high altitudes, the concentration of 2,3-Bisphosphoglycerate (2,3-BPG) in the blood is increased, which allows these individuals to deliver a larger amount of oxygen to tissues under conditions of lower oxygen tension. This phenomenon, where molecule Y affects the binding of molecule X to a transport molecule Z, is called a heterotropic allosteric effect. Hemoglobin in organisms at high altitudes has also adapted such that it has less of an affinity for 2,3-BPG and so the protein will be shifted more towards its R state. In its R state, hemoglobin will bind oxygen more readily, thus allowing organisms to perform the necessary metabolic processes when oxygen is present at low partial pressures.[74]

Animals other than humans use different molecules to bind to hemoglobin and change its O2 affinity under unfavorable conditions. Fish use both ATP and GTP. These bind to a phosphate "pocket" on the fish hemoglobin molecule, which stabilizes the tense state and therefore decreases oxygen affinity.[75] GTP reduces hemoglobin oxygen affinity much more than ATP, which is thought to be due to an extra hydrogen bond formed that further stabilizes the tense state.[76] Under hypoxic conditions, the concentration of both ATP and GTP is reduced in fish red blood cells to increase oxygen affinity.[77]

A variant hemoglobin, called fetal hemoglobin (HbF, α2γ2), is found in the developing fetus, and binds oxygen with greater affinity than adult hemoglobin. This means that the oxygen binding curve for fetal hemoglobin is left-shifted (i.e., a higher percentage of hemoglobin has oxygen bound to it at lower oxygen tension), in comparison to that of adult hemoglobin. As a result, fetal blood in the placenta is able to take oxygen from maternal blood.

Hemoglobin also carries nitric oxide (NO) in the globin part of the molecule. This improves oxygen delivery in the periphery and contributes to the control of respiration. NO binds reversibly to a specific cysteine residue in globin; the binding depends on the state (R or T) of the hemoglobin. The resulting S-nitrosylated hemoglobin influences various NO-related activities such as the control of vascular resistance, blood pressure and respiration. NO is not released in the cytoplasm of red blood cells but transported out of them by an anion exchanger called AE1.[78]
Types of hemoglobin in humans

Hemoglobin variants are a part of the normal embryonic and fetal development. They may also be pathologic mutant forms of hemoglobin in a population, caused by variations in genetics. Some well-known hemoglobin variants, such as sickle-cell anemia, are responsible for diseases and are considered hemoglobinopathies. Other variants cause no detectable pathology, and are thus considered non-pathological variants.[33][79]

In embryos:

    Gower 1 (ζ2ε2).
    Gower 2 (α2ε2) (PDB: 1A9W​).
    Hemoglobin Portland I (ζ2γ2).
    Hemoglobin Portland II (ζ2β2).

In fetuses:

    Hemoglobin F (α2γ2) (PDB: 1FDH​).

In neonates (newborns inmmediately after birth):

    Hemoglobin A (adult hemoglobin) (α2β2) (PDB: 1BZ0​) – The most common with a normal amount over 95%
    Hemoglobin A2 (α2δ2) – δ chain synthesis begins late in the third trimester and, in adults, it has a normal range of 1.5–3.5%
    Hemoglobin F (fetal hemoglobin) (α2γ2) – In adults Hemoglobin F is restricted to a limited population of red cells called F-cells. However, the level of Hb F can be elevated in persons with sickle-cell disease and beta-thalassemia.

Gene expression of hemoglobin before and after birth. Also identifies the types of cells and organs in which the gene expression (data on Wood W.G., (1976). Br. Med. Bull. 32, 282.)

Abnormal forms that occur in diseases:

    Hemoglobin D-Punjab – (α2βD2) – A variant form of hemoglobin.
    Hemoglobin H (β4) – A variant form of hemoglobin, formed by a tetramer of β chains, which may be present in variants of α thalassemia.
    Hemoglobin Barts (γ4) – A variant form of hemoglobin, formed by a tetramer of γ chains, which may be present in variants of α thalassemia.
    Hemoglobin S (α2βS2) – A variant form of hemoglobin found in people with sickle cell disease. There is a variation in the β-chain gene, causing a change in the properties of hemoglobin, which results in sickling of red blood cells.
    Hemoglobin C (α2βC2) – Another variant due to a variation in the β-chain gene. This variant causes a mild chronic hemolytic anemia.
    Hemoglobin E (α2βE2) – Another variant due to a variation in the β-chain gene. This variant causes a mild chronic hemolytic anemia.
    Hemoglobin AS – A heterozygous form causing sickle cell trait with one adult gene and one sickle cell disease gene
    Hemoglobin SC disease – A compound heterozygous form with one sickle gene and another encoding Hemoglobin C.
    Hemoglobin Hopkins-2 – A variant form of hemoglobin that is sometimes viewed in combination with Hemoglobin S to produce sickle cell disease.

Degradation in vertebrate animals

When red blood cells reach the end of their life due to aging or defects, they are removed from the circulation by the phagocytic activity of macrophages in the spleen or the liver or hemolyze within the circulation. Free hemoglobin is then cleared from the circulation via the hemoglobin transporter CD163, which is exclusively expressed on monocytes or macrophages. Within these cells the hemoglobin molecule is broken up, and the iron gets recycled. This process also produces one molecule of carbon monoxide for every molecule of heme degraded.[80] Heme degradation is the only natural source of carbon monoxide in the human body, and is responsible for the normal blood levels of carbon monoxide in people breathing normal air.[81]

The other major final product of heme degradation is bilirubin. Increased levels of this chemical are detected in the blood if red blood cells are being destroyed more rapidly than usual. Improperly degraded hemoglobin protein or hemoglobin that has been released from the blood cells too rapidly can clog small blood vessels, especially the delicate blood filtering vessels of the kidneys, causing kidney damage. Iron is removed from heme and salvaged for later use, it is stored as hemosiderin or ferritin in tissues and transported in plasma by beta globulins as transferrins. When the porphyrin ring is broken up, the fragments are normally secreted as a yellow pigment called bilirubin, which is secreted into the intestines as bile. Intestines metabolise bilirubin into urobilinogen. Urobilinogen leaves the body in faeces, in a pigment called stercobilin. Globulin is metabolised into amino acids that are then released into circulation.
Diseases related to hemoglobin

Hemoglobin deficiency can be caused either by a decreased amount of hemoglobin molecules, as in anemia, or by decreased ability of each molecule to bind oxygen at the same partial pressure of oxygen. Hemoglobinopathies (genetic defects resulting in abnormal structure of the hemoglobin molecule)[82] may cause both. In any case, hemoglobin deficiency decreases blood oxygen-carrying capacity. Hemoglobin deficiency is, in general, strictly distinguished from hypoxemia, defined as decreased partial pressure of oxygen in blood,[83][84][85][86] although both are causes of hypoxia (insufficient oxygen supply to tissues).

Other common causes of low hemoglobin include loss of blood, nutritional deficiency, bone marrow problems, chemotherapy, kidney failure, or abnormal hemoglobin (such as that of sickle-cell disease).

The ability of each hemoglobin molecule to carry oxygen is normally modified by altered blood pH or CO2, causing an altered oxygen–hemoglobin dissociation curve. However, it can also be pathologically altered in, e.g., carbon monoxide poisoning.

Decrease of hemoglobin, with or without an absolute decrease of red blood cells, leads to symptoms of anemia. Anemia has many different causes, although iron deficiency and its resultant iron deficiency anemia are the most common causes in the Western world. As absence of iron decreases heme synthesis, red blood cells in iron deficiency anemia are hypochromic (lacking the red hemoglobin pigment) and microcytic (smaller than normal). Other anemias are rarer. In hemolysis (accelerated breakdown of red blood cells), associated jaundice is caused by the hemoglobin metabolite bilirubin, and the circulating hemoglobin can cause kidney failure.

Some mutations in the globin chain are associated with the hemoglobinopathies, such as sickle-cell disease and thalassemia. Other mutations, as discussed at the beginning of the article, are benign and are referred to merely as hemoglobin variants.

There is a group of genetic disorders, known as the porphyrias that are characterized by errors in metabolic pathways of heme synthesis. King George III of the United Kingdom was probably the most famous porphyria sufferer.

To a small extent, hemoglobin A slowly combines with glucose at the terminal valine (an alpha aminoacid) of each β chain. The resulting molecule is often referred to as Hb A1c, a glycated hemoglobin. The binding of glucose to amino acids in the hemoglobin takes place spontaneously (without the help of an enzyme) in many proteins, and is not known to serve a useful purpose. However, as the concentration of glucose in the blood increases, the percentage of Hb A that turns into Hb A1c increases. In diabetics whose glucose usually runs high, the percent Hb A1c also runs high. Because of the slow rate of Hb A combination with glucose, the Hb A1c percentage reflects a weighted average of blood glucose levels over the lifetime of red cells, which is approximately 120 days.[87] The levels of glycated hemoglobin are therefore measured in order to monitor the long-term control of the chronic disease of type 2 diabetes mellitus (T2DM). Poor control of T2DM results in high levels of glycated hemoglobin in the red blood cells. The normal reference range is approximately 4.0–5.9%. Though difficult to obtain, values less than 7% are recommended for people with T2DM. Levels greater than 9% are associated with poor control of the glycated hemoglobin, and levels greater than 12% are associated with very poor control. Diabetics who keep their glycated hemoglobin levels close to 7% have a much better chance of avoiding the complications that may accompany diabetes (than those whose levels are 8% or higher).[88] In addition, increased glycated of hemoglobin increases its affinity for oxygen, therefore preventing its release at the tissue and inducing a level of hypoxia in extreme cases.[89]

Elevated levels of hemoglobin are associated with increased numbers or sizes of red blood cells, called polycythemia. This elevation may be caused by congenital heart disease, cor pulmonale, pulmonary fibrosis, too much erythropoietin, or polycythemia vera.[90] High hemoglobin levels may also be caused by exposure to high altitudes, smoking, dehydration (artificially by concentrating Hb), advanced lung disease and certain tumors.[52]

A recent study done in Pondicherry, India, shows its importance in coronary artery disease.[91]
Diagnostic uses
Main article: Hemoglobinometer
A hemoglobin concentration measurement being administered before a blood donation at the American Red Cross Boston Blood Donation Center.

Hemoglobin concentration measurement is among the most commonly performed blood tests, usually as part of a complete blood count. For example, it is typically tested before or after blood donation. Results are reported in g/L, g/dL or mol/L. 1 g/dL equals about 0.6206 mmol/L, although the latter units are not used as often due to uncertainty regarding the polymeric state of the molecule.[92] This conversion factor, using the single globin unit molecular weight of 16,000 Da, is more common for hemoglobin concentration in blood. For MCHC (mean corpuscular hemoglobin concentration) the conversion factor 0.155, which uses the tetramer weight of 64,500 Da, is more common.[93] Normal levels are:

    Men: 13.8 to 18.0 g/dL (138 to 180 g/L, or 8.56 to 11.17 mmol/L)
    Women: 12.1 to 15.1 g/dL (121 to 151 g/L, or 7.51 to 9.37 mmol/L)
    Children: 11 to 16 g/dL (110 to 160 g/L, or 6.83 to 9.93 mmol/L)
    Pregnant women: 11 to 14 g/dL (110 to 140 g/L, or 6.83 to 8.69 mmol/L) (9.5 to 15 usual value during pregnancy)[94][95]

Normal values of hemoglobin in the 1st and 3rd trimesters of pregnant women must be at least 11 g/dL and at least 10.5 g/dL during the 2nd trimester.[96]

Dehydration or hyperhydration can greatly influence measured hemoglobin levels. Albumin can indicate hydration status.

If the concentration is below normal, this is called anemia. Anemias are classified by the size of red blood cells, the cells that contain hemoglobin in vertebrates. The anemia is called "microcytic" if red cells are small, "macrocytic" if they are large, and "normocytic" otherwise.

Hematocrit, the proportion of blood volume occupied by red blood cells, is typically about three times the hemoglobin concentration measured in g/dL. For example, if the hemoglobin is measured at 17 g/dL, that compares with a hematocrit of 51%.[97]

Laboratory hemoglobin test methods require a blood sample (arterial, venous, or capillary) and analysis on hematology analyzer and CO-oximeter. Additionally, a new noninvasive hemoglobin (SpHb) test method called Pulse CO-Oximetry is also available with comparable accuracy to invasive methods.[98]

Concentrations of oxy- and deoxyhemoglobin can be measured continuously, regionally and noninvasively using NIRS.[99][100][101][102][103] NIRS can be used both on the head and on muscles. This technique is often used for research in e.g. elite sports training, ergonomics, rehabilitation, patient monitoring, neonatal research, functional brain monitoring, brain–computer interface, urology (bladder contraction), neurology (Neurovascular coupling) and more.

Hemoglobin mass can be measured in humans using the non-radioactive, carbon monoxide (CO) rebreathing technique that has been used for more than 100 years. With this technique, a small volume of pure CO gas is inhaled and rebreathed for a few minutes. During rebreathing, CO binds to hemoglobin present in red blood cells. Based on the increase in blood CO after the rebreathing period, the hemoglobin mass can be determined through the dilution principle. Although CO gas in large volumes is toxic to humans, the volume of CO used to assess blood volumes corresponds to what would be inhaled when smoking a cigarette. While researchers typically use custom-made rebreathing circuits, the Detalo Performance from Detalo Health has automated the procedure and made the measurement available to a larger group of users.[104]

Long-term control of blood sugar concentration can be measured by the concentration of Hb A1c. Measuring it directly would require many samples because blood sugar levels vary widely through the day. Hb A1c is the product of the irreversible reaction of hemoglobin A with glucose. A higher glucose concentration results in more Hb A1c. Because the reaction is slow, the Hb A1c proportion represents glucose level in blood averaged over the half-life of red blood cells, is typically ~120 days. An Hb A1c proportion of 6.0% or less show good long-term glucose control, while values above 7.0% are elevated. This test is especially useful for diabetics.[105]

The functional magnetic resonance imaging (fMRI) machine uses the signal from deoxyhemoglobin, which is sensitive to magnetic fields since it is paramagnetic. Combined measurement with NIRS shows good correlation with both the oxy- and deoxyhemoglobin signal compared to the BOLD signal.[106]
Athletic tracking and self tracking uses

Hemoglobin can be tracked noninvasively, to build an individual data set tracking the hemoconcentration and hemodilution effects of daily activities for better understanding of sports performance and training. Athletes are often concerned about endurance and intensity of exercise. The sensor uses light-emitting diodes that emit red and infrared light through the tissue to a light detector, which then sends a signal to a processor to calculate the absorption of light by the hemoglobin protein.[107] This sensor is similar to a pulse oximeter, which consists of a small sensing device that clips to the finger.
Analogues in non-vertebrate organisms

A variety of oxygen-transport and -binding proteins exist in organisms throughout the animal and plant kingdoms. Organisms including bacteria, protozoans, and fungi all have hemoglobin-like proteins whose known and predicted roles include the reversible binding of gaseous ligands. Since many of these proteins contain globins and the heme moiety (iron in a flat porphyrin support), they are often called hemoglobins, even if their overall tertiary structure is very different from that of vertebrate hemoglobin. In particular, the distinction of "myoglobin" and hemoglobin in lower animals is often impossible, because some of these organisms do not contain muscles. Or, they may have a recognizable separate circulatory system but not one that deals with oxygen transport (for example, many insects and other arthropods). In all these groups, heme/globin-containing molecules (even monomeric globin ones) that deal with gas-binding are referred to as oxyhemoglobins. In addition to dealing with transport and sensing of oxygen, they may also deal with NO, CO2, sulfide compounds, and even O2 scavenging in environments that must be anaerobic.[108] They may even deal with detoxification of chlorinated materials in a way analogous to heme-containing P450 enzymes and peroxidases.
The giant tube worm Riftia pachyptila showing red hemoglobin-containing plumes

The structure of hemoglobins varies across species. Hemoglobin occurs in all kingdoms of organisms, but not in all organisms. Primitive species such as bacteria, protozoa, algae, and plants often have single-globin hemoglobins. Many nematode worms, molluscs, and crustaceans contain very large multisubunit molecules, much larger than those in vertebrates. In particular, chimeric hemoglobins found in fungi and giant annelids may contain both globin and other types of proteins.[14]

One of the most striking occurrences and uses of hemoglobin in organisms is in the giant tube worm (Riftia pachyptila, also called Vestimentifera), which can reach 2.4 meters length and populates ocean volcanic vents. Instead of a digestive tract, these worms contain a population of bacteria constituting half the organism's weight. The bacteria oxidize H2S from the vent with O2 from the water to produce energy to make food from H2O and CO2. The worms' upper end is a deep-red fan-like structure ("plume"), which extends into the water and absorbs H2S and O2 for the bacteria, and CO2 for use as synthetic raw material similar to photosynthetic plants. The structures are bright red due to their content of several extraordinarily complex hemoglobins that have up to 144 globin chains, each including associated heme structures. These hemoglobins are remarkable for being able to carry oxygen in the presence of sulfide, and even to carry sulfide, without being completely "poisoned" or inhibited by it as hemoglobins in most other species are.[109][110]
Other oxygen-binding proteins
Main article: Respiratory pigment

Myoglobin
    Found in the muscle tissue of many vertebrates, including humans, it gives muscle tissue a distinct red or dark gray color. It is very similar to hemoglobin in structure and sequence, but is not a tetramer; instead, it is a monomer that lacks cooperative binding. It is used to store oxygen rather than transport it.

Hemocyanin
    The second most common oxygen-transporting protein found in nature, it is found in the blood of many arthropods and molluscs. Uses copper prosthetic groups instead of iron heme groups and is blue in color when oxygenated.

Hemerythrin
    Some marine invertebrates and a few species of annelid use this iron-containing non-heme protein to carry oxygen in their blood. Appears pink/violet when oxygenated, clear when not.

Chlorocruorin
    Found in many annelids, it is very similar to erythrocruorin, but the heme group is significantly different in structure. Appears green when deoxygenated and red when oxygenated.

Vanabins
    Also known as vanadium chromagens, they are found in the blood of sea squirts. They were once hypothesized to use the metal vanadium as an oxygen binding prosthetic group. However, although they do contain vanadium by preference, they apparently bind little oxygen, and thus have some other function, which has not been elucidated (sea squirts also contain some hemoglobin). They may act as toxins.

Erythrocruorin
    Found in many annelids, including earthworms, it is a giant free-floating blood protein containing many dozens—possibly hundreds—of iron- and heme-bearing protein subunits bound together into a single protein complex with a molecular mass greater than 3.5 million daltons.

Pinnaglobin
    Only seen in the mollusc Pinna nobilis. Brown manganese-based porphyrin protein.

Leghemoglobin
    In leguminous plants, such as alfalfa or soybeans, the nitrogen fixing bacteria in the roots are protected from oxygen by this iron heme containing oxygen-binding protein. The specific enzyme protected is nitrogenase, which is unable to reduce nitrogen gas in the presence of free oxygen.

Coboglobin
    A synthetic cobalt-based porphyrin. Coboprotein would appear colorless when oxygenated, but yellow when in veins.

Presence in nonerythroid cells

Some nonerythroid cells (i.e., cells other than the red blood cell line) contain hemoglobin. In the brain, these include the A9 dopaminergic neurons in the substantia nigra, astrocytes in the cerebral cortex and hippocampus, and in all mature oligodendrocytes.[12] It has been suggested that brain hemoglobin in these cells may enable the "storage of oxygen to provide a homeostatic mechanism in anoxic conditions, which is especially important for A9 DA neurons that have an elevated metabolism with a high requirement for energy production".[12] It has been noted further that "A9 dopaminergic neurons may be at particular risk of anoxic degeneration since in addition to their high mitochondrial activity they are under intense oxidative stress caused by the production of hydrogen peroxide via autoxidation and/or monoamine oxidase (MAO)-mediated deamination of dopamine and the subsequent reaction of accessible ferrous iron to generate highly toxic hydroxyl radicals".[12] This may explain the risk of degeneration of these cells in Parkinson's disease.[12] The hemoglobin-derived iron in these cells is not the cause of the post-mortem darkness of these cells (origin of the Latin name, substantia nigra), but rather is due to neuromelanin.

Outside the brain, hemoglobin has non-oxygen-carrying functions as an antioxidant and a regulator of iron metabolism in macrophages,[111] alveolar cells,[112] and mesangial cells in the kidney.[113]
In history, art and music
Heart of Steel (Hemoglobin) (2005) by Julian Voss-Andreae. The images show the 5-foot (1.50 m) tall sculpture right after installation, after 10 days, and after several months of exposure to the elements.

Historically, an association between the color of blood and rust occurs in the association of the planet Mars, with the Roman god of war, since the planet is an orange-red, which reminded the ancients of blood. Although the color of the planet is due to iron compounds in combination with oxygen in the Martian soil, it is a common misconception that the iron in hemoglobin and its oxides gives blood its red color. The color is actually due to the porphyrin moiety of hemoglobin to which the iron is bound, not the iron itself,[114] although the ligation and redox state of the iron can influence the pi to pi* or n to pi* electronic transitions of the porphyrin and hence its optical characteristics.

Artist Julian Voss-Andreae created a sculpture called Heart of Steel (Hemoglobin) in 2005, based on the protein's backbone. The sculpture was made from glass and weathering steel. The intentional rusting of the initially shiny work of art mirrors hemoglobin's fundamental chemical reaction of oxygen binding to iron.[115][116]

Montreal artist Nicolas Baier created Lustre (Hémoglobine), a sculpture in stainless steel that shows the structure of the hemoglobin molecule. It is displayed in the atrium of McGill University Health Centre's research centre in Montreal. The sculpture measures about 10 metres × 10 metres × 10 metres.[117][118] 

REACT

double click a green thing and press ctrl space and you'll
immediately be able to import it


*/