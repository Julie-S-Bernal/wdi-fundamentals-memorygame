console.log("Up and running!");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push("queen");
console.log ("user flipped" + cardOne);
var cardTwo = cards[2];
cardsInPlay.push("king");
console.log ("user flipped" + cardTwo);
 if (cardsInPlay.length === 2) {;

} else if  (cardsInPlay[0] === cardsInPlay[1]) {
	alert ("you found a match!");
}
	else {
	alert ("sorry, try again!");
}




