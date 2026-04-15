import styles from './CardList.module.css';

import Card from '@/components/card/Card';
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
            <li className={styles['list-item']} key={card.name}>
              <input className={styles['checkbox-card']} type="checkbox" name="card-check" />
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
