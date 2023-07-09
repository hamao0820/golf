import Logic from '../../logic/logic';
import Controller from '../controller';
import Model from '../model';
import DialogView from './dialogView';
import LayoutView from './layoutView';
import LeadView from './leadView';
import StockView from './stockView';

class View {
    #controller: Controller;
    #model: Model;
    #gameBlock: HTMLDivElement;
    #layoutView: LayoutView;
    #stockView: StockView;
    #leadView: LeadView;
    #dialogView: DialogView;

    constructor(logic: Logic) {
        this.#model = new Model(logic);
        this.#controller = new Controller(this, this.#model);

        this.#gameBlock = document.createElement('div');

        this.#layoutView = new LayoutView(this.#model, this.#controller);
        this.#stockView = new StockView(this.#model, this.#controller);
        this.#leadView = new LeadView(this.#model, this.#controller);
        this.#dialogView = new DialogView(this.#model, this.#controller);

        this.display();
    }

    private display() {
        const $playArea = document.createElement('div');
        $playArea.classList.add('play-area');
        this.#layoutView.display(this.#gameBlock);
        this.#stockView.display($playArea);
        this.#leadView.display($playArea);
        this.#gameBlock.appendChild($playArea);
        document.body.appendChild(this.#gameBlock);
        this.#dialogView.display(document.body);
        if (this.#model.isWin() || this.#model.isLose()) this.#dialogView.open();
    }

    clear() {
        document.body.innerHTML = '';
        this.#gameBlock = document.createElement('div');
        this.#layoutView.clear();
        this.#leadView.clear();
        this.#stockView.clear();
        this.#dialogView.clear();
    }

    update() {
        this.clear();
        this.display();
    }
}

export default View;
