import Controller from '../controller';
import Model from '../model';
import AbstractView from './abstractView';

class DialogView extends AbstractView {
    #messageDialog: HTMLDialogElement;
    constructor(model: Model, controller: Controller) {
        super(model, controller);
        this.#messageDialog = document.createElement('dialog');
    }

    display(parent: HTMLElement): void {
        let message = '';
        if (this.model.isWin()) {
            message = 'おめでとうございます！!成功です';
        }
        if (this.model.isLose()) {
            message = '残念！！もう一度挑戦してみましょう';
        }
        const $container = document.createElement('div');
        $container.classList.add('dialog-container');
        $container.style.width = '100%';
        $container.style.height = '100%';
        $container.innerHTML = `<div class="dialog-message">${message}</div>`;
        const $buttons = document.createElement('div');
        $buttons.setAttribute('class', 'dialog-buttons');
        const $closeButton = document.createElement('button');
        $closeButton.innerText = '閉じる';
        $closeButton.addEventListener('click', () => this.close());
        const $retryButton = document.createElement('button');
        $retryButton.innerText = 'もう一度遊ぶ';
        $retryButton.addEventListener('click', () => this.controller.handleClickRetryButton(), { once: true });
        $retryButton.addEventListener('click', () => this.close());
        $buttons.style.display = 'flex';
        $buttons.appendChild($closeButton);
        $buttons.appendChild($retryButton);
        $container.appendChild($buttons);
        this.#messageDialog.appendChild($container);

        parent.appendChild(this.#messageDialog);
    }
    clear(): void {
        this.#messageDialog = document.createElement('dialog');
    }

    open() {
        this.#messageDialog.showModal();
    }

    close() {
        this.#messageDialog.close();
    }
}

export default DialogView;
