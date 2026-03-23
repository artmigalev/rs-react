import styles from './CardList.module.css';

import Card from '../card/Card';
import CardsService from '@/api/services/cards.service';
import type { IPeople } from 'swapi-ts';

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
