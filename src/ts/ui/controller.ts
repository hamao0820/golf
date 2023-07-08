import Model from './model';

class Controller {
    #model: Model;
    constructor() {
        this.#model = new Model();
    }
    handleStartButtonClicked() {
        alert('hello');
    }
}

export default Controller;
