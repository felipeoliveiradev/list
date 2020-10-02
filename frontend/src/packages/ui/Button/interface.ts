export interface IButton{
  text: string;
  props?: IProps;
  type?: string;
}

export interface IProps {
  style?: React.CSSProperties;
  type?: any;
  model?: string;
  onChange?: any;
  onClick?: any;
  ref?: any
  size?: any;
}