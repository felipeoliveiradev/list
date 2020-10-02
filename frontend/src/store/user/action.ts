import {
  IUserActions,
  IUserState,
  IUserStore,
  IUserTypes
} from "./interfaces";

import { Reducer } from "./reducer";
import { SET_USER } from "./consts";
import { useReducer } from "react";

export const defaultState: IUserState = {
  options: {
    
  }
};

export const defaultActions: IUserActions = {
  setOptions: (options: IUserTypes) => null
};

export const UserStore = (
  initialState = defaultState
): IUserStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setOptions = (options: IUserTypes) => {
    dispatch({
      payload: options,
      type: SET_USER
    });
  };

  return {
    actions: {
      setOptions
    },
    state
  };
};
