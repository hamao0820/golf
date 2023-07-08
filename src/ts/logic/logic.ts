import Column from '../tools/column';
import Deck from '../tools/deck';
import Layout from '../tools/layout';
import Lead from '../tools/lead';
import Stock from '../tools/stock';
import View from '../ui/view';

class Logic {
    #deck: Deck;
    #stock: Stock;
    #layout: Layout;
    #lead: Lead;
    constructor() {
        this.#deck = new Deck();
        const columns = Array.from(
            { length: 5 },
            () => new Column(Array.from({ length: 7 }, () => this.#deck.handOutCard())),
        );
        this.#layout = new Layout(columns);
        this.#stock = new Stock(Array.from(this.#deck.getCards()));
        this.#lead = new Lead(this.#stock.drawCard());
        return;
    }

    start() {
        new View();
        return;
    }

    execute() {
        this.start();
        return;
    }

    getLayoutSize() {
        return this.#layout.size;
    }

    getLayout() {
        return this.#layout.getLayout();
    }

    getStock() {
        return this.#stock.getStock();
    }

    getStockSize() {
        return this.#stock.size;
    }

    getLead() {
        return this.#lead.getLead();
    }
}

export default Logic;