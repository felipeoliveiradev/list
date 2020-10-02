export type IStatus = "success" | "error" | "warning";

export interface IBannerProps {
  status: IStatus;
  title: string;
  subtitle: string;
  separator?: boolean;
  loading?: boolean;
  padding?: boolean;
}
