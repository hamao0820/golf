import Card from '../tools/card';
import Layout from '../tools/layout';
import Lead from '../tools/lead';
import Stock from '../tools/stock';

class Judger {
    private static isAdjacent(lead: Lead, target: Card) {
        const leadRank = lead.getLead().rank;

        switch (leadRank) {
            case 'A': {
                return target.rank === '2';
            }
            case '2': {
                return target.rank === 'A' || target.rank === '3';
            }
            case '3': {
                return target.rank === '2' || target.rank === '4';
            }
            case '4': {
                return target.rank === '3' || target.rank === '5';
            }
            case '5': {
                return target.rank === '4' || target.rank === '6';
            }
            case '6': {
                return target.rank === '5' || target.rank === '7';
            }
            case '7': {
                return target.rank === '6' || target.rank === '8';
            }
            case '8': {
                return target.rank === '7' || target.rank === '9';
            }
            case '9': {
                return target.rank === '8' || target.rank === '10';
            }
            case '10': {
                return target.rank === '9' || target.rank === 'J';
            }
            case 'J': {
                return target.rank === '10' || target.rank === 'Q';
            }
            case 'Q': {
                return target.rank === 'J' || target.rank === 'K';
            }
            case 'K': {
                return target.rank === 'Q';
            }
        }
    }

    static isEnd(layout: Layout, stock: Stock) {
        layout.isRemain() || stock.canDraw();
    }

    static isLose(stock: Stock, layout: Layout, lead: Lead) {
        return (
            !stock.canDraw() &&
            Array(Layout.ColumnNum)
                .fill(0)
                .map((_, i) => layout.canTake(i) && Judger.isAdjacent(lead, layout.getLastCard(i)))
                .every((b) => !b)
        );
    }

    static isWin(layout: Layout) {
        return !layout.isRemain();
    }

    static canTake(layout: Layout, lead: Lead, col: number) {
        return layout.canTake(col) && Judger.isAdjacent(lead, layout.getLastCard(col));
    }
}

export default Judger;
