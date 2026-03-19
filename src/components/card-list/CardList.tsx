import styles from './CardList.module.css';

import React from 'react';
import Card from '../card/Card';
import type { IPeople } from '@/types/people.interface';
import CardsService from '@/api/services/cards.service';

type Props = {
  dataCards: IPeople[];
};

const CardList = ({ dataCards }: Props) => {
  const serviceCard = new CardsService();

  return (
    <ul data-testid="list-card" className={styles['list-cards']}>
      {dataCards.length > 0 ? (
        dataCards.map((human: IPeople) => {
          const card = serviceCard.getDefaultCard(human);

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
};

export default CardList;
