import { Card } from './Card';

class Player {
    row1: Card[];
    row2: Card[];
    hand: Card[];

    constructor(
        public name: string,
        public deck: Card[],
        public score: number = 0,
    ) {
        this.row1 = [];
        this.row2 = [];
        this.hand = [];
    }

    bottomCard(): Card {
        return this.deck[this.deck.length - 1];
    }

    discard() {
        // TODO: Randomly discarding for now to simulate the discard phase
        this.#discardRandom();
    }

    fillHand() {
        this.hand.push(...this.deck.splice(0, 6 - this.hand.length));
    }

    playRow(row: number) {
        const slots = row === 1 ? 4 : 3;
        const rowArray = row === 1 ? this.row1 : this.row2;
        for (let i = 0; i < slots; i++) {
            rowArray.push(this.#drawTopCard(this.hand));
        }
        this.score += this.#scoreRow(row);
    }

    toString() {
        const fprint = (cards: Card[]) =>
            cards.map((card, index) => `\n\t\t${index + 1}: ${card}`);
        const deck = fprint(this.deck);
        const hand = fprint(this.hand);
        const row1 = fprint(this.row1);
        const row2 = fprint(this.row2);
        return `${this.name}:\n\tDeck: ${deck}\n\tHand: ${hand}\n\tRow 1: ${row1}\n\tRow 2: ${row2}\n\tScore: ${this.score}`;
    }

    #discardRandom() {
        const numDiscards = Math.floor(Math.random() * 3);
        for (let i = 0; i < numDiscards; i++) {
            this.hand.shift();
        }
    }

    #drawTopCard(deckOrHand: Card[]): Card {
        const card = deckOrHand.shift();
        if (!card) {
            throw new Error('The deck is empty, cannot draw a card.');
        }
        return card;
    }

    #scoreRow(row: number): number {
        const rowArray = row === 1 ? this.row1 : this.row2;
        let score = 0;

        for (const card of rowArray) {
            score += card.points;
        }

        return score;
    }
}

export { Player };
