import { Component } from 'react';
import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import type { ICard } from '@/types/card.interface';

export class Result extends Component {
  #card: ICard = {
    birth_year: '19 BBY',
    eye_color: 'Blue',

    gender: 'Male',
    hair_color: 'Blond',
    name: 'Luke Skywalker',
    skin_color: 'Fair',
  };
  #cards: ICard[] = [this.#card];

  render() {
    return (
      <section className={styles['section-result']}>
        {this.#cards.length === 0 ? <h2>Not Found</h2> : <CardList dataCards={this.#cards} />}
      </section>
    );
  }
}

export default Result;
