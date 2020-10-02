import { CSSProperties } from "react";

export interface IColumn {
  child?: any;
  props?: IProps
}
export interface IProps {
  style?: CSSProperties; 
  size?: string;
  centered?: string;
  className?: string;
  backgroundColor?: string;
}
