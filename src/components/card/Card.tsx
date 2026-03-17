import React, { Component } from 'react';
import styles from './Card.module.css';
import type { ICard } from '@/types/card.interface';

export class Card extends Component<ICard> {
  render() {
    const card = this.props;
    return (
      <div className={styles.card}>
        <h5 role="heading" className={styles.title} style={{ color: `${card.eye_color}` }}>
          {card.name}
        </h5>

        <ul role="list" className="flex flex-col">
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
    );
  }
}

export default Card;
