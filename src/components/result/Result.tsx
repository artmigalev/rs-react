import styles from './Result.module.css';
import CardList from '../card-list/CardList';
import Loader from '../loader/Loader';
import ErrorBtn from '../error-handling/error-btn/ErrorBtn';
import { Outlet, useNavigation, useParams, useRouteLoaderData } from 'react-router';
import Pagination from '../pagination/Pagination';
import { AppRoutes } from '@/enums/constans.enum';

const Result = () => {
  const { data, counts } = useRouteLoaderData(AppRoutes.ID__HOME);
  const navigation = useNavigation();
  const { detailsId } = useParams();

  if (navigation.state === 'loading') {
    return <Loader />;
  }

  return (
    <section className={styles['section-result']}>
      {data.results.length === 0 ? (
        <h2>Not Found</h2>
      ) : (
        <div className="flex flex-row h-[inherit] ">
          {detailsId && (
            <aside className={styles['sidebar-details']}>
              <Outlet />
            </aside>
          )}
          <div className="flex flex-col gap-5">
            <CardList dataCards={data.results} />
            {data && data.results.length > 1 && <Pagination counts={counts} />}
          </div>
        </div>
      )}

      <ErrorBtn />
    </section>
  );
};
export default Result;
