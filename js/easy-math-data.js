// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default easy math cards
const defaultCards = [
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What is 5 × 5?",
        answer: "25"
    },
    {
        question: "What is 10 ÷ 2?",
        answer: "5"
    },
    {
        question: "What is 8 - 3?",
        answer: "5"
    },
    {
        question: "What is 3² (3 squared)?",
        answer: "9"
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.math.easy]
}; 