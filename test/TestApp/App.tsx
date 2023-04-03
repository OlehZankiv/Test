import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RootNavigation} from './src/navigation';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <RootNavigation />
  </QueryClientProvider>
);
