import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
      retryDelay: 1000,
    },
  },
});

const GlobalIsFetching = () => {
  const isFetching = useIsFetching();

  return (
    <div>
      <p>Global isFetching count: {isFetching}</p>
    </div>
  );
};

export type TanstackQueryProviderProps = {
  children: React.ReactNode;
};

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalIsFetching />
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
