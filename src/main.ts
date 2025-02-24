import { Player } from './classes/Player';
import * as cards from '../cards.json';

// Let's generate two random decks
const DECKSIZE = 12;
function generateRandomDeck() {
    const deck = [];
    for (let i = 0; i < DECKSIZE; i++) {
        deck.push(cards[Math.floor(Math.random() * cards.length)]);
    }
    return deck;
}

console.log('-------------------- Game Start --------------------');
let player1 = new Player('Player 1', generateRandomDeck());
let player2 = new Player('Player 2', generateRandomDeck());
console.log(player1.toString());
console.log(player2.toString());

// TODO: shuffle each player's deck

// Cut Phase
console.log('-------------------- Cut! --------------------');

// The bottom card of each deck is revealed.
console.log('Player 1 reveals', player1.bottomCard().name);
console.log('Player 2 reveals', player2.bottomCard().name);

// TODO: color cut logic
// we need to determine the colors of the game

// colors is an array that has zero to two members
// REMEMBER: SILVER and BLACK are null colors; they can't be used to determine
// the color of the game

// Play Phase
console.log('-------------------- Turn 1! --------------------');

// each player draws a hand of six cards
// the decks have already been shuffled and the card order should be determined, with deck[-1] being the bottom card

// function drawHand(deck: Card[]) {
//     const hand = [];
//     for (let i = 0; i < 6; i++) {
//         hand.push(drawTopCard(deck));
//     }
//     return hand;
// }

// player1.hand = drawHand(player1.deck);
// player2.hand = drawHand(player2.deck);
player1.fillHand();
player2.fillHand();

console.log(player1.toString());
console.log(player2.toString());

// turn 1 begins

// each player places four cards onto the board. (the board has two sides, with two rows each: the first, or top, row has four slots, the latter has three.)
// order will matter!

// let's place the first four cards
player1.playRow1();
player2.playRow1();
console.log(player1.toString());
console.log(player2.toString());

// TODO: Resolve turn 1

// Discard phase
// Players can discard up to two cards from their hand
player1.discard();
player2.discard();

// Phase 2
console.log('-------------------- Turn 2! --------------------');

// Draw cards so each player again has six in their hand
player1.fillHand();
player2.fillHand();

console.log(player1.toString());
console.log(player2.toString());

player1.playRow2();
player2.playRow2();

console.log(player1.toString());
console.log(player2.toString());

// TODO: End the game
// The first two cards are revealed
// Each player is then given the option to swap their last card with one of the three remaining cards in their own hand, at the cost of ten points
// Then, the players choose the color for their silver cards in play
// Then, once everything is resolved, the winner is determined.
