

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
    // add roll result to id number and add player class
    $('#'+rollResult).addClass('player');  
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


// make player current position 
// Set current position to -1 
// make dieRoll with Math.floor(Math.random() * 6) + 1;
// add results of dieRoll to player current position 
// highlight cell id of player current position 