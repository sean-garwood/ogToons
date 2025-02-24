import { Card } from './Card';

class Player {
    row1: Card[];
    row2: Card[];
    hand: Card[];

    constructor(
        public name: string,
        public deck: Card[],
    ) {
        this.row1 = [];
        this.row2 = [];
        this.hand = [];
    }

    toString() {
        const deck = this.deck.map((card) => card.name).join(', ');
        const hand = this.hand.map((card) => card.name).join(', ');
        const row1 = this.row1.map((card) => card.name).join(', ');
        const row2 = this.row2.map((card) => card.name).join(', ');
        return `${this.name}:\n\tDeck: ${deck}\n\tHand: ${hand}\n\tRow 1: ${row1}\n\tRow 2: ${row2}`;
    }

    fillHand() {
        this.hand.push(...this.deck.splice(0, 6 - this.hand.length));
    }

    bottomCard(): Card {
        return this.deck[this.deck.length - 1];
    }

    drawTopCard(deckOrHand: Card[]): Card {
        const card = deckOrHand.shift();
        if (!card) {
            throw new Error('The deck is empty, cannot draw a card.');
        }
        return card;
    }

    playRow1() {
        for (let i = 0; i < 4; i++) {
            this.row1.push(this.drawTopCard(this.hand));
        }
    }

    discard() {
        // TODO: Randomly discarding for now to simulate the discard phase
        let discardRandom = (hand: Card[]) => {
            const numDiscards = Math.floor(Math.random() * 3);
            for (let i = 0; i < numDiscards; i++) {
                hand.shift();
            }
        };
        discardRandom(this.hand);
    }

    playRow2() {
        for (let i = 0; i < 3; i++) {
            this.row2.push(this.drawTopCard(this.hand));
        }
    }
}

export { Player };
