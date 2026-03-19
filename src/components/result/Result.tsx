import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import type { ResponsePeople } from '@/types/people.interface';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';

type PropsResult = {
  results: ResponsePeople['results'] | null;
};

const Result = ({ results }: PropsResult) => {
  const isLoad = results === null;

  if (isLoad) {
    return <Loader />;
  } else {
    return (
      <section className={styles['section-result']}>
        {results.length === 0 ? <h2>Not Found</h2> : <CardList dataCards={results} />}
        <ErrorBtn />
      </section>
    );
  }
};

export default Result;
