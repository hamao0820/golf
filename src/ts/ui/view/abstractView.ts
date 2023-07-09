import Controller from '../controller';
import Model from '../model';

abstract class AbstractView {
    protected readonly model: Model;
    protected readonly controller: Controller;
    constructor(model: Model, controller: Controller) {
        this.model = model;
        this.controller = controller;
    }
    abstract display(parent: HTMLElement): void;
    abstract clear(): void;
}

export default AbstractView;
