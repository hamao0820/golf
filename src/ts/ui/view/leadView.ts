import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class LeadView extends AbstractView {
    #leadBlock: HTMLDivElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#leadBlock = document.createElement('div');
        this.#leadBlock.classList.add('lead');
    }
    display(parent: HTMLElement): void {
        const $leadPile = document.createElement('div');
        $leadPile.classList.add('lead-pile');
        const lead = this.model.getLead();
        const $card = CardElement.createFaceUpCard(lead);
        $leadPile.appendChild($card);
        this.#leadBlock.appendChild($leadPile);
        parent.appendChild(this.#leadBlock);
    }
    clear(): void {
        this.#leadBlock = document.createElement('div');
        this.#leadBlock.classList.add('lead');
    }
}

export default LeadView;
