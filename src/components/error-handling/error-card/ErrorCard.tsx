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

export const ErrorCard = (props: PropsErrorCard) => {
  const { title, subtitle } = props;

  return (
    <div className={styles['error-card']}>
      <h3>{title}</h3>
      <p className={styles['error-subtitle']}>{subtitle}</p>
    </div>
  );
};

export default ErrorCard;
