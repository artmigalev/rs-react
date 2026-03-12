import { Component } from 'react';
import styles from './Loader.module.css';

export class Loader extends Component {
  render() {
    return (
      <div className={styles['banter-loader']}>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
        <div className={styles['banter-loader__box']}></div>
      </div>
    );
  }
}

export default Loader;
