import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home';

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
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
