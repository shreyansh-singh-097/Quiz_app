# CSE Quiz Application

A simple, browser-based quiz application built using **HTML, CSS, and Vanilla JavaScript**, created as a B.Tech Computer Science Engineering end-semester mini project.

The quiz contains **56 multiple choice questions** covering core CSE subjects:
- C Programming
- Java
- JavaScript
- HTML
- CSS
- DBMS
- DSA using C++

---

## 1. Project Overview

This project simulates a real exam-style quiz where the user answers one question at a time, under a time limit, and receives a final score with percentage at the end. It is built without any external library or framework — only plain HTML, CSS, and JavaScript — so that every line of logic can be explained during a viva.

---

## 2. Folder Structure

```
Quiz-App/
│
├── index.html      # Page structure (Start screen, Quiz screen, Result screen)
├── style.css       # All styling (layout, colors, responsiveness)
└── script.js       # All quiz logic (questions data, timer, scoring, localStorage)
```

---

## 3. Features

- 56 multiple choice questions from 7 CSE subjects
- Start Quiz screen with instructions
- One question shown at a time
- Next and Previous navigation buttons
- Progress bar + "Question X of 56" indicator
- 30 second countdown timer per question
- Auto move to next question when timer ends
- Answer locking — once selected, the option cannot be changed
- Correct answer highlighted in **green**, wrong answer in **red**
- Live score tracking while attempting the quiz
- Final result screen with score and percentage
- High score saved in the browser using `localStorage` (persists even after closing the browser)
- Restart Quiz option
- Fully responsive layout for mobile and desktop

---

## 4. How to Run This Project

1. Download / clone the `Quiz-App` folder.
2. Open the folder on your computer.
3. Double-click `index.html` to open it directly in any web browser

   **OR**

4. Open the folder in VS Code and run it using the "Live Server" extension.

No installation, no build step, and no internet connection is required — it runs completely offline.

---

## 5. Technology Used

| Technology | Purpose |
|------------|---------|
| HTML5      | Page structure and content |
| CSS3       | Styling and responsive layout |
| JavaScript (ES6) | Quiz logic, DOM manipulation, timer, localStorage |

No Bootstrap, no React, no Tailwind, no external JS libraries are used.

---

## 6. Explanation of Major Functions (script.js)

| Function | Purpose |
|----------|---------|
| `startQuiz()` | Resets all variables and displays the first question when "Start Quiz" is clicked |
| `loadQuestion()` | Renders the current question, builds its 4 option buttons, updates the progress bar and question counter, and restarts the timer |
| `selectOption(index, optionBtn)` | Runs when the user clicks an option. Locks the answer, applies green/red highlighting, updates the score, and disables further clicks |
| `startTimer()` | Starts a 30-second countdown using `setInterval()`. Auto-advances to the next question if time runs out |
| `goToNextQuestion()` | Moves to the next question, or calls `showResult()` if it was the last question |
| `goToPreviousQuestion()` | Moves back one question so the user can review their earlier answer |
| `showResult()` | Calculates the final score and percentage, compares it with the saved high score in `localStorage`, and displays the result screen |
| `restartQuiz()` | Returns the user to the start screen so the quiz can be attempted again |

---

## 7. Core Logic Used

- **Arrays of Objects** — All 56 questions are stored as an array of objects (`question`, `options`, `answer`).
- **DOM Manipulation** — `document.createElement()`, `appendChild()`, `classList.add()` are used to dynamically generate option buttons for every question instead of hardcoding them in HTML.
- **Event Listeners** — `addEventListener("click", ...)` is used for all button interactions.
- **setInterval() / clearInterval()** — Used to implement the 30-second per-question timer.
- **localStorage** — Used to permanently store the user's high score in the browser using `localStorage.setItem()` and `localStorage.getItem()`.
- **Conditional Rendering** — `classList` is used to show/hide screens (`start-screen`, `quiz-screen`, `result-screen`) using a simple `hidden` CSS class instead of any framework.

---

## 8. Possible Future Enhancements

- Add subject-wise quiz selection (e.g., only DBMS or only Java)
- Add a question review screen at the end showing all correct/wrong answers
- Add sound effects for correct/wrong answers
- Store quiz history (multiple attempts) instead of only the high score
- Add a dark mode toggle

---

## 9. Author

Developed as a B.Tech CSE end-semester mini project to demonstrate practical use of HTML, CSS, and core JavaScript concepts (DOM manipulation, events, timers, and browser storage).
