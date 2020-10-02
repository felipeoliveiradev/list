// tslint:disable-next-line: no-empty-interface
export interface IBox {
  child?: any;
  props?: IProps;
 
}
export interface IProps {
  style?: React.CSSProperties;
  centered?:  ECentered;
  size?: string;
}
export enum ECentered {
  disabled = "none",
  all = "all",
  vertical = "vertical",
  horizontal = "horizontal"
  
}