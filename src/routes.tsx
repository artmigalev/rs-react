import { createBrowserRouter, type RouteMatch } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home';
import PeopleService from './api/services/people.service';
import Detail from './components/detail/Detail';
import Result from './components/result/Result';
import { getCounts } from './utils/funcs/countsCreated';
import type { IPeople } from 'swapi-ts';
import { AppRoutes } from './enums/constans.enum';

export type DataLoaderCards = {
  data: {
    results: IPeople[];
    count: number;
  };
  counts: number[];
};

const loaderCards = async ({
  params,
  request,
}: {
  params: RouteMatch['params'];
  request: Request;
}): Promise<DataLoaderCards> => {
  const { page } = params;

  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  await new Promise((res) => setTimeout(res, 1000));

  const service = new PeopleService();

  const data = await service.getPage(page, searchTerm);

  const counts = getCounts(data.count);
  console.log();

  return {
    data,
    counts,
  };
};

const loaderDetailCard = async ({ params }: { params: RouteMatch['params'] }) => {
  const service = new PeopleService();

  // await new Promise((res) => setTimeout(res, 1000));
  const { detailsId } = params;

  if (detailsId) {
    const card = await service.getDataBySearchValue(detailsId);
    return card;
  }
};
loaderDetailCard.hydrate = true;
loaderCards.hydrate = true;

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
    ],
  },
]);

export default routes;
