import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';
import CardElement from './cardView';

class StockView extends AbstractView {
    static readonly flipDelay = 0.7;
    #$stockBlock: HTMLDivElement;
    #$stockPile: HTMLDivElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#$stockBlock = document.createElement('div');
        this.#$stockBlock.classList.add('stock');
        this.#$stockPile = document.createElement('div');
    }
    display(parent: HTMLElement): void {
        this.#$stockPile.classList.add('stock-pile');
        for (let i = 0; i < this.model.getStockSize(); i++) {
            const $card = CardElement.createCardFrame();
            $card.style.zIndex = String(i);
            $card.style.bottom = `${i * 1}px`;
            $card.style.left = `${i * 0.3}px`;
            $card.innerHTML = `<p class="remain">残り${i + 1}枚</p>`;
            if (i === this.model.getStockSize() - 1) {
                $card.addEventListener('click', (e) => this.controller.handleClickStock(e), { once: true });
            }
            this.#$stockPile.appendChild($card);
        }
        this.#$stockBlock.appendChild(this.#$stockPile);
        parent.appendChild(this.#$stockBlock);
    }
    clear(): void {
        this.#$stockBlock = document.createElement('div');
        this.#$stockBlock.classList.add('stock');
        this.#$stockPile = document.createElement('div');
        return;
    }

    flipCard(e: MouseEvent) {
        const $card = e.currentTarget as HTMLDivElement;
        const $faceUpCard = CardElement.createFaceUpCard(this.model.getStockTopCard());
        const i = this.model.getStockSize() - 1;
        $faceUpCard.style.transform = 'rotateY(180deg)';
        this.#$stockPile.appendChild($faceUpCard);
        $faceUpCard.style.transition = `transform ${StockView.flipDelay}s`;
        $card.style.transition = `transform ${StockView.flipDelay}s`;
        $faceUpCard.style.zIndex = `${i}`;
        $faceUpCard.style.bottom = `${i * 1}px`;
        $faceUpCard.style.left = `${i * 0.3}px`;
        setTimeout(() => {
            $faceUpCard.style.transform = 'rotateY(0)';
        }, 0);
        $card.style.transform = 'rotateY(-180deg)';
    }
}

export default StockView;
