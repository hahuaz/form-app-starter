import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useCountStore } from "./store/count";

function App() {
  // using whole state would trigger a rerender on every state change. this is not recommended for performance reasons
  const wholeState = useCountStore((state) => state);
  console.log("wholeState", wholeState);

  // using individual state slices is recommended for performance reasons. this way only the component rerenders that use the specific state slice
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const setCount = useCountStore((state) => state.setCount);
  const isCalcFinished = useCountStore((state) => state.isCalcFinished);

  return (
    <>
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="react logo" />
        <img src={viteLogo} className="App-logo" alt="vite logo" />
        <p>
          Edit <code>App.tsx</code> and save to test HMR.
        </p>
        <p>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={() => setCount(0)}>reset</button>
        </p>
        <p>count: {count}</p>
        <p>isCalcFinished: {isCalcFinished.toString()}</p>
      </header>
    </>
  );
}

export default App;
