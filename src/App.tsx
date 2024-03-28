import "./App.css";

import { RouterProvider, TanstackQueryProvider } from "./providers";

function App() {
  return (
    <>
      <TanstackQueryProvider>
        <RouterProvider />
      </TanstackQueryProvider>
    </>
  );
}

export default App;
