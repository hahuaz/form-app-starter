import { AppRouteProvider } from "@/providers";

// seperate providers to their own directories to distinguish which library requires what.
import { ContextProvider } from "@/components/vanilla-counter";
import { TanstackQueryProvider } from "@/components/todos-tsquery";
import { ReduxProvider } from "@/components/counter-and-todos-redux";

function App() {
  return (
    <>
      <ContextProvider>
        <TanstackQueryProvider>
          <ReduxProvider>
            <AppRouteProvider />
          </ReduxProvider>
        </TanstackQueryProvider>
      </ContextProvider>
    </>
  );
}

export default App;
