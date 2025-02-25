import { cardData } from './cards.js';
import { Card } from './classes/Card';
import { Player } from './classes/Player';

// Let's generate two random decks
const DECKSIZE = 12;

console.log('-------------------- Game Start --------------------');
const player1 = new Player('Player 1', generateRandomDeck());
const player2 = new Player('Player 2', generateRandomDeck());

showGameState(player1, player2);

// TODO: shuffle each player's deck; they won't always be random cards!

// Cut Phase
console.log('-------------------- Cut! --------------------');

// The bottom card of each deck is revealed.
const bottomCards = [player1.bottomCard(), player2.bottomCard()];
for (let i = 0; i < 2; i++) {
    console.log(
        `${i === 0 ? player1.name : player2.name}'s bottom card is: ${bottomCards[i]}`,
    );
}

// The colors of the bottom cards are compared.
const gameColors = setGameColors(bottomCards[0], bottomCards[1]);

// each player draws a hand of six cards
console.log('-------------------- Draw! --------------------');
fillUpHands(player1, player2);
showGameState(player1, player2);

// Play Phase
console.log('-------------------- Turn 1! --------------------');

// each player places four cards onto the board. (the board has two sides, with two rows each: the first, or top, row has four slots, the latter has three.)
// order will matter!

// let's place the first four cards
playCards(player1, player2, 1);

// Discard phase
// Players can discard up to two cards from their hand

// Phase 2
console.log('-------------------- Turn 2! --------------------');

// Draw cards so each player again has six in their hand
playCards(player1, player2, 2);

// TODO: color wins logic
console.log('-------------------- Game over! --------------------');
const winner = setWinner(player1, player2);
console.log('The winner is... ', winner);
showFinalScore(player1, player2);

function makeCards(): Card[] {
    return cardData.map(
        (card: any) => new Card(card.name, card.color, card.points),
    );
}

function generateRandomDeck(): Card[] {
    const deck: Card[] = [];
    const cards: Card[] = makeCards();

    for (let i = 0; i < DECKSIZE; i++) {
        const thisCard = cards[Math.floor(Math.random() * cards.length)];
        deck.push(thisCard);
    }

    return deck;
}

function getGameColors(color1: string, color2: string): string[] {
    const colors = [];
    const isNeitherSilverNorBlack = (color: string) =>
        color !== 'Silver' && color !== 'Black';
    if (isNeitherSilverNorBlack(color1)) {
        colors.push(color1);
    }
    if (isNeitherSilverNorBlack(color2) && color2 !== color1) {
        colors.push(color2);
    }
    console.log(
        'The game colors are:',
        colors.join(colors.length > 1 ? ' and ' : ''),
    );

    return colors;
}

function setGameColors(bottomCard1: Card, bottomCard2: Card): string[] {
    const color1 = bottomCard1.color;
    const color2 = bottomCard2.color;
    const colors = getGameColors(color1, color2);

    return colors;
}

function setWinner(p1: Player, p2: Player): string {
    if (p1.score === p2.score) {
        return 'nobody!';
    }

    return p1.score > player2.score ? p1.name : p2.name;
}

function showFinalScore(p1: Player, p2: Player): void {
    console.log('-------------------- Final Score --------------------');
    console.log(`${p1.name}: ${p1.score}`);
    console.log(`${p2.name}: ${p2.score}`);
}

function fillUpHands(p1: Player, p2: Player): void {
    p1.fillHand();
    p2.fillHand();
}

function playCards(p1: Player, p2: Player, row: number): void {
    p1.playRow(row);
    p2.playRow(row);
    if (row === 1) {
        p1.discard();
        p2.discard();
        fillUpHands(p1, p2);
    }
    showGameState(player1, player2);
}

function showGameState(p1: Player, p2: Player): void {
    console.log(p1.toString());
    console.log(p2.toString());
}
