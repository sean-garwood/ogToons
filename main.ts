import * as cards from './cards.json';
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

class Player {
  constructor(
    public name: string,
    public deck: Card[],
    public hand: Card[],
    public row1: Card[],
    public row2: Card[],
  ) {
  }
}

class Card {
  constructor(
    public name: string,
    public color: string, // TODO: Enum
  ) {
  }

  toString() {
    return this.name;
  }
}

// Now we have all the cards

// Let's generate two random decks
const DECKSIZE = 12;

function generateRandomDeck() {
    const deck = [];
    for (let i = 0; i < DECKSIZE; i++) {
        deck.push(cards[Math.floor(Math.random() * cards.length)]);
    }
    return deck;
}
const deck1 = generateRandomDeck();
const deck2 = generateRandomDeck();

// TODO: shuffle each player's deck

// Cut Phase

// The bottom card of each deck is revealed.
const bottomCard1 = deck1[deck1.length - 1];
const bottomCard2 = deck2[deck2.length - 1];
console.log('Player 1 reveals', bottomCard1.name);
console.log('Player 2 reveals', bottomCard2.name);

console.log(deck1.length, deck2.length);

// TODO: color cut logic
// we need to determine the colors of the game

// colors is an array that has zero to two members

// REMEMBER: SILVER and BLACK are null colors; they can't be used to determine the color of the game

// TODO: color cut logic

// Play Phase

// each player draws a hand of six cards
// the decks have already been shuffled and the card order should be determined, with deck[-1] being the bottom card

function drawTopCard(deckOrHand: Card[]): Card {
    const card = deckOrHand.shift();
    if (!card) {
        throw new Error("The deck is empty, cannot draw a card.");
    }
    return card;
}

function drawHand(deck: Card[]) {
    const hand = [];
    for (let i = 0; i < 6; i++) {
        hand.push(drawTopCard(deck));
    }
    return hand;
}

const hand1 = drawHand(deck1);
const hand2 = drawHand(deck2);
console.log('Player 1 draws');
hand1.forEach(card => console.log(card.name));
console.log('Player 2 draws');
hand2.forEach(card => console.log(card.name));

// turn 1 begins

// each player places four cards onto the board. (the board has two sides, with two rows each: the first, or top, row has four slots, the latter has three.)
// order will matter!

const player1row1: Card[] = [];
const player2row1: Card[] = [];

// let's place the first four cards
for (let i = 0; i < 4; i++) {
    player1row1.push(drawTopCard(hand1));
    player2row1.push(drawTopCard(hand2));
}
console.log('Player 1 row 1');
player1row1.forEach(card => console.log(card.name));
console.log('Player 2 row 1');
player2row1.forEach(card => console.log(card.name));

// TODO: Resolve turn 1

// TODO: Discard phase
// Players can discard up to two cards from their hand

// for debugging
function discardRandom(hand: Card[]) {
    const numDiscards = Math.floor(Math.random() * 3);
    for (let i = 0; i < numDiscards; i++) {
        hand.shift();
    }
}
discardRandom(hand1);
discardRandom(hand2);

console.log(deck1.length, deck2.length);
console.log(hand1.length, hand2.length);

// Draw cards so each player again has six in their hand
function fillHand(hand: Card[], deck: Card[]) {
    hand.push(...deck.splice(0, 6-hand.length));
}
fillHand(hand1, deck1);
fillHand(hand2, deck2);

console.log('Player 1 hand:');
hand1.forEach(card => console.log(card.name));

console.log('Player 2 hand:');
hand2.forEach(card => console.log(card.name));

// Phase 2