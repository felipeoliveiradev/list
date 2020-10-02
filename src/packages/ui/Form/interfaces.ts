import { IButton } from "../Button/interface";
import { IInput } from "../Input/interfaces";
import { ReactNode } from "react";

export interface IForm {
  inputs: Array<IInput>;
  content?: any;
  props?:IProps
}

export interface IProps {
  style?: React.CSSProperties;
  onSubmit?: any,
  onChange?: any
}