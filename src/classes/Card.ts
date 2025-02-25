class Card {
    name: string;
    color: string;
    points: number;
    constructor(name: string, color: string, points: number) {
        this.name = name;
        this.color =
            color.slice(0, 1).toUpperCase() + color.toLowerCase().slice(1);
        this.points = points ? points : 0;
    }

    toString() {
        return (
            this.name +
            ' ( ' +
            this.color +
            ' ' +
            (this.points > 0 ? this.points : '<MISSING>') +
            ' )'
        );
    }
}

export { Card };
