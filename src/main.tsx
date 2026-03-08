import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

function bootStrap() {
  const root = document.getElementById('root');
  try {
    if (root)
      createRoot(root).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
  } catch {
    throw new Error('not root');
  }
}

bootStrap();
