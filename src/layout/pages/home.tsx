import Result from '@/components/result/Result';
import Search from '@/components/search/Search';
import styles from './home.module.css';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { useLoaderData, useParams, useSearchParams } from 'react-router';
import type { IPeople } from 'swapi-ts';
import { useMemo } from 'react';
import { getCounts } from '@/utils/funcs/countsCreated';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const loaderData = useLoaderData<{ results: IPeople[]; count: number }>();

  const counts = useMemo(() => {
    return getCounts(loaderData.count);
  }, [loaderData]);

  const params = useParams();

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ErrorHandling>
          <Search
            value={searchParams.get('search') || ''}
            onChange={(v: string) => {
              setSearchParams({ search: v });
            }}
          />

          <Result
            results={loaderData.results}
            currentPage={params.page || '1'}
            countsPages={counts}
            // setCurrentPage={(page) => setSearchParams({ page: page.toString() })}
          />
        </ErrorHandling>
      </div>
    </div>
  );
};
