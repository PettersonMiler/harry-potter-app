import { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "react-query";

type ProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const QueryClientProvider = ({ children }: ProviderProps) => (
  <ReactQueryClientProvider client={queryClient}>
    {children}
  </ReactQueryClientProvider>
);
