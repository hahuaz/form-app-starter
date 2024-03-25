import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountState = {
  count: number;
  isCalcFinished: boolean;
};

type CountActions = {
  setCount: (count: number) => void;
  asyncSetCount: (count: number) => Promise<void>;
  increment: () => void;
  decrement: () => void;
  setCalcFinished: (isCalcFinished: boolean) => void;
};

type CountStore = CountState & CountActions;

export const useCountStore = create<CountStore>()(
  devtools(
    // immer middleware allows us to use mutable updates in a safe way. otherwise we would have to return a new object that deep merges the previous state with the new state.
    // for example: set({ ...state, deep: { ...state.deep, foo: 'bar' } })
    // but instead we can now write: set(state => { state.deep.foo = 'bar' })
    immer((set) => ({
      count: 0,
      isCalcFinished: false,
      // payload type is inferred as number
      setCount: (count) => {
        set(
          (prevState) => {
            prevState.count = count;
          },
          true,
          "countStore/setCount"
        );
      },
      async asyncSetCount(count) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set(
          (prevState) => {
            prevState.count = count;
          },
          true,
          "countStore/asyncSetCount"
        );
      },
      increment: () => {
        set(
          (prevState) => {
            prevState.count += 1;
          },
          true,
          "countStore/increment"
        );
      },
      decrement: () => {
        set(
          (prevState) => ({
            count: prevState.count - 1,
          }),
          true,
          "countStore/decrement"
        );
      },
      setCalcFinished: (isCalcFinished) => {
        set(
          (prevState) => {
            prevState.isCalcFinished = isCalcFinished;
          },
          true,
          "countStore/setCalcFinished"
        );
      },
    })),
    {
      name: "countStore",
    }
  )
);
