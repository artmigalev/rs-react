import { Component } from 'react';
import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import type { IPeople, ResponsePeople } from '@/types/people.interface';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';

type PropsResult = {
  results: ResponsePeople['results'];
};
type State = {
  people: IPeople[];
  isLoad: boolean;
};

export class Result extends Component<PropsResult, State> {
  constructor(props: PropsResult) {
    super(props);
    this.state = {
      people: props.results,
      isLoad: true,
    };
  }

  componentDidUpdate(prevProps: Readonly<PropsResult>, prevState: Readonly<State>): void {
    if (this.props.results !== prevProps.results) {
      this.setState((state) => ({
        ...state,
        isLoad: false,
      }));
      setTimeout(() => {
        this.setState((state) => ({
          ...state,
          people: this.props.results,
        }));
      }, 800);
    }
    if (prevState.people !== this.state.people) {
      this.setState((state) => ({ ...state, isLoad: true }));
    }
  }

  render() {
    if (!this.state.isLoad) {
      return <Loader />;
    } else {
      return (
        <section className={styles['section-result']}>
          {this.state.people.length === 0 ? (
            <h2>Not Found</h2>
          ) : (
            <CardList dataCards={this.state.people} />
          )}
          <ErrorBtn />
        </section>
      );
    }
  }
}

export default Result;
