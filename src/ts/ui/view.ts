import Card from '../tools/card';
import Controller from './controller';
import Model from './model';

class View {
    #controller: Controller;
    #model: Model;

    #messageDialog: HTMLDialogElement;

    #gameBlock: HTMLDivElement;
    #layoutBlock: HTMLDivElement;
    #stockBlock: HTMLDivElement;
    #leadBlock: HTMLDivElement;

    constructor() {
        this.#model = new Model();
        this.#controller = new Controller(this, this.#model);

        this.#messageDialog = document.createElement('dialog');
        this.#gameBlock = document.createElement('div');
        this.#layoutBlock = document.createElement('div');
        this.#stockBlock = document.createElement('div');
        this.#leadBlock = document.createElement('div');
        this.#layoutBlock.classList.add('layout');
        this.#stockBlock.classList.add('stock');
        this.#leadBlock.classList.add('lead');

        this.display();
    }

    private createCardFrame(): HTMLDivElement {
        const $card = document.createElement('div');
        $card.classList.add('card');
        return $card;
    }

    private createFaceUpCard(card: Card): HTMLDivElement {
        const $card = this.createCardFrame();
        $card.classList.add('face-up');
        const suitEntityRef =
            card.suit === 'Clubs'
                ? '&clubs;'
                : card.suit === 'Diamonds'
                ? '&diams;'
                : card.suit === 'Hearts'
                ? '&hearts;'
                : '&spades;';
        const suitColor = card.suit === 'Hearts' || card.suit === 'Diamonds' ? 'red' : '';
        $card.innerHTML = `<p class="card-rank"> ${card.rank} </p><p style="color:${suitColor}"> ${suitEntityRef} </p>`;
        return $card;
    }

    private displayLayout() {
        const layout = this.#model.getLayout();
        layout.forEach((column, i) => {
            const $column = document.createElement('div');
            $column.classList.add('column');
            column.cards.forEach((card, j) => {
                const $card = this.createFaceUpCard(card);
                $card.style.zIndex = String(j);
                if (j === column.size - 1) $card.addEventListener('click', () => this.#controller.handleClickLayout(i));
                $column.appendChild($card);
            });
            this.#layoutBlock.appendChild($column);
        });
    }

    private displayStock() {
        const $stockPile = document.createElement('div');
        $stockPile.classList.add('stock-pile');
        for (let i = 0; i < this.#model.getStockSize(); i++) {
            const $card = this.createCardFrame();
            $card.style.zIndex = String(i);
            $card.style.bottom = `${i * 1}px`;
            $card.style.left = `${i * 0.3}px`;
            $card.innerHTML = `<p>残り${i + 1}枚</p>`;
            if (i === this.#model.getStockSize() - 1) {
                $card.addEventListener('click', () => this.#controller.handleClickStock(), { once: true });
            }
            $stockPile.appendChild($card);
        }
        this.#stockBlock.appendChild($stockPile);
    }

    private displayLead() {
        const $leadPile = document.createElement('div');
        $leadPile.classList.add('lead-pile');
        const lead = this.#model.getLead();
        const $card = this.createFaceUpCard(lead);
        $leadPile.appendChild($card);
        this.#leadBlock.appendChild($leadPile);
    }

    private displayDialog(message: string) {
        const $container = document.createElement('div');
        $container.classList.add('dialog-container');
        $container.style.width = '100%';
        $container.style.height = '100%';
        $container.innerHTML = `<div class="dialog-message">${message}</div>`;
        const $buttons = document.createElement('div');
        $buttons.setAttribute('class', 'dialog-buttons');
        const $closeButton = document.createElement('button');
        $closeButton.innerText = '閉じる';
        $closeButton.addEventListener('click', () => this.closeDialog());
        const $retryButton = document.createElement('button');
        $retryButton.innerText = 'もう一度遊ぶ';
        $retryButton.addEventListener('click', () => this.#controller.handleClickRetryButton(), { once: true });
        $retryButton.addEventListener('click', () => this.closeDialog());
        $buttons.style.display = 'flex';
        $buttons.appendChild($closeButton);
        $buttons.appendChild($retryButton);
        $container.appendChild($buttons);
        this.#messageDialog.appendChild($container);
        document.body.appendChild(this.#messageDialog);
    }

    private openDialog() {
        this.#messageDialog.showModal();
    }

    private closeDialog() {
        this.#messageDialog.close();
    }

    private display() {
        const $playArea = document.createElement('div');
        $playArea.classList.add('play-area');
        $playArea.appendChild(this.#stockBlock);
        $playArea.appendChild(this.#leadBlock);
        this.#gameBlock.appendChild(this.#layoutBlock);
        this.#gameBlock.appendChild($playArea);
        document.body.appendChild(this.#gameBlock);
        this.displayLayout();
        this.displayLead();
        this.displayStock();
        if (this.#model.isWin()) {
            this.displayDialog('おめでとうございます！!成功です');
            this.openDialog();
            return;
        }
        if (this.#model.isLose()) {
            this.displayDialog('残念！！もう一度挑戦してみましょう');
            this.openDialog();
            return;
        }
    }

    private clear() {
        document.body.innerHTML = '';
        this.#gameBlock = document.createElement('div');
        this.#layoutBlock = document.createElement('div');
        this.#stockBlock = document.createElement('div');
        this.#leadBlock = document.createElement('div');
        this.#messageDialog = document.createElement('dialog');
        this.#layoutBlock.classList.add('layout');
        this.#stockBlock.classList.add('stock');
        this.#leadBlock.classList.add('lead');
    }

    update() {
        this.clear();
        this.display();
    }

    retry() {
        this.clear();
        new View();
    }
}

export default View;
