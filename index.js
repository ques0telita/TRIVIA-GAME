// const preguntas = [
//     {
//         categoria: "CIENCIA",
//         pregunta: "¿Cuál es el planeta más cercano al Sol?",
//         opciones: ["Marte", "Mercurio", "Venus", "Tierra"],
//         correcta: 1
//     },
//     {
//         categoria: "HISTORIA",
//         pregunta: "¿En qué año llegó el hombre a la Luna?",
//         opciones: ["1965", "1972", "1969", "1980"],
//         correcta: 2
//     }
// ];

// let indiceActual = 0;

// const txtCategoria = document.getElementById('categoria');
// const txtPregunta = document.getElementById('pregunta');
// const contenedorOpciones = document.getElementById('opciones');
// const btnSiguiente = document.getElementById('btn-siguiente');

// function cargarPregunta() {
//     const p = preguntas[indiceActual];
//     txtCategoria.innerText = p.categoria;
//     txtPregunta.innerText = p.pregunta;
//     contenedorOpciones.innerHTML = "";

//     p.opciones.forEach((opcion, index) => {
//         const boton = document.createElement('button');
//         boton.innerText = opcion;
//         boton.onclick = () => verificarRespuesta(index);
//         contenedorOpciones.appendChild(boton);
//     });
// }

// function verificarRespuesta(index) {
//     if(index === preguntas[indiceActual].correcta) {
//         alert("¡Correcto!");
//     } else {
//         alert("Incorrecto...");
//     }
// }

// btnSiguiente.onclick = () => {
//     indiceActual = (indiceActual + 1) % preguntas.length;
//     cargarPregunta();
// };

// // Iniciar
// cargarPregunta();