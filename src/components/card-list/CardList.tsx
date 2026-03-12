import styles from './CardList.module.css';

import React, { Component } from 'react';
import Card from '../card/Card';
import type { IPeople } from '@/types/people.interface';
import CardsService from '@/api/services/cards.service';

type ListState = {
  people: IPeople[];
};
type Props = {
  dataCards: IPeople[];
};

export class CardList extends Component<Props, ListState> {
  #cardService: CardsService;

  constructor(props: Props) {
    super(props);
    this.#cardService = new CardsService();
    this.state = { people: props.dataCards };
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (this.props.dataCards !== prevProps.dataCards) {
      this.setState((state) => ({
        ...state,
        people: this.props.dataCards,
      }));
    }
  }

  render() {
    const people = this.state.people;
    console.log(people);

    return (
      <ul className={styles['list-cards']}>
        {people.length > 0 ? (
          people.map((human: IPeople) => {
            const card = this.#cardService.getDefaultCard(human);

            return (
              <li key={card.name}>
                <Card {...card} />
              </li>
            );
          })
        ) : (
          <span>cards not found bi list</span>
        )}
      </ul>
    );
  }
}

export default CardList;
