import { Component } from 'react';
import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import type { IPeople, ResponsePeople } from '@/types/people.interface';

type PropsResult = {
  results: ResponsePeople['results'];
};
type State = {
  people: IPeople[];
};

export class Result extends Component<PropsResult, State> {
  constructor(props: PropsResult) {
    super(props);
    this.state = { people: props.results };
  }

  componentDidUpdate(prevProps: Readonly<PropsResult>): void {
    if (this.props.results !== prevProps.results) {
      this.setState((state) => ({
        ...state,
        people: this.props.results,
      }));
    }
  }

  render() {
    return (
      <section className={styles['section-result']}>
        {this.state.people.length === 0 ? (
          <h2>Not Found</h2>
        ) : (
          <CardList dataCards={this.state.people} />
        )}
      </section>
    );
  }
}

export default Result;
