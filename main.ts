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

class Card {
  constructor(
    public name: string,
    public color: string, // TODO: Enum
  ) {
  }
}

console.log(cards[0].name);

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

// Start the game!

function pluck(deck: Card[]) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

// Cut Phase

// The bottom card of each deck is revealed.

const bottomCard1 = deck1[deck1.length - 1];
const bottomCard2 = deck2[deck2.length - 1];

console.log('Player 1 reveals', bottomCard1.name);
console.log('Player 2 reveals', bottomCard2.name);

// we need to determine the colors of the game

// colors is an array that has zero to two members

// REMEMBER: SILVER and BLACK are null colors; they can't be used to determine the color of the game

// check first card
// check second card



function getColors(deck1: Card[], deck2: Card[]) {
    const color1 = deck1[deck1.length - 1].color;
    const color2 = deck2[deck2.length - 1].color;

    console.log('Color 1:', color1);
    console.log('Color 2:', color2);

}

// TODO: color cut logic

const colors = getColors(deck1, deck2);
console.log('Colors:', colors);