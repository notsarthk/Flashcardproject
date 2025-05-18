class AddCardForm {
    constructor(container, category = 'math', difficulty = 'easy') {
        this.container = container;
        this.category = category;
        this.difficulty = difficulty;
        this.initialize();
    }

    initialize() {
        this.toggleButton = this.container.querySelector('.toggle-add-form');
        this.form = this.container.querySelector('.add-card-form');
        this.addButton = this.container.querySelector('#add-card-btn');
        this.questionInput = this.container.querySelector('#custom-question');
        this.answerInput = this.container.querySelector('#custom-answer');

        this.bindEvents();
    }

    bindEvents() {
        this.toggleButton.addEventListener('click', () => this.toggleForm());
        this.addButton.addEventListener('click', () => this.handleAddCard());
    }

    toggleForm() {
        this.form.classList.toggle('active');
    }

    handleAddCard() {
        const question = this.questionInput.value.trim();
        const answer = this.answerInput.value.trim();

        if (question && answer) {
            try {
                // Get existing cards
                const customCards = this.getCustomCards();

                // Add new card
                if (!customCards[this.category]) {
                    customCards[this.category] = { easy: [], medium: [], hard: [] };
                }
                if (!customCards[this.category][this.difficulty]) {
                    customCards[this.category][this.difficulty] = [];
                }
                customCards[this.category][this.difficulty].push({ question, answer });
                
                // Save to localStorage
                localStorage.setItem('flashcardStorage', JSON.stringify(customCards));

                // Clear form
                this.clearForm();

                // Reload page to show new card
                location.reload();
            } catch (error) {
                console.error('Error saving card:', error);
                alert('There was an error saving your card. Please try again.');
            }
        } else {
            alert('Please enter both a question and an answer.');
        }
    }

    getCustomCards() {
        try {
            return JSON.parse(localStorage.getItem('flashcardStorage')) || {
                science: { easy: [], medium: [], hard: [] },
                math: { easy: [], medium: [], hard: [] },
                sst: { easy: [], medium: [], hard: [] }
            };
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return {
                science: { easy: [], medium: [], hard: [] },
                math: { easy: [], medium: [], hard: [] },
                sst: { easy: [], medium: [], hard: [] }
            };
        }
    }

    clearForm() {
        this.questionInput.value = '';
        this.answerInput.value = '';
        this.form.classList.remove('active');
    }
}

export default AddCardForm; 