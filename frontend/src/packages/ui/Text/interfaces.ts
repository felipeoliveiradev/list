import { CSSProperties } from "react";

export interface IText {
  type: ETextType,
  text: string,
  style?: CSSProperties
}
export enum ETextType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  p = "p",
  span = "span"
}