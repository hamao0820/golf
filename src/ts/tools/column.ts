import Card from './card';

class Column {
    readonly #cards: Card[];
    constructor(cards: Card[]) {
        this.#cards = cards;
    }

    get cards() {
        return this.#cards;
    }

    takeCard() {
        // TODO
        return;
    }
    get size() {
        return this.#cards.length;
    }
    canTake() {
        // TODO
        return;
    }
}

export default Column;
