// Get custom cards from localStorage
const customCards = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

// Default hard social studies cards
const defaultCards = [
    {
        question: "What were the main causes and consequences of the Industrial Revolution?",
        answer: "Causes: Technological innovations, access to raw materials, and capital investment. Consequences: Urbanization, social class changes, environmental impact, and global economic transformation."
    },
    {
        question: "What is the difference between a parliamentary and presidential system of government?",
        answer: "In a parliamentary system, the executive branch derives its legitimacy from and is accountable to the legislature, while in a presidential system, the executive is independent of the legislature and directly elected by the people."
    },
    {
        question: "What were the key factors that led to the Cold War?",
        answer: "Ideological differences between capitalism and communism, power vacuum after WWII, nuclear arms race, and proxy wars between the US and USSR."
    },
    {
        question: "What is the significance of the Magna Carta in modern democracy?",
        answer: "It established the principle that everyone, including the king, is subject to the law, and introduced concepts of due process and individual rights that influenced modern democratic systems."
    },
    {
        question: "What are the main challenges to global economic development?",
        answer: "Income inequality, environmental degradation, political instability, access to education and healthcare, and technological divide between developed and developing nations."
    }
];

// Combine default cards with custom cards
const flashcardData = {
    cards: [...defaultCards, ...customCards.sst.hard]
}; 