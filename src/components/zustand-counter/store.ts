import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CountState = {
  isEmpty: boolean;
  count: number;
};

type CountActions = {
  setCount: (count: number) => void;
  asyncSetCount: (count: number) => Promise<void>;
  increment: () => void;
  decrement: () => void;
};

type CountStore = CountState & CountActions;

export const useCountStore = create<CountStore>()(
  devtools(
    immer((set) => ({
      isEmpty: false,
      count: 0,
      // payload type is inferred
      setCount: (count) => {
        set(
          // caution: if you would return a new object here, the state would be replaced with that object and the other state slices would be lost. Instead work with mutable updates
          (prevState) => {
            prevState.count = count;
          },
          true,
          // give the action a name for easier debugging in the Redux devtools
          "countStore/setCount"
        );
      },
      // async dispatcher
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
          (prevState) => {
            prevState.count -= 1;
          },
          true,
          "countStore/decrement"
        );
      },
    })),
    {
      name: "countStore",
    }
  )
);
