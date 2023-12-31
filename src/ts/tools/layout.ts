import Column from './column';

class Layout {
    static readonly ColumnNum = 7;
    #columns: Column[];
    constructor(columns: Column[]) {
        this.#columns = columns;
    }
    get size() {
        return this.#columns.map((column) => column.size).reduce((c, p) => c + p, 0);
    }

    canTake(col: number): boolean {
        if (col < 0 || Layout.ColumnNum <= col) return false;
        return this.#columns[col].canTake();
    }

    takeCard(col: number) {
        return this.#columns[col].takeCard();
    }

    getColumns(): Column[] {
        return this.#columns;
    }

    getLastCard(col: number) {
        return this.#columns[col].getLastCard();
    }

    isRemain() {
        return this.size >= 1;
    }
}

export default Layout;
