// tslint:disable-next-line: no-empty-interface
export interface ITags {
  items: Array<IItem>;
  style?: React.CSSProperties;
}

export interface IListStyles {
  titleColor?: string;
  subtitleColor?: string;
  padding?: boolean;
}

export interface IItem {
  title: string;
  number?: string;
  icon?: any;
  style?: React.CSSProperties;
}
