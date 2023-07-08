import Card from '../tools/card';
import Lead from '../tools/lead';

class Judger {
    static check(lead: Lead, target: Card) {
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
}

export default Judger;
