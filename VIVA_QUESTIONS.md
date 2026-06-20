# Viva Questions and Answers — Quiz Application

A list of likely viva/exam-evaluation questions about this project, with simple answers you can explain confidently.

---

### Q1. What is the objective of this project?
**Ans:** To build a web-based quiz application that tests a user's knowledge of core CSE subjects (C, Java, JavaScript, HTML, CSS, DBMS, DSA) using only HTML, CSS, and JavaScript — without any framework or library.

---

### Q2. Why did you not use any framework like React or Bootstrap?
**Ans:** The goal of this project was to demonstrate a strong understanding of core web fundamentals — HTML for structure, CSS for styling, and vanilla JavaScript for logic and DOM manipulation — rather than relying on a framework that hides this logic.

---

### Q3. How are the questions stored in your project?
**Ans:** All questions are stored in a JavaScript array called `quizQuestions`, where each question is an object with four properties: `question` (the question text), `options` (an array of 4 choices), and `answer` (the index number of the correct option, from 0 to 3).

---

### Q4. Why did you store the correct answer as an index number (0-3) instead of the text itself?
**Ans:** Storing it as an index makes comparison faster and simpler. When the user clicks an option, JavaScript checks if the clicked option's index matches `question.answer`. Comparing numbers is more reliable than comparing strings, which could differ in spacing or case.

---

### Q5. How are the option buttons created on the page? They are not hardcoded in HTML.
**Ans:** The options are created dynamically in JavaScript using `document.createElement("button")` inside a `forEach` loop that runs once for every option in the current question. Each button is then appended to the `options-container` div using `appendChild()`. This way, the same HTML structure works for all 56 questions.

---

### Q6. How does the timer work?
**Ans:** The `startTimer()` function uses `setInterval()` to run a countdown every 1000 milliseconds (1 second). It decreases the `timeLeft` variable by 1 each second and updates the timer text on screen. When `timeLeft` reaches 0, `clearInterval()` stops the timer and the app automatically moves to the next question.

---

### Q7. What happens if the user does not answer before the timer runs out?
**Ans:** The current question is marked as answered (`isAnswered = true`), the correct option is highlighted in green so the user can see it, all options are disabled, and after a short delay the app automatically loads the next question. No score is added since the user did not select anything.

---

### Q8. How did you prevent the user from changing their answer after selecting one?
**Ans:** A boolean variable `isAnswered` is used. Once an option is clicked, `isAnswered` is set to `true` and all the option buttons are disabled using `btn.disabled = true`. The `selectOption()` function also checks `if (isAnswered) return;` at the very start, so even if disabled buttons were somehow clicked, the function would exit immediately.

---

### Q9. How is the correct/wrong answer highlighting done?
**Ans:** Using CSS classes. When an option is clicked, JavaScript loops through all 4 option buttons. It adds a `correct` class (green background) to the button matching the correct answer index, and adds a `wrong` class (red background) to the button the user clicked, only if it was incorrect. These classes are defined in `style.css`.

---

### Q10. How is the score calculated and displayed?
**Ans:** A variable `score` starts at 0. Every time the user selects the correct option, `score++` increases it by one. The live score is shown during the quiz using `scoreText.textContent`, and the final score is shown on the result screen as `score + " / " + totalQuestions`.

---

### Q11. How is the percentage calculated?
**Ans:** Using the formula:
```js
let percentage = Math.round((score / totalQuestions) * 100);
```
`Math.round()` is used to round the result to the nearest whole number, since percentages with too many decimals would look messy.

---

### Q12. What is localStorage and how have you used it in this project?
**Ans:** `localStorage` is a browser feature that allows web pages to store small amounts of data (as key-value pairs, in string format) permanently on the user's device — the data stays even after the browser is closed. In this project, it is used to store the user's **high score** using:
```js
localStorage.setItem("quizHighScore", highScore);
```
and retrieve it using:
```js
localStorage.getItem("quizHighScore");
```

---

### Q13. Why did you convert the value from localStorage using parseInt()?
**Ans:** Because `localStorage` only stores data as strings. Even though we save a number, it comes back as a string like `"15"` instead of `15`. `parseInt()` converts it back into a proper number so it can be compared correctly using `>` with the current score.

---

### Q14. How does the Previous button work without breaking the score?
**Ans:** All user answers are stored in an array called `userAnswers`, with one entry per question. When the user clicks Previous, the app simply re-loads that question using `loadQuestion()`, checks if `userAnswers[currentQuestionIndex]` already has a value, and if so, re-displays the same green/red highlighting without re-running the scoring logic. This way, the score is only ever added once per question.

---

### Q15. How did you make the application responsive for mobile devices?
**Ans:** By using a CSS `@media (max-width: 480px)` query, which applies different styles (like stacking the top info bar vertically and making buttons full-width) only when the screen width is 480 pixels or less. The layout also uses relative widths like `max-width` and `%` instead of fixed pixel widths so it naturally adjusts to different screen sizes.

---

### Q16. What is the difference between `let`, `var`, and `const`? Where have you used them?
**Ans:** `let` and `const` are block-scoped (only exist inside the `{}` they are declared in), while `var` is function-scoped and can cause bugs. `const` is used for values that never change (like `TIME_PER_QUESTION = 30`), and `let` is used for values that change over time (like `currentQuestionIndex`, `score`, `timeLeft`). `var` is intentionally avoided in this project to follow modern JavaScript practice.

---

### Q17. What does `classList.add()` / `classList.remove()` do?
**Ans:** They are DOM methods used to add or remove a CSS class from an HTML element dynamically. For example, `optionBtn.classList.add("correct")` applies the `.correct` CSS style (green background) to that button without having to rewrite its entire `style` attribute manually.

---

### Q18. What is the purpose of the `hidden` class in your CSS?
**Ans:** It is a simple utility class (`display: none;`) used to show or hide entire sections of the page — the Start screen, Quiz screen, and Result screen — by adding or removing this one class with JavaScript. This avoids needing separate HTML pages for each screen.

---

### Q19. Why is `clearInterval()` important in this project?
**Ans:** `setInterval()` keeps running forever unless stopped. `clearInterval(timer)` is called every time a question is answered, when moving to the next/previous question, or when the quiz ends — to stop the old timer before a new one starts. Without this, multiple timers would run together and the countdown would behave incorrectly (speed up/become inaccurate).

---

### Q20. Can this project be extended further? How?
**Ans:** Yes. Possible extensions include: allowing the user to pick a specific subject before starting, adding a detailed review screen showing all questions with correct answers at the end, adding negative marking, or storing the full quiz history instead of just the high score. These features were left out from this iteration to keep the project simple, well within the scope of an end-semester evaluation, and easy to explain in a viva.

---

### Q21. What is the difference between `==` and `===` in JavaScript? (related general concept used in code)
**Ans:** `==` compares only values and converts types automatically if needed (loose comparison), while `===` compares both value and type without conversion (strict comparison). This project uses `===` (e.g., `index === currentQuestion.answer`) to avoid unexpected bugs from type conversion.

---

### Q22. Why is the question bank written directly in JavaScript instead of fetching it from a database or JSON file?
**Ans:** Since this is a front-end-only academic project with no backend server, storing questions directly as a JavaScript array keeps the project simple, fast, and fully functional offline — which matches the scope and technical requirements of this assignment (HTML, CSS, and JavaScript only).
