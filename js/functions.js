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
	for (var n = 0; n <= 10; n++){
	
	document.write('<br>');
	
		for (var i = 0; i <= n; i++) {	
			document.write(letter);
		}
	}
	
}

pickLetter();

document.write('<br>');
document.write('<br>');

function triangle () {
	
	
	for (var i = 0; i <= 9; i++) {	
		document.write(letter);
		document.write('<br>');
	}
	
}

triangle();







