// grid size
let rows = 4;
let columns = 2; 
// array to contain all cards
let cards = [];
// to store random ordered value for each card
let random;

// Get HTML elements
let boardElement = document.getElementById("board");
let initContainer = document.createElement("div");
initContainer.className = "init-container";
boardElement.appendChild(initContainer);
let newGameBtn = document.getElementById("newGame");
newGameBtn.classList.add("start-btn");
newGameBtn.value = "START!";

// realizar al inicio
//Evento que al cargarse la ventana carga las funciones cargarImagenes, empezarJuego y cargar el reloj
window.onload = () => setGridSize();

///Definicion funciones

// Wait for user inputs and sets rows and columns size.
const setGridSize = () => {
  //  Create dialog h2
  let initQuestion = document.createElement("h2");
  initQuestion.className = "init-question";
  initQuestion.innerHTML = "SET GRID SIZE";
  initContainer.appendChild(initQuestion);
  // Create rows number input
  let rowsTag = document.createElement("input");
  rowsTag.setAttribute("type", "number");
  rowsTag.setAttribute("role", "spinbutton");
  rowsTag.setAttribute("value", "4");
  rowsTag.setAttribute("min", "2");
  rowsTag.setAttribute("max", "10");
  rowsTag.className = "counter grid-size";
  initContainer.appendChild(rowsTag);
  // Set row to input value
  rowsTag.onchange = (e) => {
    rows = parseInt(e.target.value);
  };
  // Create 'X' character
  let times = document.createElement("h2");
  times.className = "init-question";
  times.innerHTML = "X";
  initContainer.appendChild(times);
  // Create columns number input
  let colsTag = document.createElement("input");
  colsTag.setAttribute("type", "number");
  colsTag.setAttribute("value", "2");
  colsTag.setAttribute("min", "2");
  colsTag.setAttribute("max", "10");
  colsTag.setAttribute("max", "10");
  colsTag.setAttribute("step", "2");
  colsTag.className = "counter grid-size";
  // Set columns value to input
  colsTag.onchange = (e) => {
    columns = parseInt(e.target.value);
  };
  initContainer.appendChild(colsTag);
  // Set button to load board and change inner text
  newGameBtn.onclick = () => {
    loadBoard();
    newGameBtn.value = "New Game";
  };
};

//Load Board
function loadBoard() {
  // remove grid size setting from display
  initContainer.style.display = "none";
  // create values array for each card and randomize positions
  loadNumbers();
  // aux variables
  let num = 0;
  let row;
  // make  board elements and input elements. Append them to HTML.
  for (let i = 0; i <= rows * columns - 1; i++) {
    if (i % rows == 0 || i == 0) {
      row = document.createElement("div");
      row.className = "card";
      num++;
      row.id = `row${num}`;
      boardElement.appendChild(row);
    }
    let card = document.createElement("input");
    card.type = "image";
    card.id = `card${i}`;
    card.src = `./img/back.png`;
    card.width = 60;
    card.onclick = cardSelect; // cambiar a card.src=`./img/${random[i]}.png`
    card.value = random[i];
    cards.push(card);
    row.appendChild(card);
    newGameBtn.onclick = () => reset();
  }

  // new game button reloads page
  function reset() {
    location.reload();
  }

  // number pairs to be inserted in <input> elements
  function loadNumbers() {
    let numbers = [];
    for (let i = 1; i <= (rows * columns) / 2; i++) {
      numbers.push(i, i);
    }
    // desordenamos array
    random = numbers.sort(function () {
      return Math.random() - 0.5;
    });
  }
}
