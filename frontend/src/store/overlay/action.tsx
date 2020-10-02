import {
  IOverlayActions,
  IOverlayState,
  IOverlayStore,
  IOverlayTypes,
} from "./interfaces";

import React from "react";
import { Reducer } from "./reducer";
import { SET_OVERLAY } from "./consts";
import { useReducer } from "react";

// import { StepsModal } from "components";



export const defaultState: IOverlayState = {
  options: {
    state: false,
    component:<></>,
  },
};

export const defaultActions: IOverlayActions = {
  setOptions: (options: IOverlayTypes) => null,
};

export const OverlayStore = (initialState = defaultState): IOverlayStore => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setOptions = (options: IOverlayTypes) => {
    dispatch({
      payload: options,
      type: SET_OVERLAY,
    });
  };

  return {
    actions: {
      setOptions,
    },
    state,
  };
};
