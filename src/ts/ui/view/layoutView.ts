import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class LayoutView extends AbstractView {
    #layoutBlock: HTMLDivElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#layoutBlock = document.createElement('div');
        this.#layoutBlock.classList.add('layout');
    }
    display(parent: HTMLElement): void {
        const layout = this.model.getLayout();
        layout.forEach((column, i) => {
            const $column = document.createElement('div');
            $column.classList.add('column');
            column.cards.forEach((card, j) => {
                const $card = CardElement.createFaceUpCard(card);
                $card.style.zIndex = String(j);
                if (j === column.size - 1) $card.addEventListener('click', () => this.controller.handleClickLayout(i));
                $column.appendChild($card);
            });
            this.#layoutBlock.appendChild($column);
        });
        parent.appendChild(this.#layoutBlock);
        return;
    }
    clear(): void {
        this.#layoutBlock = document.createElement('div');
        this.#layoutBlock.classList.add('layout');
    }
}

export default LayoutView;
