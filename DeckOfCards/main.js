function Deck(){
    //when constructor function is invoked, run this code to populate the deck with cards
    this.buildDeck();
}

Deck.prototype.buildDeck = function(){
  var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
      values = ['Ace', '2','3','4','5','6','7','8','9','10','Jack','Queen','King'],
      self = this;
  //set up cards in empty array
  this.cards = [];

  //nested for loops iterate over suits and values to create new cards
  suits.forEach(function(suit){
    values.forEach(function(value){
      self.cards.push(new Card(value,suit));
    });
  });
  return this;
}

Deck.prototype.shuffle = function (){
  //used https://bost.ocks.org/mike/shuffle to create logic modified by instructor (orignal at bottom)
  var unshuffledEdge = this.cards.length,
      cardToShuffleIdx,
      temp;
  // While there remain elements to shuffle…
  while (unshuffledEdge > 0){
    // Pick a remaining element…
    cardToShuffleIdx = Math.floor(Math.random() * unshuffledEdge);
    unshuffledEdge -= 1;
    // And swap it with the current element.
    temp = this.cards[cardToShuffleIdx];
    this.cards[cardToShuffleIdx] = this.cards[unshuffledEdge];
    this.cards[unshuffledEdge] = temp;
  }
  return this;
}

Deck.prototype.reset = function (){
  this.buildDeck().shuffle();
}
Deck.prototype.dealRandomCard = function (){
  return (this.cards.length > 0) ? this.cards.pop() : null; //ternary statement example
}
function Card(value,suit) {
  this.value = value;
  this.suit = suit;
}
function Player(name) {
  this.name = name;
  this.hand = []
}
Player.prototype.takeCard = function (deck){
  //method receives a deck, and pulls a card from the deck to players hand
  this.hand.push(deck.dealRandomCard());
  return this;
}
Player.prototype.discard = function(cardIdx){
  //method receives a location of the card to remove and deletes it from player hand
  if (this.hand.length > cardIdx){
    this.hand.splice(cardIdx, 1);
  }
  return this;
}
var charlie = new Player("Charlie");
var deck = new Deck();
