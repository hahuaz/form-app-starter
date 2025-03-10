import React, { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT"; payload: { by: number } }
  | { type: "DECREMENT"; payload: { by: number } }
  | { type: "RESET" };

const initialState: State = {
  count: 0,
};

const Context = createContext<{
  state: State;
  dispatch: (action: Action) => void;
} | null>(null);

// immer is able to mutate the state directly instead of returning a new state
const reducer = (draft: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      draft.count += action.payload.by;
      return;
    case "DECREMENT":
      draft.count -= action.payload.by;
      return;
    case "RESET":
      draft.count = 0;
      return;
    default:
      throw new Error("Invalid action type");
  }
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useContextProvider must be used within a ContextProvider");
  }

  return context;
};
