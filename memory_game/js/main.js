console.log("up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne;

cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped "+ cardsInPlay); 

var cardTwo;

cardTwo = cards[1];

cardsInPlay.push(cardTwo);


if (cardsInPlay.length == 2 && cardsInPlay[0]==cardsInPlay[1]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
}