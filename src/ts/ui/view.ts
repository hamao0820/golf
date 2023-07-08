import Controller from './controller';
import Model from './model';

class View {
    #controller: Controller;
    #model: Model;
    constructor() {
        this.#controller = new Controller();
        this.#model = new Model();
        
        const startButton = document.getElementById('startButton');
        if (!startButton) throw Error;
        startButton.addEventListener('click', this.#controller.handleStartButtonClicked);
        return;
    }
}

export default View;
