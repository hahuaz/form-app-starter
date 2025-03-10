import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../createAppSlice";
import { fetchCount } from "./counterAPI";

// Define the shape of the counter state
export interface CounterSliceState {
  count: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterSliceState = {
  count: 0,
  status: "idle",
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createAppSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: (create) => ({
    // mutable state updates
    increment: create.reducer((state) => {
      state.count += 1;
    }),

    decrement: create.reducer((state) => {
      state.count -= 1;
    }),

    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.count += action.payload;
      }
    ),

    /**
     * AsyncThunk should be used if you need to perform async operations.
     */
    incrementAsync: create.asyncThunk(
      async (amount: number) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
      },
      {
        pending: (state) => {
          state.status = "loading";
        },
        fulfilled: (state, action) => {
          state.status = "idle";
          state.count += action.payload;
        },
        rejected: (state) => {
          state.status = "failed";
        },
      }
    ),
  }),

  // Selectors to retrieve state values
  selectors: {
    selectCount: (counter) => counter.count,
    selectStatus: (counter) => counter.status,
  },
});

// actions directly callable from components instead of passing type:
// dispatch(incrementByAmount(incrementValue))
export const { decrement, increment, incrementByAmount, incrementAsync } =
  counterSlice.actions;

// Selectors returned by `slice.selectors`.
export const { selectCount, selectStatus } = counterSlice.selectors;
