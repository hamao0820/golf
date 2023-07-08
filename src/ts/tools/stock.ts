import Card from './card';

class Stock {
    #cards: Card[];
    constructor(cards: Card[]) {
        this.#cards = cards;
    }

    canDraw(): boolean {
        return this.getSize() >= 1;
    }

    drawCard() {
        if (!this.canDraw()) throw Error;
        const card = this.#cards.pop();
        if (!card) throw Error;
        return card;
    }

    getSize() {
        return this.#cards.length;
    }
}

export default Stock;
