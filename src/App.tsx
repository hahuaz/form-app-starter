import "./App.css";

import {
  ReduxProvider,
  RouterProvider,
  TanstackQueryProvider,
} from "./providers";

function App() {
  return (
    <>
      <TanstackQueryProvider>
        <ReduxProvider>
          <RouterProvider />
        </ReduxProvider>
      </TanstackQueryProvider>
    </>
  );
}

export default App;
