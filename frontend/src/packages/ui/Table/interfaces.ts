import { MUIDataTableProps } from "mui-datatables";

export interface IMuiDataTableStyles {
  emptyRow?: boolean;
  loading?: boolean;
}

export interface IMuiDataTableProps extends MUIDataTableProps {
  emptyRow?: boolean;
  loading?: boolean;
}

export interface IConfigsTable {
  columns: Array<any>;
  options?: object;
}