import styles from './Pagination.module.css';

interface IPagination {
  props: {
    counts: number[];
    currentPage: number;
    activatePage: (page: number) => void;
  };
}

const Pagination = ({ counts, activatePage, currentPage }: IPagination['props']) => {
  return (
    <ul className={styles['paging-list']}>
      {counts.map((page) => {
        return (
          <li
            key={page}
            onClick={() => activatePage(page)}
            className={currentPage === page ? styles['active'] : ''}
          >
            <span>{page}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
