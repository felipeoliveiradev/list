// tslint:disable-next-line: no-empty-interface
export interface IBox {
  child?: any;
  style?: React.CSSProperties;
  centered?:  ECentered;
}
export interface IMargin {
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
}
export enum ECentered {
  disabled = "none",
  all = "all",
  vertical = "vertical",
  horizontal = "horizontal"
  
}