import Result from '@/components/result/Result';
import Search from '@/components/search/Search';
import styles from './home.module.css';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { usePeople } from '@/utils/hooks/usePeople';

export const Home = () => {
  const { handleSetState, localState, results, page, countsPages, isLoad, setSearchParams } =
    usePeople();

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ErrorHandling>
          <Search
            value={localState}
            onChange={(v: string) => {
              handleSetState(v);
            }}
          />

          <Result
            results={results}
            isLoad={isLoad}
            currentPage={page}
            countsPages={countsPages}
            setCurrentPage={(page) => setSearchParams({ page: page.toString() })}
          />
        </ErrorHandling>
      </div>
    </div>
  );
};
