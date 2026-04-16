import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux.hooks';
import styles from './Dashboard.module.css';
import { unselectAll } from '@/features/slicers';
import { downloadCSV } from '@/utils/funcs/downloadCSV';

const Dashboard = () => {
  const listCards = useAppSelector((state) => state.checkedCards);
  const dispatch = useAppDispatch();

  return (
    <section className={styles['dashboard']}>
      <h5 className={styles['title']}>Flyout</h5>
      <div className="flex flex-row w-full justify-between items-center gap-[var()]">
        <span className="text-2xl">
          Selected Card: <span className="text-[var(--color-default)]">{listCards.length}</span>
        </span>
        <div className="flex flex-row gap-[var(--gap-default)] ">
          <button onClick={() => dispatch(unselectAll())}>Unselect all</button>
          <button onClick={() => downloadCSV(listCards)}>Download</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
