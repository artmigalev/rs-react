import Search from '@/components/search/Search';
import styles from './home.module.css';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { Outlet, useSearchParams } from 'react-router';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });

  return (
    <div className={styles.home}>
      <ErrorHandling>
        <Search
          value={searchParams.get('search') || ''}
          onChange={(v: string) => {
            setSearchParams({ search: v });
          }}
        />
        <Outlet />
      </ErrorHandling>
    </div>
  );
};
