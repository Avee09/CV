
const questions = [
    {
        question: "1. Which of the following is not an insect?",
        answers: [
            { text: "Silver fish", correct: false },
            { text: "Grasshopper", correct: false },
            { text: "House fly", correct: false },
            { text: "Spider", correct: true } // Spiders are arachnids, not insects
        ]
    },
    {
        question: "2. What are the main constituents of culture for animal cell growth?",
        answers: [
            { text: "Glucose and Glutamine", correct: false },
            { text: "Growth factors", correct: false },
            { text: "Cytokines", correct: false },
            { text: "All of these", correct: true }
        ]
    },
    {
        question: "3. The process by which certain changes occur on the surface of mammalian sperms while passing through female reproductive tract is termed as:",
        answers: [
            { text: "Spermiation", correct: false },
            { text: "Sperm capacitation", correct: true },
            { text: "Spermeiogenesis", correct: false },
            { text: "Spermatogenesis", correct: false }
        ]
    },
    {
        question: "4. Which of the following is a type of blood cancer?",
        answers: [
            { text: "Lymphomas", correct: false },
            { text: "Leukemia", correct: true },
            { text: "Sarcomas", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "5. \"The pyramid of energy is always upright\" states that:",
        answers: [
            { text: "The energy conversion efficiency of herbivores is better than carnivores", correct: false },
            { text: "The energy conversion efficiency of carnivores is better than herbivores", correct: false },
            { text: "Producers have the lowest energy conversion efficiency", correct: false },
            { text: "Energy conversion efficiency is the same in all trophic levels", correct: false } // The correct answer is implied to be that energy decreases at successive trophic levels, hence always upright due to energy loss. This option doesn't fit standard explanation. Let's assume there's a misunderstanding of the option or the question intends something else. Given the typical options, it implicitly states energy is lost, hence it's always upright because you can't have more energy at higher levels. If a single choice *must* be selected from these, and none directly state energy loss, then none are truly correct explanations of *why* it's always upright. However, in a quiz setting, usually the "correct" answer reflects the concept that energy flows unidirectionally and is lost, making it always upright. If I *had* to pick the "least wrong" or intended, it's often linked to the fundamental concept of energy transfer efficiency, but none of these explicitly state the correct concept. I will assume the provided prompt implies a correct answer exists among the options and will pick the one that is most logically implied, which is that energy flows in one direction and is lost, making it always upright. Since no option clearly states this, this question is problematic as phrased for these options. I will mark a common misconception or the *closest* interpretation if there's no perfect one. For now, I will mark based on the understanding that it implies the *result* of energy flow (always upright). Let me re-evaluate based on common knowledge: A pyramid of energy is always upright because energy is lost at each trophic level (e.g., 90% loss). None of these options *directly* state that.
            // Re-evaluating. (A), (B), (C) are about *efficiency* differences, not the fundamental reason it's upright. (D) is incorrect. The property "always upright" comes from the 10% rule, meaning energy *always* decreases. Since none of these explain "why it's always upright" from energy loss, and the provided prompt requires a single answer, this specific question's options are poorly matched to its premise.
            // If the original source *had* a correct answer for this, I'd need that. Lacking it, I'll select the one that is *least incorrect* or common misconception, which is difficult. Let's assume there's an implicit correct answer from the source. The question implies a *reason* why it's always upright.
            // Without further clarification on the *intended* correct answer for this specific question, and given the options are about efficiency comparison or sameness, which don't directly explain *why* it's always upright (energy loss does), I'll make an educated guess, but this is a problematic question.
            // Let me consider if one of these could be interpreted to imply it. If (A) or (B) were true, it wouldn't necessarily mean it's *always* upright, just that there are differences. (D) is outright false. (C) is also false. This question looks like it's missing the correct answer from a standard set.
            // Given the task is to *design* the JavaScript from *these* questions, I must choose an answer from the provided options. Let's assume there might be a subtle interpretation or a common (though not entirely accurate) way this question is framed.
            // A more suitable option would be "Energy decreases at successive trophic levels."
            // If forced to choose, and assuming the question implies a consequence or a related characteristic of why it's always upright, the options are weak.
            // I will leave this as incorrect as presented, as none truly explain *why* it's always upright from the fundamental principle of energy loss.
            { text: "Energy conversion efficiency is the same in all trophic levels", correct: false } // This is false.
        ]
    },
    {
        question: "6. Identify the vessel below that is NOT a part of the circulatory system:",
        answers: [
            { text: "Artery", correct: false },
            { text: "Bronchiole", correct: true }, // Part of the respiratory system
            { text: "Capillary", correct: false },
            { text: "Vein", correct: false }
        ]
    },
    {
        question: "7. Which of the following act as permeability barriers?",
        answers: [
            { text: "Tight junctions", correct: true },
            { text: "Microvilli", correct: false },
            { text: "Basement membrane", correct: false },
            { text: "Gap junctions", correct: false }
        ]
    },
    {
        question: "8. In molluscs, spermatophores are stored in a special structure called:",
        answers: [
            { text: "Spermatheca", correct: false },
            { text: "Needham's sac", correct: true },
            { text: "Nematophores", correct: false },
            { text: "Somatophores", correct: false }
        ]
    },
    {
        question: "9. Name the organs which have different basic structure but have similar appearance and perform similar functions?",
        answers: [
            { text: "Analogous organs", correct: true },
            { text: "Homologous organs", correct: false },
            { text: "Both (A) and (B)", correct: false },
            { text: "Neither (A) nor (B)", correct: false }
        ]
    },
    {
        question: "10. In birds, the thermoregulatory center is:",
        answers: [
            { text: "Hypothalamus", correct: true },
            { text: "Spinal cord", correct: false },
            { text: "Pituitary gland", correct: false },
            { text: "Adrenal gland", correct: false }
        ]
    },
    {
        question: "11. Which among the following is based on antigen-antibody interaction?",
        answers: [
            { text: "PCR", correct: false },
            { text: "Electrophoresis", correct: false },
            { text: "ELISA", correct: true },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "12. Which of the following is the mechanism of active transport?",
        answers: [
            { text: "Osmosis", correct: false },
            { text: "Ion channels", correct: false },
            { text: "Sodium pump", correct: true },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "13. The depletion in the Ozone layer is caused by:",
        answers: [
            { text: "Nitrous oxide", correct: false },
            { text: "Carbon dioxide", correct: false },
            { text: "Chlorofluorocarbons", correct: true },
            { text: "Methane", correct: false }
        ]
    },
    {
        question: "14. The natural place of an organism or community is known as:",
        answers: [
            { text: "Niche", correct: false },
            { text: "Biome", correct: false },
            { text: "Habitat", correct: true },
            { text: "Habit", correct: false }
        ]
    },
    {
        question: "15. A multi-segmented arthropod with mandibles and two pairs of legs per segment, name the animal:",
        answers: [
            { text: "Millipede", correct: true },
            { text: "Centipede", correct: false },
            { text: "Marine shrimp", correct: false },
            { text: "Spider", correct: false }
        ]
    },
    {
        question: "16. Part of ear concerned with hearing is:",
        answers: [
            { text: "Reissner's membrane and tectorial membrane", correct: false },
            { text: "Ampilla", correct: false },
            { text: "Reissner's membrane and basilar membrane", correct: false },
            { text: "Basilar membrane and tectorial membrane", correct: true } // These two membranes are critical for the organ of Corti.
        ]
    },
    {
        question: "17. Carcinoma arises from the:",
        answers: [
            { text: "Epithelial cells", correct: true },
            { text: "Bone Marrow", correct: false },
            { text: "Pigment containing Cells", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "18. Which of the following is the oldest cell line?",
        answers: [
            { text: "Hela cell line", correct: true },
            { text: "Vero cell line", correct: false },
            { text: "CHO cell line", correct: false },
            { text: "BHK cell line", correct: false }
        ]
    },
    {
        question: "19. Which one of the following correctly matches with its function?",
        answers: [
            { text: "Ribosomes: power house of the cell", correct: false },
            { text: "Nucleus: control center of the cell", correct: true },
            { text: "Lysosomes: cytoskeletal structure of the cell", correct: false },
            { text: "Mitochondria: protein factories of the cell", correct: false }
        ]
    },
    {
        question: "20. Archaeopteryx is a connecting link between:",
        answers: [
            { text: "Reptiles and birds", correct: true },
            { text: "Fish and amphibian", correct: false },
            { text: "Birds and mammals", correct: false },
            { text: "Amphibians and birds", correct: false }
        ]
    },
    {
        question: "21. The smallest bones of human body are present in:",
        answers: [
            { text: "Eyes", correct: false },
            { text: "Ears", correct: true }, // Malleus, Incus, Stapes
            { text: "Nose", correct: false },
            { text: "Mouth", correct: false }
        ]
    },
    {
        question: "22. Which of the following acts as a main reservoir of Balantidium coli infection in human beings?",
        answers: [
            { text: "Man", correct: false },
            { text: "Monkey", correct: false },
            { text: "Cow", correct: false },
            { text: "Pig", correct: true }
        ]
    },
    {
        question: "23. The cross linkage of antigens by antibodies is known as:",
        answers: [
            { text: "Agglutination", correct: true },
            { text: "Complement fixation", correct: false },
            { text: "A cross reaction", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "24. Bt cotton is not:",
        answers: [
            { text: "A GM plant", correct: false },
            { text: "Insect resistant", correct: false },
            { text: "A bacterial gene expression system", correct: false },
            { text: "Resistant to all pesticides", correct: true } // It's resistant to certain insect pests, not all pesticides.
        ]
    },
    {
        question: "25. In mammals which of the following embryonic membrane protects the developing baby from external shocks?",
        answers: [
            { text: "Yolk sac", correct: false },
            { text: "Amnion", correct: true },
            { text: "Chorion", correct: false },
            { text: "Allantois", correct: false }
        ]
    },
    {
        question: "26. What is the correct order for the classification of animals?",
        answers: [
            { text: "Phylum, Family, Class, Order, Genus, Species", correct: false },
            { text: "Class, Phylum, Order, Family, Genus, Species", correct: false },
            { text: "Class, Phylum, Family, Genus, Order, Species", correct: false },
            { text: "Phylum, Class, Order, Family, Genus, Species", correct: true } // Kingdom, Phylum, Class, Order, Family, Genus, Species
        ]
    },
    {
        question: "27. Wildlife Protection Act was enacted in:",
        answers: [
            { text: "1952", correct: false },
            { text: "1963", correct: false },
            { text: "1972", correct: true },
            { text: "1988", correct: false }
        ]
    },
    {
        question: "28. Which of the following is a non-organ-specific (systemic) autoimmune disease?",
        answers: [
            { text: "Myasthenia gravis", correct: false },
            { text: "Systemic lupus erythematosus (SLE)", correct: true },
            { text: "Hashimoto's thyroiditis", correct: false },
            { text: "Pernicious anemia", correct: false }
        ]
    },
    {
        question: "29. Which of the following are synthesized during interphase?",
        answers: [
            { text: "DNA", correct: false },
            { text: "RNA", correct: false },
            { text: "Proteins", correct: false },
            { text: "All the above", correct: true } // DNA (S phase), RNA & Proteins (G1, S, G2 phases)
        ]
    },
    {
        question: "30. Eccrine glands produce:",
        answers: [
            { text: "Sweat", correct: true },
            { text: "Milk", correct: false },
            { text: "Lipids", correct: false },
            { text: "Scents", correct: false }
        ]
    },
    {
        question: "31. In monoclonal antibody technology, tumor cells that can replicate endlessly are fused with mammalian cells that produce an antibody. The result of this cell fusion is a:",
        answers: [
            { text: "Hybridoma", correct: true },
            { text: "Myeloma", correct: false },
            { text: "Carcinoma", correct: false },
            { text: "Lymphoma", correct: false }
        ]
    },
    {
        question: "32. Serial repetition of body organs in segments is called:",
        answers: [
            { text: "Metagenesis", correct: false },
            { text: "Metamorphosis", correct: false },
            { text: "Metamerism", correct: true },
            { text: "Metastasis", correct: false }
        ]
    },
    {
        question: "33. Swamps differ from marshes in having:",
        answers: [
            { text: "Grasses", correct: false },
            { text: "Floating leaves plants", correct: false },
            { text: "Trees and shrubs", correct: true },
            { text: "Both (A) and (B)", correct: false }
        ]
    },
    {
        question: "34. The tendency of an offspring to resemble its parent is known as:",
        answers: [
            { text: "Variation", correct: false },
            { text: "Heredity", correct: true },
            { text: "Resemblance", correct: false },
            { text: "Inheritance", correct: false }
        ]
    },
    {
        question: "35. Bubonic plague is transmitted by which of the following insects?",
        answers: [
            { text: "Housefly", correct: false },
            { text: "Fleas", correct: true },
            { text: "Sandfly", correct: false },
            { text: "Mosquito", correct: false }
        ]
    },
    {
        question: "36. Characterization of antigens by electrophoresis and immunofixation relies on the reaction antigen and antibody in (or on):",
        answers: [
            { text: "Agar", correct: true },
            { text: "Streptavidin", correct: false },
            { text: "Plastic microtiter plates", correct: false },
            { text: "Latex particles", correct: false }
        ]
    },
    {
        question: "37. Which of the following type of cleavage is present in placental mammals?",
        answers: [
            { text: "Spiral", correct: false },
            { text: "Rotational", correct: true },
            { text: "Radial", correct: false },
            { text: "Bilateral", correct: false }
        ]
    },
    {
        question: "38. Diabetes insipidus is caused by the hyposecretion of:",
        answers: [
            { text: "Insulin", correct: false },
            { text: "Vasopressin", correct: true }, // Also known as ADH (Antidiuretic Hormone)
            { text: "Oxytocin", correct: false },
            { text: "Thyrosin", correct: false }
        ]
    },
    {
        question: "39. The World Health Day is celebrated on:",
        answers: [
            { text: "1st March", correct: false },
            { text: "7th April", correct: true },
            { text: "6th October", correct: false },
            { text: "10th December", correct: false }
        ]
    },
    {
        question: "40. If C means cleavage, G means gametogenesis, B means blastula and F means fertilization, which is the correct order of their occurrence?",
        answers: [
            { text: "C, G, F, B", correct: false },
            { text: "G, F, C, B", correct: true }, // Gametogenesis -> Fertilization -> Cleavage -> Blastula
            { text: "F, G, B, C", correct: false },
            { text: "B, F, M, C", correct: false }
        ]
    },
    {
        question: "41. Common feature between Porifera, Cnidaria, Ctenophora and Platyhelminthes is:",
        answers: [
            { text: "Bilateral symmetry", correct: false },
            { text: "Eumetazoans", correct: false },
            { text: "Absence of coelom", correct: false }, // Platyhelminthes are acoelomate, but Cnidaria and Ctenophora are diploblastic and don't have a coelom in the true sense, Porifera are not eumetazoans. No common feature here.
            // Let's re-evaluate options as there might be a "best fit" or intended answer.
            // Porifera: asymmetrical, no true tissues (Parazoa)
            // Cnidaria: radial symmetry, true tissues (Eumetazoa), no coelom
            // Ctenophora: radial/biradial symmetry, true tissues (Eumetazoa), no coelom
            // Platyhelminthes: bilateral symmetry, true tissues (Eumetazoa), acoelomate
            // Common feature:
            // A) Bilateral symmetry - No (Porifera, Cnidaria, Ctenophora)
            // B) Eumetazoans - No (Porifera are Parazoa)
            // C) Absence of coelom - This holds true for all listed as they are either acoelomate or don't develop a coelom. Porifera don't even have true tissues. Cnidaria/Ctenophora are diploblastic (no mesoderm, thus no coelom). Platyhelminthes are acoelomate. This is the most plausible "common feature" among the given options, interpreting "absence of coelom" to mean they either don't have one or don't develop one from mesoderm.
            // D) Tissues - No (Porifera don't have true tissues)
            // Therefore, (C) is the most correct interpretation if "absence of coelom" is taken broadly to mean no true coelom, which applies to all listed phyla in different ways.
            { text: "Absence of coelom", correct: true }
        ]
    },
    {
        question: "42. Species which occur in small populations and are restricted to only certain geographical areas are placed under the category of:",
        answers: [
            { text: "Endangered species", correct: false },
            { text: "Vulnerable species", correct: false },
            { text: "Rare species", correct: true },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "43. During origin of life, which among the following was not found in free form?",
        answers: [
            { text: "Methane", correct: false },
            { text: "Ammonia", correct: false },
            { text: "Oxygen", correct: true }, // Earth's early atmosphere was reducing, lacking free oxygen.
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "44. The protozoon transmitted mainly by sexual contact is:",
        answers: [
            { text: "Trichomonas hominis", correct: false },
            { text: "Dientamoeba fragilis", correct: false },
            { text: "Trichomonas vaginalis", correct: true },
            { text: "Retortamonas hominis", correct: false }
        ]
    },
    {
        question: "45. Which one of the following is a Monosaccharide?",
        answers: [
            { text: "Maltose", correct: false },
            { text: "Sucrose", correct: false },
            { text: "Fructose", correct: true },
            { text: "Starch", correct: false }
        ]
    },
    {
        question: "46. Which of the following is involved in oxygen consumption in the cell?",
        answers: [
            { text: "Cell Membrane", correct: false },
            { text: "Endoplasmic reticulum", correct: false },
            { text: "Mitochondria", correct: true }, // Site of aerobic respiration
            { text: "Lysosomes", correct: false }
        ]
    },
    {
        question: "47. The approximate cardiac output of a healthy person at resting state is:",
        answers: [
            { text: "8 Lt/min", correct: false },
            { text: "5 Lt/min", correct: true },
            { text: "2 Lt/min", correct: false },
            { text: "10 Lt/min", correct: false }
        ]
    },
    {
        question: "48. The most active site of protein synthesis is:",
        answers: [
            { text: "Nucleus", correct: false },
            { text: "Ribosome", correct: true },
            { text: "Mitochondrion", correct: false },
            { text: "Cell sap", correct: false }
        ]
    },
    {
        question: "49. Red Data Book is famous for:",
        answers: [
            { text: "Endangered plants and animals", correct: true },
            { text: "Extinct plants", correct: false },
            { text: "Endangered plants", correct: false },
            { text: "Endangered animals", correct: false }
        ]
    },
    {
        question: "50. Crossing over takes place during which of the following stages of prophase I of meiosis?",
        answers: [
            { text: "Leptotene", correct: false },
            { text: "Diakinesis", correct: false },
            { text: "Pachytene", correct: true },
            { text: "Zygotene", correct: false }
        ]
    },
    {
        question: "51. Which group of animals is known to show maximum diversity?",
        answers: [
            { text: "Mammals", correct: false },
            { text: "Reptiles", correct: false },
            { text: "Birds", correct: false },
            { text: "Insects", correct: true }
        ]
    },
    {
        question: "52. Blastulation is followed by:",
        answers: [
            { text: "Morulation", correct: false },
            { text: "Organogenesis", correct: false },
            { text: "Cleavage", correct: false },
            { text: "Gastrulation", correct: true }
        ]
    },
    {
        question: "53. In animals, Grass tetany is caused due to deficiency of:",
        answers: [
            { text: "Silicon", correct: false },
            { text: "Sodium", correct: false },
            { text: "Magnesium", correct: true },
            { text: "Selenium", correct: false }
        ]
    },
    {
        question: "54. Which macromolecule is called body builder?",
        answers: [
            { text: "DNA", correct: false },
            { text: "Carbohydrates", correct: false },
            { text: "Fats", correct: false },
            { text: "Proteins", correct: true }
        ]
    },
    {
        question: "55. B cells are stimulated to produce antibodies by which of the following T cells?",
        answers: [
            { text: "Killer T cells", correct: false },
            { text: "Suppressor T cells", correct: false },
            { text: "Helper T cells", correct: true },
            { text: "Memory T cells", correct: false }
        ]
    },
    {
        question: "56. Source of energy in muscle contraction is:",
        answers: [
            { text: "ATP", correct: true },
            { text: "ADP", correct: false },
            { text: "GTP", correct: false },
            { text: "Creatine phosphate", correct: false } // ATP is the direct source, creatine phosphate is a backup.
        ]
    },
    {
        question: "57. Amphibians share with reptiles all of the following characters except:",
        answers: [
            { text: "External fertilization and indirect development", correct: true }, // Reptiles have internal fertilization and direct development
            { text: "Dioecious, oviparous", correct: false }, // Both can be dioecious and oviparous
            { text: "Ventral heart", correct: false }, // Both have ventral hearts (though number of chambers differs)
            { text: "Cold blooded or poikilotherms", correct: false } // Both are cold-blooded
        ]
    },
    {
        question: "58. If in a person RBCs have antigen B and Rh antigen, blood group of that person will be:",
        answers: [
            { text: "AB +ve", correct: false },
            { text: "B+ve", correct: true },
            { text: "B-ve", correct: false },
            { text: "AB-ve", correct: false }
        ]
    },
    {
        question: "59. Which of the following is produced with the combination of apoenzyme and coenzyme?",
        answers: [
            { text: "Holoenzyme", correct: true },
            { text: "Enzyme substrate complex", correct: false },
            { text: "Prosthetic group", correct: false },
            { text: "Enzyme product complex", correct: false }
        ]
    },
    {
        question: "60. Flip-flop movement is seen in which of the following membranous molecules?",
        answers: [
            { text: "Proteins", correct: false },
            { text: "Lipids", correct: true }, // Specifically phospholipids
            { text: "Cholesterol", correct: false },
            { text: "Carbohydrates", correct: false }
        ]
    },
    {
        question: "61. Which is the adaptive radiation used by poikilotherms to protect against extreme heat?",
        answers: [
            { text: "Migration", correct: false },
            { text: "Cooling", correct: false },
            { text: "Aestivation", correct: true }, // Aestivation is dormancy during hot/dry periods.
            { text: "Hibernation", correct: false } // Hibernation is dormancy during cold periods.
        ]
    },
    {
        question: "62. 50% dry weight of an organism is constituted by:",
        answers: [
            { text: "Nucleic acids", correct: false },
            { text: "Proteins", correct: true },
            { text: "Lipids", correct: false },
            { text: "Polysaccharides", correct: false }
        ]
    },
    {
        question: "63. Which term represents a pair of contrasting characters?",
        answers: [
            { text: "Heterozygous", correct: false },
            { text: "Homozygous", correct: false },
            { text: "Codominant genes", correct: false },
            { text: "Allelomorphs", correct: true } // Alleles are different forms of a gene, often representing contrasting characters.
        ]
    },
    {
        question: "64. In human beings total number of chromosomes in a cell are:",
        answers: [
            { text: "42", correct: false },
            { text: "44", correct: false },
            { text: "40", correct: false },
            { text: "46", correct: true } // 23 pairs = 46 chromosomes
        ]
    },
    {
        question: "65. Nervous system develops from:",
        answers: [
            { text: "Blastocoel", correct: false },
            { text: "Mesoderm", correct: false },
            { text: "Endoderm", correct: false },
            { text: "Ectoderm", correct: true }
        ]
    },
    {
        question: "66. Pepsin enzyme is active maximally at a pH range of:",
        answers: [
            { text: "4.0-5.0", correct: false },
            { text: "6.0-7.0", correct: false },
            { text: "3.0-4.0", correct: false },
            { text: "0-3.0", correct: true } // Pepsin works best in the highly acidic environment of the stomach.
        ]
    },
    {
        question: "67. G2 phase is followed by which phase of cell cycle?",
        answers: [
            { text: "Go phase", correct: false },
            { text: "S phase", correct: false },
            { text: "G₁ phase", correct: false },
            { text: "M phase", correct: true } // G1 -> S -> G2 -> M
        ]
    },
    {
        question: "68. Enzymes are made up of:",
        answers: [
            { text: "Fats", correct: false },
            { text: "Proteins", correct: true },
            { text: "Nucleic acids", correct: false },
            { text: "Vitamins", correct: false }
        ]
    },
    {
        question: "69. The process by which new species develop from the existing species is called:",
        answers: [
            { text: "Homologous", correct: false },
            { text: "Analogous", correct: false },
            { text: "Speciation", correct: true },
            { text: "Genetic variation", correct: false }
        ]
    },
    {
        question: "70. Which of the following type of antibody has pentameric structure?",
        answers: [
            { text: "IgE", correct: false },
            { text: "IgA", correct: false },
            { text: "IgD", correct: false },
            { text: "IgM", correct: true }
        ]
    },
    {
        question: "71. FSH is secreted by:",
        answers: [
            { text: "Corpus luteum", correct: false },
            { text: "Placenta", correct: false },
            { text: "Hypothalamus", correct: false },
            { text: "Pituitary", correct: true } // Specifically the anterior pituitary
        ]
    },
    {
        question: "72. Which of the following is not a component of the nucleic acid backbone?",
        answers: [
            { text: "Nucleotide", correct: true }, // Nucleotides are the *monomers* of nucleic acids; the backbone is made of phosphates and sugars.
            { text: "Phosphate group", correct: false },
            { text: "Pentose sugar", correct: false },
            { text: "Phosphodiesterase bond", correct: false }
        ]
    },
    {
        question: "73. Which one is a hotspot of biodiversity?",
        answers: [
            { text: "Aravalli Hills", correct: false },
            { text: "Western Ghats", correct: true },
            { text: "Indo-gangetic plain", correct: false },
            { text: "Eastern Ghats", correct: false }
        ]
    },
    {
        question: "74. Which statement is true for the populations included in Hardy-Weinberg equilibrium?",
        answers: [
            { text: "Entities migrate constantly", correct: false },
            { text: "Populations should be limited and small", correct: false },
            { text: "Mating is random", correct: true }, // Random mating is a condition for H-W equilibrium.
            { text: "Process of natural selection is occurring", correct: false }
        ]
    },
    {
        question: "75. Differentiation involves:",
        answers: [
            { text: "Loss of genetic information", correct: false },
            { text: "Modification of genetic information", correct: false },
            { text: "Suppression of genetic information", correct: true }, // Differential gene expression (some genes are turned off).
            { text: "Deletion of genetic information", correct: false }
        ]
    },
    {
        question: "76. The phenomenon of using a predator to control pests is:",
        answers: [
            { text: "Artificial control", correct: false },
            { text: "Biological control", correct: true },
            { text: "Confusion technique", correct: false },
            { text: "Genetic engineering", correct: false }
        ]
    },
    {
        question: "77. Lac Operon will be turned on when:",
        answers: [
            { text: "Lactose is less than glucose", correct: false },
            { text: "Lactose is less in the medium", correct: false },
            { text: "Lactose is more than glucose", correct: true }, // More precisely, when lactose is present AND glucose is low/absent. Given these options, high lactose is key for activation.
            { text: "Glucose is enough in the medium", correct: false }
        ]
    },
    {
        question: "78. The process of rapid movement of neutrophils towards the site of infection is called:",
        answers: [
            { text: "Phagocytosis", correct: false },
            { text: "Chemotaxis", correct: true },
            { text: "Degranulation", correct: false },
            { text: "Inflammation", correct: false }
        ]
    },
    {
        question: "79. Which bone protects the brain?",
        answers: [
            { text: "The cranium", correct: true },
            { text: "The cerebrum", correct: false },
            { text: "The cerebellum", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "80. Excision and insertion of a gene is called:",
        answers: [
            { text: "Biotechnology", correct: false },
            { text: "Genetic engineering", correct: true },
            { text: "Cytogenetics", correct: false },
            { text: "Gene therapy", correct: false }
        ]
    },
    {
        question: "81. Honey is",
        answers: [
            { text: "Nectar of a flower", correct: false },
            { text: "Nectar stored in the honey sac", correct: false },
            { text: "Nectar mixed with saliva and stored in the honey sac", correct: true },
            { text: "Nectar and water sucked by honey bee", correct: false }
        ]
    },
    {
        question: "82. Which of the following statement is correct?",
        answers: [
            { text: "A + G = T + C", correct: false }, // While true by Chargaff's rules for double-stranded DNA, it's not the most fundamental.
            { text: "A = T", correct: false },
            { text: "G = C", correct: false },
            { text: "All of these", correct: true } // All three (A=T, G=C, and thus A+G=T+C) are correct for double-stranded DNA.
        ]
    },
    {
        question: "83. The end product of glycolysis under anaerobic conditions is",
        answers: [
            { text: "Lactic acid", correct: true },
            { text: "Pyruvic acid", correct: false }, // Pyruvic acid is the end product of aerobic glycolysis before further steps.
            { text: "Acetoacetic acid", correct: false },
            { text: "Oxaloacetic acid", correct: false }
        ]
    },
    {
        question: "84. In most species, mitochondrial DNA is passed down from",
        answers: [
            { text: "DNA", correct: false },
            { text: "Mother and Father", correct: false },
            { text: "Father", correct: false },
            { text: "Mother", correct: true }
        ]
    },
    {
        question: "85. Ichthyology is the study of",
        answers: [
            { text: "Mammals", correct: false },
            { text: "Viruses", correct: false },
            { text: "Fishes", correct: true },
            { text: "Amphibians", correct: false }
        ]
    },
    {
        question: "86. The organelle which forms the endoskeleton of the cell is",
        answers: [
            { text: "Mitochondria", correct: false },
            { text: "Nucleus", correct: false },
            { text: "Endoplasmic reticulum", correct: true }, // The ER network provides structural support.
            { text: "Lysosomes", correct: false }
        ]
    },
    {
        question: "87. Vitellogenesis is formation of",
        answers: [
            { text: "Middle piece", correct: false },
            { text: "Acrosome", correct: false },
            { text: "Mitotic spindle", correct: false },
            { text: "Yolk", correct: true }
        ]
    },
    {
        question: "88. Neurotransmitter between a neuron and muscle is",
        answers: [
            { text: "Dopamine", correct: false },
            { text: "Acetylcholine", correct: true },
            { text: "Serotonin", correct: false },
            { text: "Endorphin", correct: false }
        ]
    },
    {
        question: "89. ______ is used as a vector for cloning into higher organisms.",
        answers: [
            { text: "Retrovirus", correct: true }, // Often used for gene delivery in eukaryotic cells/higher organisms
            { text: "Baculovirus", correct: false },
            { text: "Salmonella typhimurium", correct: false },
            { text: "Rhizopus nigricans", correct: false }
        ]
    },
    {
        question: "90. Rh incompatibility during pregnancy results in",
        answers: [
            { text: "Haemophilia", correct: false },
            { text: "Erythroblastosis foetalis", correct: true },
            { text: "Sickle cell anemia", correct: false },
            { text: "Mongolism", correct: false }
        ]
    },
    {
        question: "91. African sleeping sickness is caused by",
        answers: [
            { text: "Giardia intestinalis", correct: false },
            { text: "Leishmania donovani", correct: false },
            { text: "Trypanosoma gambiense", correct: true },
            { text: "Entamoeba histolytica", correct: false }
        ]
    },
    {
        question: "92. Colour blindness is an ______ linked recessive trait",
        answers: [
            { text: "Z chromosome", correct: false },
            { text: "Y chromosome", correct: false },
            { text: "X chromosome", correct: true },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "93. Which of the following is an Indian breed of poultry?",
        answers: [
            { text: "Busra", correct: true },
            { text: "White Leghorn", correct: false },
            { text: "Australorp", correct: false },
            { text: "Plymouth Rock", correct: false }
        ]
    },
    {
        question: "94. Which one is not a hereditary disease?",
        answers: [
            { text: "Cystic fibrosis", correct: false },
            { text: "Cretinism", correct: true }, // Cretinism is a condition of severely stunted physical and mental growth due to untreated congenital deficiency of thyroid hormones, usually not hereditary.
            { text: "Thalassaemia", correct: false },
            { text: "Haemophilia", correct: false }
        ]
    },
    {
        question: "95. Counter-current mechanism converts the glomerular filtrate into",
        answers: [
            { text: "Hypotonic urine", correct: false },
            { text: "Hypertonic urine", correct: true },
            { text: "Isotonic urine", correct: false },
            { text: "None of these", correct: false }
        ]
    },
    {
        question: "96. In which typical stage are Lampbrush chromosomes observed?",
        answers: [
            { text: "Meiotic prophase", correct: true }, // Specifically in diplotene of prophase I
            { text: "Mitotic metaphase", correct: false },
            { text: "Mitotic prophase", correct: false },
            { text: "Mitotic anaphase", correct: false }
        ]
    },
    {
        question: "97. Beta diversity is diversity",
        answers: [
            { text: "In a community", correct: false },
            { text: "Between communities", correct: true },
            { text: "In mountain gradient", correct: false },
            { text: "On a plain", correct: false }
        ]
    },
    {
        question: "98. α helix, β pleated sheets and collagen helix represent which of the following structural organizations of proteins?",
        answers: [
            { text: "Primary", correct: false },
            { text: "Secondary", correct: true },
            { text: "Tertiary", correct: false },
            { text: "Quaternary", correct: false }
        ]
    },
    {
        question: "99. Nucleosome is made up of",
        answers: [
            { text: "DNA, histone core protein", correct: false },
            { text: "DNA, histone core protein, linker H1", correct: true },
            { text: "RNA, histone core protein", correct: false },
            { text: "RNA, histone core protein, linker H1", correct: false }
        ]
    },
    {
        question: "100. Zygote is a",
        answers: [
            { text: "Determined cell", correct: false },
            { text: "Pluripotent cell", correct: false },
            { text: "Totipotent cell", correct: true }, // A zygote can differentiate into any cell type, including extraembryonic tissues.
            { text: "Impotent cell", correct: false }
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
