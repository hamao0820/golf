import Card from './card';

class Column {
    readonly #cards: Card[];
    constructor(cards: Card[]) {
        this.#cards = cards;
    }

    takeCard() {
        // TODO
        return;
    }
    getSize() {
        // TODO
        return;
    }
    canTake() {
        // TODO
        return;
    }
}

export default Column;
