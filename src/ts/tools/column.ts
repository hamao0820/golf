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
        if (!this.canTake) throw Error;
        const card = this.#cards.pop();
        if (!card) throw Error;
        return card;
    }

    get size() {
        return this.#cards.length;
    }

    canTake() {
        return this.#cards.length >= 1;
    }

    getLastCard(): Card {
        if (!this.canTake) throw Error;
        return this.cards[this.#cards.length - 1];
    }
}

export default Column;
