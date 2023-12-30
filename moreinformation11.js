/*

REACT

React Router is built on web standard APIs.

When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router. — React Training

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

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

But wait!! It keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

This is not what we want. There are several ways to control when side effects run.

We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.


Example

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});

Example

2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);

Example

3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

So, to fix this issue, let's only run this effect on the initial render.
Example:

Only run the effect on the initial render:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

Example:

Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);

If there are multiple dependencies, they should be included in the useEffect dependency array.

Effect Cleanup

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.
Example:

Clean up the timer at the end of the useEffect Hook:

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

Exercise: ///// try out this exercise

What do you need to add to the second argument of a useEffect Hook to limit it to running only on the first render?

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, );

  return <DisplayData data={data} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

BIOLOGY

Sickle cell disease (SCD) is a group of inherited red blood cell disorders. In SCD, the red blood cells become hard and sticky and look like a C-shaped farm tool called a “sickle.” People with SCD can live full lives 
and enjoy most of the activities that other people do.

These sickled red blood cells do not bend or move easily and can block blood flow to the rest of the body. The blocked blood flow through the body can lead to serious problems, including stroke, eye problems, infections, and episodes of pain called pain crises. 
Sickle cell disease is a lifelong illness.

Avoid processed foods, such as ham and bacon. Good hydration is key. Choose water over sugar-sweetened beverages, such as sodas and fruit drinks. Eight to 10 glasses of water a day are recommended to reduce the risk of abnormal clumping together of the red blood cells, 
a process referred to as sickling.

Eating fruits and vegetables has many health benefits. For example, pomegranates increase blood flow, and fruits and vegetables such as bananas and kale boost energy levels. These benefits are especially advantageous 
for people with sickle cell anemia.


In biochemistry, denaturation is a process in which proteins or nucleic acids lose the quaternary structure, tertiary structure, and secondary structure which is present in their native state, by application of some external stress or compound such as a strong acid or base, a concentrated inorganic salt, an organic solvent (e.g., alcohol or chloroform), agitation and radiation or heat.[3] If proteins in a living cell are denatured, this results in disruption of cell activity and possibly cell death. Protein denaturation is also a consequence of cell death.[4][5] Denatured proteins can exhibit a wide range of characteristics, from conformational change and loss of solubility to aggregation due to the exposure of hydrophobic groups. The loss of solubility as a result of denaturation is called coagulation.[6] Denatured proteins lose their 3D structure and therefore cannot function.

Protein folding is key to whether a globular or membrane protein can do its job correctly; it must be folded into the right shape to function. However, hydrogen bonds, which play a big part in folding, are rather weak and thus easily affected by heat, acidity, varying salt concentrations, and other stressors which can denature the protein. This is one reason why homeostasis is physiologically necessary in many life forms.

This concept is unrelated to denatured alcohol, which is alcohol that has been mixed with additives to make it unsuitable for human consumption. 

Common examples
(Top) The protein albumin in the egg white undergoes denaturation and loss of solubility when the egg is cooked. (Bottom) Paperclips provide a visual analogy to help with the conceptualization of the denaturation process.

When food is cooked, some of its proteins become denatured. This is why boiled eggs become hard and cooked meat becomes firm.

A classic example of denaturing in proteins comes from egg whites, which are typically largely egg albumins in water. Fresh from the eggs, egg whites are transparent and liquid. Cooking the thermally unstable whites turns them opaque, forming an interconnected solid mass.[7] The same transformation can be effected with a denaturing chemical. Pouring egg whites into a beaker of acetone will also turn egg whites translucent and solid. The skin that forms on curdled milk is another common example of denatured protein. The cold appetizer known as ceviche is prepared by chemically "cooking" raw fish and shellfish in an acidic citrus marinade, without heat.

///// look at other terms on the bottom as well

 A protein is created by ribosomes that "read" RNA that is encoded by codons in the gene and assemble the requisite amino acid combination from the genetic instruction, in a process known as translation. The newly created protein strand then undergoes posttranslational modification, in which additional atoms or molecules are added, for example copper, zinc, or iron. Once this post-translational modification process has been completed, the protein begins to fold (sometimes spontaneously and sometimes with enzymatic assistance), curling up on itself so that hydrophobic elements of the protein are buried deep inside the structure and hydrophilic elements end up on the outside. The final shape of a protein determines how it interacts with its environment.

Protein folding consists of a balance between a substantial amount of weak intra-molecular interactions within a protein (Hydrophobic, electrostatic, and Van Der Waals Interactions) and protein-solvent interactions.[9] As a result, this process is heavily reliant on environmental state that the protein resides in.[9] These environmental conditions include, and are not limited to, temperature, salinity, pressure, and the solvents that happen to be involved.[9] Consequently, any exposure to extreme stresses (e.g. heat or radiation, high inorganic salt concentrations, strong acids and bases) can disrupt a protein's interaction and inevitably lead to denaturation.[10]

When a protein is denatured, secondary and tertiary structures are altered but the peptide bonds of the primary structure between the amino acids are left intact. Since all structural levels of the protein determine its function, the protein can no longer perform its function once it has been denatured. This is in contrast to intrinsically unstructured proteins, which are unfolded in their native state, but still functionally active and tend to fold upon binding to their biological target.[11]
How denaturation occurs at levels of protein structure
See also: Protein structure

    In quaternary structure denaturation, protein sub-units are dissociated and/or the spatial arrangement of protein subunits is disrupted.
    Tertiary structure denaturation involves the disruption of:
        Covalent interactions between amino acid side-chains (such as disulfide bridges between cysteine groups)
        Non-covalent dipole-dipole interactions between polar amino acid side-chains (and the surrounding solvent)
        Van der Waals (induced dipole) interactions between nonpolar amino acid side-chains.
    In secondary structure denaturation, proteins lose all regular repeating patterns such as alpha-helices and beta-pleated sheets, and adopt a random coil configuration.
    Primary structure, such as the sequence of amino acids held together by covalent peptide bonds, is not disrupted by denaturation.[12]

Loss of function

Most biological substrates lose their biological function when denatured. For example, enzymes lose their activity, because the substrates can no longer bind to the active site,[13] and because amino acid residues involved in stabilizing substrates' transition states are no longer positioned to be able to do so. The denaturing process and the associated loss of activity can be measured using techniques such as dual-polarization interferometry, CD, QCM-D and MP-SPR.
Loss of activity due to heavy metals and metalloids

By targeting proteins, heavy metals have been known to disrupt the function and activity carried out by proteins.[14] It is important to note that heavy metals fall into categories consisting of transition metals as well as a select amount of metalloid.[14] These metals, when interacting with native, folded proteins, tend to play a role in obstructing their biological activity.[14] This interference can be carried out in a different number of ways. These heavy metals can form a complex with the functional side chain groups present in a protein or form bonds to free thiols.[14] Heavy metals also play a role in oxidizing amino acid side chains present in protein.[14] Along with this, when interacting with metalloproteins, heavy metals can dislocate and replace key metal ions.[14] As a result, heavy metals can interfere with folded proteins, which can strongly deter protein stability and activity.
Reversibility and irreversibility

In many cases, denaturation is reversible (the proteins can regain their native state when the denaturing influence is removed). This process can be called renaturation.[15] This understanding has led to the notion that all the information needed for proteins to assume their native state was encoded in the primary structure of the protein, and hence in the DNA that codes for the protein, the so-called "Anfinsen's thermodynamic hypothesis".[16]

Denaturation can also be irreversible. This irreversibility is typically a kinetic, not thermodynamic irreversibility, as a folded protein generally has lower free energy than when it is unfolded. Through kinetic irreversibility, the fact that the protein is stuck in a local minimum can stop it from ever refolding after it has been irreversibly denatured.[17]
Protein denaturation due to pH

Denaturation can also be caused by changes in the pH which can affect the chemistry of the amino acids and their residues. The ionizable groups in amino acids are able to become ionized when changes in pH occur. A pH change to more acidic or more basic conditions can induce unfolding.[18] Acid-induced unfolding often occurs between pH 2 and 5, base-induced unfolding usually requires pH 10 or higher.[18]
Nucleic acid denaturation
Main article: Nucleic acid thermodynamics

Nucleic acids (including RNA and DNA) are nucleotide polymers synthesized by polymerase enzymes during either transcription or DNA replication. Following 5'-3' synthesis of the backbone, individual nitrogenous bases are capable of interacting with one another via hydrogen bonding, thus allowing for the formation of higher-order structures. Nucleic acid denaturation occurs when hydrogen bonding between nucleotides is disrupted, and results in the separation of previously annealed strands. For example, denaturation of DNA due to high temperatures results in the disruption of base pairs and the separation of the double stranded helix into two single strands. Nucleic acid strands are capable of re-annealling when "normal" conditions are restored, but if restoration occurs too quickly, the nucleic acid strands may re-anneal imperfectly resulting in the improper pairing of bases.
Biologically-induced denaturation
DNA denaturation occurs when hydrogen bonds between base pairs are disturbed.

The non-covalent interactions between antiparallel strands in DNA can be broken in order to "open" the double helix when biologically important mechanisms such as DNA replication, transcription, DNA repair or protein binding are set to occur.[19] The area of partially separated DNA is known as the denaturation bubble, which can be more specifically defined as the opening of a DNA double helix through the coordinated separation of base pairs.[19]

The first model that attempted to describe the thermodynamics of the denaturation bubble was introduced in 1966 and called the Poland-Scheraga Model. This model describes the denaturation of DNA strands as a function of temperature. As the temperature increases, the hydrogen bonds between the base pairs are increasingly disturbed and "denatured loops" begin to form.[20] However, the Poland-Scheraga Model is now considered elementary because it fails to account for the confounding implications of DNA sequence, chemical composition, stiffness and torsion.[21]

Recent thermodynamic studies have inferred that the lifetime of a singular denaturation bubble ranges from 1 microsecond to 1 millisecond.[22] This information is based on established timescales of DNA replication and transcription.[22] Currently,[when?] biophysical and biochemical research studies are being performed to more fully elucidate the thermodynamic details of the denaturation bubble.[22]
Denaturation due to chemical agents
Formamide denatures DNA by disrupting the hydrogen bonds between base pairs. Orange, blue, green, and purple lines represent adenine, thymine, guanine, and cytosine respectively. The three short black lines between the bases and the formamide molecules represent newly formed hydrogen bonds.

With polymerase chain reaction (PCR) being among the most popular contexts in which DNA denaturation is desired, heating is the most frequent method of denaturation.[23] Other than denaturation by heat, nucleic acids can undergo the denaturation process through various chemical agents such as formamide, guanidine, sodium salicylate, dimethyl sulfoxide (DMSO), propylene glycol, and urea.[24] These chemical denaturing agents lower the melting temperature (Tm) by competing for hydrogen bond donors and acceptors with pre-existing nitrogenous base pairs. Some agents are even able to induce denaturation at room temperature. For example, alkaline agents (e.g. NaOH) have been shown to denature DNA by changing pH and removing hydrogen-bond contributing protons.[23] These denaturants have been employed to make Denaturing Gradient Gel Electrophoresis gel (DGGE), which promotes denaturation of nucleic acids in order to eliminate the influence of nucleic acid shape on their electrophoretic mobility.[25]
Chemical denaturation as an alternative

The optical activity (absorption and scattering of light) and hydrodynamic properties (translational diffusion, sedimentation coefficients, and rotational correlation times) of formamide denatured nucleic acids are similar to those of heat-denatured nucleic acids.[24][26][27] Therefore, depending on the desired effect, chemically denaturing DNA can provide a gentler procedure for denaturing nucleic acids than denaturation induced by heat. Studies comparing different denaturation methods such as heating, beads mill of different bead sizes, probe sonication, and chemical denaturation show that chemical denaturation can provide quicker denaturation compared to the other physical denaturation methods described.[23] Particularly in cases where rapid renaturation is desired, chemical denaturation agents can provide an ideal alternative to heating. For example, DNA strands denatured with alkaline agents such as NaOH renature as soon as phosphate buffer is added.[23]
Denaturation due to air

Small, electronegative molecules such as nitrogen and oxygen, which are the primary gases in air, significantly impact the ability of surrounding molecules to participate in hydrogen bonding.[28] These molecules compete with surrounding hydrogen bond acceptors for hydrogen bond donors, therefore acting as "hydrogen bond breakers" and weakening interactions between surrounding molecules in the environment.[28] Antiparellel strands in DNA double helices are non-covalently bound by hydrogen bonding between base pairs;[29] nitrogen and oxygen therefore maintain the potential to weaken the integrity of DNA when exposed to air.[30] As a result, DNA strands exposed to air require less force to separate and exemplify lower melting temperatures.[30]
Applications

Many laboratory techniques rely on the ability of nucleic acid strands to separate. By understanding the properties of nucleic acid denaturation, the following methods were created:

    PCR
    Southern blot
    Northern blot
    DNA sequencing

Denaturants
Protein denaturants
Acids

Acidic protein denaturants include:

    Acetic acid[31]
    Trichloroacetic acid 12% in water
    Sulfosalicylic acid

Bases

Bases work similarly to acids in denaturation. They include:

    Sodium bicarbonate

Solvents

Most organic solvents are denaturing, including:[citation needed]

    Ethanol

Cross-linking reagents

Cross-linking agents for proteins include:[citation needed]

    Formaldehyde
    Glutaraldehyde

Chaotropic agents

Chaotropic agents include:[citation needed]

    Urea 6–8 mol/L
    Guanidinium chloride 6 mol/L
    Lithium perchlorate 4.5 mol/L
    Sodium dodecyl sulfate

Disulfide bond reducers

Agents that break disulfide bonds by reduction include:[citation needed]

    2-Mercaptoethanol
    Dithiothreitol
    TCEP (tris(2-carboxyethyl)phosphine)

Chemically reactive agents

Agents such as hydrogen peroxide, elemental chlorine, hypochlorous acid (chlorine water), bromine, bromine water, iodine, nitric and oxidising acids, and ozone react with sensitive moieties such as sulfide/thiol, activated aromatic rings (phenylalanine) in effect damage the protein and render it useless.
Other

    Mechanical agitation
    Picric acid
    Radiation
    Temperature[32]

Nucleic acid denaturants
Chemical

Acidic nucleic acid denaturants include:

    Acetic acid
    HCl
    Nitric acid

Basic nucleic acid denaturants include:

    NaOH

Other nucleic acid denaturants include:

    DMSO
    Formamide
    Guanidine
    Sodium salicylate
    Propylene glycol
    Urea

Physical

    Thermal denaturation
    Beads mill
    Probe sonication
    Radiation

See also

    Denatured alcohol
    Equilibrium unfolding
    Fixation (histology)
    Protein folding
    Random coil

A monomer is a small molecular subunit that can be combined with similar subunits to form larger molecules. In living systems, like our own bodies, these larger molecules include carbohydrates, lipids, nucleic acids and proteins. The monomers of these organic groups are: Carbohydrates - monosaccharides.

Most macromolecules are made from single subunits, or building blocks, called monomers. The monomers combine with each other using covalent bonds to form larger molecules known as polymers. In doing so, monomers release water molecules as byproducts.

Just like in DNA, RNA is made of monomers called nucleotides. Each nucleotide is made up of three components: a nitrogenous base, a pentose (five-carbon) sugar called ribose, and a phosphate group.

In general, a protein with two subunits is called a dimer; one with three subunits a trimer; and one with four subunits a tetramer.


    Ribonucleic acid is a polymeric molecule necessary for various biological roles like expression, regulation, coding, and decoding of genes.

    DNA is made up of large molecules, so it cannot penetrate through the tiny nucleic pores, therefore for its interpretation mRNA is used.

    Messenger RNA or mRNA is a single-stranded structure made up of building blocks of nucleic acid which are called nucleotides.

    mRNA is the form of RNA which helps in encoding the message coming from the DNA to form proteins.

    Then it transports the gathered data into the cell where proteins are assembled and generated.

    So, for these reasons RNA necessary to act as a messenger.


    FINANCE

    Campbell's Soup is a stock

    MECHANICAL ENGINEERING

    High temperature of combustion chamber
    can cause severe ignition problems

    to prevent this the heat should be dissipated as
    early as possible

    internal-combustion engine, any of a group of devices in which the reactants of combustion (oxidizer and fuel) and the products of combustion serve as the working fluids of the engine. Such an engine gains its energy from heat released during the combustion of the nonreacted working fluids, 
    the oxidizer-fuel mixture.

    In external combustion engines, fuel combustion occurs in a combustion chamber located outside of the rest of the engine. In internal combustion engines, combustion takes place inside the engine.

    Disadvantages of IC Engines

Limited Efficiency: IC engines are not highly efficient, with only about 20-30% of the fuel's energy being converted into useful work. Noise and Vibration: IC engines generate noise and vibration, which can be uncomfortable for passengers and contribute to noise pollution.

/// look more into this below

The upper part of the engine is called the cylinder head, while the lower part is the engine block. The cylinder head sits on the engine and closes off the combustion chamber. The gap that remains between the cylinder head and the engine is completed by the head gasket.

Fouling is the buildup of undesirable material on hard or compacted surfaces, such as drill bits or the inner surface of bores degrades function.

STATISTICS

In statistics, maximum likelihood estimation (MLE) is a method of estimating the parameters of an assumed probability distribution, given some observed data. This is achieved by maximizing a likelihood function so that, under the assumed statistical model, the observed data is most probable.
Optimization toolbox

Maximum Likelihood Estimation (MLE) is a tool we use in machine learning to achieve a very common goal. The goal is to create a statistical model which can perform some task on yet unseen data. The task might be classification, regression, or something else, so the nature of the task does not define MLE.

x is not a variable that's used very much in statistics
for parameters

In mathematics, the Hessian matrix, Hessian or (less commonly) Hesse matrix is a square matrix of second-order partial derivatives of a scalar-valued function, or scalar field. It describes the local curvature of a function of many variables. The Hessian matrix was developed in the 19th century by the German mathematician Ludwig Otto Hesse and later named after him. Hesse originally used the term "functional determinants". The Hessian is sometimes denoted by H or, ambiguously, by ∇2. 
/// go back to hessian matrix

PHYSICS

MECHANICAL ENGINEERING

Pure substances are substances that are made up of only one kind of particle and have a fixed or constant structure. Pure substances are further classified as elements and compounds. An element is a substance that consists of only one type or kind of atom.


Pure Substance

Everything that exists in the earth is a form of a matter which is further defined as any substance that occupies space and has mass. The matter is further divided into various forms such as solid, liquid and gas. Apart from these, it is also classified as pure substances and mixtures.

We will learn about the latter in this article.
Classification of Matter

Classification of Matter – Pure Substances and Mixtures
Table of Contents

    What is Pure Substance?
    Characteristics and Properties Of Pure Substances
    Examples of Pure Substances
    Recommended Videos
    What is a Mixture?
    Characteristics And Properties Of Mixtures Or Impure Substance
    Example Of Mixtures
    Differences Between Pure Substances and Mixtures
    Frequently Asked Questions – FAQs

What is Pure Substance?

    Pure substances are substances that are made up of only one kind of particle and have a fixed or constant structure.

Pure substances are further classified as elements and compounds.

An element is a substance that consists of only one type or kind of atom. An element is a pure substance as it cannot be broken down or transformed into a new substance even by using some physical or chemical means. Elements are mostly metals, non-metals or metalloids.

Compounds, on the other hand, are also pure substances when two or more elements are combined chemically in a fixed ratio. However, these substances can be broken down into separate elements by chemical methods.
Characteristics and Properties Of Pure Substances

    Pure substances are mostly homogeneous in nature containing only one type of atom or molecule.
    These substances mainly have a constant or uniform composition throughout.
    The substances have fixed boiling and melting points.
    A pure substance usually participates in a chemical reaction to form predictable products.

Examples of Pure Substances

All elements are mostly pure substances. A few of them include gold, copper, oxygen, chlorine, diamond, etc. Compounds such as water, salt or crystals, baking soda amongst others are also grouped as pure substances.
Recommended Videos
1,27,272
What is a Mixture?

A substance, on the other hand, is impure if it consists of different kinds of elements combined physically and not chemically. Impure substances are also called mixtures. Mixtures are further divided into homogenous or heterogeneous mixture.

    A homogeneous mixture occasionally called a solution, is comparatively unvarying in configuration or constant. Every unit of the mixture is like every other unit. For instance, if you liquefy sugar in water and blend it really well, your concoction is essentially the same, no matter where you sample it. This mixture contains two or more chemical substances.
    A heterogeneous mixture is a concoction whose configuration varies from spot to spot within the sample. For example, if you put a little amount of sugar in a vessel, add some sand, and then shake the jar a couple of times, your concoction doesn’t have the same configuration all throughout the jar. As the sand is heftier, there’s possibly more amount of sand at the bottom of the jar and more sugar at the top part. These mixtures can be identified visually and separated easily by physical means.

Characteristics And Properties Of Mixtures Or Impure Substance

    It does not have any specific properties, the properties of the mixture are a result of the average properties of all the constituents.
    It is formed as a result of a physical change.
    They have a variable composition.
    Their melting and boiling points differ.

Example Of Mixtures

Some common examples of mixtures include;

    Gas and gas like nitrogen and oxygen in the atmosphere.
    A solution like water and oil.
    Gas and liquid such as water.
    Solid and liquid such as sand and water

Differences Between Pure Substances and Mixtures

The differences between pure substances and mixtures are given below.
Pure Substances 	Mixtures
It cannot be broken down or separated into new products. 	It can be separated using different separation methods.
Constant physical and chemical properties. 	Mixtures have varying physical and chemical properties.
Pure substances are made up of a single element. 	A mixture is a combination of two substances or elements.
Frequently Asked Questions – FAQs
Q1
What is pure substance explain with example?

Every homogeneous mixture is a pure material. These substances mainly have a constant or similar composition throughout, no matter how small the sample size. Iron, steel, and water are examples of pure substances.
Q2
Is wood a pure substance?

It is a mixture since it consists of compounds such as cellulose, hemicellulose, and lignin that are composed of elements such as carbon, hydrogen, and oxygen. Wood is not a pure material.
Q3
What is meant by pure substance and mixture?

A pure substance is a single kind of matter that cannot be separated into other kinds of matter by any physical means. A pure substance always has a definite and constant composition. A mixture is a physical combination of two or more pure substances in which each substance retains its own chemical identity.

A pure substance is a single substance on its own. Elements and compounds are pure substances, but mixtures are not. Compounds are very different from the elements they contain. But a mixture resembles the substances it contains. The properties of the mixture are a kind of average of the properties of the substances in it. So a mixture of sugar and water is both sweet and wet.
Q4
What are the properties of substances?

Any characteristic that can be measured, such as an object’s density, color, mass, volume, length, malleability, melting point, hardness, odour, temperature, and more, are considered properties of matter.
Q5
What are the characteristics of pure solution?

Pure materials have a particular set of characteristics, such as boiling point, melting point, density, etc. All of them are homogeneous, i.e., their distribution in the bulk is uniform. Pure substances are both elements and compounds.

H2O is the formula for water vapour which is the gaseous
phase of water

since the chemical composition of water is constant
throughout its mass in all the three phases it is referred
to as a pure substance

A substance which has constant chemical composition
throughout its mass in all the phases is known as a 
pure substance

Pure substance is used in thermal power plants, refrigeration
and air conditioning systems,etc.

Latent heat is defined as the heat or energy that is absorbed or released during a phase change of a substance. It could either be from a gas to a liquid or liquid to a solid and vice versa. Latent heat is related to a heat property called enthalpy.

Enthalpy is the measurement of energy in a thermodynamic system. The quantity of enthalpy equals to the total content of heat of a system, equivalent to the system's internal energy plus the product of volume and pressure.

Enthalpy is a thermodynamic quantity equivalent to the total heat content of a system. It is equal to the internal energy of the system plus the product of pressure and volume.

Dryness fraction is defined as the ratio of mass of dry steam (vapour) to combined mass of dry steam (vapour) & mass of liquid in mixture. 



The steam dryness fraction is used to quantify the amount of water within steam. If steam contains 10% water by mass, it's said to be 90% dry, or have a dryness fraction of 0.9.

Steam dryness is important because it has a direct effect on the total amount of transferable energy contained within the steam (usually just latent heat), which affects heating efficiency and quality.

For example, saturated steam (100% dry) contains 100% of the latent heat available at that pressure. Saturated water, which has no latent heat and therefore 0% dryness, will only contain sensible heat.

Steam Dryness = 100% - [% Entrained Water] (by mass)

Calculating the Total Heat of Wet Steam

Steam tables contain values such as enthalpy (h), specific volume (ν), entropy (s), etc. for saturated steam (100% dry) and for saturated water (0% dryness), but typically not for wet steam.

These can be calculated by simply considering the ratio of steam to water, as described in the equations below:

Specific Volume (ν) of Wet Steam

ν = X • νg + (1 - X) • νf

where:

X = Dryness (% / 100)
νf = Specific Volume of Saturated Water
νg = Specific Volume of Saturated Steam

Specific Enthalpy (h) of Wet Steam

h = hf + X • hfg

where:

X = Dryness (% / 100)
hf = Specific Enthalpy of Saturated Water
hfg = Specific Enthalpy of Saturated Steam - Specific Enthalpy of Saturated Water

Specific Entropy (s) of Wet Steam

s = sf + X • sfg

where:

X = Dryness (% / 100)
sf = Specific Entropy of Saturated Water
sfg = Specific Entropy of Saturated Steam - Specific Entropy of Saturated Water

The wetter the steam, the lower the specific volume, enthalpy, and entropy will be because the dryness percentage is a factor of the 100% condition. Since steam dryness has a significant effect on all these values, to enable greater heating efficiency it is crucial to supply steam that is as close to being 100% dry as possible.
The Relationship Between Steam Dryness and Enthalpy

Alt Text
As the amount of water in steam increases, the latent heat decreases, providing less heat to transfer from the steam to the process / product being heated.

Steam Dryness Decreases During Transport

During transport, radiant heat loss from piping causes part of the steam to lose some of its latent heat and revert back to water, thereby decreasing steam dryness.
Water Droplets Entrained in Steam

Proper measures should be taken to discharge all condensate within steam piping, including water droplets entrained within the flow of steam.

Since wet steam not only affects heat transfer efficiency, but can also cause erosion of piping and critical equipment such as turbine blades, it is highly recommended to take preventative measures such as using a steam separator to remove the entrained condensate and by following the advice written in these articles:

    Best Practices for Condensate Removal on Steam Lines
    Erosion in Steam and Condensate Piping

Tip

Can steam dryness rise above 100%? It might seem unlikely, but actually it can. When steam is more than 100% dry it is called superheated steam. This type of steam is created by adding heat above the saturated steam threshold. The added heat raises the steam’s temperature higher than its saturation point, allowing the amount of superheat to be easily determined by simply measuring its temperature.

 A vortex meter is a type of volumetric flow meter that makes use of a natural phenomenon that occurs when a liquid flows around a bluff object. Vortex flow meters operate under the vortex shedding principle, where vortices (or eddies) are shed alternately downstream of the object. The frequency of the vortex shedding is directly proportional to the velocity of the liquid flowing through the meter.

Vortex flow meters are best suited for flow measurements where the introduction of moving parts presents problems. They are available in industrial grade, brass, or all plastic construction. Sensitivity to variations in the process conditions are low and, with no moving parts, relatively low wear compared to other types of flow meters.



Reliable flow measuring system for steam, air and water

High-performance vortex flowmeter with robust sensor for highly accurate volume or mass flow measurements of saturated and superheated steam, air and water.
Benefits and Features

    Measures flow by means of the regular vortices (Karmen vortex) generated downstream of an object as fluid flows around the object.
    Vortex flowmeters can be used to measure various fluids, such as liquids and gasses, and are particularly suitable for measuring steam.
    DSC (Differential Switched Capacitance) sensor offers a wide measuring range, with a high resistance to thermal shock, vibration and water hammer.
    Integrated pressure measuring unit enables mass flow calculation even for superheated steam at fluctuating pressures - all in one device. Optional for EF200F-C and EF200R-C.
    Integrated flow computer calculates mass flow from measured volume flow and temperature variables.
    Measures steam dryness fraction (80 to 100%) — Optional for EF200F-C.
    Capable of simultaneous pulse (interval) and analog (instantaneous) output.
    Requires no maintenance, has no moving parts, and experiences no zero point drift.
    Low pressure drop through body.

Application Areas

    Measures the flow of steam, condensate, water, etc.

//// other things on tlv.com vortex-flowmeters

Types of fouling:
Precipitate fouling or scaling
Corrosion fouling
Chemical reaction fouling
Biological fouling
Freezing fouling

Precipitate fouling or scaling occurs due to the
precipitation of water-soluble salts on the heat
transfer surface.

Corrosion fouling occurs due to the deposition of corrosion
products on the heat transfer surface. Here, the heat
transfer surface material itself reacts to produce
corrosion products. For example: Rusting of steel

Chemical Reaction fouling occurs due to the deposits 
formed as a result of chemical reaction within the 
fluid on the heat transfer surface.

Biological fouling occurs when the biological micro and
macro organisms stick to the heat transfer surface.

Freezing fouling occurs when the liquid fluid cools nearly
to its freezing point and gets deposited on the heat transfer surface.


*/