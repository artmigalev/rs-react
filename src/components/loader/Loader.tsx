import styles from './Loader.module.css';

const Loader = () => {
  console.log('loading');

  return (
    <div data-testid="loader" className={styles['banter-loader']}>
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
};

export default Loader;
