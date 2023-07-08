import Card from './card';

class Lead {
    #cards: Card[];
    constructor(card: Card) {
        this.#cards = [card];
    }
    addLeads(card: Card) {
        this.#cards.push(card);
        return;
    }
    getLead() {
        return this.#cards[this.#cards.length - 1];
    }
}

export default Lead;
