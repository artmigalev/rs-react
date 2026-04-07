import Search from '@/components/search/Search';
import styles from './home.module.css';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { Outlet, useNavigate, useParams, useSearchParams } from 'react-router';

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });

  const { page } = useParams();
  const navigate = useNavigate();

  const handleClickClose = () => {
    navigate(`/star-wars-search/${page || '1'}`);
  };

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
          <Outlet />
        </ErrorHandling>
      </div>
    </div>
  );
};
