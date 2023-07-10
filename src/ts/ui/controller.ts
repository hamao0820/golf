import Model from './model';
import AudioManager from './view/audioManager';
import View from './view/view';

class Controller {
    #view: View;
    #model: Model;
    constructor(view: View, model: Model) {
        this.#view = view;
        this.#model = model;
    }

    async handleClickStock(e: MouseEvent) {
        AudioManager.playFlipSoundEffect();
        await this.#view.flipStock(e);
        await this.#view.slideCardFromStockToLead();
        this.#model.drawCardFromStock();
        this.#view.update();
    }

    async handleClickLayout(column: number) {
        if (this.#model.canTake(column)) {
            AudioManager.playSelectSoundEffect();
            await this.#view.slideCardFromLayoutToLead(column);
            this.#model.takeCardFromLayout(column);
            this.#view.update();
        }
    }

    handleClickRetryButton() {
        AudioManager.playSceneChangeSoundEffect();
        this.#view.clear();
        this.#model.retry();
    }
}

export default Controller;
