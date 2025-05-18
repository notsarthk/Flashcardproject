class CardManager {
    constructor(container) {
        this.container = container;
        this.cards = [];
        this.initialize();
    }

    initialize() {
        this.container.innerHTML = `
            <div class="card-list"></div>
            <div class="add-card-form">
                <h2>Add New Card</h2>
                <input type="text" id="custom-question" placeholder="Enter your question">
                <input type="text" id="custom-answer" placeholder="Enter your answer">
                <button id="add-card-btn">Add Card</button>
            </div>
        `;
        this.bindEvents();
    }

    bindEvents() {
        const addBtn = this.container.querySelector('#add-card-btn');
        addBtn.addEventListener('click', () => this.handleAddCard());
    }

    handleAddCard() {
        const question = this.container.querySelector('#custom-question').value;
        const answer = this.container.querySelector('#custom-answer').value;

        if (question && answer) {
            this.addCard({ question, answer });
            this.clearForm();
        }
    }

    addCard(card) {
        this.cards.push(card);
        this.saveCards();
        this.render();
    }

    editCard(index, card) {
        this.cards[index] = card;
        this.saveCards();
        this.render();
    }

    deleteCard(index) {
        this.cards.splice(index, 1);
        this.saveCards();
        this.render();
    }

    clearForm() {
        this.container.querySelector('#custom-question').value = '';
        this.container.querySelector('#custom-answer').value = '';
    }

    saveCards() {
        localStorage.setItem('flashcardStorage', JSON.stringify(this.cards));
    }

    loadCards() {
        const savedCards = localStorage.getItem('flashcardStorage');
        if (savedCards) {
            this.cards = JSON.parse(savedCards);
            this.render();
        }
    }

    render() {
        const cardList = this.container.querySelector('.card-list');
        cardList.innerHTML = this.cards.map((card, index) => `
            <div class="card-item">
                <div class="card-content">
                    <p><strong>Q:</strong> ${card.question}</p>
                    <p><strong>A:</strong> ${card.answer}</p>
                </div>
                <div class="card-actions">
                    <button onclick="cardManager.editCard(${index})" class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="cardManager.deleteCard(${index})" class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

export default CardManager; 