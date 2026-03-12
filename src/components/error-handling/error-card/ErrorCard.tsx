import React, { Component } from 'react';
import styles from './ErrorCard.module.css';

export type PropsErrorCard = {
  title: Error['name'];
  subtitle: Error['message'];
  'error-code': string;
};

type State = {
  title: Error['name'];
  subtitle: Error['message'];
  'error-code': string;
};

export class ErrorCard extends Component<PropsErrorCard, State> {
  constructor(props: PropsErrorCard) {
    super(props);

    this.state = {
      title: props.title,
      subtitle: props.subtitle,
      'error-code': props['error-code'] || '404',
    };
  }

  render() {
    return (
      <div className={styles['error-card']}>
        <div className={styles.score}>00400</div>

        <div className={styles['dino-scene']}>
          <div className={styles.dino}>
            <div className={styles.pixel}></div>
          </div>
          <div className={styles.cactus}>
            <div className={styles['cactus-arm-right']}></div>
          </div>
        </div>

        <p className={styles.title}>{this.state.title}</p>

        <p className={styles.subtitle}>{this.state.subtitle}</p>

        <ul className={styles.suggestions}>
          <li>Reload this page</li>
          <li>Reconnecting to Wi-Fi</li>
        </ul>

        <div className={styles['error-code']}>{this.state['error-code']}</div>
      </div>
    );
  }
}

export default ErrorCard;
