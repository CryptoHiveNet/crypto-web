"use client";
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient()

const React_query_provider = ({children}: {children: ReactNode}) => {
  return (// Provide the client to your App
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider> )
}

export default React_query_provider
