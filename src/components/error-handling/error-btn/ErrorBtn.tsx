import { useState } from 'react';
import styles from './ErrorBtn.module.css';
export const ErrorBtn = () => {
  const [state, setState] = useState({
    hasError: false,
  });

  const handleClick = () => {
    setState({ hasError: true });
  };
  if (state.hasError) {
    throw new Error('Error Handle Run');
  }

  return (
    <button onClick={handleClick} className={styles['btn-test-error']}>
      {' '}
      Simulate Errors
    </button>
  );
};

export default ErrorBtn;
