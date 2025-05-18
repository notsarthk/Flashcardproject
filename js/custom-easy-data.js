// Initialize storage for different subjects and difficulties
let flashcardStorage = JSON.parse(localStorage.getItem('flashcardStorage')) || {
    science: { easy: [], medium: [], hard: [] },
    math: { easy: [], medium: [], hard: [] },
    sst: { easy: [], medium: [], hard: [] }
};

console.log('Initial storage:', flashcardStorage);

// Function to display stored cards
function displayStoredCards() {
    console.log('Displaying cards from storage:', flashcardStorage);
    const cardsList = document.getElementById('cards-list');
    cardsList.innerHTML = '';

    // Display cards for each subject and difficulty
    for (const subject in flashcardStorage) {
        for (const difficulty in flashcardStorage[subject]) {
            const cards = flashcardStorage[subject][difficulty];
            if (cards.length > 0) {
                const subjectSection = document.createElement('div');
                subjectSection.innerHTML = `<h3>${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h3>`;
                
                cards.forEach((card, index) => {
                    const cardElement = document.createElement('div');
                    cardElement.className = 'card-item';
                    cardElement.innerHTML = `
                        <p><strong>Question:</strong> ${card.question}</p>
                        <p><strong>Answer:</strong> ${card.answer}</p>
                        <button onclick="deleteCard('${subject}', '${difficulty}', ${index})">Delete</button>
                    `;
                    subjectSection.appendChild(cardElement);
                });
                
                cardsList.appendChild(subjectSection);
            }
        }
    }
}

// Function to delete a card
function deleteCard(subject, difficulty, index) {
    console.log('Deleting card:', { subject, difficulty, index });
    flashcardStorage[subject][difficulty].splice(index, 1);
    localStorage.setItem('flashcardStorage', JSON.stringify(flashcardStorage));
    displayStoredCards();
}

// Add event listener for adding new cards
document.getElementById('add-card-btn').addEventListener('click', () => {
    const question = document.getElementById('custom-question').value;
    const answer = document.getElementById('custom-answer').value;
    const difficulty = document.getElementById('difficulty-level').value;
    const subject = document.getElementById('subject').value;

    console.log('Adding new card:', { question, answer, difficulty, subject });

    if (question && answer) {
        // Add the card to the appropriate subject and difficulty
        flashcardStorage[subject][difficulty].push({ question, answer });
        
        // Save to localStorage
        try {
            localStorage.setItem('flashcardStorage', JSON.stringify(flashcardStorage));
            console.log('Storage after adding card:', flashcardStorage);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
        
        // Clear input fields
        document.getElementById('custom-question').value = '';
        document.getElementById('custom-answer').value = '';
        
        // Refresh the display
        displayStoredCards();
        
        alert('Card added successfully!');
    } else {
        alert('Please enter both a question and an answer.');
    }
});

// Display cards when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded, displaying cards');
    displayStoredCards();
}); 