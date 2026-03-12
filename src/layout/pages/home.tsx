import Result from '@/components/resault/Result';
import Search from '@/components/search/Search';
import React from 'react';
import styles from './home.module.css';
import { ReceiveService } from '@/api/services/receive.service';
import type { IPeople } from '@/types/people.interface';

type State = {
  value: string;
  results: IPeople[];
};

export class Home extends React.Component<Record<string, never>, State> {
  #receiveService: ReceiveService;

  constructor(props: Record<string, never>) {
    console.log('constructor');

    super(props);
    this.#receiveService = ReceiveService.getInstance();

    this.state = {
      value: localStorage.getItem('searchValue') || '',
      results: this.#receiveService.getResults() || [],
    };
  }

  componentDidUpdate(prevProps: Readonly<Record<string, never>>, prevState: Readonly<State>): void {
    if (prevProps) {
      if (prevState.value !== this.state.value) {
        const newResult = this.#receiveService.getPeopleBySearchValue(this.state.value);
        this.setState((state) => ({
          ...state,
          results: newResult,
        }));
      }
    }
  }

  componentDidMount(): void {
    console.log('componentDidMount');
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({
        value: searchValue,
        results: this.#receiveService.getPeopleBySearchValue(searchValue),
      });
    }
  }
  changedStorage(v: string) {
    this.setState({ value: v.trim() });
    localStorage.setItem('searchValue', v);
  }
  render(): React.ReactNode {
    return (
      <div className={styles.home}>
        <div className={styles.wrapper}>
          <Search
            value={this.state.value}
            onChange={(v: string) => {
              this.changedStorage(v);
            }}
          />
          <Result results={this.state.results || []} />
        </div>
      </div>
    );
  }
}
