var player = 0; 
var currentPosition = 0; 

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

// Function for roll 
function roll() {
    // store roll result of 1-6 
    var rollResult = Math.floor((Math.random()*6)+1);
    if (player === 0) {
      $('#'+rollResult).addClass('player');
      player = rollResult; 
    } else {
      // var for current position and store current position
      currentPosition = $('.player').attr('id');
      console.log(currentPosition);
      // current position + new 
      var nextPosition = parseInt(currentPosition) + rollResult;
      console.log(nextPosition);
      // Clear player cell 
      $('.player').removeClass('player'); 
      // make new position .player 
      $('#'+nextPosition).addClass('player');
    }
}

// Function for new turn and current position 
function turn(curPos) {
  var newPos = curPos+roll(); 
  alert("Made it to here!"); 
}

function rollDice() {
  $('.roll-dice').on('click', function() {
      roll(); 
    }); 
}


// add results of dieRoll to player current position 
// highlight cell id of player current position 


// on click clear current position of player class 
// add new value to stored current position 