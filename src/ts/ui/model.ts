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
}

export default Model;
