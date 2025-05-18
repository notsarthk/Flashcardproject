// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Combine default cards with custom cards
const flashcardData = {
    cards: [
        // Default social studies cards
        {
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            question: "Which country has the largest population in the world?",
            answer: "China"
        },
        {
            question: "What is the largest ocean on Earth?",
            answer: "Pacific Ocean"
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            answer: "Japan"
        },
        {
            question: "What is the currency of the United Kingdom?",
            answer: "British Pound"
        },
        // Add custom social studies easy cards
        ...customCards.sst.easy
    ]
}; 