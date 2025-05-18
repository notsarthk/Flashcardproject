class Flashcard {
    constructor(element, question, answer) {
        this.element = element;
        this.question = question;
        this.answer = answer;
        this.isFlipped = false;
        this.initialize();
    }

    initialize() {
        this.element.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-content">${this.question}</div>
                </div>
                <div class="card-back">
                    <div class="card-content">
                        <span class="mirrored-text">${this.answer}</span>
                    </div>
                </div>
            </div>
        `;
    }

    flip() {
        this.isFlipped = !this.isFlipped;
        this.element.classList.toggle('is-flipped');
    }

    reset() {
        this.isFlipped = false;
        this.element.classList.remove('is-flipped');
    }
}

export default Flashcard; 