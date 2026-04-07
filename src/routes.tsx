import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home/Home';
import Detail from './components/detail/Detail';
import Result from './components/result/Result';
import type { IPeople } from 'swapi-ts';
import { AppRoutes } from './enums/constans.enum';
import { loaderDetailCard, loaderCards } from './utils/loaders';
import About from './layout/pages/about/about';

export type DataLoaderCards = {
  data: {
    results: IPeople[];
    count: number;
  };
  counts: number[];
};

const routes = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: '/star-wars-search/',
    element: <App />,
    children: [
      {
        path: ':page?',
        id: AppRoutes.ID__HOME,
        element: <Home />,
        loader: loaderCards,
        children: [
          {
            element: <Result />,
            children: [
              {
                id: AppRoutes.ID__DETAIL,
                path: ':detailsId?',
                element: <Detail />,
                loader: loaderDetailCard,
              },
            ],
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default routes;
