import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UIProvider } from "@yamada-ui/react";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </QueryClientProvider>
  );
}
