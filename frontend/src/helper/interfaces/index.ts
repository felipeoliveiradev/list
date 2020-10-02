import { ReactChild, ReactFragment, ReactPortal } from "react";

export interface IType {
  children?:
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
}

export interface IResultRefsSubmit {
  fieldName: string;
  value: string;
}

export interface IResponseRequest<T> {
  result?: T;
  message: string;
  status: boolean;
}

export interface ITrackingStatisticsData {
  errors: number;
  success: number;
  warning: number;
  total: number;
}

export interface IProjectData {
  id?: number;
  name: string;
  description?: string;
  url: string;
  status: number;
  userId: number;
  user?: IUserProjectData;
  createdDate?: Date;
  updatedDate?: Date;
}

export interface IUserProjectData {
  id?: number;
  username: string;
  name: string;
  lastname: string;
  password: string;
  email: string;
  cellphone: string;
  role: string;
  createdDate: Date;
  updatedDate: Date;
}
