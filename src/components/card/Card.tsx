import type { ICard } from '@/types/card.interface';
import React, { Component } from 'react';
import styles from './Card.module.css';
export class Card extends Component<ICard> {
  render() {
    const data = this.props;
    return (
      <div className={styles.card}>
        <h5 className="title">{data.name}</h5>

        <ul className="list-props">
          {Object.entries(this.props).map(([key, value]) => (
            <li key={key} className="w-max">
              <span className={key}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Card;
