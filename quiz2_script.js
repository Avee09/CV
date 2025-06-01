
const quizQuestions = [
    {
        question: "1. Which of the following is not an insect?",
        options: ["(A) Silver fish", "(B) Grasshopper", "(C) House fly", "(D) Spider"],
        answer: "(D) Spider"
    },
    {
        question: "2. What are the main constituents of culture for animal cell growth?",
        options: ["(A) Glucose and Glutamine", "(B) Growth factors", "(C) Cytokines", "(D) All of these"],
        answer: "(D) All of these"
    },
    {
        question: "3. The process by which certain changes occur on the surface of mammalian sperms while passing through female reproductive tract is termed as:",
        options: ["(A) Spermiation", "(B) Sperm capacitation", "(C) Spermeiogenesis", "(D) Spermatogenesis"],
        answer: "(B) Sperm capacitation"
    },
    {
        question: "4. Which of the following is a type of blood cancer?",
        options: ["(A) Lymphomas", "(B) Leukemia", "(C) Sarcomas", "(D) None of these"],
        answer: "(B) Leukemia"
    },
    {
        question: "5. 'The pyramid of energy is always upright' states that:",
        options: ["(A) The energy conversion efficiency of herbivores is better than carnivores", "(B) The energy conversion efficiency of carnivores is better than herbivores", "(C) Producers have the lowest energy conversion efficiency", "(D) Energy conversion efficiency is the same in all trophic levels"],
        answer: "(A) The energy conversion efficiency of herbivores is better than carnivores"
    },
    {
        question: "6. Identify the vessel below that is NOT a part of the circulatory system:",
        options: ["(A) Artery", "(B) Bronchiole", "(C) Capillary", "(D) Vein"],
        answer: "(B) Bronchiole"
    },
    {
        question: "7. Which of the following act as permeability barriers?",
        options: ["(A) Tight junctions", "(B) Microvilli", "(C) Basement membrane", "(D) Gap junctions"],
        answer: "(A) Tight junctions"
    },
    {
        question: "8. In molluscs, spermatophores are stored in a special structure called:",
        options: ["(A) Spermatheca", "(B) Needham's sac", "(C) Nematophores", "(D) Somatophores"],
        answer: "(B) Needham's sac"
    },
    {
        question: "9. Name the organs which have different basic structure but have similar appearance and perform similar functions?",
        options: ["(A) Analogous organs", "(B) Homologous organs", "(C) Both (A) and (B)", "(D) Neither (A) nor (B)"],
        answer: "(A) Analogous organs"
    },
    {
        question: "10. In birds, the thermoregulatory center is:",
        options: ["(A) Hypothalamus", "(B) Spinal cord", "(C) Pituitary gland", "(D) Adrenal gland"],
        answer: "(A) Hypothalamus"
    },
    {
        question: "11. Which among the following is based on antigen-antibody interaction?",
        options: ["(A) PCR", "(B) Electrophoresis", "(C) ELISA", "(D) All of these"],
        answer: "(C) ELISA"
    },
    {
        question: "12. Which of the following is the mechanism of active transport?",
        options: ["(A) Osmosis", "(B) Ion channels", "(C) Sodium pump", "(D) None of these"],
        answer: "(C) Sodium pump"
    },
    {
        question: "13. The depletion in the Ozone layer is caused by:",
        options: ["(A) Nitrous oxide", "(B) Carbon dioxide", "(C) Chlorofluorocarbons", "(D) Methane"],
        answer: "(C) Chlorofluorocarbons"
    },
    {
        question: "14. The natural place of an organism or community is known as:",
        options: ["(A) Niche", "(B) Biome", "(C) Habitat", "(D) Habit"],
        answer: "(C) Habitat"
    },
    {
        question: "15. A multi-segmented arthropod with mandibles and two pairs of legs per segment, name the animal:",
        options: ["(A) Millipede", "(B) Centipede", "(C) Marine shrimp", "(D) Spider"],
        answer: "(A) Millipede"
    },
    {
        question: "16. Part of ear concerned with hearing is:",
        options: ["(A) Reissner's membrane and tectorial membrane", "(B) Ampilla", "(C) Reissner's membrane and basilar membrane", "(D) Basilar membrane and tectorial membrane"],
        answer: "(D) Basilar membrane and tectorial membrane"
    },
    {
        question: "17. Carcinoma arises from the:",
        options: ["(A) Epithelial cells", "(B) Bone Marrow", "(C) Pigment containing Cells", "(D) None of the above"],
        answer: "(A) Epithelial cells"
    },
    {
        question: "18. Which of the following is the oldest cell line?",
        options: ["(A) Hela cell line", "(B) Vero cell line", "(C) CHO cell line", "(D) BHK cell line"],
        answer: "(A) Hela cell line"
    },
    {
        question: "19. Which one of the following correctly matches with its function?",
        options: ["(A) Ribosomes: power house of the cell", "(B) Nucleus: control center of the cell", "(C) Lysosomes: cytoskeletal structure of the cell", "(D) Mitochondria: protein factories of the cell"],
        answer: "(B) Nucleus: control center of the cell"
    },
    {
        question: "20. Archaeopteryx is a connecting link between:",
        options: ["(A) Reptiles and birds", "(B) Fish and amphibian", "(C) Birds and mammals", "(D) Amphibians and birds"],
        answer: "(A) Reptiles and birds"
    },
    {
        question: "21. The smallest bones of human body are present in:",
        options: ["(A) Eyes", "(B) Ears", "(C) Nose", "(D) Mouth"],
        answer: "(B) Ears"
    },
    {
        question: "22. Which of the following acts as a main reservoir of Balantidium coli infection in human beings?",
        options: ["(A) Man", "(B) Monkey", "(C) Cow", "(D) Pig"],
        answer: "(D) Pig"
    },
    {
        question: "23. The cross linkage of antigens by antibodies is known as:",
        options: ["(A) Agglutination", "(B) Complement fixation", "(C) A cross reaction", "(D) None of these"],
        answer: "(A) Agglutination"
    },
    {
        question: "24. Bt cotton is not:",
        options: ["(A) A GM plant", "(B) Insect resistant", "(C) A bacterial gene expression system", "(D) Resistant to all pesticides"],
        answer: "(D) Resistant to all pesticides"
    },
    {
        question: "25. In mammals which of the following embryonic membrane protects the developing baby from external shocks?",
        options: ["(A) Yolk sac", "(B) Amnion", "(C) Chorion", "(D) Allantois"],
        answer: "(B) Amnion"
    },
    {
        question: "26. What is the correct order for the classification of animals?",
        options: ["(A) Phylum, Family, Class, Order, Genus, Species", "(B) Class, Phylum, Order, Family, Genus, Species", "(C) Class, Phylum, Family, Genus, Order, Species", "(D) Phylum, Class, Order, Family, Genus, Species"],
        answer: "(D) Phylum, Class, Order, Family, Genus, Species"
    },
    {
        question: "27. Wildlife Protection Act was enacted in:",
        options: ["(A) 1952", "(B) 1963", "(C) 1972", "(D) 1988"],
        answer: "(C) 1972"
    },
    {
        question: "28. Which of the following is a non-organ-specific (systemic) autoimmune disease?",
        options: ["(A) Myasthenia gravis", "(B) Systemic lupus erythematosus (SLE)", "(C) Hashimoto's thyroiditis", "(D) Pernicious anemia"],
        answer: "(B) Systemic lupus erythematosus (SLE)"
    },
    {
        question: "29. Which of the following are synthesized during interphase?",
        options: ["(A) DNA", "(B) RNA", "(C) Proteins", "(D) All the above"],
        answer: "(D) All the above"
    },
    {
        question: "30. Eccrine glands produce:",
        options: ["(A) Sweat", "(B) Milk", "(C) Lipids", "(D) Scents"],
        answer: "(A) Sweat"
    },
    {
        question: "31. In monoclonal antibody technology, tumor cells that can replicate endlessly are fused with mammalian cells that produce an antibody. The result of this cell fusion is a:",
        options: ["(A) Hybridoma", "(B) Myeloma", "(C) Carcinoma", "(D) Lymphoma"],
        answer: "(A) Hybridoma"
    },
    {
        question: "32. Serial repetition of body organs in segments is called:",
        options: ["(A) Metagenesis", "(B) Metamorphosis", "(C) Metamerism", "(D) Metastasis"],
        answer: "(C) Metamerism"
    },
    {
        question: "33. Swamps differ from marshes in having:",
        options: ["(A) Grasses", "(B) Floating leaves plants", "(C) Trees and shrubs", "(D) Both (A) and (B)"],
        answer: "(C) Trees and shrubs"
    },
    {
        question: "34. The tendency of an offspring to resemble its parent is known as:",
        options: ["(A) Variation", "(B) Heredity", "(C) Resemblance", "(D) Inheritance"],
        answer: "(B) Heredity"
    },
    {
        question: "35. Bubonic plague is transmitted by which of the following insects?",
        options: ["(A) Housefly", "(B) Fleas", "(C) Sandfly", "(D) Mosquito"],
        answer: "(B) Fleas"
    },
    {
        question: "36. Characterization of antigens by electrophoresis and immunofixation relies on the reaction antigen and antibody in (or on):",
        options: ["(A) Agar", "(B) Streptavidin", "(C) Plastic microtiter plates", "(D) Latex particles"],
        answer: "(A) Agar"
    },
    {
        question: "37. Which of the following type of cleavage is present in placental mammals?",
        options: ["(A) Spiral", "(B) Rotational", "(C) Radial", "(D) Bilateral"],
        answer: "(B) Rotational"
    },
    {
        question: "38. Diabetes insipidus is caused by the hyposecretion of:",
        options: ["(A) Insulin", "(B) Vasopressin", "(C) Oxytocin", "(D) Thyrosin"],
        answer: "(B) Vasopressin"
    },
    {
        question: "39. The World Health Day is celebrated on:",
        options: ["(A) 1st March", "(B) 7th April", "(C) 6th October", "(D) 10th December"],
        answer: "(B) 7th April"
    },
    {
        question: "40. If C means cleavage, G means gametogenesis, B means blastula and F means fertilization, which is the correct order of their occurrence?",
        options: ["(A) C, G, F, B", "(B) G, F, C, B", "(C) F, G, B, C", "(D) B, F, M, C"],
        answer: "(B) G, F, C, B"
    },
    {
        question: "41. Common feature between Porifera, Cnidaria, Ctenophora and Platyhelminthes is:",
        options: ["(A) Bilateral symmetry", "(B) Eumetazoans", "(C) Absence of coelom", "(D) Tissues"],
        answer: "(C) Absence of coelom"
    },
    {
        question: "42. Species which occur in small populations and are restricted to only certain geographical areas are placed under the category of:",
        options: ["(A) Endangered species", "(B) Vulnerable species", "(C) Rare species", "(D) All of these"],
        answer: "(C) Rare species"
    },
    {
        question: "43. During origin of life, which among the following was not found in free form?",
        options: ["(A) Methane", "(B) Ammonia", "(C) Oxygen", "(D) Hydrogen"],
        answer: "(C) Oxygen"
    },
    {
        question: "44. The protozoon transmitted mainly by sexual contact is:",
        options: ["(A) Trichomonas hominis", "(B) Dientamoeba fragilis", "(C) Trichomonas vaginalis", "(D) Retortamonas hominis"],
        answer: "(C) Trichomonas vaginalis"
    },
    {
        question: "45. Which one of the following is a Monosaccharide?",
        options: ["(A) Maltose", "(B) Sucrose", "(C) Fructose", "(D) Starch"],
        answer: "(C) Fructose"
    },
    {
        question: "46. Which of the following is involved in oxygen consumption in the cell?",
        options: ["(A) Cell Membrane", "(B) Endoplasmic reticulum", "(C) Mitochondria", "(D) Lysosomes"],
        answer: "(C) Mitochondria"
    },
    {
        question: "47. The approximate cardiac output of a healthy person at resting state is:",
        options: ["(A) 8 Lt/min", "(B) 5 Lt/min", "(C) 2 Lt/min", "(D) 10 Lt/min"],
        answer: "(B) 5 Lt/min"
    },
    {
        question: "48. The most active site of protein synthesis is:",
        options: ["(A) Nucleus", "(B) Ribosome", "(C) Mitochondrion", "(D) Cell sap"],
        answer: "(B) Ribosome"
    },
    {
        question: "49. Red Data Book is famous for:",
        options: ["(A) Endangered plants and animals", "(B) Extinct plants", "(C) Endangered plants", "(D) Endangered animals"],
        answer: "(A) Endangered plants and animals"
    },
    {
        question: "50. Crossing over takes place during which of the following stages of prophase I of meiosis?",
        options: ["(A) Leptotene", "(B) Diakinesis", "(C) Pachytene", "(D) Zygotene"],
        answer: "(C) Pachytene"
    },
    {
        question: "51. Which group of animals is known to show maximum diversity?",
        options: ["(A) Mammals", "(B) Reptiles", "(C) Birds", "(D) Insects"],
        answer: "(D) Insects"
    },
    {
        question: "52. Blastulation is followed by:",
        options: ["(A) Morulation", "(B) Organogenesis", "(C) Cleavage", "(D) Gastrulation"],
        answer: "(D) Gastrulation"
    },
    {
        question: "53. In animals, Grass tetany is caused due to deficiency of:",
        options: ["(A) Silicon", "(B) Sodium", "(C) Magnesium", "(D) Selenium"],
        answer: "(C) Magnesium"
    },
    {
        question: "54. Which macromolecule is called body builder?",
        options: ["(A) DNA", "(B) Carbohydrates", "(C) Fats", "(D) Proteins"],
        answer: "(D) Proteins"
    },
    {
        question: "55. B cells are stimulated to produce antibodies by which of the following T cells?",
        options: ["(A) Killer T cells", "(B) Suppressor T cells", "(C) Helper T cells", "(D) Memory T cells"],
        answer: "(C) Helper T cells"
    },
    {
        question: "56. Source of energy in muscle contraction is:",
        options: ["(A) ATP", "(B) ADP", "(C) GTP", "(D) Creatine phosphate"],
        answer: "(A) ATP"
    },
    {
        question: "57. Amphibians share with reptiles all of the following characters except:",
        options: ["(A) External fertilization and indirect development", "(B) Dioecious, oviparous", "(C) Ventral heart", "(D) Cold blooded or poikilotherms"],
        answer: "(A) External fertilization and indirect development"
    },
    {
        question: "58. If in a person RBCs have antigen B and Rh antigen, blood group of that person will be:",
        options: ["(A) AB +ve", "(B) B+ve", "(C) B-ve", "(D) AB-ve"],
        answer: "(B) B+ve"
    },
    {
        question: "59. Which of the following is produced with the combination of apoenzyme and coenzyme?",
        options: ["(A) Holoenzyme", "(B) Enzyme substrate complex", "(C) Prosthetic group", "(D) Enzyme product complex"],
        answer: "(A) Holoenzyme"
    },
    {
        question: "60. Flip-flop movement is seen in which of the following membranous molecules?",
        options: ["(A) Proteins", "(B) Lipids", "(C) Cholesterol", "(D) Carbohydrates"],
        answer: "(B) Lipids"
    },
    {
        question: "61. Which is the adaptive radiation used by poikilotherms to protect against extreme heat?",
        options: ["(A) Migration", "(B) Cooling", "(C) Aestivation", "(D) Hibernation"],
        answer: "(C) Aestivation"
    },
    {
        question: "62. 50% dry weight of an organism is constituted by:",
        options: ["(A) Nucleic acids", "(B) Proteins", "(C) Lipids", "(D) Polysaccharides"],
        answer: "(B) Proteins"
    },
    {
        question: "63. Which term represents a pair of contrasting characters?",
        options: ["(A) Heterozygous", "(B) Homozygous", "(C) Codominant genes", "(D) Allelomorphs"],
        answer: "(D) Allelomorphs"
    },
    {
        question: "64. In human beings total number of chromosomes in a cell are:",
        options: ["(A) 42", "(B) 44", "(C) 40", "(D) 46"],
        answer: "(D) 46"
    },
    {
        question: "65. Nervous system develops from:",
        options: ["(A) Blastocoel", "(B) Mesoderm", "(C) Endoderm", "(D) Ectoderm"],
        answer: "(D) Ectoderm"
    },
    {
        question: "66. Pepsin enzyme is active maximally at a pH range of:",
        options: ["(A) 4.0-5.0", "(B) 6.0-7.0", "(C) 3.0-4.0", "(D) 0-3.0"],
        answer: "(D) 0-3.0"
    },
    {
        question: "67. G2 phase is followed by which phase of cell cycle?",
        options: ["(A) Go phase", "(B) S phase", "(C) G₁ phase", "(D) M phase"],
        answer: "(D) M phase"
    },
    {
        question: "68. Enzymes are made up of:",
        options: ["(A) Fats", "(B) Proteins", "(C) Nucleic acids", "(D) Vitamins"],
        answer: "(B) Proteins"
    },
    {
        question: "69. The process by which new species develop from the existing species is called:",
        options: ["(A) Homologous", "(B) Analogous", "(C) Speciation", "(D) Genetic variation"],
        answer: "(C) Speciation"
    },
    {
        question: "70. Which of the following type of antibody has pentameric structure?",
        options: ["(A) IgE", "(B) IgA", "(C) IgD", "(D) IgM"],
        answer: "(D) IgM"
    },
    {
        question: "71. FSH is secreted by:",
        options: ["(A) Corpus luteum", "(B) Placenta", "(C) Hypothalamus", "(D) Pituitary"],
        answer: "(D) Pituitary"
    },
    {
        question: "72. Which of the following is not a component of the nucleic acid backbone?",
        options: ["(A) Nucleotide", "(B) Phosphate group", "(C) Pentose sugar", "(D) Phosphodiesterase bond"],
        answer: "(A) Nucleotide"
    },
    {
        question: "73. Which one is a hotspot of biodiversity?",
        options: ["(A) Aravalli Hills", "(B) Western Ghats", "(C) Indo-gangetic plain", "(D) Eastern Ghats"],
        answer: "(B) Western Ghats"
    },
    {
        question: "74. Which statement is true for the populations included in Hardy-Weinberg equilibrium?",
        options: ["(A) Entities migrate constantly", "(B) Populations should be limited and small", "(C) Mating is random", "(D) Process of natural selection is occurring"],
        answer: "(C) Mating is random"
    },
    {
        question: "75. Differentiation involves:",
        options: ["(A) Loss of genetic information", "(B) Modification of genetic information", "(C) Suppression of genetic information", "(D) Deletion of genetic information"],
        answer: "(C) Suppression of genetic information"
    },
    {
        question: "76. The phenomenon of using a predator to control pests is:",
        options: ["(A) Artificial control", "(B) Biological control", "(C) Confusion technique", "(D) Genetic engineering"],
        answer: "(B) Biological control"
    },
    {
        question: "77. Lac Operon will be turned on when:",
        options: ["(A) Lactose is less than glucose", "(B) Lactose is less in the medium", "(C) Lactose is more than glucose", "(D) Glucose is enough in the medium"],
        answer: "(C) Lactose is more than glucose"
    },
    {
        question: "78. The process of rapid movement of neutrophils towards the site of infection is called:",
        options: ["(A) Phagocytosis", "(B) Chemotaxis", "(C) Degranulation", "(D) Inflammation"],
        answer: "(B) Chemotaxis"
    },
    {
        question: "79. Which bone protects the brain?",
        options: ["(A) The cranium", "(B) The cerebrum", "(C) The cerebellum", "(D) None of the above"],
        answer: "(A) The cranium"
    },
    {
        question: "80. Excision and insertion of a gene is called:",
        options: ["(A) Biotechnology", "(B) Genetic engineering", "(C) Cytogenetics", "(D) Gene therapy"],
        answer: "(B) Genetic engineering"
    },
    {
        question: "81. Honey is",
        options: ["(A) Nectar of a flower", "(B) Nectar stored in the honey sac", "(C) Nectar mixed with saliva and stored in the honey sac", "(D) Nectar and water sucked by honey bee"],
        answer: "(C) Nectar mixed with saliva and stored in the honey sac"
    },
    {
        question: "82. Which of the following statement is correct?",
        options: ["(A) A + G = T + C", "(B) A = T", "(C) G = C", "(D) All of these"],
        answer: "(D) All of these"
    },
    {
        question: "83. The end product of glycolysis under anaerobic conditions is",
        options: ["(A) Lactic acid", "(B) Pyruvic acid", "(C) Acetoacetic acid", "(D) Oxaloacetic acid"],
        answer: "(A) Lactic acid"
    },
    {
        question: "84. In most species, mitochondrial DNA is passed down from",
        options: ["(A) DNA", "(B) Mother and Father", "(C) Father", "(D) Mother"],
        answer: "(D) Mother"
    },
    {
        question: "85. Ichthyology is the study of",
        options: ["(A) Mammals", "(B) Viruses", "(C) Fishes", "(D) Amphibians"],
        answer: "(C) Fishes"
    },
    {
        question: "86. The organelle which forms the endoskeleton of the cell is",
        options: ["(A) Mitochondria", "(B) Nucleus", "(C) Endoplasmic reticulum", "(D) Lysosomes"],
        answer: "(C) Endoplasmic reticulum"
    },
    {
        question: "87. Vitellogenesis is formation of",
        options: ["(A) Middle piece", "(B) Acrosome", "(C) Mitotic spindle", "(D) Yolk"],
        answer: "(D) Yolk"
    },
    {
        question: "88. Neurotransmitter between a neuron and muscle is",
        options: ["(A) Dopamine", "(B) Acetylcholine", "(C) Serotonin", "(D) Endorphin"],
        answer: "(B) Acetylcholine"
    },
    {
        question: "89. ______ is used as a vector for cloning into higher organisms.",
        options: ["(A) Retrovirus", "(B) Baculovirus", "(C) Salmonella typhimurium", "(D) Rhizopus nigricans"],
        answer: "(A) Retrovirus"
    },
    {
        question: "90. Rh incompatibility during pregnancy results in",
        options: ["(A) Haemophilia", "(B) Erythroblastosis foetalis", "(C) Sickle cell anemia", "(D) Mongolism"],
        answer: "(B) Erythroblastosis foetalis"
    },
    {
        question: "91. African sleeping sickness is caused by",
        options: ["(A) Giardia intestinalis", "(B) Leishmania donovani", "(C) Trypanosoma gambiense", "(D) Entamoeba histolytica"],
        answer: "(C) Trypanosoma gambiense"
    },
    {
        question: "92. Colour blindness is an ______ linked recessive trait",
        options: ["(A) Z chromosome", "(B) Y chromosome", "(C) X chromosome", "(D) None of the above"],
        answer: "(C) X chromosome"
    },
    {
        question: "93. Which of the following is an Indian breed of poultry?",
        options: ["(A) Busra", "(B) White Leghorn", "(C) Australorp", "(D) Plymouth Rock"],
        answer: "(A) Busra"
    },
    {
        question: "94. Which one is not a hereditary disease?",
        options: ["(A) Cystic fibrosis", "(B) Cretinism", "(C) Thalassaemia", "(D) Haemophilia"],
        answer: "(B) Cretinism"
    },
    {
        question: "95. Counter-current mechanism converts the glomerular filtrate into",
        options: ["(A) Hypotonic urine", "(B) Hypertonic urine", "(C) Isotonic urine", "(D) None of these"],
        answer: "(B) Hypertonic urine"
    },
    {
        question: "96. In which typical stage are Lampbrush chromosomes observed?",
        options: ["(A) Meiotic prophase", "(B) Mitotic metaphase", "(C) Mitotic prophase", "(D) Mitotic anaphase"],
        answer: "(A) Meiotic prophase"
    },
    {
        question: "97. Beta diversity is diversity",
        options: ["(A) In a community", "(B) Between communities", "(C) In mountain gradient", "(D) On a plain"],
        answer: "(B) Between communities"
    },
    {
        question: "98. α helix, β pleated sheets and collagen helix represent which of the following structural organizations of proteins?",
        options: ["(A) Primary", "(B) Secondary", "(C) Tertiary", "(D) Quaternary"],
        answer: "(B) Secondary"
    },
    {
        question: "99. Nucleosome is made up of",
        options: ["(A) DNA, histone core protein", "(B) DNA, histone core protein, linker H1", "(C) RNA, histone core protein", "(D) RNA, histone core protein, linker H1"],
        answer: "(B) DNA, histone core protein, linker H1"
    },
    {
        question: "100. Zygote is a",
        options: ["(A) Determined cell", "(B) Pluripotent cell", "(C) Totipotent cell", "(D) Impotent cell"],
        answer: "(C) Totipotent cell"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (!currentQuestion) {
        // Quiz finished
        displayResult();
        return;
    }

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
    optionsContainer.innerHTML = ''; // Clear previous options

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion(); // Move to the next question
}

// Function to display the final result
function displayResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Quiz Finished!</h2>
                               <p>You scored ${score} out of ${quizQuestions.length}.</p>
                               <button onclick="restartQuiz()">Restart Quiz</button>`;
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').innerHTML = `
        <div id="question-container"></div>
        <div id="options-container"></div>
    `;
    displayQuestion();
}

// Initial call to display the first question when the page loads
document.addEventListener('DOMContentLoaded', displayQuestion);
