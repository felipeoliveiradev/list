import { IconType } from "react-icons/lib";

export interface IBoxStyles {
  bigger?: boolean;
}

export interface IItemsListProps {
  title: string;
  subtitle: string;
  icon: any;
  padding?: string;
}

export interface IItems {
  items: Array<IItemsListProps>;
}

export interface IListProps {
  title: string;
  cards: IItems;
}

export interface ITableDetailProps {
  configs: Array<IListProps>;
}
