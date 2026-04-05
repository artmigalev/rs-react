import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';
import Pagination from '../pagination/Pagination';
import { useNavigation } from 'react-router';
import type { DataState } from '@/utils/hooks/usePeople';

type PropsResult = DataState & { setCurrentPage: (page: number) => void; currentPage: string };

const Result = ({ results, countsPages }: PropsResult) => {
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <Loader />;
  }

  return (
    <section className={styles['section-result']}>
      {results.length === 0 ? (
        <h2>Not Found</h2>
      ) : (
        <>
          <CardList dataCards={results} />
          {results && results.length > 1 && <Pagination counts={countsPages} />}
        </>
      )}

      <ErrorBtn />
    </section>
  );
};
export default Result;
