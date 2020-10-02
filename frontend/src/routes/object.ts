import { Dashboard } from "pages";
import { IRoutes } from "./interfaces";

export const Routes: Array<IRoutes> = [
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
];
