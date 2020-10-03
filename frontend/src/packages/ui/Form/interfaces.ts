import { IButton } from "../Button/interface";
import { IInput } from "../Input/interfaces";
import { ReactNode } from "react";

export interface IForm {
  inputs: Array<IInput>;
  child?: any;
  props?:IProps
}

export interface IProps {
  style?: React.CSSProperties;
  className?: any;
  onSubmit?: any,
  onChange?: any
  size?: string;
}