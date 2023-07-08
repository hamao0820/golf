import Column from './column';

class Layout {
    #columns: Column[];
    constructor(columns: Column[]) {
        this.#columns = columns;
    }
    get size() {
        return this.#columns.map((column) => column.size).reduce((c, p) => c + p, 0);
    }
    takeCard() {
        // TODO
        return;
    }

    getLayout(): Column[] {
        return this.#columns;
    }
}

export default Layout;
