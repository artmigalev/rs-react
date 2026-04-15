import styles from './Dashboard.module.css';

const Dashboard = () => {
  const count = 10;
  return (
    <section className={styles['dashboard']}>
      <h5 className={styles['title']}>Flyout</h5>
      <div className="flex flex-row w-full justify-between items-center gap-[var()]">
        <span className="text-2xl">
          Selected Card: <span className="text-[var(--color-default)]">{count}</span>
        </span>
        <div className="flex flex-row gap-[var(--gap-default)] ">
          <button>Unselect all</button>
          <button>Download</button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
