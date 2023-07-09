import Model from './model';
import View from './view/view';

class Controller {
    #view: View;
    #model: Model;
    constructor(view: View, model: Model) {
        this.#view = view;
        this.#model = model;
    }

    handleClickStock() {
        this.#model.drawCardFromStock();
        this.#view.update();
    }

    handleClickLayout(column: number) {
        if (this.#model.canTake(column)) {
            this.#model.takeCardFromLayout(column);
            this.#view.update();
        }
    }

    handleClickRetryButton() {
        this.#view.clear();
        this.#model.retry();
    }
}

export default Controller;
