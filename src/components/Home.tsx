import React from "react";
import { useCommonContextProvider } from "@/providers";

export function Home() {
  const { messageApi } = useCommonContextProvider();

  // This is a hack to prevent the message from displaying twice in dev mode
  const welcomeMessageShown = React.useRef(false);

  React.useEffect(() => {
    if (welcomeMessageShown.current) return;
    welcomeMessageShown.current = true;

    messageApi.info("Home page mounted.");
  }, []);

  return (
    <>
      <div>Home</div>
    </>
  );
}
