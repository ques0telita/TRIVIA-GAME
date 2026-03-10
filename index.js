// preguntas y respuestas
const questions = [
  {
    // cada pregunta tiene un texto, una imagen y un array de respuestas, cada respuesta tiene un texto y una propiedad "correct" que indica si es la respuesta correcta o no
    question: "¿Cuál es el elemento químico más abundante en el universo?",
    image: "imagenes/fotouniverso.jpg",
    answers: [
        { text: "Helio", correct: false },
        { text: "Oxígeno", correct: false },
        { text: "Hidrógeno", correct: true },
        { text: "Carbono", correct: false }
    ]
  },
  {
    question: "¿En qué año cayó el Muro de Berlín, simbolizando el fin próximo de la Guerra Fría?",
    image : "imagenes/murodeB.jpg",
    answers: [
        { text: "1991", correct: false },
        { text: "1989", correct: true },
        { text: "1987", correct: false },
        { text: "1993", correct: false }
    ]
  },
  {
    question: "¿Quién escribió la famosa novela 'Cien años de soledad'?",
    image: "imagenes/CADS.webp",
    answers: [
        { text: "Pablo Neruda", correct: false },
        { text: "Octavio Paz", correct: false },
        { text: "Gabriel García Márquez", correct: true },
        { text: "Mario Vargas Llosa", correct: false }
    ]
  },
  {
    question: "¿Cuál es la obra de arte más antigua conocida realizada por humanos (o ancestros humanos)?",
    image: "imagenes/garabatos.webp",
    answers: [
        { text: "Pinturas rupestres de la cueva de Altamira", correct: false },
        { text: "Leon-humano de la cueva de Stadel", correct: false },
        { text: "La Venus de Willendorf", correct: false },
        { text: "Grabados en una concha de Trinil", correct: true }
    ]
  },
  {
    question: "¿Qué pintor es conocido por haber pintado 'La persistencia de la memoria'?",
    image: "imagenes/persistencia.jpg",
    answers: [
      { text: "Salvador Dalí", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: false }
    ]
  },
  {
    question: "¿Cuál fue el primer país del mundo en conceder a las mujeres el derecho al voto en elecciones nacionales?",
    image: "imagenes/voto.avif",
    answers: [
      { text: "Estados Unidos", correct: false },
      { text: "Nueva Zelanda", correct: true },
      { text: " Suecia", correct: false },
      { text: "Finlandia", correct: false }
    ]
  },
  {
    question: "¿Cuál es el único país del mundo que tiene una bandera que no es cuadrilátera (ni cuadrada ni rectangular)?",
    image: "imagenes/flags.jpeg",
    answers: [
      { text: "Butan", correct: false },
      { text: "Ciudad del Vaticano", correct: false },
      { text: " Suiza", correct: false },
      { text: "Nepal", correct: true }
    ]
  },
  {
    question: "¿A qué filósofo se le atribuye la famosa frase: 'El hombre es un lobo para el hombre' (Homo homini lupus)?",
    image: "imagenes/ThomasH.webp",
    answers: [
      { text: "Thomas Hobbes", correct: true },
      { text: "John Locke", correct: false },
      { text: "Jean-Jacques Rousseau", correct: false },
      { text: "Immanuel Kant", correct: false }
    ]
  },
  {
    question: "¿Cuál es el metal más escaso en la corteza terrestre?",
    image: "imagenes/astato.jpg",
    answers: [
        { text: "Francio", correct: false },
        { text: "Iridio", correct: false },
        { text: "Astato", correct: true },
        { text: "Rodio", correct: false }
    ]
  },
  {
    question: "En la mitología griega, ¿quién fue el único mortal que logró engañar a Tánatos (la muerte) encadenándola?",
    image: "imagenes/tanatos.webp",
    answers: [
        { text: "Orfeo", correct: false },
        { text: "Tantalo", correct: false },
        { text: "Sísifo", correct: true },
        { text: "Prometeo", correct: false }
    ]
  },
];
// la variable para rastrear el índice de la pregunta actual que se muestra al usuario
let currentQuestionIndex = 0;
// la variable para acumular los puntos del usuario a medida que responde correctamente a las preguntas
let score = 0;

// elementos del DOM (pregunta, respuestas, boton siguiente y puntaje)
// los eventos de el DOM permite responder a acciones del usuario, como clics o escritura, y ejecutar funciones en respuesta a esas acciones
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

// mostrar la pregunta
function showQuestion() {
  // esto fundamental, ya que limpia el contenedor de respuestas y oculta el boton "siguiente" cada vez que pasamos de una pregunta a otra, evitando que se acumulen elementos en pantalla
  resetState();
  // muestra las respuestas y la pregunta
  answersElement.style.display = "flex";
  // muestra la pregunta actual y su imagen correspondiente en el DOM
  const currentQuestion = questions[currentQuestionIndex];
  // esto es para verificar que la pregunta se está mostrando correctamente en el navegador
  console.log("Showing question:", currentQuestion.question);
  questionElement.textContent = currentQuestion.question;
  // esto es para verificar que la imagen se está mostrando correctamente en el navegador
  if (currentQuestion.image) {
    document.getElementById("question-image").src = currentQuestion.image;
    document.getElementById("question-image").style.display = "block";
  } else {
    document.getElementById("question-image").style.display = "none";
  }
// recorre el array de respuestas de la pregunta actual y crea un botón para cada respuesta, asignando su texto y una propiedad "correct" 
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
  // esto es para verificar que el estado se está reseteando correctamente en el navegador
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}

// para seleccionar la respuesta
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  // esto es para verificar que la respuesta seleccionada es correcta o incorrecta en el navegador
  console.log("Selected answer:", selectedButton.textContent, "Correct:", correct);

  if (correct) {
    score++;
    // resalta la respuesta correcta y reproduce el sonido de acierto
    selectedButton.style.backgroundColor = "green";
    const audio = new Audio('sonidos/ta-daaaa.mp3');
    audio.play();
  } else {
    //resalta la respuesta incorrecta y reproduce el sonido de error
    selectedButton.style.backgroundColor = "red";
    const audio = new Audio('sonidos/wrong1.mp3');
    audio.play();
  }

// esto muestra larespuesta correcta o incorrecta, y no permite cambiar de respuesta
  for (const button of answersElement.children) {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "green";
    }
    button.disabled = true;
  };
// esto es para verificar que el botón de siguiente se muestra en el navegador
  nextButton.style.display = "block";
}

// funcion para pasar a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
// esto es para verificar que el índice de la pregunta se está actualizando correctamente en el navegador
  console.log("Next question index:", currentQuestionIndex);
// esto es para verificar que se muestra la siguiente pregunta o el puntaje final en el navegador
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// mostrar el puntaje final al usuario
function showScore() {
  resetState();
  // oculta la imagen de la pregunta y las respuestas, y muestra el puntaje final al usuario
  document.getElementById("question-image").style.display = "none";
  answersElement.style.display = "none";
  // esto es para verificar que el puntaje se está mostrando correctamente en el navegador
  console.log("Final score:", score, "out of", questions.length);
  // muestra el mensaje de puntaje final al usuario
  questionElement.textContent = `¡Trivia terminada! Tu puntaje final es ${score} de ${questions.length}.`;
  nextButton.style.display = "none";

}

// inicia el juego mostrando la primera pregunta al usuario
showQuestion();
// enciende todo tu proyecto, si no tiene esta linea al final, al abrir la pagina verias el contenedor vacio y sin texto ni botones
