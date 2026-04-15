import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux.hooks';
import styles from './Dashboard.module.css';
import { unselectAll } from '@/features/slicers';

const Dashboard = () => {
  const count = useAppSelector((state) => state.checkedCards.length);
  const dispatch = useAppDispatch();

  return (
    <section className={styles['dashboard']}>
      <h5 className={styles['title']}>Flyout</h5>
      <div className="flex flex-row w-full justify-between items-center gap-[var()]">
        <span className="text-2xl">
          Selected Card: <span className="text-[var(--color-default)]">{count}</span>
        </span>
        <div className="flex flex-row gap-[var(--gap-default)] ">
          <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
          <button>Download</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
