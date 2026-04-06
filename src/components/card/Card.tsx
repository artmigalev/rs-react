import { AppRoutes } from '@/enums/constans.enum';
import styles from './Card.module.css';
import type { ICard } from '@/types/card.interface';
import { NavLink, useParams } from 'react-router-dom';

const Card = (card: ICard) => {
  const { page } = useParams();
  return (
    <NavLink
      to={`${AppRoutes.BASE}${page || '1'}/${card['name'].toLowerCase()}`}
      className={({ isActive }) => (isActive ? 'bg-[var(--accent)]' : '')}
    >
      <div className={styles.card}>
        <h5 role="heading" className={styles.title} style={{ color: `${card.eye_color}` }}>
          {card.name}
        </h5>

        <ul role="list" className="flex flex-col ">
          {Object.entries(card).map(([key, val]) => (
            <li role="listitem" key={key} className=" flex flex-row gap-2">
              <span role="generic" className="text-(--primary)">{`${key}:`}</span>
              <span data-testid={`val-${key}`} role="generic">
                {val}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </NavLink>
  );
};

export default Card;
