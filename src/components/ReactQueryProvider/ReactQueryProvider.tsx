'use client';

import {
  isServer,
  matchQuery,
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { FC, PropsWithChildren, useState } from 'react';

declare module '@tanstack/react-query' {
  interface Register {
    // queryMeta: MyMeta;
    mutationMeta: {
      invalidates?: QueryKey[];
      awaits?: string[];
    };
  }
}

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000,
      },
    },
    // mutationCache: new MutationCache({
    //   onSuccess: async (_data, _variables, _context, mutation) => {
    //     await queryClient.invalidateQueries({
    //       queryKey: mutation.options.mutationKey,
    //       predicate: (query) =>
    //         // invalidate all matching tags at once
    //         // or everything if no meta is provided
    //         mutation.meta?.invalidates?.some((queryKey) =>
    //           matchQuery({ queryKey }, query),
    //         ) ?? true,
    //     });
    //   },
    // }),
  });
}

function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    // This is very important, so we don't re-make a new client if React
    // suspends during the initial render. This may not be needed if we
    // have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

let browserQueryClient: QueryClient | undefined = undefined;

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
