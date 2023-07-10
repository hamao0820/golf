import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class LeadView extends AbstractView {
    #leadBlock: HTMLDivElement;
    #$leadPile: HTMLDivElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#leadBlock = document.createElement('div');
        this.#leadBlock.classList.add('lead');
        this.#$leadPile = document.createElement('div');
    }
    display(parent: HTMLElement): void {
        this.#$leadPile.classList.add('lead-pile');
        const lead = this.model.getLead();
        const $card = CardElement.createFaceUpCard(lead);
        this.#$leadPile.appendChild($card);
        this.#leadBlock.appendChild(this.#$leadPile);
        parent.appendChild(this.#leadBlock);
    }
    clear(): void {
        this.#leadBlock = document.createElement('div');
        this.#leadBlock.classList.add('lead');
        this.#$leadPile = document.createElement('div');
    }
    getPosition(): [number, number] {
        return [this.#$leadPile.getBoundingClientRect().left, this.#$leadPile.getBoundingClientRect().top];
    }
}

export default LeadView;
