
const questions = [
    {
        question: "1. Which of the following serve as communicating junctions between the cells?",
        answers: [
            { text: "Tight junctions", correct: false },
            { text: "Hemidesmosomes", correct: false },
            { text: "Gap junctions", correct: true },
            { text: "Desmosomes", correct: false }
        ]
    },
    {
        question: "2. An unfertilized human egg contains",
        answers: [
            { text: "Two X chromosomes", correct: false },
            { text: "One X and One Y chromosome", correct: false },
            { text: "One X chromosome only", correct: true },
            { text: "One Y chromosome only", correct: false }
        ]
    },
    {
        question: "3. The evolution occurring at a genetic level is called",
        answers: [
            { text: "Macroevolution", correct: false },
            { text: "Microevolution", correct: true },
            { text: "Mega evolutions", correct: false },
            { text: "Inorganic evolution", correct: false }
        ]
    },
    {
        question: "4. Monotremes are placed in",
        answers: [
            { text: "Prototheria", correct: true },
            { text: "Metatheria", correct: false },
            { text: "Eutheria", correct: false },
            { text: "Ornithodelphia", correct: false }
        ]
    },
    {
        question: "5. What is the role of small nuclear RNAs in protein synthesis?",
        answers: [
            { text: "It translates genetic code to a specific amino acid", correct: false },
            { text: "It modifies mRNA molecules prior to protein synthesis", correct: true },
            { text: "It provides a genetic blueprint for the protein", correct: false },
            { text: "It catalyzes the process", correct: false }
        ]
    },
    {
        question: "6. Organ of defense in protozoans is",
        answers: [
            { text: "Statocysts", correct: false },
            { text: "Trichocysts", correct: true },
            { text: "Otocysts", correct: false },
            { text: "Nematocysts", correct: false }
        ]
    },
    {
        question: "7. Insertion or deletion mutations are",
        answers: [
            { text: "Transition mutation", correct: false },
            { text: "Frame-shift mutation", correct: true },
            { text: "Transverse mutation", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "8. Platyhelminthes are also known as",
        answers: [
            { text: "Roundworms", correct: false },
            { text: "Flatworms", correct: true },
            { text: "Earthworms", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "9. Pedigree analysis is useful for",
        answers: [
            { text: "Study of inheritance when arranged mating is not possible", correct: false },
            { text: "Study of sex linked inheritance in man", correct: false },
            { text: "Study of Mendelian disorders in man", correct: false },
            { text: "All of these", correct: true }
        ]
    },
    {
        question: "10. In some animal species, a membrane called tapetum lucidum is found at the back of eye, behind the retina. What is the function of this layer?",
        answers: [
            { text: "It is the coloured portion of eye", correct: false },
            { text: "It gives night vision to the animals", correct: true },
            { text: "It is transparent jelly-like fluid", correct: false },
            { text: "It is the area in which the optic nerve attaches", correct: false }
        ]
    },
    {
        question: "11. Which of the following cells do not show phagocytic property?",
        answers: [
            { text: "Neutrophils", correct: false },
            { text: "Basophils", correct: true },
            { text: "Monocytes", correct: false },
            { text: "Macrophages", correct: false }
        ]
    },
    {
        question: "12. Complete metamorphosis occurs in",
        answers: [
            { text: "Moths and mosquitoes", correct: true },
            { text: "Grasshopper", correct: false },
            { text: "Bed-bug", correct: false },
            { text: "Silver-fish", correct: false }
        ]
    },
    {
        question: "13. Recommended disinfectant specific to killing Corona Virus is",
        answers: [
            { text: "Sodium Hypochlorite", correct: true },
            { text: "Lyzol", correct: false },
            { text: "Phenyl", correct: false },
            { text: "Carbolic acid", correct: false }
        ]
    },
    {
        question: "14. In monoclonal antibody technology, tumor cells that can replicate endlessly are fused with mammalian cells that produce an antibody. The result of this cell fusion is a",
        answers: [
            { text: "Hybridoma", correct: true },
            { text: "Myeloma", correct: false },
            { text: "Carcinoma", correct: false },
            { text: "Lymphoma", correct: false }
        ]
    },
    {
        question: "15. Which of the following is an example of an organ-specific autoimmune disease?",
        answers: [
            { text: "Psoriasis", correct: false },
            { text: "Rheumatoid arthritis", correct: false },
            { text: "Addison disease", correct: false },
            { text: "Myasthenia gravis", correct: true }
        ]
    },
    {
        question: "16. The function of tropomyosin in skeletal muscle includes",
        answers: [
            { text: "Sliding of actin during contraction", correct: false },
            { text: "Binding of myosin during contraction", correct: false },
            { text: "Acting as relaxing protein at rest by covering up the sites where myosin binds to", correct: true },
            { text: "Generating ATP which passes to the contractile mechanism", correct: false }
        ]
    },
    {
        question: "17. Which one of the following ecosystems covers the largest area of the earth's surface?",
        answers: [
            { text: "Desert Ecosystem", correct: false },
            { text: "Marine Ecosystem", correct: true },
            { text: "Grassland Ecosystem", correct: false },
            { text: "Mountain Ecosystem", correct: false }
        ]
    },
    {
        question: "18. In rabbits, humans and other placental mammals, fertilization occurs in",
        answers: [
            { text: "Vagina", correct: false },
            { text: "Ovary", correct: false },
            { text: "Fallopian tubes", correct: true },
            { text: "Uterus", correct: false }
        ]
    },
    {
        question: "19. Enzymes are made up of",
        answers: [
            { text: "Carbohydrates", correct: false },
            { text: "Amino acids", correct: true },
            { text: "Nucleic acids", correct: false },
            { text: "Lipids", correct: false }
        ]
    },
    {
        question: "20. Which molecule is responsible for triggering the progression from G1 phase to S phase of cell cycle?",
        answers: [
            { text: "RNA polymerase", correct: false },
            { text: "ATP", correct: false },
            { text: "Cyclin-CDK complex", correct: true },
            { text: "DNA polymerase", correct: false }
        ]
    },
    {
        question: "21. The first body segment of earthworm is called",
        answers: [
            { text: "Protostome", correct: false },
            { text: "Peristome", correct: false },
            { text: "Peristomium", correct: true },
            { text: "Protostomium", correct: false }
        ]
    },
    {
        question: "22. Which one of the following is the closest relative to man?",
        answers: [
            { text: "Monkeys", correct: false },
            { text: "Gorilla", correct: false },
            { text: "Gibbons", correct: false },
            { text: "Chimpanzee", correct: true }
        ]
    },
    {
        question: "23. The action potential while the propagation of a nerve impulse is due to the movement of",
        answers: [
            { text: "K⁺ ions from intracellular to extracellular fluid", correct: false },
            { text: "K⁺ ions from extracellular to intracellular fluid", correct: false },
            { text: "Na⁺ ions from intracellular to extracellular fluid", correct: false },
            { text: "Na⁺ ions from extracellular to intracellular fluid", correct: true }
        ]
    },
    {
        question: "24. In amphibians, the organ of Jacobson is meant for the function to",
        answers: [
            { text: "Sense", correct: false },
            { text: "Taste", correct: false },
            { text: "Sound", correct: false },
            { text: "Smell", correct: true }
        ]
    },
    {
        question: "25. Which of the following scientists proposed the theory of acquired characteristics?",
        answers: [
            { text: "Fisher", correct: false },
            { text: "Lamarck", correct: true },
            { text: "Mendel", correct: false },
            { text: "Weisman", correct: false }
        ]
    },
    {
        question: "26. GAP-43, tubulin, actin and cytokines can induce the process of",
        answers: [
            { text: "Fertilization", correct: false },
            { text: "Sexual maturity", correct: false },
            { text: "Regeneration", correct: true },
            { text: "Hermaphroditism", correct: false }
        ]
    },
    {
        question: "27. Reptilian ancestry of birds can be indicated by",
        answers: [
            { text: "Eggs with the calcareous shell", correct: false },
            { text: "Four-chambered heart", correct: false },
            { text: "Scales on their hind limb", correct: true },
            { text: "Presence of crop and gizzard", correct: false }
        ]
    },
    {
        question: "28. Which of the following protozoan causes African sleeping sickness?",
        answers: [
            { text: "Plasmodium vivax", correct: false },
            { text: "Entamoeba gingivalis", correct: false },
            { text: "Trypanosoma lewisi", correct: false },
            { text: "Trypanosoma gambiense", correct: true }
        ]
    },
    {
        question: "29. Which of the following artery does not carry oxygenated blood?",
        answers: [
            { text: "Systemic", correct: false },
            { text: "Pulmonary", correct: true },
            { text: "Cardiac", correct: false },
            { text: "Hepatic", correct: false }
        ]
    },
    {
        question: "30. Choose the correct statement",
        answers: [
            { text: "DNA is hereditary material", correct: false },
            { text: "RNA is hereditary material", correct: false },
            { text: "DNA is hereditary material but where it is absent RNA can function as hereditary material", correct: true },
            { text: "Both DNA and RNA are hereditary materials", correct: false }
        ]
    },
    {
        question: "31. While performing characterization of antigens by electrophoresis and immunofixation, the reaction of antigen and antibody relies on/in",
        answers: [
            { text: "Streptavidin", correct: false },
            { text: "Plastic microtiter plates", correct: false },
            { text: "Agar", correct: true },
            { text: "Latex particles", correct: false }
        ]
    },
    {
        question: "32. If the population in an area is not geographically isolated, interbreeds and develops a distinct lifestyle, it is named as",
        answers: [
            { text: "Sympatric speciation", correct: true },
            { text: "Allopatric speciation", correct: false },
            { text: "Parapatric speciation", correct: false },
            { text: "Speciation", correct: false }
        ]
    },
    {
        question: "33. Ammocoete larvae would be found",
        answers: [
            { text: "As planktonic inhabitants of the open ocean", correct: false },
            { text: "Partially buried, filter feeding in coastal waters", correct: false },
            { text: "Partially buried, filter feeding in a freshwater stream or river", correct: true },
            { text: "Attached to a host fish", correct: false }
        ]
    },
    {
        question: "34. The change of the lighter-coloured variety of peppered moth (Biston betularia) to its darker variety (Biston carbonaria) is due to",
        answers: [
            { text: "Mutation", correct: true },
            { text: "Regeneration", correct: false },
            { text: "Genetic isolation", correct: false },
            { text: "Temporal isolation", correct: false }
        ]
    },
    {
        question: "35. Placoid scales are found in",
        answers: [
            { text: "Paleontological fishes", correct: false },
            { text: "Lung fishes", correct: false },
            { text: "Bony fishes", correct: false },
            { text: "Cartilaginous fishes", correct: true }
        ]
    },
    {
        question: "36. Discoidal and superficial cleavages are types of",
        answers: [
            { text: "Unequal holoblastic", correct: false },
            { text: "Equal holoblastic", correct: false },
            { text: "Both (A) and (B)", correct: false },
            { text: "Meroblastic", correct: true }
        ]
    },
    {
        question: "37. Ascaris is characterized by",
        answers: [
            { text: "Presence of true coelom and metamerism", correct: false },
            { text: "Presence of true coelom but the absence of metamerism", correct: false },
            { text: "Absence of true coelom and metamerism", correct: true }, // Ascaris has a pseudocoelom, not true coelom
            { text: "Absence of true coelom but the presence of metamerism", correct: false }
        ]
    },
    {
        question: "38. Which one of the following is not a poisonous snake?",
        answers: [
            { text: "Cobra", correct: false },
            { text: "Viper", correct: false },
            { text: "Python", correct: true },
            { text: "Krait", correct: false }
        ]
    },
    {
        question: "39. Which of the following is a type of blood cancer?",
        answers: [
            { text: "Lymphomas", correct: false }, // Lymphomas are cancers of the lymphatic system, which is part of blood/immune system, but leukemia is specifically blood cancer.
            { text: "Leukemia", correct: true },
            { text: "Sarcomas", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "40. Class Turbellaria is present in which phylum?",
        answers: [
            { text: "Annelida", correct: false },
            { text: "Platyhelminthes", correct: true },
            { text: "Echinodermata", correct: false },
            { text: "Protozoa", correct: false }
        ]
    },
    {
        question: "41. If you suddenly observe linkage between two genes that are present in two chromosomes, this can be due to",
        answers: [
            { text: "Inversion", correct: false },
            { text: "Coupling", correct: false },
            { text: "Non-homologous end joining", correct: false },
            { text: "Translocation", correct: true }
        ]
    },
    {
        question: "42. Enzymes are proteins in nature. Select which of the following enzymes is not proteinaceous in nature:",
        answers: [
            { text: "Urease", correct: false },
            { text: "Peptidase", correct: false },
            { text: "Ribozyme", correct: true },
            { text: "Phosphatase", correct: false }
        ]
    },
    {
        question: "43. Metamerically segmented worms are included in the phylum",
        answers: [
            { text: "Coelenterata", correct: false },
            { text: "Nematoda", correct: false },
            { text: "Mollusca", correct: false },
            { text: "Annelida", correct: true }
        ]
    },
    {
        question: "44. Cancer cells are more easily damaged by radiations than normal cells because they are",
        answers: [
            { text: "Starved of nutrition", correct: false },
            { text: "Different in structure", correct: false },
            { text: "Non-dividing", correct: false },
            { text: "Rapidly dividing", correct: true }
        ]
    },
    {
        question: "45. Which of the following is not a consequence of global warming?",
        answers: [
            { text: "Rising sea level", correct: false },
            { text: "Increased agricultural productivity worldwide", correct: true }, // While some areas might benefit initially, widespread *increased* productivity isn't a general consequence; often it's disruption.
            { text: "Worsening health effects", correct: false },
            { text: "Increased storm frequency and intensity", correct: false }
        ]
    },
    {
        question: "46. The process of synthesis of yolk is called",
        answers: [
            { text: "Oogenesis", correct: false },
            { text: "Spermeiogenesis", correct: false },
            { text: "Vitellogenesis", correct: true },
            { text: "Spermatogenesis", correct: false }
        ]
    },
    {
        question: "47. Osteichthyes belong to which of the following?",
        answers: [
            { text: "Division Agnatha", correct: false },
            { text: "Class Amphibia", correct: false },
            { text: "Superclass Pisces", correct: true }, // Osteichthyes (bony fish) are a class within Superclass Pisces
            { text: "Superclass Tetrapoda", correct: false }
        ]
    },
    {
        question: "48. The cultivation of Bt cotton has received a great deal of interest. What does \"Bt\" stand for?",
        answers: [
            { text: "Cotton seeds with barium added", correct: false },
            { text: "Possessing a gene for a Bacillus thuringiensis endotoxin", correct: true },
            { text: "Biotechnology-based production", correct: false },
            { text: "Cotton thread in a larger size with increased tensile strength", correct: false }
        ]
    },
    {
        question: "49. Which of the following is a classic example of point mutation?",
        answers: [
            { text: "Sickle cell anaemia", correct: true },
            { text: "Phenylketonuria", correct: false },
            { text: "Haemophilia", correct: false },
            { text: "Thalassemia", correct: false }
        ]
    },
    {
        question: "50. Hardy-Weinberg Equilibrium is not affected by which of the following factors?",
        answers: [
            { text: "Natural selection", correct: false },
            { text: "Random mating", correct: true }, // Random mating is a condition for equilibrium, not a factor that affects/disturbs it.
            { text: "Variation due to mutation", correct: false },
            { text: "Genetic recombination during gametogenesis", correct: false }
        ]
    },
    {
        question: "51. Sponges are",
        answers: [
            { text: "Diploblastic", correct: true },
            { text: "Monoblastic", correct: false },
            { text: "Triploblastic", correct: false },
            { text: "Tetrablastic", correct: false }
        ]
    },
    {
        question: "52. Where are Haversian canals found?",
        answers: [
            { text: "Villi", correct: false },
            { text: "Medulla", correct: false },
            { text: "Humerus", correct: true }, // Haversian canals are found in compact bone, like that of the humerus.
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "53. The organelle which acts like the 'Traffic Police' of the cell is",
        answers: [
            { text: "Mitochondria", correct: false },
            { text: "Nucleus", correct: false },
            { text: "Endoplasmic reticulum", correct: false },
            { text: "Golgi bodies", correct: true }
        ]
    },
    {
        question: "54. Which among the following is based on antigen-antibody interaction?",
        answers: [
            { text: "PCR", correct: false },
            { text: "Electrophoresis", correct: false },
            { text: "ELISA", correct: true },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "55. Mesoderm gives rise to all the structures except",
        answers: [
            { text: "Gonads", correct: false },
            { text: "Circulatory system", correct: false },
            { text: "Muscular system", correct: false },
            { text: "Nervous system", correct: true } // Nervous system develops from ectoderm
        ]
    },
    {
        question: "56. What are the main steps of the apoptotic process?",
        answers: [
            { text: "Division, duplication, and differentiation", correct: false },
            { text: "Inflammation, infection, and destruction", correct: false },
            { text: "Initiation, Signaling, and execution", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "57. Which of the following combinations is incorrect?",
        answers: [
            { text: "Nematoda – roundworms, pseudocoelomate", correct: false },
            { text: "Calcarea – gastrovascular cavity, coelom present", correct: true }, // Calcarea (sponges) do not have a gastrovascular cavity or coelom.
            { text: "Echinodermata – coelom present, bilateral symmetry", correct: false }, // Adult echinoderms have radial symmetry but larvae are bilateral, and they have a coelom.
            { text: "Platyhelminthes – gastrovascular cavity, flatworms, acoelomate", correct: false }
        ]
    },
    {
        question: "58. Oxytocin and ADH hormones are basically secreted by which of the following organs?",
        answers: [
            { text: "Stomach", correct: false },
            { text: "Intestine", correct: false },
            { text: "Hypothalamus", correct: true }, // They are *produced* in the hypothalamus, though released by the posterior pituitary.
            { text: "Kidney", correct: false }
        ]
    },
    {
        question: "59. Which of the following is an example of physiological adaptation in animals?",
        answers: [
            { text: "Hibernation", correct: true },
            { text: "Mimicry", correct: false },
            { text: "Burrowing", correct: false },
            { text: "Camouflage", correct: false }
        ]
    },
    {
        question: "60. Select the larva of starfish",
        answers: [
            { text: "Bipinnaria", correct: true },
            { text: "Ophiopluteus", correct: false },
            { text: "Auricularia", correct: false },
            { text: "Crinoidea", correct: false }
        ]
    },
    {
        question: "61. Which ecological pyramid is always upright?",
        answers: [
            { text: "Pyramid of biomass", correct: false },
            { text: "Pyramid of energy", correct: true },
            { text: "Pyramid of carbon", correct: false },
            { text: "Pyramid of number", correct: false }
        ]
    },
    {
        question: "62. DNA synthesis takes place during which phase of Interphase?",
        answers: [
            { text: "G₂ phase", correct: false },
            { text: "S phase", correct: true },
            { text: "G₁ phase", correct: false },
            { text: "M phase", correct: false }
        ]
    },
    {
        question: "63. Which of the following is not a true amphibian?",
        answers: [
            { text: "Frog", correct: false },
            { text: "Toad", correct: false },
            { text: "Tortoise", correct: true }, // Tortoise is a reptile.
            { text: "Salamander", correct: false }
        ]
    },
    {
        question: "64. The inheritance of colour blindness disease is which of the following linked recessive trait?",
        answers: [
            { text: "Z chromosome", correct: false },
            { text: "X chromosome", correct: true },
            { text: "Y chromosome", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "65. Which hormone causes the contraction of smooth uterine muscles during animal parturition?",
        answers: [
            { text: "Vasopressin", correct: false },
            { text: "Oxytocin", correct: true },
            { text: "Prolactin", correct: false },
            { text: "Gonadotropins", correct: false }
        ]
    },
    {
        question: "66. Select the correct pair",
        answers: [
            { text: "Arthropoda – silver fish", correct: true },
            { text: "Pisces – jelly fish", correct: false }, // Jellyfish are cnidarians, not fish.
            { text: "Echinodermata – cuttle fish", correct: false }, // Cuttlefish are molluscs.
            { text: "Mollusca – star fish", correct: false } // Starfish are echinoderms.
        ]
    },
    {
        question: "67. By which process can a miss-incorporated base change into a permanent mutation?",
        answers: [
            { text: "Transcription", correct: false },
            { text: "Translation", correct: false },
            { text: "Replication", correct: true }, // If an incorrect base is incorporated during replication and not repaired, it becomes permanent in subsequent replications.
            { text: "Transposition", correct: false }
        ]
    },
    {
        question: "68. Which of the following statements is correct?",
        answers: [
            { text: "A + G ≠ T + C", correct: false },
            { text: "A = T", correct: false },
            { text: "G = C", correct: false },
            { text: "All of these", correct: true } // Based on Chargaff's rules for double-stranded DNA, A=T and G=C, which implies A+G = T+C.
        ]
    },
    {
        question: "69. Most appropriate term to designate the life cycle of Obelia is",
        answers: [
            { text: "Neoteny", correct: false },
            { text: "Metagenesis", correct: true }, // Alternation of generations (polyp and medusa stages)
            { text: "Metamorphosis", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "70. Which is the innermost layer of the human eye?",
        answers: [
            { text: "Retina", correct: true },
            { text: "Choroid", correct: false },
            { text: "Sclera", correct: false },
            { text: "Cornea", correct: false }
        ]
    },
    {
        question: "71. Which animal out of the following given animals possesses the notochord throughout its life?",
        answers: [
            { text: "Snake", correct: false },
            { text: "Fish", correct: false },
            { text: "Amphioxus", correct: true },
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "72. How much force is required to move a chromosome from equator to the pole?",
        answers: [
            { text: "Approx. 10⁻¹⁰ dynes", correct: false },
            { text: "Approx. 10⁻¹⁷ dynes", correct: false },
            { text: "Approx. 10⁻¹¹ dynes", correct: true }, // This is a classic value often cited in cell biology for the force exerted by spindle fibers.
            { text: "Approx. 10⁻¹⁵ dynes", correct: false }
        ]
    },
    {
        question: "73. Which of the following does not belong to factors affecting the Hardy-Weinberg principle?",
        answers: [
            { text: "Gene migration", correct: false },
            { text: "Genetic drop", correct: true }, // "Genetic drop" is not a standard term for a factor affecting H-W equilibrium. Gene migration, genetic drift, and mutation are all factors.
            { text: "Genetic drift", correct: false },
            { text: "Mutation", correct: false }
        ]
    },
    {
        question: "74. Lyon's hypothesis is connected with",
        answers: [
            { text: "Number of Barr bodies", correct: true },
            { text: "Genetic compatibility", correct: false },
            { text: "Centromere position", correct: false },
            { text: "Genetic incompatibility", correct: false }
        ]
    },
    {
        question: "75. In the life cycle of Ascaris, the infective stage is",
        answers: [
            { text: "Third larva", correct: false },
            { text: "Second larva", correct: true },
            { text: "Cyst", correct: false },
            { text: "Fertilized egg", correct: false } // The fertilized egg contains the L2 larva which is infective.
        ]
    },
    {
        question: "76. Which of the following enzymes catalyzes the conversion of pyruvate to lactate?",
        answers: [
            { text: "Pyruvate reductase", correct: false },
            { text: "Lactate reductase", correct: false },
            { text: "Lactate dehydrogenase", correct: true },
            { text: "Pyruvate dehydrogenase", correct: false }
        ]
    },
    {
        question: "77. Which Mollusc class holds the maximum economic importance for humans?",
        answers: [
            { text: "Gastropoda", correct: false },
            { text: "Hexapoda", correct: false }, // Hexapoda is insects, not molluscs.
            { text: "Pelecypoda", correct: true }, // Also known as Bivalvia (clams, oysters, mussels) which are very important economically.
            { text: "Polyplacophora", correct: false }
        ]
    },
    {
        question: "78. A bioreactor is",
        answers: [
            { text: "Culture for the synthesis of new chemicals", correct: false },
            { text: "A culture containing radioactive isotopes", correct: false },
            { text: "Hybridoma", correct: false },
            { text: "Fermentation tank", correct: true }
        ]
    },
    {
        question: "79. Which of the following bones form the wishbone of birds?",
        answers: [
            { text: "Hind limbs", correct: false },
            { text: "Clavicles", correct: true }, // Specifically the fused clavicles, forming the furcula.
            { text: "Pelvic girdle", correct: false },
            { text: "Skull", correct: false }
        ]
    },
    {
        question: "80. What is the typical route of administration for most vaccines?",
        answers: [
            { text: "Intramuscular injection", correct: true },
            { text: "Intravenous infusion", correct: false },
            { text: "Topical application", correct: false },
            { text: "Oral ingestion", correct: false }
        ]
    },
    {
        question: "81. Function of Malpighian tubules in cockroach is",
        answers: [
            { text: "Respiration", correct: false },
            { text: "Excretion, osmoregulation and homeostasis", correct: true },
            { text: "Secretion of digestive enzymes", correct: false },
            { text: "Storage of wastes", correct: false }
        ]
    },
    {
        question: "82. Which out of the following factors contributes to the formation of concentrated urine?",
        answers: [
            { text: "Hydrostatic pressure during glomerular filtration", correct: false },
            { text: "Low levels of antidiuretic hormone", correct: false },
            { text: "Maintaining hyperosmolarity towards inner medullary interstitium in kidneys", correct: true },
            { text: "Secretion of erythropoietin by the juxtaglomerular complex", correct: false }
        ]
    },
    {
        question: "83. Bioinformatics applications in databases containing information on DNA base sequences can be utilised to",
        answers: [
            { text: "Identify infectious diseases", correct: false },
            { text: "Derive 3D protein structures", correct: false },
            { text: "Sequence a genome", correct: false },
            { text: "Identify homologous sequences in different species", correct: true } // This is a fundamental and common use. While it can aid in A, B, C, comparing homologous sequences across species is a direct application of sequence databases.
        ]
    },
    {
        question: "84. During development, gastrulation follows which phase?",
        answers: [
            { text: "Morulation", correct: false },
            { text: "Organogenesis", correct: false },
            { text: "Cleavage", correct: false },
            { text: "Blastulation", correct: true } // Cleavage -> Morula -> Blastula -> Gastrula -> Organogenesis
        ]
    },
    {
        question: "85. Shelford's law of tolerance indicates that organisms with a wide tolerance limit for environmental factors show",
        answers: [
            { text: "Wide distribution with high population", correct: true },
            { text: "Narrow distribution with high population", correct: false },
            { text: "Narrow distribution with low population", correct: false },
            { text: "Wide distribution with low population", correct: false }
        ]
    },
    {
        question: "86. Nucleic acid is fragmented by enzymes",
        answers: [
            { text: "Ligases", correct: false },
            { text: "Proteases", correct: false },
            { text: "Polymerases", correct: false },
            { text: "Nucleases", correct: true }
        ]
    },
    {
        question: "87. The respiratory pigment of the molluscs is",
        answers: [
            { text: "Haemoglobin in the blood plasma", correct: false },
            { text: "Haemocyanin in the blood plasma", correct: true },
            { text: "Myoglobin in blood cells", correct: false },
            { text: "Hemocyanin in the blood cells", correct: false } // B is more precise in stating "blood plasma"
        ]
    },
    {
        question: "88. Which of the following is an important Greenhouse Gas?",
        answers: [
            { text: "Chlorofluorocarbon", correct: false },
            { text: "Carbon Monoxide", correct: false },
            { text: "Freon", correct: false },
            { text: "Carbon Dioxide", correct: true }
        ]
    },
    {
        question: "89. Which of the following stains is used for staining DNA?",
        answers: [
            { text: "Feulgen", correct: true },
            { text: "Giemsa", correct: false },
            { text: "Haematoxylene", correct: false },
            { text: "Eosin", correct: false }
        ]
    },
    {
        question: "90. If a person is having antigen A and Rh antigen on his RBCs, then that person's blood group will be",
        answers: [
            { text: "A+ve", correct: true },
            { text: "AB+ve", correct: false },
            { text: "B–ve", correct: false },
            { text: "AB–ve", correct: false }
        ]
    },
    {
        question: "91. Chordates are distinguished from non-chordates by the presence of",
        answers: [
            { text: "Brain", correct: false },
            { text: "Dorsal tubular nerve cord", correct: true },
            { text: "Dorsal nerve cord", correct: false }, // "Tubular" is the key distinguishing feature for chordates.
            { text: "Ventral nerve cord", correct: false }
        ]
    },
    {
        question: "92. Which year did the Forest Conservation Act pass?",
        answers: [
            { text: "1986", correct: false },
            { text: "1990", correct: false },
            { text: "1980", correct: true },
            { text: "1988", correct: false }
        ]
    },
    {
        question: "93. The degenerate features of echinoderms is",
        answers: [
            { text: "Lack of head", correct: false },
            { text: "Reduced circulatory system", correct: false },
            { text: "Absence of excretory system", correct: false },
            { text: "All the above", correct: true }
        ]
    },
    {
        question: "94. The phenomenon of transfer of causative agents of diseases from animals to human beings is called",
        answers: [
            { text: "Infestation", correct: false },
            { text: "Zoonosis", correct: true },
            { text: "Infection", correct: false },
            { text: "Circulation", correct: false }
        ]
    },
    {
        question: "95. Foetal alcohol syndrome results in",
        answers: [
            { text: "Blindness", correct: false },
            { text: "Attention deficit hyperactivity disorder (ADHD)", correct: false },
            { text: "Poor sleep patterns", correct: false },
            { text: "Changes in brain structure and behavioural problems", correct: true } // ADHD and poor sleep can be part of behavioral problems, but the underlying neurological impact is broader.
        ]
    },
    {
        question: "96. In which class of Coelenterata are both polyp and medusa found in one animal?",
        answers: [
            { text: "Hydrozoa", correct: true },
            { text: "Scyphozoa", correct: false },
            { text: "Anthozoa", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "97. The silkworm larva ceases to eat and begins spinning silk all over its body",
        answers: [
            { text: "From inside to outside", correct: true }, // The silk gland is internal, producing silk that is spun outwards.
            { text: "From outside to inside", correct: false },
            { text: "In a random motion", correct: false },
            { text: "All the above", correct: false }
        ]
    },
    {
        question: "98. Salted meat of pig is known as",
        answers: [
            { text: "Beef", correct: false },
            { text: "Bacon", correct: true },
            { text: "Chicken", correct: false },
            { text: "Pork", correct: false }
        ]
    },
    {
        question: "99. In human beings, number of pairs of somatic chromosomes in a cell are",
        answers: [
            { text: "22", correct: false },
            { text: "23", correct: true },
            { text: "20", correct: false },
            { text: "21", correct: false }
        ]
    },
    {
        question: "100. All of the following statements are correct with reference to fishes except",
        answers: [
            { text: "Labeo is a freshwater fish", correct: false },
            { text: "Osteichthyes have air bladder", correct: false },
            { text: "Pterophyllum is a dogfish", correct: true }, // Pterophyllum is an angelfish, not a dogfish (which is a type of shark).
            { text: "Sexes are separate", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const quizSection = document.getElementById('quiz');
const resultContainer = document.getElementById('result-container');
const scoreDisplay = document.getElementById('score-display');
const totalQuestionsDisplay = document.getElementById('total-questions');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizSection.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    feedbackElement.classList.remove('correct', 'incorrect');
    feedbackElement.textContent = '';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    feedbackElement.classList.remove('correct', 'incorrect');
    feedbackElement.textContent = '';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

    setStatusClass(selectedButton, correct);
    if (correct) {
        score++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.classList.add('incorrect');
        // Optionally, highlight the correct answer
        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                setStatusClass(button, true);
            }
        });
    }

    // Disable all buttons after an answer is selected
    Array.from(answerButtonsElement.children).forEach(button => {
        button.removeEventListener('click', selectAnswer); // Remove event listener
        button.style.pointerEvents = 'none'; // Disable pointer events
    });

    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function setNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizSection.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = questions.length;
}

nextButton.addEventListener('click', setNextQuestion);
restartButton.addEventListener('click', startQuiz);

// Initial call to start the quiz when the page loads
startQuiz();
