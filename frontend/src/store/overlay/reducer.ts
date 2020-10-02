import { IOverlayState, OverlayActionTypes } from "./interfaces";

import { SET_OVERLAY } from "./consts";

export const Reducer = (state: IOverlayState, action: OverlayActionTypes) => {
  switch (action.type) {
    case SET_OVERLAY:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};
