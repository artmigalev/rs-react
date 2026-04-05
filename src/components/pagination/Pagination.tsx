import { NavLink } from 'react-router';
import styles from './Pagination.module.css';
import { AppRoutes } from '@/enums/constans.enum';

interface IPagination {
  props: {
    counts: number[];
    // currentPage: number;
    // activatePage: (page: number) => void;
  };
}

const Pagination = ({ counts }: IPagination['props']) => {
  return (
    <ul className={styles['paging-list']}>
      {counts.map((page) => {
        return (
          <li key={page}>
            <NavLink
              to={AppRoutes.BASE + page}
              className={({ isActive }) => (isActive ? styles['active'] : '')}
            >
              {page}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
