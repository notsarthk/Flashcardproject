// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default hard math cards
const defaultCards = [
    {
        question: "What is the Fundamental Theorem of Calculus?",
        answer: "It states that differentiation and integration are inverse operations. If F'(x) = f(x), then ∫f(x)dx = F(x) + C."
    },
    {
        question: "What is the difference between a vector and a scalar?",
        answer: "A vector has both magnitude and direction, while a scalar has only magnitude."
    },
    {
        question: "What is the formula for the derivative of a composite function?",
        answer: "The chain rule: (f(g(x)))' = f'(g(x)) * g'(x)"
    },
    {
        question: "What is the difference between a permutation and a combination?",
        answer: "A permutation considers the order of elements, while a combination does not."
    },
    {
        question: "What is the relationship between the roots of a quadratic equation and its coefficients?",
        answer: "For ax² + bx + c = 0, the sum of roots is -b/a and the product is c/a."
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.math.hard]
}; 