import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class LayoutView extends AbstractView {
    static readonly slideDelay = 0.5;
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
                if (this.model.canTake(i) && j === column.size - 1) $card.classList.add('shine');
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
    slideCard(column: number, to: [number, number]) {
        const $card = this.#layoutBlock.children[column].children[
            this.#layoutBlock.children[column].children.length - 1
        ] as HTMLDivElement;
        const from = [$card.getBoundingClientRect().left, $card.getBoundingClientRect().top] as const;
        $card.style.transform = `translate(${to[0] - from[0]}px, ${to[1] - from[1]}px)`;
        $card.style.transition = `transform ${LayoutView.slideDelay}s ease`;
    }
}

export default LayoutView;
