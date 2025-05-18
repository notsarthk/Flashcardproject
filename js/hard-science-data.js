// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default hard science cards
const defaultCards = [
    {
        question: "What is the Heisenberg Uncertainty Principle?",
        answer: "It states that the more precisely the position of a particle is determined, the less precisely its momentum can be predicted, and vice versa."
    },
    {
        question: "What is the difference between a covalent and an ionic bond?",
        answer: "A covalent bond involves sharing of electrons between atoms, while an ionic bond involves transfer of electrons from one atom to another."
    },
    {
        question: "What is the process of nuclear fusion?",
        answer: "The process where two atomic nuclei combine to form a heavier nucleus, releasing energy in the process."
    },
    {
        question: "What is the role of enzymes in biological reactions?",
        answer: "Enzymes are biological catalysts that speed up chemical reactions by lowering the activation energy required for the reaction to occur."
    },
    {
        question: "What is the difference between DNA and RNA?",
        answer: "DNA is double-stranded and contains deoxyribose sugar, while RNA is single-stranded and contains ribose sugar. DNA uses thymine, while RNA uses uracil."
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.science.hard]
}; 