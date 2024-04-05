
  // MODELO
  let peliculas = [
    {titulo: "Superlópez",   director: "Javier Ruiz Caldera", estreno: "2018"},
    {titulo: "E.T.",         director: "Steven Spielberg",    estreno: "1982"},
    {titulo: "Interstellar", director: "Christopher Nolan",   estreno: "2014"}
  ];

  // VISTAS
  function indexView(pelis) {
    pelis = pelis.map((p, i)=>`<li id="show" data-my-id="${i}"> ${pelis[i].titulo}
    <button id="borrar" data-my-id="${i}">Eliminar</button></li>`);
    return `<ul> ${pelis.join("")} </ul><button id="new">Añadir película</button>`;
  }

  function showView (peli) {
    return ` La película <b> ${peli.titulo}</b>, estrenada en el año <b>
    ${peli.estreno}</b>, fue dirigida por <b> ${peli.director}</b>.

    <p><button id="index"> Volver </button></p>`
  }
  function nuevaPeliculaContr() {
  // Pedir datos al usuario
  let titulo = prompt("Introduzca el título de la película:");
  let director = prompt("Introduzca el director de la película:");
  let estreno = prompt("Introduzca el año de estreno de la película:");

  // Crear un nuevo objeto película
  let nuevaPeli = { titulo, director, estreno}
    peliculas.push(nuevaPeli);

  // Mostrar la película añadida
  showContr(peliculas.length - 1); // Se muestra la última película del array
  }

  function borrarPeliculaContr(i) {
    peliculas.splice(i, 1);
    indexContr();
  }

  // CONTROLADORES
  function indexContr() { document.getElementById("main").innerHTML = indexView(peliculas);};
  function showContr(i) { document.getElementById("main").innerHTML = showView(peliculas[i]);};
  
  // EVENTOS
  document.addEventListener('click', ev => {
    if      (ev.target.matches('#index')) indexContr();
    else if (ev.target.matches('#show'))  showContr(ev.target.dataset.myId);
    else if (ev.target.matches('#new')) nuevaPeliculaContr();
    else if (ev.target.matches('#borrar')) {
      let i = parseInt(ev.target.id.split('-')[1]);
      borrarPeliculaContr(i);
    }
  })

  document.addEventListener('DOMContentLoaded', indexContr);




