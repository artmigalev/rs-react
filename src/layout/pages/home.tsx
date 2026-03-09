import Result from '@/components/resault/Result';
import Search, { type State } from '@/components/search/Search';
import React from 'react';
import styles from './home.module.css';

export class Home extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      value: localStorage.getItem('searchValue') || '',
    };
  }

  componentDidMount(): void {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({ value: searchValue });
    }
  }
  changedStorage(v: string) {
    this.setState({ value: v });
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
          <Result />
        </div>
      </div>
    );
  }
}
