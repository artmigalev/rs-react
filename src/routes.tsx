import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home';
import PeopleService from './api/services/people.service';

const loaderCards = async ({ params, request }) => {
  const { page } = params;
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  console.log(searchTerm);
  await new Promise((res) => setTimeout(res, 1000));

  const service = new PeopleService();

  const data = await service.getPage(page, searchTerm);
  console.log(data);

  return data;
};

const loaderResults = async ({ params }) => {
  console.log(params);
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
        element: <Home />,
        loader: loaderCards,
      },
    ],
  },
]);

export default routes;
