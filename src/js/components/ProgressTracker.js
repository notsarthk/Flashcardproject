class ProgressTracker {
    constructor(container) {
        this.container = container;
        this.stats = {
            total: 0,
            known: 0,
            unknown: 0,
            currentStreak: 0
        };
        this.initialize();
    }

    initialize() {
        this.container.innerHTML = `
            <div class="progress-bar"></div>
            <div class="progress-stats">
                <span>Known: 0</span>
                <span>Unknown: 0</span>
                <span>Current Streak: 0</span>
            </div>
        `;
    }

    updateStats(stats) {
        this.stats = { ...this.stats, ...stats };
        this.render();
    }

    render() {
        const progress = (this.stats.known / this.stats.total) * 100;
        this.container.querySelector('.progress-bar').style.width = `${progress}%`;
        
        const stats = this.container.querySelector('.progress-stats');
        stats.innerHTML = `
            <span>Known: ${this.stats.known}</span>
            <span>Unknown: ${this.stats.unknown}</span>
            <span>Current Streak: ${this.stats.currentStreak}</span>
        `;
    }
}

export default ProgressTracker; 