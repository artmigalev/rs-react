import { Component } from 'react';
import styles from './ErrorBtn.module.css';
export class ErrorBtn extends Component {
  state: Readonly<{ hasError: boolean }> = { hasError: false };

  handleClick = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Error Handle Run');
    }
    return (
      <button onClick={this.handleClick} className={styles['btn-test-error']}>
        {' '}
        Simulate Errors
      </button>
    );
  }
}

export default ErrorBtn;
