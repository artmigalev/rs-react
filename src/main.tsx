import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import routes from './routes.tsx';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { ThemeProvider } from './App.tsx';

async function bootStrap() {
  const root = document.getElementById('root');

  try {
    if (root)
      createRoot(root).render(
        <StrictMode>
          <ThemeProvider>
            <Provider store={store}>
              <RouterProvider router={routes} />
            </Provider>
          </ThemeProvider>
        </StrictMode>
      );
  } catch {
    throw new Error('not root');
  }
}

await bootStrap();
