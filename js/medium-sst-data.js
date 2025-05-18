// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default medium social studies cards
const defaultCards = [
    {
        question: "What was the main cause of World War I?",
        answer: "The assassination of Archduke Franz Ferdinand"
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo"
    },
    {
        question: "What is the largest democracy in the world?",
        answer: "India"
    },
    {
        question: "What is the main purpose of the United Nations?",
        answer: "To maintain international peace and security"
    },
    {
        question: "What is the longest river in Africa?",
        answer: "The Nile"
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.sst.medium]
}; 