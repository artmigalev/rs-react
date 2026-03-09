import type { ICard } from '@/types/card.interface';
import React, { Component } from 'react';
import Card from '../card/Card';

type ListState = {
  cards: ICard[];
};
type Props = {
  dataCards: ICard[];
};

export class CardList extends Component<Props, ListState> {
  constructor(props: Props) {
    super(props);

    this.state = { cards: props.dataCards };
  }

  render() {
    const cards = this.state.cards;
    console.log(cards);

    return (
      <ul>
        {cards.length > 0 ? (
          cards.map((card) => (
            <li key={card.name}>
              <Card {...card} />
            </li>
          ))
        ) : (
          <span>cards not found bi list</span>
        )}
      </ul>
    );
  }
}

export default CardList;
