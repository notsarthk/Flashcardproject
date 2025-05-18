// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Combine default cards with custom cards
const flashcardData = {
    cards: [
        // Default science cards
        {
            question: "What is the chemical symbol for water?",
            answer: "H₂O"
        },
        {
            question: "What is the largest planet in our solar system?",
            answer: "Jupiter"
        },
        {
            question: "What is the process by which plants make their own food?",
            answer: "Photosynthesis"
        },
        {
            question: "What is the unit of force?",
            answer: "Newton"
        },
        {
            question: "What is the main gas that makes up the Earth's atmosphere?",
            answer: "Nitrogen"
        },
        // Add custom science easy cards
        ...customCards.science.easy
    ]
}; 