var player = 0; 
var currentPosition = 0;
var rollResult;

// Assign IDs to Cells 
function setCellIds() {
    // Each .cell look at index and cellElement
$.each($(".cell"), function(index, cellElement) {
    // iterate through index
    var id = index + 1; 
    // Append with the id and at p text 
    $(cellElement).attr("id", id).append('<p>'+id+'</p>'); 
  });
}

// Snakes 

var SnakesAndLadders = {
    // key : value
    12 : 16, 
    13 : 48, 
    14 : 48, 
    19 : 60, 
    55 : 76,
    78 : 97,
    99: 29,
    47: 18,
    25: 7
};

// var snakeOrLadderSpace = Object.keys(SnakesAndLadders); 

// function checkForSnakeOrLadder(nextPosition) {
//   if (snakeOrLadderSpace.indexOf(nextPosition) >= 0 ) {
//     console.log("HIT"); 
//     nextPosition = SnakesAndLadders[nextPosition]; 
//   }
//   return nextPosition; 
// }


function setupPlayer() { 
  // If player position is 0 (not on the board)
      // highlight cell id of player current position 
      $('#'+rollResult).addClass('player');
      // player is equal to the roll result 
      player = rollResult;
}


// Function for roll 
function roll() {
    // store roll result of 1-6 
    rollResult = Math.floor((Math.random()*6)+1);
    // IF the player is not on the board
    if ( player === 0 ) {
      setupPlayer(); 
    }
    
    // var for current position to get the player class and assign the id 
    currentPosition = $('.player').attr('id');
    // log the current position 
    console.log(currentPosition);
    // current position + new 
    var nextPosition = parseInt(currentPosition) + rollResult;
    // If your next position is more than 100, alert
    if (nextPosition >= 100) {
      alert("YOU WIN"); 
    };
  // Saving the next position in the console
    console.log(nextPosition);
    // nextPosition = checkForSnakeOrLadder(nextPosition); 
    // Clear player cell 
    $('.player').removeClass('player'); 
    // make new position .player 
    // add new value to stored current position 
    $('#'+nextPosition).addClass('player');
}

// Function for calling roll() on click 
function rollDice() {
  $('.roll-dice').on('click', function() {
      roll(); 
    }); 
}
