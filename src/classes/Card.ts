class Card {
    name: string;
    color: string;
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    toString() {
        return this.name;
    }
}

export { Card };
