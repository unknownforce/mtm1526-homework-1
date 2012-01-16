// JavaScript Document

// Javascript single line comment

/*
Javascript mult-line comment
*/


var letter;

while (!letter) {
	letter = prompt('Pick a Letter');
}

console.log(letter);


function pickLetter () {
	for (var i = 0; i <= 9; i++) {	
		document.write(letter + "<br>");
	}
}

pickLetter();



