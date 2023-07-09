import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class StockView extends AbstractView {
    #stockBlock: HTMLDivElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#stockBlock = document.createElement('div');
        this.#stockBlock.classList.add('stock');
    }
    display(parent: HTMLElement): void {
        const $stockPile = document.createElement('div');
        $stockPile.classList.add('stock-pile');
        for (let i = 0; i < this.model.getStockSize(); i++) {
            const $card = CardElement.createCardFrame();
            $card.style.zIndex = String(i);
            $card.style.bottom = `${i * 1}px`;
            $card.style.left = `${i * 0.3}px`;
            $card.innerHTML = `<p>残り${i + 1}枚</p>`;
            if (i === this.model.getStockSize() - 1) {
                $card.addEventListener('click', () => this.controller.handleClickStock(), { once: true });
            }
            $stockPile.appendChild($card);
        }
        this.#stockBlock.appendChild($stockPile);
        parent.appendChild(this.#stockBlock);
    }
    clear(): void {
        this.#stockBlock = document.createElement('div');
        this.#stockBlock.classList.add('stock');
        return;
    }
}

export default StockView;
