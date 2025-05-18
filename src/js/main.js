import Flashcard from './components/Flashcard.js';
import ProgressTracker from './components/ProgressTracker.js';
import CardManager from './components/CardManager.js';
import AddCardForm from './components/AddCardForm.js';

class App {
    constructor() {
        this.initializeComponents();
    }

    initializeComponents() {
        try {
            // Initialize Flashcard
            const flashcardElement = document.querySelector('.flashcard');
            if (flashcardElement) {
                // Get initial card data from the data file
                const initialCard = this.getInitialCard();
                this.flashcard = new Flashcard(
                    flashcardElement,
                    initialCard.question,
                    initialCard.answer
                );
            }

            // Initialize Progress Tracker
            const progressElement = document.querySelector('.progress-tracker');
            if (progressElement) {
                this.progressTracker = new ProgressTracker(progressElement);
            }

            // Initialize Card Manager
            const cardManagerElement = document.querySelector('.card-manager');
            if (cardManagerElement) {
                this.cardManager = new CardManager(cardManagerElement);
                this.cardManager.loadCards();
            }

            // Initialize Add Card Form
            const flashcardContainer = document.querySelector('.flashcard-container');
            if (flashcardContainer && flashcardContainer.querySelector('.add-card-form')) {
                // Get category and difficulty from the page
                const category = this.getCategoryFromPage();
                const difficulty = this.getDifficultyFromPage();
                this.addCardForm = new AddCardForm(flashcardContainer, category, difficulty);
            }
        } catch (error) {
            console.error('Error initializing components:', error);
            alert('There was an error initializing the application. Please refresh the page.');
        }
    }

    getInitialCard() {
        // This should be replaced with actual data from your data files
        return {
            question: 'Loading...',
            answer: 'Loading...'
        };
    }

    getCategoryFromPage() {
        // Extract category from URL or page data
        const path = window.location.pathname;
        if (path.includes('math')) return 'math';
        if (path.includes('science')) return 'science';
        if (path.includes('sst')) return 'sst';
        return 'math'; // Default
    }

    getDifficultyFromPage() {
        // Extract difficulty from URL or page data
        const path = window.location.pathname;
        if (path.includes('easy')) return 'easy';
        if (path.includes('medium')) return 'medium';
        if (path.includes('hard')) return 'hard';
        return 'easy'; // Default
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
}); 