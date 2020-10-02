import { InputHTMLAttributes } from "react";

// tslint:disable-next-line: no-empty-interface
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  error?: IErrorData;
  message?: string;
  required?: boolean;
  type?: string;
}

export interface IBypass {
  title: string;
  index: number;
}

export interface IInputStyles {
  error?: boolean;
  message?: string;
}

export interface IErrorData {
  name: string;
  state: boolean;
  bypass?: IBypass;
}
