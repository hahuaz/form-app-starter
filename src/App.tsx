import "./App.css";

import {
  CommonContextProvider,
  ReduxProvider,
  RouterProvider,
  TanstackQueryProvider,
} from "./providers";

import { message } from "antd";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <CommonContextProvider messageApi={messageApi}>
        <TanstackQueryProvider>
          <ReduxProvider>
            <RouterProvider />
          </ReduxProvider>
        </TanstackQueryProvider>
      </CommonContextProvider>
    </>
  );
}

export default App;
