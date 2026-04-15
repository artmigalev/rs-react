import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';
import { Outlet, useNavigation, useParams, useRouteLoaderData } from 'react-router';
import Pagination from '../pagination/Pagination';
import { AppRoutes } from '@/enums/constans.enum';
import type { DataLoaderCards } from '@/routes';
import NotFoundPage from '@/layout/pages/404/404';
import { Activity } from 'react';
import Dashboard from '../dashboard/Dashboard';

const Result = () => {
  const loaderData = useRouteLoaderData<DataLoaderCards>(AppRoutes.ID__HOME);
  const navigation = useNavigation();
  const { detailsId } = useParams();

  const stateHas = true;

  if (navigation.state === 'loading') {
    return <Loader />;
  }

  if (!loaderData || !loaderData.data.results) {
    return <NotFoundPage />;
  }

  return (
    <section className={styles['section-result']}>
      {loaderData.data.results.length === 0 ? (
        <h2>Not Found</h2>
      ) : (
        <div className="flex flex-row gap-[var(--gap-default)] min-h-0">
          <>
            {detailsId && (
              <aside className={styles['sidebar-details']}>
                <Outlet />
              </aside>
            )}
          </>

          <div className={styles['results__container--cards']}>
            <CardList dataCards={loaderData.data.results} />
            {stateHas && <Dashboard />}
            <Activity mode={loaderData.data.results.length > 1 ? 'visible' : 'hidden'}>
              <Pagination counts={loaderData.counts} />
            </Activity>
          </div>
        </div>
      )}
      <ErrorBtn />
    </section>
  );
};
export default Result;
