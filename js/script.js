/* Initializes the game */

/* Notes from meeting with Ilias 

var game = new Board(); 
init method 
game.cells.push(new Cell(100-i)) 

$(".cell").forEach(function(cell, i)) {
	cell.attribute("id", 100-i)
	game.cells.push(newCell(100-i))
}
*/

function setCellIds() {
	$.each($(".cell"), function(index, cellElement) {
	  var id = index + 1; 
	  $(cellElement).attr("id", id); 
	});
}

// function createBoard(){ 	
// 	for (var i = 1; i < 10; i++) {
// 		for (var j = 1; j < 10; j++) {
// 			$("#row"+i).append('<td class="r'+i+' c'+j+'></td>' );
// 		}
// 	}

// }