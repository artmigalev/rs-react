import { Component } from 'react';
import styles from './Search.module.css';
export class Search extends Component {
  static propTypes = {};

  render() {
    return (
      <section className={styles['section-search']}>
        <form action="" method="get">
          <div className={styles['field-input']}>
            <input
              type="text"
              name="search-input"
              className="w-full p-[0.5rem]"
              placeholder="Search value"
            />
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
