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

// Debugging
function generateRandomDeck() {
    const deck = [];
    for (let i = 0; i < DECKSIZE; i++) {
        deck.push(cards[Math.floor(Math.random() * cards.length)]);
    }
    return deck;
}

// TODO: shuffle each deck

const deck1 = generateRandomDeck();
const deck2 = generateRandomDeck();

// Cut Phase

// The bottom card of each deck is revealed.
// pluck a card
function pluck(deck: Card[]) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

// TODO: put it on the __bottom__ of the deck

const bottomCard1 = deck1[deck1.length - 1];
const bottomCard2 = deck2[deck2.length - 1];

console.log('Player 1 reveals', bottomCard1.name);
console.log('Player 2 reveals', bottomCard2.name);

// TODO: color cut logic
// we need to determine the colors of the game

// colors is an array that has zero to two members

// REMEMBER: SILVER and BLACK are null colors; they can't be used to determine the color of the game

// TODO: color cut logic

// Play Phase

// each player draws a hand of six cards
// the decks have already been shuffled and the card order should be determined, with deck[-1] being the bottom card

const drawTopCard = (deck: Card[]) => deck.shift();

// draw a card for testing
console.log(drawTopCard(deck1));
// turn 1