// Preguntas y respuestas
const questions = [
  {
    question: "¿Cuál es el nombre completo de HTML?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HyperText Markdown Language", correct: false },
      { text: "HighText Machine Language", correct: false },
      { text: "HyperTool Markup Language", correct: false }
    ]
  },
  {
    question: "¿Qué significa CSS?",
    answers: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style System", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Colorful Style Syntax", correct: false }
    ]
  },
  {
    question: "¿Qué método se usa para agregar un elemento al final de un array en JavaScript?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false }
    ]
  },
  {
    question: "¿Qué etiqueta HTML se usa para incluir JavaScript en una página?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false },
      { text: "<js>", correct: false },
      { text: "<code>", correct: false }
    ]
  },
  {
    question: "¿Qué propiedad de CSS se usa para cambiar el color de fondo?",
    answers: [
      { text: "background-color", correct: true },
      { text: "color", correct: false },
      { text: "bg-color", correct: false },
      { text: "background", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos del DOM
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

// Mostrar la pregunta actual
function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answersElement.appendChild(button);
  });
}

// Reiniciar el estado de la pregunta
function resetState() {
  nextButton.style.display = "none";
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

// Seleccionar una respuesta
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";

  if (correct) {
    score++;
    selectedButton.style.backgroundColor = "green";
  } else {
    selectedButton.style.backgroundColor = "red";
  }

  Array.from(answersElement.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green";
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

// Pasar a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Mostrar el puntaje final
function showScore() {
  resetState();
  questionElement.textContent = `¡Trivia terminada! Tu puntaje final es ${score} de ${questions.length}.`;
  nextButton.style.display = "none";
}

// Iniciar la trivia
showQuestion();
