import Card from './card';

class Stock {
    #cards: Card[];
    constructor(cards: Card[]) {
        this.#cards = cards;
    }

    canDraw(): boolean {
        return this.size >= 1;
    }

    drawCard() {
        if (!this.canDraw()) throw Error;
        const card = this.#cards.pop();
        if (!card) throw Error;
        return card;
    }

    get size() {
        return this.#cards.length;
    }

    getCards() {
        return this.#cards;
    }
}

export default Stock;
