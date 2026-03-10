import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ReceiveService } from './api/services/receive.service.ts';

async function bootStrap() {
  const root = document.getElementById('root');
  const peopleService = ReceiveService.getInstance();
  await peopleService.init();
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

await bootStrap();
