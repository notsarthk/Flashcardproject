class InteractiveFlashcard {
    constructor() {
        this.currentCard = 0;
        this.cards = flashcardData.cards;
        this.flashcardElement = document.querySelector('.flashcard');
        this.cardInnerElement = this.flashcardElement.querySelector('.card-inner');
        this.actionButtons = document.querySelector('.action-buttons');
        this.knowBtn = document.querySelector('.know-btn');
        this.dontKnowBtn = document.querySelector('.dont-know-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.retryBtn = document.querySelector('.retry-btn');
        this.endOfDifficultyButtons = document.querySelector('.end-of-difficulty-buttons');
        this.startAgainBtn = document.querySelector('.start-again-btn');
        this.nextDifficultyBtn = document.querySelector('.next-difficulty-btn');
        
        this.initializeEventListeners();
        this.loadCurrentCard();
    }

    initializeEventListeners() {
        // Flip card on click
        this.flashcardElement.addEventListener('click', () => {
            // Only allow flipping from front to back initially
            if (!this.flashcardElement.classList.contains('is-flipped')) {
                 this.flipCardToShowAnswer();
            }
        });

        // Know button
        this.knowBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent card from flipping back immediately
            this.handleAnswer('know');
        });

        // Don't know button
        this.dontKnowBtn.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent card from flipping back immediately
            this.handleAnswer('dont-know');
        });

        // Next question button
        this.nextBtn.addEventListener('click', () => {
            this.nextQuestion();
        });

        // Retry button
        this.retryBtn.addEventListener('click', () => {
            this.retryQuestion();
        });

        // Start Again button
        this.startAgainBtn.addEventListener('click', () => {
            this.startAgain();
        });

        // Next Difficulty button
        this.nextDifficultyBtn.addEventListener('click', () => {
            // Explicitly call the global navigation function defined on the page
            if (typeof navigateToNextDifficulty === 'function') {
                navigateToNextDifficulty();
            } else {
                console.error('navigateToNextDifficulty function not found!');
                // Fallback or error handling if the function isn't defined
                 // window.location.href = '../index.html'; // Example fallback to home
            }
        });

    }

    loadCurrentCard() {
        if (this.currentCard < this.cards.length) {
            const card = this.cards[this.currentCard];
            const cardFrontContent = this.flashcardElement.querySelector('.card-front .card-content');
            const cardBackContent = this.flashcardElement.querySelector('.card-back .card-content');

            cardFrontContent.textContent = card.question;
            // Wrap the answer in a span with a class for mirroring
            cardBackContent.innerHTML = '<span class="mirrored-text">' + card.answer + '</span>';

            console.log('Loaded card:', {
                question: card.question,
                answer: card.answer
            });

            this.resetCardState();
            this.flashcardElement.style.display = 'flex'; // Ensure flashcard is visible
            this.actionButtons.style.display = 'flex'; // Ensure action buttons are visible
            this.endOfDifficultyButtons.style.display = 'none'; // Hide end of difficulty buttons

        } else {
             // End of cards for this difficulty
            console.log('End of cards for this difficulty.');
            this.endOfDifficulty();
        }
    }

    resetCardState() {
        // This function resets the card to the question side
        this.flashcardElement.classList.remove('is-flipped');
        // Initially show action buttons, hide next/retry
        this.actionButtons.style.display = 'flex';
        this.nextBtn.style.display = 'none';
        this.retryBtn.style.display = 'none';
        this.endOfDifficultyButtons.style.display = 'none'; // Ensure end of difficulty buttons are hidden
    }
    
    flipCardToShowAnswer(){
         // This function specifically flips the card from front to back
        this.flashcardElement.classList.add('is-flipped');
        // Hide action buttons when flipped to answer side
        this.actionButtons.style.display = 'none';
        // next/retry buttons should remain hidden until answer is handled
        this.nextBtn.style.display = 'none';
        this.retryBtn.style.display = 'none';
        this.endOfDifficultyButtons.style.display = 'none'; // Ensure end of difficulty buttons are hidden
    }

    handleAnswer(type) {
        // Hide action buttons after answer is selected
        this.actionButtons.style.display = 'none'; 

        if (type === 'know') {
            this.nextBtn.style.display = 'block'; // Show Next Question button
             // Optional: Trigger confetti for 'Know'
            // this.triggerConfetti();
        } else if (type === 'dont-know') {
            this.retryBtn.style.display = 'block'; // Show Retry button
        }
        
        // Ensure card is flipped to answer side (should already be from flipCardToShowAnswer)
         if (!this.flashcardElement.classList.contains('is-flipped')) {
             // This case should not happen with current logic, but as a fallback:
             this.flashcardElement.classList.add('is-flipped');
         }
         this.endOfDifficultyButtons.style.display = 'none'; // Ensure end of difficulty buttons are hidden
    }

    nextQuestion() {
        this.currentCard++;
        this.loadCurrentCard(); // Load the next card which will also reset the state
    }

    retryQuestion() {
         // For retry, we just want to show the question again
        this.resetCardState(); // Reset the card to show the question and action buttons
    }

    endOfDifficulty() {
        this.flashcardElement.style.display = 'none'; // Hide the flashcard
        this.actionButtons.style.display = 'none'; // Hide action buttons
        this.nextBtn.style.display = 'none'; // Hide next button
        this.retryBtn.style.display = 'none'; // Hide retry button
        this.endOfDifficultyButtons.style.display = 'flex'; // Show end of difficulty buttons
    }

    startAgain() {
        this.currentCard = 0; // Reset to the first card
        this.loadCurrentCard(); // Load the first card
    }

    nextDifficulty() {
        // Navigate to the next difficulty page
        // This assumes the next difficulty page for Science is medium-science.html
        window.location.href = 'medium-science.html'; 
         // Note: You might want a more dynamic way to determine the next difficulty page
    }

    triggerConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        confettiContainer.style.display = 'block';

        // Create confetti particles
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiContainer.appendChild(confetti);
        }

        // Remove confetti after animation
        setTimeout(() => {
            confettiContainer.innerHTML = '';
            confettiContainer.style.display = 'none';
        }, 5000);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const flashcard = new InteractiveFlashcard();
}); 