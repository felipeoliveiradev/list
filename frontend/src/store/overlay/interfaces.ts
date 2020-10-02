import { SET_OVERLAY } from "./consts";

export interface IOverlayState {
  options: IOverlayTypes;
}

export interface IOverlayTypes {
  state: boolean;
  component?: React.FC | JSX.Element | React.ComponentType;
}

interface IOverlayAction {
  payload: IOverlayTypes;
  type: typeof SET_OVERLAY;
}

export interface IOverlayStore {
  state: IOverlayState;
  actions: IOverlayActions;
}

export interface IOverlayActions {
  setOptions(options: IOverlayTypes): void;
}

export type OverlayActionTypes = IOverlayAction;
