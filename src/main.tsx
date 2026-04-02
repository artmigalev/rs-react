import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import routes from './routes.tsx';

async function bootStrap() {
  const root = document.getElementById('root');

  try {
    if (root)
      createRoot(root).render(
        <StrictMode>
          <RouterProvider router={routes} />
        </StrictMode>
      );
  } catch {
    throw new Error('not root');
  }
}

await bootStrap();
