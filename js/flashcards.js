// Flashcard functionality
class FlashcardManager {
    constructor() {
        this.currentCardIndex = 0;
        this.cards = [];
        this.stats = {
            correct: 0,
            incorrect: 0,
            total: 0
        };
        this.initializeEventListeners();
    }

    // Initialize event listeners for card interactions
    initializeEventListeners() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowRight':
                    this.nextCard();
                    break;
                case 'ArrowLeft':
                    this.previousCard();
                    break;
                case ' ':
                    this.flipCard();
                    break;
            }
        });
    }

    // Load cards for a specific subject and difficulty
    loadCards(subject, difficulty) {
        // This would typically fetch from an API or local storage
        this.cards = []; // Placeholder for card data
        this.currentCardIndex = 0;
        this.updateDisplay();
    }

    // Flip the current card
    flipCard() {
        const card = document.querySelector('.flashcard');
        if (card) {
            card.classList.toggle('flipped');
        }
    }

    // Move to next card
    nextCard() {
        if (this.currentCardIndex < this.cards.length - 1) {
            this.currentCardIndex++;
            this.updateDisplay();
        }
    }

    // Move to previous card
    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.updateDisplay();
        }
    }

    // Update the display with current card
    updateDisplay() {
        const card = this.cards[this.currentCardIndex];
        if (card) {
            // Update DOM with card content
            document.querySelector('.card-front').textContent = card.question;
            document.querySelector('.card-back').textContent = card.answer;
            this.updateProgress();
        }
    }

    // Update progress statistics
    updateProgress() {
        const progress = (this.currentCardIndex + 1) / this.cards.length * 100;
        document.querySelector('.progress-bar').style.width = `${progress}%`;
    }

    // Mark current card as correct/incorrect
    markCard(correct) {
        if (correct) {
            this.stats.correct++;
        } else {
            this.stats.incorrect++;
        }
        this.stats.total++;
        this.saveProgress();
    }

    // Save progress to localStorage
    saveProgress() {
        localStorage.setItem('flashcardProgress', JSON.stringify({
            stats: this.stats,
            lastCardIndex: this.currentCardIndex
        }));
    }

    // Load progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('flashcardProgress');
        if (saved) {
            const data = JSON.parse(saved);
            this.stats = data.stats;
            this.currentCardIndex = data.lastCardIndex;
            this.updateDisplay();
        }
    }
}

// Initialize the flashcard manager when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const flashcardManager = new FlashcardManager();
}); 