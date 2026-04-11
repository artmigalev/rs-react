import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home/Home';
import Detail from './components/detail/Detail';
import Result from './components/result/Result';
import type { IPeople } from 'swapi-ts';
import { AppRoutes } from './enums/constans.enum';
import { loaderDetailCard, loaderCards } from './utils/loaders';
import About from '@layout/pages/about/About';
import NotFoundPage from './layout/pages/404/404';

export type DataLoaderCards = {
  data: {
    results: IPeople[];
    count: number;
  };
  counts: number[];
};

const routes = createBrowserRouter([
  {
    path: '/star-wars-search/',
    element: <App />,
    children: [
      {
        path: ':page?',
        id: AppRoutes.ID__HOME,
        element: <Home />,
        loader: loaderCards,
        errorElement: <NotFoundPage />,
        children: [
          {
            element: <Result />,
            children: [
              {
                id: AppRoutes.ID__DETAIL,
                path: ':detailsId?',
                element: <Detail />,
                loader: loaderDetailCard,
                errorElement: <NotFoundPage />,
              },
            ],
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
