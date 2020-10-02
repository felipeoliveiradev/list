import { SET_USER } from "./consts";

export interface IUserState {
  options: IUserTypes;
 }

export interface IUserTypes {
  cellphone?: string;
  email?: string;
  lastname?: string;
  name?: string;
  role?: string;
  username?: string;
}

interface IUserAction {
  payload: IUserTypes;
  type: typeof SET_USER;
}

export interface IUserStore {
  state: IUserState;
  actions: IUserActions;
}

export interface IUserActions {
  setOptions(options: IUserTypes): void;
}

export type UserActionTypes = IUserAction;
