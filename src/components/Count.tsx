import { useCountStore } from "../store/count";

export function Count() {
  // using whole state would trigger a rerender on every state change. this is not recommended for performance reasons
  const wholeState = useCountStore((state) => state);
  console.log("wholeState", wholeState);

  // using individual state slices is recommended for performance reasons. this way only the component rerenders that use the specific state slice
  const count = useCountStore((state) => state.count);
  const isCalcFinished = useCountStore((state) => state.isCalcFinished);

  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const setCount = useCountStore((state) => state.setCount);

  return (
    <div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
      <p>count: {count}</p>
      <p>isCalcFinished: {isCalcFinished?.toString()}</p>
    </div>
  );
}
