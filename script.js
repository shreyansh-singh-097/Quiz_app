const quizQuestions = [
  {
    question: "Which header file is required to use printf() in C?",
    options: ["conio.h", "stdio.h", "stdlib.h", "string.h"],
    answer: 1
  },
  {
    question: "What is the size of an int data type in C (on most 32-bit systems)?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    answer: 2
  },
  {
    question: "Which operator is used to access the value at a particular address in C?",
    options: ["&", "*", "%", "#"],
    answer: 1
  },
  {
    question: "What is the correct way to declare a pointer in C?",
    options: ["int p;", "int *p;", "ptr int p;", "pointer p;"],
    answer: 1
  },
  {
    question: "Which function is used to allocate memory dynamically in C?",
    options: ["malloc()", "alloc()", "create()", "new()"],
    answer: 0
  },
  {
    question: "What is the output of 5 / 2 in C if both operands are int?",
    options: ["2.5", "2", "3", "Error"],
    answer: 1
  },
  {
    question: "Which keyword is used to define a constant in C?",
    options: ["final", "const", "static", "constant"],
    answer: 1
  },
  {
    question: "In C, which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "nested loop"],
    answer: 2
  },

  {
    question: "Which of the following is the entry point of a Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1
  },
  {
    question: "Java is which type of programming language?",
    options: ["Platform dependent", "Platform independent", "Only for web", "Only for mobile"],
    answer: 1
  },
  {
    question: "Which keyword is used to create a subclass in Java?",
    options: ["implements", "extends", "inherits", "super"],
    answer: 1
  },
  {
    question: "Which of the following is NOT a Java access modifier?",
    options: ["public", "private", "protected", "internal"],
    answer: 3
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    answer: 1
  },
  {
    question: "Which method is used to start a thread in Java?",
    options: ["run()", "start()", "execute()", "begin()"],
    answer: 1
  },
  {
    question: "Which collection class allows duplicate elements in Java?",
    options: ["HashSet", "ArrayList", "TreeSet", "HashMap"],
    answer: 1
  },
  {
    question: "Which keyword is used to handle exceptions in Java?",
    options: ["throw", "try", "exception", "error"],
    answer: 1
  },

  {
    question: "Which keyword is used to declare a block-scoped variable in JavaScript?",
    options: ["var", "let", "int", "define"],
    answer: 1
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.convert()"],
    answer: 1
  },
  {
    question: "What does '===' check in JavaScript?",
    options: ["Value only", "Type only", "Value and type", "Reference only"],
    answer: 2
  },
  {
    question: "Which function is used to convert a string into an integer in JavaScript?",
    options: ["Number.toInt()", "parseInt()", "stringToInt()", "Integer.parse()"],
    answer: 1
  },
  {
    question: "Which built-in object is used to store key-value pairs in JavaScript?",
    options: ["Array", "Object", "Set", "String"],
    answer: 1
  },
  {
    question: "Which method adds a new element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
  },
  {
    question: "What is the purpose of localStorage in JavaScript?",
    options: [
      "To store data temporarily till tab is closed",
      "To store data permanently in browser with no expiry",
      "To send data to server",
      "To delete cookies"
    ],
    answer: 1
  },
  {
    question: "Which event is fired when a user clicks a button in JavaScript?",
    options: ["onchange", "onclick", "onhover", "onsubmit"],
    answer: 1
  },

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hyperlink Text Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<src>"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to display a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    answer: 2
  },
  {
    question: "Which attribute is used to provide alternate text for an image?",
    options: ["title", "alt", "src", "longdesc"],
    answer: 1
  },
  {
    question: "Which tag is used to create an ordered list in HTML?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    answer: 2
  },
  {
    question: "Which input type is used to create a checkbox in HTML?",
    options: ["radio", "checkbox", "select", "text"],
    answer: 1
  },
  {
    question: "Which tag is used to embed JavaScript inside an HTML page?",
    options: ["<css>", "<js>", "<script>", "<javascript>"],
    answer: 2
  },
  {
    question: "Which HTML5 tag is used to define important navigation links?",
    options: ["<section>", "<nav>", "<header>", "<aside>"],
    answer: 1
  },

  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Sheet System"
    ],
    answer: 0
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["color", "bgcolor", "background-color", "background-shade"],
    answer: 2
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "Which CSS positioning value removes the element from normal document flow?",
    options: ["relative", "static", "absolute", "inherit"],
    answer: 2
  },
  {
    question: "Which selector is used to select an element with a specific id in CSS?",
    options: [".id", "#id", "*id", "@id"],
    answer: 1
  },
  {
    question: "Which property is used to make a flexbox container in CSS?",
    options: ["display: flex;", "position: flex;", "flex: true;", "layout: flex;"],
    answer: 0
  },
  {
    question: "Which CSS property is used to add space between the border and content of an element?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    answer: 1
  },
  {
    question: "Which unit in CSS is relative to the root element's font size?",
    options: ["em", "px", "rem", "vh"],
    answer: 2
  },
  {
    question: "What does DBMS stand for?",
    options: [
      "Database Management System",
      "Data Backup Management Software",
      "Database Modeling System",
      "Data Block Management System"
    ],
    answer: 0
  },
  {
    question: "Which SQL command is used to remove a table completely from the database?",
    options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
    answer: 1
  },
  {
    question: "Which key uniquely identifies a record in a database table?",
    options: ["Foreign Key", "Primary Key", "Candidate Key", "Super Key"],
    answer: 1
  },
  {
    question: "Which normal form removes partial dependency from a table?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 1
  },
  {
    question: "Which SQL clause is used to filter records after grouping?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: 2
  },
  {
    question: "Which type of join returns rows when there is a match in both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    answer: 2
  },
  {
    question: "Which command is used to update existing data in a table?",
    options: ["SET", "UPDATE", "MODIFY", "ALTER"],
    answer: 1
  },
  {
    question: "What is the main purpose of a foreign key in DBMS?",
    options: [
      "To speed up queries",
      "To uniquely identify a row",
      "To create a link between two tables",
      "To encrypt data"
    ],
    answer: 2
  },
  {
    question: "Which data structure uses FIFO (First In First Out) order?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: 1
  },
  {
    question: "Which data structure uses LIFO (Last In First Out) order?",
    options: ["Queue", "Stack", "Linked List", "Array"],
    answer: 1
  },
  {
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    answer: 1
  },
  {
    question: "Which header file is used for STL vector in C++?",
    options: ["<list>", "<vector>", "<array>", "<stack>"],
    answer: 1
  },
  {
    question: "Which traversal visits the root node first in a binary tree?",
    options: ["In-order", "Pre-order", "Post-order", "Level-order"],
    answer: 1
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    options: ["O(n log n)", "O(n)", "O(n^2)", "O(log n)"],
    answer: 2
  },
  {
    question: "Which data structure is used to implement recursion internally?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    answer: 1
  },
  {
    question: "In C++, which STL container stores unique elements in sorted order?",
    options: ["vector", "list", "set", "map"],
    answer: 2
  }
];

let currentQuestionIndex = 0;      
let score = 0;                     
let selectedOption = null;        
let isAnswered = false;            
let timer = null;                 
let timeLeft = 30;                 
let userAnswers = [];              

const TIME_PER_QUESTION = 30;     
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumberText = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreText = document.getElementById("score-text");
const timerText = document.getElementById("timer-text");
const progressBarFill = document.getElementById("progress-bar-fill");

const finalScoreText = document.getElementById("final-score-text");
const percentageText = document.getElementById("percentage-text");
const highScoreText = document.getElementById("high-score-text");
const resultMessage = document.getElementById("result-message");

const totalQuestionsSpan = document.getElementById("total-questions-display");
totalQuestionsSpan.textContent = quizQuestions.length;
window.onload = function () {
  let savedHighScore = localStorage.getItem("quizHighScore");
  if (savedHighScore === null) {
    savedHighScore = 0; 
  }
  document.getElementById("start-high-score").textContent = savedHighScore;
};

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", goToNextQuestion);
prevBtn.addEventListener("click", goToPreviousQuestion);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = new Array(quizQuestions.length).fill(null);

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);

  isAnswered = false;
  selectedOption = userAnswers[currentQuestionIndex]; 

  const currentQuestion = quizQuestions[currentQuestionIndex];

  questionNumberText.textContent =
    "Question " + (currentQuestionIndex + 1) + " of " + quizQuestions.length;

  questionText.textContent = currentQuestion.question;
  let progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBarFill.style.width = progressPercent + "%";

  scoreText.textContent = "Score: " + score;

  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(function (optionText, index) {
    const optionBtn = document.createElement("button");
    optionBtn.classList.add("option-btn");
    optionBtn.textContent = optionText;

    if (selectedOption !== null) {
      isAnswered = true;
      if (index === currentQuestion.answer) {
        optionBtn.classList.add("correct");
      }
      if (index === selectedOption && selectedOption !== currentQuestion.answer) {
        optionBtn.classList.add("wrong");
      }
      optionBtn.disabled = true;
    }

    optionBtn.addEventListener("click", function () {
      selectOption(index, optionBtn);
    });

    optionsContainer.appendChild(optionBtn);
  });
  prevBtn.disabled = currentQuestionIndex === 0;
  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextBtn.textContent = "Submit Quiz";
  } else {
    nextBtn.textContent = "Next";
  }

  startTimer();
}

function selectOption(index, optionBtn) {
  if (isAnswered) {
    return;
  }

  isAnswered = true;
  selectedOption = index;
  userAnswers[currentQuestionIndex] = index; 

  clearInterval(timer); 

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");


  allOptionButtons.forEach(function (btn, btnIndex) {
    btn.disabled = true; 

    if (btnIndex === currentQuestion.answer) {
      btn.classList.add("correct"); 
    }

    if (btnIndex === index && index !== currentQuestion.answer) {
      btn.classList.add("wrong"); 
    }
  });


  if (index === currentQuestion.answer) {
    score++;
    scoreText.textContent = "Score: " + score;
  }
}



function startTimer() {
  timeLeft = TIME_PER_QUESTION;
  timerText.textContent = "Time Left: " + timeLeft + "s";
  timerText.classList.remove("time-warning");

  timer = setInterval(function () {
    timeLeft--;
    timerText.textContent = "Time Left: " + timeLeft + "s";

    if (timeLeft <= 10) {
      timerText.classList.add("time-warning");
    }

    if (timeLeft <= 0) {
      clearInterval(timer);


      if (!isAnswered) {
        isAnswered = true;
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");
        allOptionButtons.forEach(function (btn, btnIndex) {
          btn.disabled = true;
          if (btnIndex === currentQuestion.answer) {
            btn.classList.add("correct");
          }
        });
      }

      setTimeout(goToNextQuestion, 800);
    }
  }, 1000); // runs every 1 second
}

function goToNextQuestion() {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

function goToPreviousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}


function showResult() {
  clearInterval(timer);

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const totalQuestions = quizQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  finalScoreText.textContent = score + " / " + totalQuestions;
  percentageText.textContent = percentage + "%";

  let highScore = localStorage.getItem("quizHighScore");
  if (highScore === null) {
    highScore = 0;
  } else {
    highScore = parseInt(highScore); 
  }

  if (score > highScore) {
    highScore = score;
    localStorage.setItem("quizHighScore", highScore);
    highScoreText.textContent = highScore + " (New High Score!)";
  } else {
    highScoreText.textContent = highScore;
  }

  if (percentage >= 80) {
    resultMessage.textContent = "Excellent! You have a strong grip on these subjects.";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Good job! A little more revision and you will master it.";
  } else {
    resultMessage.textContent = "Keep practicing! Review the topics and try again.";
  }
}

function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  let savedHighScore = localStorage.getItem("quizHighScore");
  if (savedHighScore === null) {
    savedHighScore = 0;
  }
  document.getElementById("start-high-score").textContent = savedHighScore;
}
