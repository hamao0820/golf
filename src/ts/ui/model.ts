import Logic from '../logic/logic';

class Model {
    #logic: Logic;
    constructor() {
        this.#logic = new Logic();
    }

    getLayoutSize() {
        return this.#logic.getLayoutSize();
    }

    getLayout() {
        return this.#logic.getLayout();
    }

    getStock() {
        return this.#logic.getStock();
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
}

export default Model;
