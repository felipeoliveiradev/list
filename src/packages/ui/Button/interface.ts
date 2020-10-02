export interface IButton{
  text: string;
  props?: IProps
}

export interface IProps {
  style?: React.CSSProperties;
  type?: any;
  onChange?: any;
  onClick?: any;
  ref?: any
}