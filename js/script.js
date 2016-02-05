
// Set global variables
var player = 0; 
var currentPosition = 0;
var rollResult = 0;

// Assign IDs to cells, iterate, append with id
function setCellIds() {
  var rowNumber = 1;
  var cellNumber = 100;
  $(".board .row").each(function(index, el){
    var $el = $(el);
    $.each($el.find(".cell").get().reverse(), function(index, cellElement) {
      $(cellElement).attr("id", cellNumber);//.append('<p>'+cellNumber+'</p>'); 
      cellNumber = cellNumber - 1;
    });
    rowNumber = rowNumber + 1;    
  });

}

var spot = {
  // Snakes and Ladders
  "3": {
    "direction": "up",
    "to": "51",
    "type": "ladder"
  },
  "6": {
    "direction": "up",
    "to": "27",
    "type": "ladder"
  },
  "20": {
    "direction": "up",
    "to": "60",
    "type": "ladder"
  },
  "36": {
    "direction": "up",
    "to": "55",
    "type": "ladder"
  },
  "63": {
    "direction": "up",
    "to": "95",
    "type": "ladder"
  },
  "68": {
    "direction": "up",
    "to": "98",
    "type": "ladder"
  },
  // snakes
  "99": {
    "direction": "down",
    "to": "69",
    "type": "snake"
  },  
  "91": {
    "direction": "down",
    "to": "61",
    "type": "snake"
  },
  "87": {
    "direction": "down",
    "to": "57",
    "type": "snake"
  },
  "65": {
    "direction": "down",
    "to": "52",
    "type": "snake"
  },
  "47": {
    "direction": "down",
    "to": "19",
    "type": "snake"
  },
  "34": {
    "direction": "down",
    "to": "1",
    "type": "snake"
  },
  "25": {
    "direction": "down",
    "to": "5",
    "type": "snake"
  }
};

// Check current space for snake or ladder and move player
function checkForSnakeOrLadder(nextPosition) {
  if (+nextPosition in spot) {
    var newPosition = spot[nextPosition];
    console.log("Transported to", newPosition.to);
    $(".game-display").html("Transported to" + " ");
    nextPosition = +newPosition.to; 
  }
  return nextPosition; 
}

function move(playr, move){
  
  // If player position is 0 (not on the board)
  if ( playr === 0 ) {
    // Add the ID to the rollREsult and add the player class
    $('#'+move).addClass('player');
    // var for current position to get the player class and assign the id 
    currentPosition = 0;
  }else{
    // var for current position to get the player class and assign the id 
    currentPosition = playr;
  }

  // log the current position 
  console.log(currentPosition);
  $(".game-display").html("Current position" + " ");
  // current position + new 
  var nextPosition = +currentPosition + move;
  // If your next position is more than 100, alert
  if (nextPosition >= 100) {
    $(".game-display").html("YOU WIN!");
    return; 
  }

// Saving the next position in the console
  console.log(nextPosition);
  nextPosition = checkForSnakeOrLadder(nextPosition); 
  // Clear player cell 
  $('.player').removeClass('player'); 
  // make new position .player 
  // add new value to stored current position 
  player = nextPosition;
  $('#'+nextPosition).addClass('player');
}

// Function for roll 
function roll() {
  rollResult = Math.floor((Math.random()*6)+1);
  console.log("Roll was:", rollResult);
  $(".game-display").html("Roll was:" + rollResult);
  move(player, rollResult);
}

// Function for calling roll() on click 
function rollDice() {
  $('.roll-dice').on('click', function() {
      roll(); 
    }); 
}
