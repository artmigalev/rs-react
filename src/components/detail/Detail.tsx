import { AppRoutes } from '@/enums/constans.enum';
import React from 'react';
import { useNavigation, useRouteLoaderData } from 'react-router';
import type { IPeople } from 'swapi-ts';
import Loader from '../loader/Loader';

const Detail = () => {
  const loaderDetailCard = useRouteLoaderData<IPeople[] | undefined>(AppRoutes.ID__DETAIL) ?? [];

  const navigation = useNavigation();

  const isLoad = navigation.state != 'idle';
  if (isLoad) {
    return <Loader />;
  }

  return (
    <ul role="list" className="flex flex-col ">
      {loaderDetailCard &&
        Object.entries(...loaderDetailCard).map(([key, val]) => (
          <li role="listitem" key={key} className=" flex flex-row gap-2 overflow-x-auto">
            <span role="generic" className="text-(--primary)">{`${key}:`}</span>
            <span data-testid={`val-${key}`} role="generic">
              {val}
            </span>
          </li>
        ))}
    </ul>
  );
};

export default Detail;
