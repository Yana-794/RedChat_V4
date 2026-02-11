import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from '@/store/provider';
import { AppRouter } from '@/store/app-router';
import '@/index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <AppRouter />
    </AppProviders>
  </React.StrictMode>
);