// MODELO
let    inic = [ "Superlópez", "E.T.", "Interstellar" ],     peliculas = [...inic];

// VISTAS
function indexView(pelis) {
  pelis = pelis.map((p, i) => `<li> 
      ${pelis[i]} 
      <button id="edit" data-my-id="${i}">Editar</button> 
      <button id="delete" data-my-id="${i}">Eliminar</button></li>`);
  return `<ul> ${pelis.join("")} </ul> 
      <button id="new">Nueva película</button> 
      <button id="reset">Reiniciar</button>`;
}

function resetContr() {
  if (!confirm("¿Desea reiniciar la aplicación y perder todos los cambios?")) {
    return; 
  }
}

function newView () {
  return `<input type="text" id="pelicula" placeholder="Nueva película">
          <button id="create">Crear</button>`
}

function editView(i) {
  const peli = peliculas[i];
  return `<input type="text" id="pelicula" value="${peli}" placeholder="Nuevo nombre">
      <button id="save" data-my-id="${i}">Guardar</button>`;
}

function saveContr(i) {
  const peli = document.getElementById("pelicula").value;
  peliculas[i] = peli;
  indexContr();
}

function editContr(i) {
  document.getElementById("main").innerHTML = editView(i);
}

function deleteContr(i) {
  if (confirm("¿Deseas eliminar la película?")) {
    peliculas.splice(i, 1);
    indexContr();
  }
}

// CONTROLADORES
function indexContr()  { document.getElementById("main").innerHTML = indexView(peliculas);};
function newContr()    { document.getElementById("new").outerHTML  = newView();};
function createContr() { peliculas.push(document.getElementById("pelicula").value); indexContr(); };
// function resetContr()  { peliculas = [...inic];                                     indexContr(); };

// EVENTOS
document.addEventListener('click', ev => {
  if      (ev.target.matches('#new'))    newContr();
  else if (ev.target.matches('#create')) createContr();
  else if (ev.target.matches('#reset'))  resetContr();
  else if (ev.target.matches('#edit')) editContr(ev.target.dataset.myId);
  else if (ev.target.matches('#save')) saveContr(ev.target.dataset.myId);
  else if (ev.target.matches('#delete')) deleteContr(ev.target.dataset.myId);
})

document.addEventListener('DOMContentLoaded', indexContr);


