import Card from './card';

class Deck {
    #cards: Card[];
    constructor() {
        const cards = [];
        for (let i = 1; i <= 13; i++) {
            cards.push(new Card(Card.rankMap[i], 'Clubs'));
            cards.push(new Card(Card.rankMap[i], 'Spades'));
            cards.push(new Card(Card.rankMap[i], 'Hearts'));
            cards.push(new Card(Card.rankMap[i], 'Diamonds'));
        }
        this.#cards = this.shuffle(cards);
    }

    handOutCard() {
        const card = this.#cards.pop();
        if (!card) throw Error;
        return card;
    }

    getCards() {
        return this.#cards;
    }

    private shuffle(cards: Card[]) {
        const shuffled = [...cards];
        for (let i = cards.length - 1; 0 < i; i--) {
            const r = Math.floor(Math.random() * (i + 1));

            const tmp = shuffled[i];
            shuffled[i] = shuffled[r];
            shuffled[r] = tmp;
        }
        return shuffled;
    }
}

export default Deck;
