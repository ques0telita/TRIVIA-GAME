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
    question: "¿Cuál es la obra de arte más antigua conocida realizada por humanos (o ancestros humanos)?",
    answers: [
        { text: "Pinturas rupestres de la cueva de Altamira", correct: false },
        { text: "Leon-humano de la cueva de Stadel", correct: false },
        { text: "La Venus de Willendorf", correct: false },
        { text: "Grabados en una concha de Trinil", correct: true }
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
  },
  {
    question: "¿Cuál fue el primer país del mundo en conceder a las mujeres el derecho al voto en elecciones nacionales?",
    answers: [
      { text: "Estados Unidos", correct: false },
      { text: "Nueva Zelanda", correct: true },
      { text: " Suecia", correct: false },
      { text: "Finlandia", correct: false }
    ]
  },
  {
    question: "¿Cuál es el único país del mundo que tiene una bandera que no es cuadrilátera (ni cuadrada ni rectangular)?",
    answers: [
      { text: "Butan", correct: false },
      { text: "Ciudad del VAticano", correct: false },
      { text: " Suiza", correct: false },
      { text: "Nepal", correct: true }
    ]
  },
  {
    question: "¿A qué filósofo se le atribuye la famosa frase: 'El hombre es un lobo para el hombre' (Homo homini lupus)?",
    answers: [
      { text: "Thomas Hobbes", correct: true },
      { text: "John Locke", correct: false },
      { text: "Jean-Jacques Rousseau", correct: false },
      { text: "Immanuel Kant", correct: false }
    ]
  },
  {
    question: "¿Cuál es el metal más escaso en la corteza terrestre?",
    answers: [
        { text: "Francio", correct: false },
        { text: "Iridio", correct: false },
        { text: "Astato", correct: true },
        { text: "Rodio", correct: false }
    ]
  },
  {
    question: "En la mitología griega, ¿quién fue el único mortal que logró engañar a Tánatos (la muerte) encadenándola?",
    answers: [
        { text: "Orfeo", correct: false },
        { text: "Tantalo", correct: false },
        { text: "Sísifo", correct: true },
        { text: "Prometeo", correct: false }
    ]
  },
];

let currentQuestionIndex = 0;
let score = 0;

// elementicos importanticos
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

// ejto de aca muestra la pregunta
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

// reset para la next pregunta
function resetState() {
  nextButton.style.display = "none";
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

// para seleccionar la respuesta
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

// boton para pasar a la next pregunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// mostrar el puntaje
function showScore() {
  resetState();
  questionElement.textContent = `¡Trivia terminada! Tu puntaje final es ${score} de ${questions.length}.`;
  nextButton.style.display = "none";
}

// start de la trivinopolis
showQuestion();
