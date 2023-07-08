import Controller from './controller';
import Model from './model';

class View {
    #controller: Controller;
    #model: Model;

    #startButton: HTMLElement;
    #game: HTMLElement;
    #layout: HTMLElement;
    #stock: HTMLElement;
    #lead: HTMLElement;

    constructor() {
        this.#controller = new Controller();
        this.#model = new Model();

        this.#game = document.createElement('div');
        this.#layout = document.createElement('div');
        this.#stock = document.createElement('div');
        this.#lead = document.createElement('div');
        this.#game.appendChild(this.#layout);
        this.#game.appendChild(this.#stock);
        this.#game.appendChild(this.#lead);
        document.body.appendChild(this.#game);

        this.#startButton = document.createElement('button');
        this.#startButton.innerText = 'start';
        this.#startButton.addEventListener('click', this.#controller.handleStartButtonClicked);
        document.body.appendChild(this.#startButton);
        return;
    }
}

export default View;
