
    const questions = [
      
    {
        question: "1. Which hormone is responsible for ovulation?",
        answers: [
            { text: "(A) FSH", correct: false },
            { text: "(B) LH", correct: true },
            { text: "(C) Testosterone", correct: false },
            { text: "(D) Oestrogen", correct: false }
        ]
    },
    {
        question: "2. Insulin is",
        answers: [
            { text: "(A) Vitamin", correct: false },
            { text: "(B) Proteinaceous hormone", correct: true },
            { text: "(C) Amine hormone", correct: false },
            { text: "(D) Steroid", correct: false }
        ]
    },
    {
        question: "3. Addison's disease results from",
        answers: [
            { text: "(A) Hyposecretion of adrenals", correct: true },
            { text: "(B) Hyposecretion of gonads", correct: false },
            { text: "(C) Hyposecretion of Leydig's cells", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "4. Which one is polygenic inheritance in humans?",
        answers: [
            { text: "(A) Sickle-cell anaemia", correct: false },
            { text: "(B) Skin colour", correct: true },
            { text: "(C) Colour blindness", correct: false },
            { text: "(D) Phenylketonuria", correct: false }
        ]
    },
    {
        question: "5. Lampbrush chromosomes are seen during",
        answers: [
            { text: "(A) Mitotic prophase", correct: false },
            { text: "(B) Meiotic prophase", correct: true },
            { text: "(C) Mitotic metaphase", correct: false },
            { text: "(D) Meiotic metaphase", correct: false }
        ]
    },
    {
        question: "6. Muller was awarded Nobel Prize in 1946 for his work on",
        answers: [
            { text: "(A) Protein synthesis", correct: false },
            { text: "(B) Chemistry of nucleic acids", correct: false },
            { text: "(C) Cancer", correct: false },
            { text: "(D) X-ray induced mutations", correct: true }
        ]
    },
    {
        question: "7. Distance between two linked genes in a chromosome is measured in cross over units, it is",
        answers: [
            { text: "(A) Ratio of crossing over between them", correct: false },
            { text: "(B) Cross over value", correct: true },
            { text: "(C) Number of other genes between them", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "8. Strength of linkage is inversely proportional to distance between the",
        answers: [
            { text: "(A) Chromomeres", correct: false },
            { text: "(B) Genes", correct: true },
            { text: "(C) Telomeres", correct: false },
            { text: "(D) Chromatids", correct: false }
        ]
    },
    {
        question: "9. An anticodon of tRNA can recognise more than one codon of mRNA. It is",
        answers: [
            { text: "(A) Wobble hypothesis", correct: true },
            { text: "(B) Gene flow hypothesis", correct: false },
            { text: "(C) Template hypothesis", correct: false },
            { text: "(D) Richmond and Lang effect", correct: false }
        ]
    },
    {
        question: "10. Protein helping in opening of DNA double helix in the form of replication fork is",
        answers: [
            { text: "(A) Topoisomerase", correct: false },
            { text: "(B) DNA gyrase", correct: true }, // DNA gyrase is a type of topoisomerase II
            { text: "(C) DNA ligase", correct: false },
            { text: "(D) DNA polymerase", correct: false }
        ]
    },
    {
        question: "11. Teminism is the same as",
        answers: [
            { text: "(A) Translation", correct: false },
            { text: "(B) DNA synthesis", correct: false },
            { text: "(C) Transcription", correct: false },
            { text: "(D) Reverse transcription", correct: true }
        ]
    },
    {
        question: "12. RNA that picks up specific amino acid from the cellular pool for protein synthesis is",
        answers: [
            { text: "(A) tRNA", correct: true },
            { text: "(B) mRNA", correct: false },
            { text: "(C) rRNA", correct: false },
            { text: "(D) snRNA", correct: false }
        ]
    },
    {
        question: "13. Which of the following is nongenetic and utilized in protein synthesis?",
        answers: [
            { text: "(A) t-RNA", correct: true }, // tRNA is not genetic material but involved in translation.
            { text: "(B) z-RNA", correct: false },
            { text: "(C) m-RNA", correct: false }, // mRNA is genetic info carrier
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "14. Temin and Baltimore are associated with the discovery of",
        answers: [
            { text: "(A) RNA synthesis", correct: false },
            { text: "(B) Transcription", correct: false },
            { text: "(C) Reverse transcription", correct: true },
            { text: "(D) Photorespiration", correct: false }
        ]
    },
    {
        question: "15. Genetic engineering is",
        answers: [
            { text: "(A) Plastic surgery", correct: false },
            { text: "(B) Addition or removal of genes", correct: true },
            { text: "(C) Study of extranuclear genes", correct: false },
            { text: "(D) All the above", correct: false }
        ]
    },
    {
        question: "16. Which type of DNA is found in bacteria?",
        answers: [
            { text: "(A) Straight DNA", correct: false },
            { text: "(B) Helical DNA", correct: false },
            { text: "(C) Circular free DNA", correct: true },
            { text: "(D) Membrane-bound DNA", correct: false }
        ]
    },
    {
        question: "17. The chemical knives of DNA are",
        answers: [
            { text: "(A) Ligases", correct: false },
            { text: "(B) Polymerases", correct: false },
            { text: "(C) Endonucleases", correct: true },
            { text: "(D) Transcriptases", correct: false }
        ]
    },
    {
        question: "18. Addition of phage DNA into genetic material of host is called",
        answers: [
            { text: "(A) Lysogeny", correct: true },
            { text: "(B) Lysis", correct: false },
            { text: "(C) Prophage", correct: false },
            { text: "(D) None of the above", correct: false }
        ]
    },
    {
        question: "19. A clone of the sheep Dolly has been made by",
        answers: [
            { text: "(A) Gene transfer", correct: false },
            { text: "(B) Somatic cell cloning", correct: true }, // Specifically, nuclear transfer from a somatic cell
            { text: "(C) Nucleus transfer", correct: false }, // While it involves nucleus transfer, somatic cell cloning is the broader term
            { text: "(D) Germinal cell cloning", correct: false }
        ]
    },
    {
        question: "20. Theory of spontaneous generation was given by",
        answers: [
            { text: "(A) Louis Pasteur", correct: false },
            { text: "(B) Spallanzani", correct: false },
            { text: "(C) F. Redi", correct: false },
            { text: "(D) Van Helmont", correct: true }
        ]
    },
    {
        question: "21. Animals of cold countries have shorter ears. This is",
        answers: [
            { text: "(A) Allen's law", correct: true },
            { text: "(B) Cope's law", correct: false },
            { text: "(C) Bergmann's law", correct: false },
            { text: "(D) Dollo's law", correct: false }
        ]
    },
    {
        question: "22. Galapagos islands are associated with the name of",
        answers: [
            { text: "(A) Wallace", correct: false },
            { text: "(B) Malthus", correct: false },
            { text: "(C) Darwin", correct: true },
            { text: "(D) Lamarck", correct: false }
        ]
    },
    {
        question: "23. Wings of pigeon, bat and mosquito exhibit the phenomenon called",
        answers: [
            { text: "(A) Convergent evolution", correct: true },
            { text: "(B) Divergent evolution", correct: false },
            { text: "(C) Atavism", correct: false },
            { text: "(D) All of these", correct: false }
        ]
    },
    {
        question: "24. Darwin's finches show one of the following aspects of evolution",
        answers: [
            { text: "(A) Biogeographic evidence", correct: true },
            { text: "(B) Industrial melanism", correct: false },
            { text: "(C) Biochemical evidence", correct: false },
            { text: "(D) Embryological evidence", correct: false }
        ]
    },
    {
        question: "25. Frequency of a character increases when it is",
        answers: [
            { text: "(A) Recessive", correct: false },
            { text: "(B) Dominant", correct: false },
            { text: "(C) Inheritable", correct: false },
            { text: "(D) Adaptable", correct: true }
        ]
    },
    {
        question: "26. Closely related morphologically similar, reproductively isolated sympatric populations are designated as",
        answers: [
            { text: "(A) Clones", correct: false },
            { text: "(B) Clines", correct: false },
            { text: "(C) Demes", correct: false },
            { text: "(D) Sibling species", correct: true }
        ]
    },
    {
        question: "27. Sickle-cell anaemia, the best example of natural selection, is due to gene modification related to amino acid of",
        answers: [
            { text: "(A) First ẞ chain", correct: true },
            { text: "(B) Second ẞ chain", correct: false },
            { text: "(C) Second α chain", correct: false },
            { text: "(D) First α chain", correct: false }
        ]
    },
    {
        question: "28. Hominid originated during",
        answers: [
            { text: "(A) Pliocene", correct: true },
            { text: "(B) Palaeocene", correct: false },
            { text: "(C) Miocene", correct: false },
            { text: "(D) Oligocene", correct: false }
        ]
    },
    {
        question: "29. Common origin of man and chimpanzee is best shown by",
        answers: [
            { text: "(A) Banding pattern in chromosome number 3 and 6", correct: true },
            { text: "(B) Cranial cavity", correct: false },
            { text: "(C) Binocular vision", correct: false },
            { text: "(D) Dental formula", correct: false }
        ]
    },
    {
        question: "30. A person has developed interferon in his body. He seems to carry an infection of",
        answers: [
            { text: "(A) Tetanus", correct: false },
            { text: "(B) Malaria", correct: false },
            { text: "(C) Measles", correct: true },
            { text: "(D) Typhoid", correct: false }
        ]
    },
    {
        question: "31. In allergy, inflammatory response is caused by the release of",
        answers: [
            { text: "(A) Prothrombin", correct: false },
            { text: "(B) Antigen", correct: false },
            { text: "(C) Antibody", correct: false },
            { text: "(D) Histamine", correct: true }
        ]
    },
    {
        question: "32. On stimulation by a foreign antigen in the body, the T-lymphocytes produce by division a clone of T-cells called",
        answers: [
            { text: "(A) Lymphocytes", correct: false },
            { text: "(B) Lymphoblasts", correct: false },
            { text: "(C) Plasma cells", correct: false },
            { text: "(D) None of these", correct: true } // Should be effector T-cells or memory T-cells, but not listed.
        ]
    },
    {
        question: "33. Tuberculosis is caused by",
        answers: [
            { text: "(A) Mycobacterium", correct: true },
            { text: "(B) Vibrio", correct: false },
            { text: "(C) Clostridium", correct: false },
            { text: "(D) Nitrobacter", correct: false }
        ]
    },
    {
        question: "34. The branch of biology dealing with the improvement of human race by selective breeding is called",
        answers: [
            { text: "(A) Euthenics", correct: false },
            { text: "(B) Eugenics", correct: true },
            { text: "(C) Euphenics", correct: false },
            { text: "(D) Obstetrics", correct: false }
        ]
    },
    {
        question: "35. How many Barr bodies a victim of Klinefelter's syndrome has",
        answers: [
            { text: "(A) One", correct: true }, // XXY individuals have one Barr body.
            { text: "(B) Two", correct: false },
            { text: "(C) Three", correct: false },
            { text: "(D) Four", correct: false }
        ]
    },
    {
        question: "36. Interferons act against",
        answers: [
            { text: "(A) Bacteriophages only", correct: false },
            { text: "(B) Bacteria", correct: false },
            { text: "(C) Viruses", correct: true },
            { text: "(D) Protozoans", correct: false }
        ]
    },
    {
        question: "37. Ganja and LSD are classified as",
        answers: [
            { text: "(A) Narcotics", correct: false },
            { text: "(B) Hallucinogens", correct: true },
            { text: "(C) Stimulants", correct: false },
            { text: "(D) Depressants", correct: false }
        ]
    },
    {
        question: "38. Which of the following is most convincing reason for increasing population growth in a country?",
        answers: [
            { text: "(A) High birth rate", correct: true },
            { text: "(B) Low mortality rate", correct: false }, // While contributing, high birth rate is more direct
            { text: "(C) Low population of old people", correct: false },
            { text: "(D) High population of young children", correct: false }
        ]
    },
    {
        question: "39. Progesterone in the contraceptive pill",
        answers: [
            { text: "(A) Prevents ovulation", correct: true },
            { text: "(B) Inhibits estrogen", correct: false },
            { text: "(C) Checks attachment of zygote to endometrium", correct: false }, // Primarily ovulation prevention.
            { text: "(D) All the above", correct: false }
        ]
    },
    {
        question: "40. Gene and cistron are sometimes used as synonyms because",
        answers: [
            { text: "(A) One gene contains one cistron", correct: true }, // Often used interchangeably, especially in the context of one gene-one enzyme.
            { text: "(B) One gene contains many cistrons", correct: false },
            { text: "(C) One gene contains no cistron", correct: false },
            { text: "(D) One cistron contains many genes", correct: false }
        ]
    },
    {
        question: "41. Reverse transcriptase",
        answers: [
            { text: "(A) Disintegrates host DNA", correct: false },
            { text: "(B) Polymerises host DNA", correct: false },
            { text: "(C) Translates host DNA", correct: false },
            { text: "(D) Transcribes viral RNA to cDNA", correct: true }
        ]
    },
    {
        question: "42. Enzyme required for polymerase chain reaction (PCR) is",
        answers: [
            { text: "(A) RNA polymerase", correct: false },
            { text: "(B) Ribonuclease", correct: false },
            { text: "(C) Taq polymerase", correct: true },
            { text: "(D) Endonuclease", correct: false }
        ]
    },
    {
        question: "43. Holo enzyme RNA polymerase attaches to DNA sequence during transcription. DNA assumes saddle-like form at that point. The sequence is",
        answers: [
            { text: "(A) AAAT box", correct: false },
            { text: "(B) GGTT box", correct: false },
            { text: "(C) CAAT box", correct: false },
            { text: "(D) TATA box", correct: true }
        ]
    },
    {
        question: "44. Which ancestor of man for the first time began the bipedal locomotion?",
        answers: [
            { text: "(A) Cro Magnon man", correct: false },
            { text: "(B) Australopithecus", correct: true },
            { text: "(C) Java-apeman", correct: false },
            { text: "(D) Peking man", correct: false }
        ]
    },
    {
        question: "45. Which one of the following amino acids was not found to be synthesized in Miller's experiment?",
        answers: [
            { text: "(A) Glycine", correct: false },
            { text: "(B) Aspartic acid", correct: false },
            { text: "(C) Glutamic acid", correct: true },
            { text: "(D) Alanine", correct: false }
        ]
    },
    {
        question: "46. Which Ig/IgS is/are present in milk?",
        answers: [
            { text: "(A) IgA", correct: true },
            { text: "(B) IgA and IgG", correct: false },
            { text: "(C) IgM", correct: false },
            { text: "(D) IgE", correct: false }
        ]
    },
    {
        question: "47. Metastasis is connected with",
        answers: [
            { text: "(A) Malignant tumour", correct: true },
            { text: "(B) Benign tumour", correct: false },
            { text: "(C) Both (A) and (B)", correct: false },
            { text: "(D) Crown gall tumour", correct: false }
        ]
    },
    {
        question: "48. Fatty liver syndrome is due to",
        answers: [
            { text: "(A) Infection by a virus", correct: false },
            { text: "(B) Intake of excessive fat", correct: false },
            { text: "(C) Intake of excessive alcohol", correct: true },
            { text: "(D) Intake of tobacco through chewing", correct: false }
        ]
    },
    {
        question: "49. A viral disease of silkworm is",
        answers: [
            { text: "(A) Muscardine", correct: false },
            { text: "(B) Pebrine", correct: false },
            { text: "(C) Maggot disease", correct: false },
            { text: "(D) Flacherie", correct: true }
        ]
    },
    {
        question: "50. MOET (multiple ovulation embryo transfer) is method of",
        answers: [
            { text: "(A) Fish cultivation", correct: false },
            { text: "(B) Hybridisation of cattle", correct: true },
            { text: "(C) Birth control", correct: false },
            { text: "(D) Cloning of sheep", correct: false }
        ]
    },
    {
        question: "51. Genetic counselling will help in knowing the chances of giving birth to a baby",
        answers: [
            { text: "(A) Of known sex", correct: false },
            { text: "(B) With congenital disease", correct: true },
            { text: "(C) With low I.Q", correct: false },
            { text: "(D) With fair skin", correct: false }
        ]
    },
    {
        question: "52. Genetically engineered bacteria are being employed for production of",
        answers: [
            { text: "(A) Human insulin", correct: true },
            { text: "(B) Thyroxine", correct: false },
            { text: "(C) Cortisol", correct: false },
            { text: "(D) Epinephrine", correct: false }
        ]
    },
    {
        question: "53. Bt in popular crop Bt cotton stands for",
        answers: [
            { text: "(A) Biotechnology", correct: false },
            { text: "(B) Bacillus tomentosa", correct: false },
            { text: "(C) Bacillus thuringiensis", correct: true },
            { text: "(D) Best type", correct: false }
        ]
    },
    {
        question: "54. A triangular age pyramid has",
        answers: [
            { text: "(A) Declining population", correct: false },
            { text: "(B) Increasing population", correct: true },
            { text: "(C) Stable population", correct: false },
            { text: "(D) Fluctuating population", correct: false }
        ]
    },
    {
        question: "55. Population was termed as self perpetuating unit by",
        answers: [
            { text: "(A) Malthus", correct: false },
            { text: "(B) Spencer", correct: false },
            { text: "(C) Mobius", correct: false },
            { text: "(D) Odum", correct: true }
        ]
    },
    {
        question: "56. The hybridomas are made by",
        answers: [
            { text: "(A) Fusing T cells with myeloma cells", correct: false },
            { text: "(B) Fusing B cells with myeloma cells", correct: true },
            { text: "(C) Fusing T helper cells with myeloma cells", correct: false },
            { text: "(D) Fusing B memory cells with myeloma cells", correct: false }
        ]
    },
    {
        question: "57. Natural humoral immune response against a pathogen leads to the production of",
        answers: [
            { text: "(A) Polyclonal antibodies", correct: true },
            { text: "(B) Monoclonal antibodies", correct: false },
            { text: "(C) Macrophages", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "58. The technology used for the production of monoclonal antibodies is",
        answers: [
            { text: "(A) Mass culture technology", correct: false },
            { text: "(B) Hybridoma technology", correct: true },
            { text: "(C) Suspension culture", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "59. Nick translation is done by",
        answers: [
            { text: "(A) DNA polymerase I", correct: true },
            { text: "(B) DNA polymerase II", correct: false },
            { text: "(C) DNA ligase", correct: false },
            { text: "(D) Kinase", correct: false }
        ]
    },
    {
        question: "60. Telomeric sequences are found in",
        answers: [
            { text: "(A) HAC", correct: false },
            { text: "(B) BAC", correct: false },
            { text: "(C) YAC", correct: true }, // Yeast Artificial Chromosome
            { text: "(D) PAC", correct: false }
        ]
    },
    {
        question: "61. Taq polymerase is used in PCR because of its",
        answers: [
            { text: "(A) Low thermal stability", correct: false },
            { text: "(B) High fidelity", correct: false },
            { text: "(C) High speed", correct: false },
            { text: "(D) High thermal stability", correct: true }
        ]
    },
    {
        question: "62. Introduction of recombinant DNA into bacterial cell by using current is called",
        answers: [
            { text: "(A) Transformation", correct: false },
            { text: "(B) Electroporation", correct: true },
            { text: "(C) Transposition", correct: false },
            { text: "(D) Transduction", correct: false }
        ]
    },
    {
        question: "63. DNA staining is done by",
        answers: [
            { text: "(A) Crystal violet", correct: false },
            { text: "(B) Giemsa staining", correct: false },
            { text: "(C) Methylene blue", correct: false },
            { text: "(D) Feulgen staining", correct: true }
        ]
    },
    {
        question: "64. Which of the following is not a restriction endonuclease?",
        answers: [
            { text: "(A) Eco RI", correct: false },
            { text: "(B) DNA ligase", correct: true },
            { text: "(C) Hind III", correct: false },
            { text: "(D) Bam HI", correct: false }
        ]
    },
    {
        question: "65. The most common type of gel used for DNA separation is",
        answers: [
            { text: "(A) Agar", correct: false },
            { text: "(B) Polyacrylamide", correct: false },
            { text: "(C) Agarose", correct: true },
            { text: "(D) All of the above", correct: false }
        ]
    },
    {
        question: "66. The plasmid used by Cohen and Boyer for the transformation experiment was",
        answers: [
            { text: "(A) PSC 101", correct: true },
            { text: "(B) PUC 17", correct: false },
            { text: "(C) PBR 322", correct: false },
            { text: "(D) E. Coli plasmids", correct: false }
        ]
    },
    {
        question: "67. The mechanism of intake of DNA fragments from the surrounding medium by a cell is called",
        answers: [
            { text: "(A) Transformation", correct: true },
            { text: "(B) Transduction", correct: false },
            { text: "(C) Both (A) and (B)", correct: false },
            { text: "(D) Conjugation", correct: false }
        ]
    },
    {
        question: "68. Which of the following organs is most sensitive to progesterone?",
        answers: [
            { text: "(A) Brain", correct: false },
            { text: "(B) Uterus", correct: true },
            { text: "(C) Mammary gland", correct: false },
            { text: "(D) Ovary", correct: false }
        ]
    },
    {
        question: "69. In Ca++ homeostasis sequence of intermediates from the following biosynthetic pathway",
        answers: [
            { text: "(A) Glucagon", correct: false },
            { text: "(B) Thyroxine", correct: false },
            { text: "(C) Insulin", correct: false },
            { text: "(D) Parathyroid hormone", correct: true }
        ]
    },
    {
        question: "70. A point mutation is",
        answers: [
            { text: "(A) Thalassemia", correct: false },
            { text: "(B) Sickle cell anaemia", correct: true },
            { text: "(C) Down's syndrome", correct: false },
            { text: "(D) Night blindness", correct: false }
        ]
    },
    {
        question: "71. \"Gametes are never hybrid\". It is a statement of law of",
        answers: [
            { text: "(A) Dominance", correct: false },
            { text: "(B) Segregation", correct: true },
            { text: "(C) Independent assortment", correct: false },
            { text: "(D) Random fertilisation", correct: false }
        ]
    },
    {
        question: "72. Christmas disease is another name of",
        answers: [
            { text: "(A) Sleeping sickness", correct: false },
            { text: "(B) Down's syndrome", correct: false },
            { text: "(C) Haemophilia", correct: true },
            { text: "(D) Hepatitis", correct: false }
        ]
    },
    {
        question: "73. The Earth Summit held at Rio de Janeiro in 1992 resulted into",
        answers: [
            { text: "(A) Computation of Red list", correct: false },
            { text: "(B) Establishment of Biosphere Reserves", correct: false },
            { text: "(C) Convention on Biodiversity", correct: true },
            { text: "(D) IUCN", correct: false }
        ]
    },
    {
        question: "74. Hot spots of biodiversity are areas with",
        answers: [
            { text: "(A) Little biodiversity", correct: false },
            { text: "(B) Maximum biodiversity", correct: true },
            { text: "(C) Maximum conservation", correct: false },
            { text: "(D) Both (A) and (C)", correct: false }
        ]
    },
    {
        question: "75. Which pair of geographical area shows maximum diversity in our country?",
        answers: [
            { text: "(A) Eastern Himalayas and Western Ghats", correct: true },
            { text: "(B) Sunderbans and Rann of Kutch", correct: false },
            { text: "(C) Eastern Ghats and West Bengal", correct: false },
            { text: "(D) Kerala and Punjab", correct: false }
        ]
    },
    {
        question: "76. Photochemical smog does not possess",
        answers: [
            { text: "(A) Ozone", correct: false },
            { text: "(B) CO₂", correct: true },
            { text: "(C) Nitrogen dioxide", correct: false },
            { text: "(D) PAN", correct: false }
        ]
    },
    {
        question: "77. Pearls are produced in \"Pearl Oyster\" around the",
        answers: [
            { text: "(A) Tears of sea-mermaids falling into the oyster", correct: false },
            { text: "(B) First drop of rains falling into the oyster in a particular month", correct: false },
            { text: "(C) Eggs of oyster which fail to leave its body", correct: false },
            { text: "(D) Some external particles becoming embedded in the skin of oyster", correct: true }
        ]
    },
    {
        question: "78. Air bladder is",
        answers: [
            { text: "(A) Excretory organ of mammals", correct: false },
            { text: "(B) Respiratory organ of birds", correct: false },
            { text: "(C) Hydrostatic organ of bony fishes", correct: true },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "79. A new species is formed when",
        answers: [
            { text: "(A) An individual is a product of phenotype and environment", correct: false },
            { text: "(B) Individual variations reflect reproductive isolation amongst them", correct: true },
            { text: "(C) Phenotypes and genotypes are not related", correct: false },
            { text: "(D) Different species may have same genotype", correct: false }
        ]
    },
    {
        question: "80. Arthropods may have blood which",
        answers: [
            { text: "(A) Resembles human blood", correct: false },
            { text: "(B) Circulates in arteries and veins", correct: false },
            { text: "(C) Has haemoglobin in cells", correct: false },
            { text: "(D) Circulates through an open system", correct: true }
        ]
    },
    {
        question: "81. An operculum covering gills is characteristic of",
        answers: [
            { text: "(A) Bony-fishes", correct: true },
            { text: "(B) Cartilaginous fishes", correct: false },
            { text: "(C) Both (A) and (B)", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "82. Which of these protozoan is unlikely to have a contractile vacuole?",
        answers: [
            { text: "(A) Paramecium caudatum", correct: false },
            { text: "(B) Plasmodium", correct: true }, // Parasitic, typically isotonic environment
            { text: "(C) Euglena", correct: false },
            { text: "(D) Amoeba proteus", correct: false }
        ]
    },
    {
        question: "83. Which of these are not tissue grade animals?",
        answers: [
            { text: "(A) Sponges", correct: true }, // Cellular grade of organization
            { text: "(B) Cnidarians", correct: false },
            { text: "(C) Annelids", correct: false },
            { text: "(D) Mollusca", correct: false }
        ]
    },
    {
        question: "84. Symmetry of the polyp is",
        answers: [
            { text: "(A) Bilateral", correct: false },
            { text: "(B) Radial", correct: true },
            { text: "(C) Irregular", correct: false },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "85. Skeleton of horny corals is made by",
        answers: [
            { text: "(A) CaCO₃", correct: false },
            { text: "(B) Silica", correct: false },
            { text: "(C) Bone", correct: false },
            { text: "(D) Gorgonin", correct: true }
        ]
    },
    {
        question: "86. The storage carbohydrate in animal is",
        answers: [
            { text: "(A) Starch", correct: false },
            { text: "(B) Cellulose", correct: false },
            { text: "(C) Glycogen", correct: true },
            { text: "(D) Glucose", correct: false }
        ]
    },
    {
        question: "87. Coral reef forming coelenterates belong to the class",
        answers: [
            { text: "(A) Hydrozoa", correct: false },
            { text: "(B) Scyphozoa", correct: false },
            { text: "(C) Actinozoa", correct: true }, // Also known as Anthozoa
            { text: "(D) All of the above", correct: false }
        ]
    },
    {
        question: "88. Nematocysts are the specialized cells found in the members of the phylum",
        answers: [
            { text: "(A) Cnidaria", correct: true },
            { text: "(B) Porifera", correct: false },
            { text: "(C) Annelida", correct: false },
            { text: "(D) Mollusca", correct: false }
        ]
    },
    {
        question: "89. The mobility of DNA in agarose gel electrophoresis is solely based on its",
        answers: [
            { text: "(A) Charge", correct: false }, // While charged, size is the separating factor
            { text: "(B) Conformation", correct: false },
            { text: "(C) Size", correct: true },
            { text: "(D) None of these", correct: false }
        ]
    },
    {
        question: "90. Antibodies which can cross placenta and are involved in allergic reactions, respectively are",
        answers: [
            { text: "(A) IgG and IgA", correct: false },
            { text: "(B) IgM and IgE", correct: false },
            { text: "(C) IgG and IgE", correct: true },
            { text: "(D) IgD and IgM", correct: false }
        ]
    },
    {
        question: "91. Which one of the following organisms is used in Ames test?",
        answers: [
            { text: "(A) E. coli", correct: false },
            { text: "(B) Streptococcus aureus", correct: false },
            { text: "(C) Pseudomonas aeruginosa", correct: false },
            { text: "(D) Salmonella typhimurium", correct: true }
        ]
    },
    {
        question: "92. Independently folded functional unit of a protein is called a",
        answers: [
            { text: "(A) Motif", correct: false },
            { text: "(B) Fold", correct: false },
            { text: "(C) Domain", correct: true },
            { text: "(D) Module", correct: false }
        ]
    },
    {
        question: "93. Most predominant antibody in serum is",
        answers: [
            { text: "(A) IgG", correct: true },
            { text: "(B) IgD", correct: false },
            { text: "(C) IgE", correct: false },
            { text: "(D) IgA", correct: false }
        ]
    },
    {
        question: "94. The heterozygosity of any locus can be ascertained by",
        answers: [
            { text: "(A) SNPs", correct: false },
            { text: "(B) RFLPs", correct: false },
            { text: "(C) FISH analysis", correct: false },
            { text: "(D) Either RFLP analysis or SNP", correct: true } // Both can reveal heterozygosity
        ]
    },
    {
        question: "95. The C value denotes the total number of DNA in a",
        answers: [
            { text: "(A) Diploid", correct: false },
            { text: "(B) Haploid", correct: true }, // C-value refers to the amount of DNA in a haploid genome.
            { text: "(C) Aneuploid", correct: false },
            { text: "(D) Polyploid", correct: false }
        ]
    },
    {
        question: "96. Highest capacity vector is",
        answers: [
            { text: "(A) Cosmid", correct: false },
            { text: "(B) YAC", correct: true },
            { text: "(C) Yeast integrative vector", correct: false },
            { text: "(D) Bacteriophage vector", correct: false }
        ]
    },
    {
        question: "97. Which of the following conditions is caused by trinucleotide (triplet) repeat expansion?",
        answers: [
            { text: "(A) Cystic fibrosis", correct: false },
            { text: "(B) Duchenne muscular dystrophy", correct: false },
            { text: "(C) Huntington disease", correct: true },
            { text: "(D) Osteogenesis imperfecta", correct: false }
        ]
    },
    {
        question: "98. Which among the following is not a model organism in genetic analysis?",
        answers: [
            { text: "(A) The Zebra fish", correct: false },
            { text: "(B) The plant Arabidopsis thaliana", correct: false },
            { text: "(C) The mouse deer", correct: true },
            { text: "(D) The nematode Caenorhabditis elegans", correct: false }
        ]
    },
    {
        question: "99. Down syndrome is usually the result of an extra chromosome ...., so that each body cell has a total of 47 chromosomes",
        answers: [
            { text: "(A) 18", correct: false },
            { text: "(B) 19", correct: false },
            { text: "(C) 20", correct: false },
            { text: "(D) 21", correct: true }
        ]
    },
    {
        question: "100. VNTRs represent",
        answers: [
            { text: "(A) New terminal regions DNA", correct: false },
            { text: "(B) Functional genes in the DNA", correct: false },
            { text: "(C) Split genes in the sample DNA", correct: false },
            { text: "(D) Specific non-coding sequences with unique tandem repeats", correct: true }
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
