import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/locales';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './lib/query';
import { NuqsAdapter } from 'nuqs/adapters/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <HelmetProvider>
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
