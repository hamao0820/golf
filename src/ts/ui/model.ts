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
}

export default Model;
