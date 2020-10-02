import { SET_LOADING } from "./consts";
import { ILoadingState, LoadingActionTypes } from "./interfaces";

export const Reducer = (state: ILoadingState, action: LoadingActionTypes) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
