// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default medium math cards
const defaultCards = [
    {
        question: "What is the Pythagorean theorem?",
        answer: "a² + b² = c², where c is the hypotenuse of a right triangle"
    },
    {
        question: "What is the formula for the area of a circle?",
        answer: "πr², where r is the radius"
    },
    {
        question: "What is the quadratic formula?",
        answer: "x = (-b ± √(b² - 4ac)) / 2a"
    },
    {
        question: "What is the formula for the volume of a sphere?",
        answer: "4/3 πr³, where r is the radius"
    },
    {
        question: "What is the formula for the sum of an arithmetic sequence?",
        answer: "Sn = n/2(a₁ + aₙ), where n is the number of terms, a₁ is the first term, and aₙ is the last term"
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.math.medium]
}; 