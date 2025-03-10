import { useCountStore } from "./store";

export function ZustandCounter() {
  // using whole state would trigger a rerender on every state change. this is not recommended for performance reasons
  const wholeState = useCountStore((state) => state);

  // using individual state slices is recommended for performance reasons. this way only the component rerenders that use the specific state slice
  const count = useCountStore((state) => state.count);

  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const setCount = useCountStore((state) => state.setCount);

  // async actions are also supported
  const asyncSetCount = useCountStore((state) => state.asyncSetCount);

  return (
    <div>
      <>Zustand doesn't need a provider to pass the store down to components</>
      <pre>{JSON.stringify(wholeState, null, 2)}</pre>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => asyncSetCount(10)}>async set 10</button>
      </div>
      <p>count: {count}</p>
    </div>
  );
}
