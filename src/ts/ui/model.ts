import Logic from '../logic/logic';

class Model {
    #logic: Logic;
    constructor() {
        this.#logic = new Logic();
    }
}

export default Model;
