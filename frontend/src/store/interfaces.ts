import { ILoadingActions, ILoadingState } from "./loading/interfaces";
import { IOverlayActions, IOverlayState } from "./overlay/interfaces";
import { IUserActions, IUserState } from "./user/interfaces";

export interface IStoreContent {
  actions: IActions;
  state: IStates;
}

export interface IStates {
  loading: ILoadingState;
  user: IUserState;
  // overlay: IOverlayState
}

export interface IActions {
  loadingAction: ILoadingActions;
  userAction: IUserActions;
  // overlayAction: IOverlayActions;
}

export type IStore = () => IStoreContent;
