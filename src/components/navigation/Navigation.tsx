import { AppRoutes } from '@/enums/constans.enum';
import React from 'react';
import { NavLink } from 'react-router';

const Navigation = () => {
  return (
    <nav className="w-max m-auto">
      <ul className="flex flex-row gap-[var(--gap-default)]">
        <li>
          <NavLink to={AppRoutes.BASE}>Home</NavLink>
        </li>
        <li>
          <NavLink to={AppRoutes.ABOUT}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
