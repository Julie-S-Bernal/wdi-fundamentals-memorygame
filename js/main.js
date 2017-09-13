var cards = [ 

{
	rank: "queen" ,
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",

},
{
	rank: "queen" ,
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",

},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",

},
{
	rank: "king" ,
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",

},

];
var cardsInPlay = [];
var checkForMatch = function() {


	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			console.log(cardsInPlay[0].rank);
			console.log(cardsInPlay[1].rank);
			alert("You found a match!");
			score = 1 + score;
			document.getElementById("myText").innerHTML = score;
			console.log("score: " + score); 

		} else {
			alert("Sorry, try again.");
		}	
};

var flipCard = function () {
	cardId = this.getAttribute("data-id");
	console.log(cardId);
	cardsInPlay.push(cards[cardId]);
	this.setAttribute("src", cards[cardId].cardImage);
	console.log("User flipped" + cards[cardId].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];

	}

};

var resetCard = function () {
	console.log("resetting card");
    for (var i = 0; i < cards.length; i++){
    	var cardElement = document.getElementById(i);
    	cardElement.setAttribute("src", "images/back.png");
    }

};

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute ("data-id", i);
		cardElement.setAttribute ("id",i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	    

    }
   
   	var resetButtonElement = document.createElement("button");
   	resetButtonElement.setAttribute("type","button");
   	//https://stackoverflow.com/questions/16303954/setting-button-text-via-javascript
   	resetButtonElement.innerHTML = "Reset";
	resetButtonElement.addEventListener("click", resetCard);
	document.getElementById("game-board-button-container").appendChild(resetButtonElement);

};

var score = 0;
console.log("score: " + score); 




createBoard();

