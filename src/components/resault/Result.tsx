import { Component } from 'react';
import styles from './Result.module.css';
export class Result extends Component {
  static propTypes = {};

  render() {
    return <section className={styles['section-result']}>search</section>;
  }
}

export default Result;
