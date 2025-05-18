// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default medium science cards
const defaultCards = [
    {
        question: "What is the atomic number of carbon?",
        answer: "6"
    },
    {
        question: "What is the chemical formula for glucose?",
        answer: "C6H12O6"
    },
    {
        question: "What is the SI unit of electric current?",
        answer: "Ampere (A)"
    },
    {
        question: "What is the process of cell division called?",
        answer: "Mitosis"
    },
    {
        question: "What is the main component of natural gas?",
        answer: "Methane (CH4)"
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.science.medium]
}; 