import Logic from '../logic/logic';

class Model {
    #logic: Logic;
    constructor(logic: Logic) {
        this.#logic = logic;
    }

    getLayoutSize() {
        return this.#logic.getLayoutSize();
    }

    getLayout() {
        return this.#logic.getLayoutColumns();
    }

    getStock() {
        return this.#logic.getStockCards();
    }

    getStockSize() {
        return this.#logic.getStockSize();
    }

    getLead() {
        return this.#logic.getLead();
    }

    drawCardFromStock() {
        this.#logic.drawCardFromStock();
    }

    takeCardFromLayout(col: number) {
        this.#logic.takeCardFromLayout(col);
    }

    canTake(col: number) {
        return this.#logic.canTake(col);
    }

    isEnd() {
        return this.#logic.isEnd();
    }

    isWin() {
        return this.#logic.isWin();
    }

    isLose() {
        return this.#logic.isLose();
    }

    retry() {
        this.#logic.start();
    }
}

export default Model;
