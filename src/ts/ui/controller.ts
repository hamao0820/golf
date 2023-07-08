import Model from './model';
import View from './view';

class Controller {
    #view: View;
    #model: Model;
    constructor(view: View, model: Model) {
        this.#view = view;
        this.#model = model;
    }

    stockClickHandler() {
        this.#model.drawCardFromStock();
        this.#view.update();
    }
}

export default Controller;
