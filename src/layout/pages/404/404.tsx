import { AppRoutes } from '@/enums/constans.enum';
import React from 'react';
import { NavLink, useLocation } from 'react-router';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div>
      <h4>404-NotFound</h4>
      <p>
        Page not found
        <strong>{location.pathname}</strong>
      </p>
      <NavLink to={AppRoutes.BASE}>Go back home</NavLink>
    </div>
  );
};

export default NotFoundPage;
