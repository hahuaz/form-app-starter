import React, { createContext, Dispatch, useContext } from "react";
import { useImmerReducer } from "use-immer";
import type { MessageInstance } from "antd/es/message/interface";

export type CommonState = {
  isEmpty: boolean;
};

export type CommonAction = {
  type: "SET_IS_EMPTY";
  payload: { isEmpty: boolean };
};

export type CommonContext = {
  state: CommonState;
  dispatch: Dispatch<CommonAction>;
  messageApi: MessageInstance;
};

const CommonContext = createContext<CommonContext | undefined>(undefined);

type CommonContextProviderProps = {
  children: React.ReactNode;
  messageApi: MessageInstance;
};

export const CommonContextProvider = ({
  children,
  messageApi,
}: CommonContextProviderProps) => {
  const initialState: CommonState = {
    isEmpty: false,
  };

  const [state, dispatch] = useImmerReducer(
    (draft: CommonState, action: CommonAction) => {
      switch (action.type) {
        case "SET_IS_EMPTY":
          draft.isEmpty = action.payload.isEmpty;
          return;
        default:
          return;
      }
    },
    initialState
  );

  return (
    <CommonContext.Provider value={{ state, dispatch, messageApi }}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonContextProvider = () => {
  const context = useContext(CommonContext);
  if (context === undefined) {
    throw new Error(
      "useCommonContext must be used within a CommonContextProvider"
    );
  }
  return context;
};
