// tslint:disable-next-line: no-empty-interface
export interface IList {
  items: Array<IItem>;
  titleColor?: string;
  subtitleColor?: string;
  padding?: boolean;
}

export interface IListStyles {
  titleColor?: string;
  subtitleColor?: string;
  padding?: boolean;
}

export interface IItem {
  title: string;
  subtitle: string;
  icon: any;
}
