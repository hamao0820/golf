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
            () => new Column(Array.from({ length: 2 }, () => this.#deck.handOutCard())),
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

    drawCardFromStock() {
        this.#lead.addLeads(this.#stock.drawCard());
    }

    canTake(col: number) {
        return this.#layout.canTake(col) && Judger.check(this.#lead, this.#layout.getLastCard(col));
    }

    takeCardFromLayout(col: number) {
        this.#lead.addLeads(this.#layout.takeCard(col));
    }

    isEnd() {
        return !this.#layout.isRemain() || !this.#stock.canDraw();
    }

    isWin() {
        return !this.#layout.isRemain();
    }

    isLose() {
        return (
            !this.#stock.canDraw() &&
            Array(Layout.ColumnNum)
                .fill(0)
                .map((_, i) => this.#layout.canTake(i) && Judger.check(this.#lead, this.#layout.getLastCard(i)))
                .every((b) => !b)
        );
    }
}

export default Logic;
