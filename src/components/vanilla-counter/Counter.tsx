import { useContextProvider } from "./ContextProvider";

export function VanillaCounter() {
  const {
    state: { count },
    dispatch,
  } = useContextProvider();

  return (
    <>
      <p>Usage of context of react with immer</p>
      <div>{count}</div>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { by: 1 } })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { by: 1 } })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
}
