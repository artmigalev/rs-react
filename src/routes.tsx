import { createBrowserRouter } from 'react-router';
import App from './App';
import { Home } from './layout/pages/home';

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
        // index: true,
        path: 'page:page?',
        element: <Home />,
        loader: loaderResults,
      },
    ],
  },
]);

export default routes;
