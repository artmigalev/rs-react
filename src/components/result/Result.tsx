import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';
import Pagination from '../pagination/Pagination';
import type { DataState } from '@/utils/hooks/usePeople';

type PropsResult = DataState & { setCurrentPage: (page: number) => void; currentPage: string };

const Result = ({ results, isLoad, setCurrentPage, currentPage, countsPages }: PropsResult) => {
  if (isLoad) {
    return <Loader />;
  } else {
    return (
      <section className={styles['section-result']}>
        {results.length === 0 ? (
          <h2>Not Found</h2>
        ) : (
          <>
            <CardList dataCards={results} />
            {!isLoad && results.length > 0 && (
              <Pagination
                currentPage={Number(currentPage)}
                counts={countsPages}
                activatePage={setCurrentPage}
              />
            )}
          </>
        )}

        <ErrorBtn />
      </section>
    );
  }
};

export default Result;
