'use client';

import {
  matchQuery,
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { FC, PropsWithChildren } from 'react';

declare module '@tanstack/react-query' {
  interface Register {
    // queryMeta: MyMeta;
    mutationMeta: {
      invalidates?: QueryKey[];
      awaits?: string[];
    };
  }
}

// Create a client
const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_data, _variables, _context, mutation) => {
      await queryClient.invalidateQueries({
        queryKey: mutation.options.mutationKey,
        predicate: (query) =>
          // invalidate all matching tags at once
          // or everything if no meta is provided
          mutation.meta?.invalidates?.some((queryKey) =>
            matchQuery({ queryKey }, query),
          ) ?? true,
      });
    },
  }),
});

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
