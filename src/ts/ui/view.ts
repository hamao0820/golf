import Card from '../tools/card';
import Controller from './controller';
import Model from './model';

class View {
    #controller: Controller;
    #model: Model;

    #gameBlock: HTMLElement;
    #layoutBlock: HTMLElement;
    #stockBlock: HTMLElement;
    #leadBlock: HTMLElement;

    constructor() {
        this.#model = new Model();
        this.#controller = new Controller(this, this.#model);

        this.#gameBlock = document.createElement('div');
        this.#layoutBlock = document.createElement('div');
        this.#stockBlock = document.createElement('div');
        this.#leadBlock = document.createElement('div');
        this.#layoutBlock.classList.add('layout');
        this.#gameBlock.appendChild(this.#layoutBlock);
        this.#gameBlock.appendChild(this.#stockBlock);
        this.#gameBlock.appendChild(this.#leadBlock);
        document.body.appendChild(this.#gameBlock);

        this.displayLayout();
    }

    private createCard(card: Card): HTMLDivElement {
        // TODO
        const $card = document.createElement('div');
        $card.classList.add('card');
        const suitEntityRef =
            card.suit === 'Clubs'
                ? '&clubs;'
                : card.suit === 'Diamonds'
                ? '&diams;'
                : card.suit === 'Hearts'
                ? '&hearts;'
                : '&spades;';
        $card.innerHTML = `<p> ${card.rank} </p><p> ${suitEntityRef} </p>`;
        return $card;
    }

    displayLayout() {
        const layout = this.#model.getLayout();
        layout.forEach((column) => {
            const $column = document.createElement('div');
            $column.classList.add('column');
            column.cards.forEach((card, i) => {
                const $card = this.createCard(card);
                $card.style.zIndex = String(i);
                $column.appendChild($card);
            });
            this.#layoutBlock.appendChild($column);
        });
    }
}

export default View;
