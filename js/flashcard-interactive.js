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
        
        // Progress tracking stats
        this.stats = {
            total: this.cards.length,
            known: 0,
            unknown: 0,
            currentStreak: 0
        };
        
        this.initializeEventListeners();
        this.loadCurrentCard();
        this.updateProgressDisplay();
    }

    initializeEventListeners() {
        // Card flip on click
        this.flashcardElement.addEventListener('click', () => {
            if (!this.flashcardElement.classList.contains('is-flipped')) {
                this.flipCardToShowAnswer();
            }
        });

        // Know button
        this.knowBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.handleAnswer('know');
        });

        // Don't know button
        this.dontKnowBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            this.handleAnswer('dont-know');
        });

        // Navigation buttons
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.retryBtn.addEventListener('click', () => this.retryQuestion());
        this.startAgainBtn.addEventListener('click', () => this.startAgain());
        this.nextDifficultyBtn.addEventListener('click', () => {
            if (typeof navigateToNextDifficulty === 'function') {
                navigateToNextDifficulty();
            } else {
                console.error('navigateToNextDifficulty function not found!');
            }
        });
    }

    loadCurrentCard() {
        if (this.currentCard < this.cards.length) {
            const card = this.cards[this.currentCard];
            const cardFrontContent = this.flashcardElement.querySelector('.card-front .card-content');
            const cardBackContent = this.flashcardElement.querySelector('.card-back .card-content');

            cardFrontContent.textContent = card.question;
            cardBackContent.innerHTML = '<span class="mirrored-text">' + card.answer + '</span>';

            this.resetCardState();
            this.flashcardElement.style.display = 'flex';
            this.actionButtons.style.display = 'flex';
            this.endOfDifficultyButtons.style.display = 'none';
        } else {
            this.endOfDifficulty();
        }
    }

    resetCardState() {
        this.flashcardElement.classList.remove('is-flipped');
        this.actionButtons.style.display = 'flex';
        this.nextBtn.style.display = 'none';
        this.retryBtn.style.display = 'none';
        this.endOfDifficultyButtons.style.display = 'none';
    }
    
    flipCardToShowAnswer() {
        this.flashcardElement.classList.add('is-flipped');
        this.actionButtons.style.display = 'none';
        this.nextBtn.style.display = 'none';
        this.retryBtn.style.display = 'none';
        this.endOfDifficultyButtons.style.display = 'none';
    }

    handleAnswer(type) {
        this.actionButtons.style.display = 'none';

        if (type === 'know') {
            this.nextBtn.style.display = 'block';
            this.triggerConfetti();
            this.stats.known++;
            this.stats.currentStreak++;
        } else if (type === 'dont-know') {
            this.retryBtn.style.display = 'block';
            this.stats.unknown++;
            this.stats.currentStreak = 0;
            const currentCard = this.cards[this.currentCard];
            this.cards.push(currentCard);
        }
        
        this.updateProgressDisplay();
        
        if (!this.flashcardElement.classList.contains('is-flipped')) {
            this.flashcardElement.classList.add('is-flipped');
        }
        this.endOfDifficultyButtons.style.display = 'none';
    }

    updateProgressDisplay() {
        let progressContainer = document.querySelector('.progress-container');
        if (!progressContainer) {
            progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            this.flashcardElement.parentNode.insertBefore(progressContainer, this.flashcardElement);
        }

        const progress = (this.stats.known / this.stats.total) * 100;
        
        progressContainer.innerHTML = `
            <div class="progress-bar" style="width: ${progress}%"></div>
            <div class="progress-stats">
                <span>Known: ${this.stats.known}</span>
                <span>Unknown: ${this.stats.unknown}</span>
                <span>Current Streak: ${this.stats.currentStreak}</span>
            </div>
        `;
    }

    nextQuestion() {
        this.currentCard++;
        this.loadCurrentCard();
    }

    retryQuestion() {
        this.resetCardState();
    }

    endOfDifficulty() {
        this.flashcardElement.style.display = 'none';
        this.actionButtons.style.display = 'none';
        this.nextBtn.style.display = 'none';
        this.retryBtn.style.display = 'none';
        this.endOfDifficultyButtons.style.display = 'flex';
    }

    startAgain() {
        this.currentCard = 0;
        this.loadCurrentCard();
    }

    triggerConfetti() {
        const confettiContainer = document.querySelector('.confetti-container');
        confettiContainer.style.display = 'block';

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.innerHTML = '';
            confettiContainer.style.display = 'none';
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const flashcard = new InteractiveFlashcard();
}); 