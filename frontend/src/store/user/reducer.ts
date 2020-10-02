import { SET_USER } from "./consts";
import { UserActionTypes, IUserState } from "./interfaces";

export const Reducer = (state: IUserState, action: UserActionTypes) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};
