import Result from '@/components/resault/Result';
import Search from '@/components/search/Search';
import React from 'react';
import styles from './home.module.css';

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.home}>
        <div className={styles.wrapper}>
          <Search />
          <Result />
        </div>
      </div>
    );
  }
}
