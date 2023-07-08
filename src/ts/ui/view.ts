import Controller from './controller';

class View {
    #controller: Controller;
    constructor() {
        this.#controller = new Controller();
        const startButton = document.getElementById('startButton');
        if (!startButton) throw Error;
        startButton.addEventListener('click', this.#controller.handleStartButtonClicked);
        return;
    }
}

export default View;
