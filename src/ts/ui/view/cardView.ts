import Card from '../../tools/card';

class CardElement {
    static createCardFrame(): HTMLDivElement {
        const $card = document.createElement('div');
        $card.classList.add('card');
        return $card;
    }

    static createFaceUpCard(card: Card): HTMLDivElement {
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
}

export default CardElement;
