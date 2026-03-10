import React, { Component } from 'react';
import styles from './Card.module.css';
import type { ICard } from '@/types/card.interface';

export class Card extends Component<ICard> {
  render() {
    const card = this.props;
    return (
      <div className={styles.card}>
        <h5 className={styles.title} style={{ color: `${card.eye_color}` }}>
          {card.name}
        </h5>

        <ul className="flex flex-col">
          {Object.entries(card).map(([key, val]) => (
            <li key={key} className=" flex flex-row gap-2">
              <span className="text-[var(--primary)]">{`${key}:`}</span>
              <span>{val}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
