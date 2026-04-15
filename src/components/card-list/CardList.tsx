import styles from './CardList.module.css';

import Card from '@/components/card/Card';
import CardsService from '@/api/services/cards.service';
import type { IPeople } from 'swapi-ts';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux.hooks';
import { addCardByList } from '@/features/slicers';

type Props = {
  dataCards: IPeople[];
};

const CardList = ({ dataCards }: Props) => {
  const serviceCard = new CardsService();
  const dispatch = useAppDispatch();
  const checkedCards = useAppSelector((state) => state.checkedCards);

  const checkedSet = new Set(checkedCards);

  return (
    <ul data-testid="list-card" className={styles['list-cards']}>
      {dataCards.length > 0 ? (
        dataCards.map((human: IPeople) => {
          const card = serviceCard.getDefaultCard(human);

          return (
            <li className={styles['list-item']} key={card.name}>
              <input
                className={styles['checkbox-card']}
                checked={checkedSet.has(human)}
                type="checkbox"
                name="card-check"
                onChange={() => dispatch(addCardByList(human))}
              />
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
