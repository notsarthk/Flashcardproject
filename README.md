# Flashcards Learning Platform

A web-based educational platform featuring interactive flashcards for mastering different subjects and difficulty levels.

## Features

- **Multiple Subjects:** Science, Mathematics, and Social Studies flashcards.
- **Three Difficulty Levels:** Easy, Medium, and Hard for each subject.
- **Interactive Flashcards:**
  - Click to flip cards and reveal answers.
  - "Know" and "Don't Know" buttons for self-assessment.
  - "Next Question" and "Retry" options after revealing the answer.
  - End-of-difficulty navigation with "Start Again" and "Head to Next Difficulty" buttons.
  - Progress indicator to show current question count.
  - Loading state for flashcards (requires JavaScript implementation).
- **Consistent Theme:** Modern gradient-based styling applied consistently across all pages.
- **Responsive Design:** Adapts to different screen sizes.
- **Separate Code:** JavaScript, CSS, and HTML are kept in separate files for better organization.
- **How It Works Page:** A dedicated page explaining the platform's usage (`pages/use-cases.html`).

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Font Awesome (for icons)
- Google Fonts (Inter)

## Setup

1. Clone the repository.
2. Open the `index.html` file in your web browser.
3. Navigate through the subjects and difficulty levels to start learning.

## Project Structure

```
./
├── index.html              # Main landing page
├── README.md               # Project documentation
├── .gitignore              # Specifies intentionally untracked files
├── css/
│   ├── paint.css           # Main theme styles
│   ├── flashcards.css      # Flashcard specific styles (includes flip animation)
│   └── use-cases.css       # Styles for the 'How It Works' page
├── js/
│   ├── flashcard-interactive.js # Core flashcard logic
│   ├── flashcards.js         # (Might be redundant, needs review)
│   ├── easy-math-data.js     # Data for Easy Math flashcards
│   ├── easy-math-nav.js      # Navigation function for Easy Math
│   ├── medium-math-data.js   # Data for Medium Math flashcards
│   ├── medium-math-nav.js    # Navigation function for Medium Math
│   ├── hard-math-data.js     # Data for Hard Math flashcards
│   ├── hard-math-nav.js      # Navigation function for Hard Math
│   ├── easy-science-data.js  # Data for Easy Science flashcards
│   ├── easy-science-nav.js   # Navigation function for Easy Science
│   ├── medium-science-data.js# Data for Medium Science flashcards
│   ├── medium-science-nav.js # Navigation function for Medium Science
│   ├── hard-science-data.js  # Data for Hard Science flashcards
│   ├── hard-science-nav.js   # Navigation function for Hard Science
│   ├── easy-sst-data.js      # Data for Easy SST flashcards
│   ├── easy-sst-nav.js       # Navigation function for Easy SST
│   ├── medium-sst-data.js    # Data for Medium SST flashcards
│   ├── medium-sst-nav.js     # Navigation function for Medium SST
│   ├── hard-sst-data.js      # Data for Hard SST flashcards
│   └── hard-sst-nav.js       # Navigation function for Hard SST
├── pages/
│   ├── index.html          # Copy of main landing page (can be removed)
│   ├── easy-math.html      # Easy Math flashcard page
│   ├── medium-math.html    # Medium Math flashcard page
│   ├── hard-math.html      # Hard Math flashcard page
│   ├── easy-science.html   # Easy Science flashcard page
│   ├── medium-science.html # Medium Science flashcard page
│   ├── hard-science.html   # Hard Science flashcard page
│   ├── easy-sst.html       # Easy Social Studies flashcard page
│   ├── medium-sst.html     # Medium Social Studies flashcard page
│   ├── hard-sst.html       # Hard Social Studies flashcard page
│   └── use-cases.html      # How It Works page
└── assets/
    └── ... (images or other assets)
```

## Contributing

If you'd like to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details. (Note: Create a LICENSE.md file if you don't have one) 