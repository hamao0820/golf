class Card {
    static readonly rankMap: { [n in number]: Rank } = {
        1: 'A',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: 'J',
        12: 'Q',
        13: 'K',
    };
    static readonly cardRankNum = 13;
    static readonly cardRankArr: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    static readonly cardSuitArr: Suit[] = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    readonly #rank: Rank;
    readonly #suit: Suit;
    #isFaceUp: boolean;

    constructor(rank: Rank, suit: Suit, isFaceUp = false) {
        this.#isFaceUp = isFaceUp;
        this.#rank = rank;
        this.#suit = suit;
    }

    get rank() {
        return this.#rank;
    }

    get suit() {
        return this.#suit;
    }

    get isFaceUp() {
        return this.#isFaceUp;
    }

    faceUp() {
        this.#isFaceUp = true;
    }
}

export default Card;
