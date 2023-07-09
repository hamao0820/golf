import Column from '../tools/column';
import Deck from '../tools/deck';
import Layout from '../tools/layout';
import Lead from '../tools/lead';
import Stock from '../tools/stock';
import View from '../ui/view';
import Judger from './judger';

class Logic {
    #deck: Deck;
    #stock: Stock;
    #layout: Layout;
    #lead: Lead;
    constructor() {
        this.#deck = new Deck();
        const columns = Array.from(
            { length: Layout.ColumnNum },
            () => new Column(Array.from({ length: Column.CardsNum }, () => this.#deck.handOutCard())),
        );
        this.#layout = new Layout(columns);
        this.#stock = new Stock(Array.from(this.#deck.getCards()));
        this.#lead = new Lead(this.#stock.drawCard());
        return;
    }

    start() {
        this.init();
        new View(this);
        return;
    }

    init() {
        this.#deck = new Deck();
        const columns = Array.from(
            { length: Layout.ColumnNum },
            () => new Column(Array.from({ length: Column.CardsNum }, () => this.#deck.handOutCard())),
        );
        this.#layout = new Layout(columns);
        this.#stock = new Stock(Array.from(this.#deck.getCards()));
        this.#lead = new Lead(this.#stock.drawCard());
    }

    execute() {
        this.start();
        return;
    }

    getLayoutSize() {
        return this.#layout.size;
    }

    getLayoutColumns() {
        return this.#layout.getColumns();
    }

    getStockCards() {
        return this.#stock.getCards();
    }

    getStockSize() {
        return this.#stock.size;
    }

    getLead() {
        return this.#lead.getLead();
    }

    drawCardFromStock() {
        this.#lead.addLeads(this.#stock.drawCard());
    }

    canTake(col: number) {
        return Judger.canTake(this.#layout, this.#lead, col);
    }

    takeCardFromLayout(col: number) {
        this.#lead.addLeads(this.#layout.takeCard(col));
    }

    isEnd() {
        return Judger.isEnd(this.#layout, this.#stock);
    }

    isWin() {
        return Judger.isWin(this.#layout);
    }

    isLose() {
        return Judger.isLose(this.#stock, this.#layout, this.#lead);
    }
}

export default Logic;
