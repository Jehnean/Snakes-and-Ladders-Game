
// Set global variables
var player = 0; 
var currentPosition = 0;
var rollResult;

// Assign IDs to cells, iterate, append with id
function setCellIds() {
  $.each($(".cell"), function(index, cellElement) {
    var id = index + 1; 
    $(cellElement).attr("id", id).append('<p>'+id+'</p>'); 
  });
}

// Make snakesAndLadders Object with key : value
var snakesAndLadders = {
    12 : 16, 
    19 : 22,

    25 : 17,
    28 : 20,

    32 : 22, 
    37 : 42,

    47 : 27, 

    55 : 76,

    62 : 50,

    78 : 97,

    83 : 72, 
    85 : 91,

    99 : 80,
};

// Check current space for snake or ladder and move player
function checkForSnakeOrLadder(nextPosition) {
  if (nextPosition in snakesAndLadders) {
    var newPosition = snakesAndLadders[nextPosition];
    console.log("Transported to", newPosition);
    nextPosition = newPosition; 
  }
  return nextPosition; 
}

// Place Snake and Ladder classes 
function assignSnakesAndLadders() {
  for(var key in snakesAndLadders) {
    if (key < snakesAndLadders[key]) {
      Object.keys(snakesAndLadders)
      console.log('key: ' + key + '\n' + 'value: ' + snakesAndLadders[key]); 
      $(key).addClass('ladder'); 

      if (key === $('#')){
        $(".cell").addClass('ladder'); 
      }


      
      // ================= Help ================= //
      // Use the value of key to to find matching .cell id number and add class .ladder
      // Maybe something  with $('.cell').addClass('ladder'); ?

    }
    if (key < snakesAndLadders[key]) {
      
      // ================= Help ================= //
      // Use the value of key to to find matching .cell id number and add class .snake

    }
  }
}

assignSnakesAndLadders(); 


// Function for roll 
function roll() {
  rollResult = Math.floor((Math.random()*6)+1);
    console.log("Roll was:", rollResult);
  // If player position is 0 (not on the board)
  if ( player === 0 ) {
    // Add the ID to the rollREsult and add the player class
    $('#'+rollResult).addClass('player');
  }
  player = rollResult;
    
    // var for current position to get the player class and assign the id 
    currentPosition = $('.player').attr('id');
    // log the current position 
    console.log(currentPosition);
    // current position + new 
    var nextPosition = parseInt(currentPosition) + rollResult;
    // If your next position is more than 100, alert
    if (nextPosition >= 100) {
      alert("YOU WIN"); 
    }

  // Saving the next position in the console
    console.log(nextPosition);
    nextPosition = checkForSnakeOrLadder(nextPosition); 
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
