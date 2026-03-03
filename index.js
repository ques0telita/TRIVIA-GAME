// Preguntas y respuestas
const questions = [
  {
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    answers: [
        { text: "Helio", correct: false },
        { text: "Oxígeno", correct: false },
        { text: "Hidrógeno", correct: true },
        { text: "Carbono", correct: false }
    ]
  },
  {
    question: "¿En qué año cayó el Muro de Berlín, simbolizando el fin próximo de la Guerra Fría?",
    answers: [
        { text: "1991", correct: false },
        { text: "1989", correct: true },
        { text: "1987", correct: false },
        { text: "1993", correct: false }
    ]
  },
  {
    question: "¿Quién escribió la famosa novela 'Cien años de soledad'?",
    answers: [
        { text: "Pablo Neruda", correct: false },
        { text: "Octavio Paz", correct: false },
        { text: "Gabriel García Márquez", correct: true },
        { text: "Mario Vargas Llosa", correct: false }
    ]
  },
  {
    question: "¿Qué órgano del cuerpo humano consume más energía?",
    answers: [
        { text: "Cerebro", correct: true },
        { text: "Corazón", correct: false },
        { text: "Hígado", correct: false },
        { text: "Musculos Esqueleticos", correct: false }
    ]
  },
  {
    question: "¿Qué pintor es conocido por haber pintado 'La persistencia de la memoria'?",
    answers: [
      { text: "Salvador Dalí", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: false }
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
