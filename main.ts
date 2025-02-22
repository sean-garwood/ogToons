import * as cards from './cards.json';

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

function pluck(deck: any[]) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    return deck[randomIndex];
}

// Cut Phase

// The bottom card of each deck is revealed.

const bottomCard1 = deck1[deck1.length - 1];
const bottomCard2 = deck2[deck2.length - 1];

console.log('Player 1 reveals', bottomCard1.name);
console.log('Player 2 reveals', bottomCard2.name);
