import { useState } from "react";

import { useAppDispatch, useAppSelector } from "./store/hooks";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
  selectStatus,
} from "./store/slices/counter/counterSlice";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count">{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          style={{
            width: "50px",
          }}
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount |
        </button>
        <button
          disabled={status !== "idle"}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};
