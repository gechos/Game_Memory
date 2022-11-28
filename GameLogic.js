// get elements
// let tableElement = document.getElementById('table');
let player1Counter = document.getElementById("player1Counter");
let player2Counter = document.getElementById("player2Counter");
let playerTurn = document.getElementById("playerTurn");

// players and score
let players = {
  player1: 0,
  player2: 0,
};

// turn storing
let turn = 1;

// selected cards storing
let selectedCards = [];
// let selectedCardsId = [];

// on card click -> push to selectedCards; display value on screen; if 2 cards selected -> checkSelection
const cardSelect = (e) => {
  // store selected card
  const selectedCard = e.target;
  // conditional to avoid selecting over 2 cards
  if (selectedCards.length < 2) {
    // store selected card in global space
    selectedCards.push(selectedCard);
    // disables interaction with selected card
    selectedCard.setAttribute("disabled", "");
    // ponemos imagen y guardamos id para cambio imagen despues
    selectedCard.src = "./img/" + selectedCard.value + ".png";
  };
  // display value on screen
  if (selectedCards.length == 2) {
    selectionCheck();
  }
};

// check if cards match
const selectionCheck = () => {
  // temporarilly store selected cards and change image after .8s
  const flipCard = () => {
    const tempCards = selectedCards;
    tempCards.map((each) => {
      setTimeout(() => (each.src = "./img/back.png"), 800);
    });
  };
  //--  
  //--case 1: player 1 scores
  if (selectedCards[0].value == selectedCards[1].value && turn == 1) {
    // add point to player 1
    players.player1++;
    // render player points
    player1Counter.value = players.player1;
    // clear selected cards array
    selectedCards = [];
    //--
    //--case 2: player 2 scores
  } else if (selectedCards[0].value == selectedCards[1].value && turn == 2) {
    players.player2++;
    player2Counter.value = players.player2;
    selectedCards = [];
    //--
    //--case 3: player 1 fails
  } else if (turn == 1) {
    // change image on cards to default
    flipCard();
    // re-enable selected card
    selectedCards.map((each) => each.removeAttribute("disabled"));
    // clear selected cards array
    selectedCards = [];
    //change turn
    turn = 2;
    playerTurn.value = turn;
    //--
    //--case 4: player 2 fails
  } else if (turn == 2) {
    // change image on cards to default
    flipCard();
    // re-enables selected card
    selectedCards.map((each) => each.removeAttribute("disabled"));
    // clear selected cards array
    selectedCards = [];
    //change turn
    turn = 1;
    playerTurn.value = turn;
  }
};
