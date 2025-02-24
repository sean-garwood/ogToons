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

export { Card };
