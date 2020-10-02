export interface IStepsStyles {
  step: number;
  first?: boolean;
  index: number;
  error?: Array<IErrorData>;
}

export interface IInputs {
  name: string;
  title: string;
  type?: string;
  required?: boolean;
  ref: any;
  maxLength?: number;
  minLength?: number;
}

export interface IBypass {
  title: string;
  index: number;
}

export interface IErrorData {
  name: string;
  state: boolean;
  bypass?: IBypass;
  message: string;
}

export interface ISlides {
  inputs: Array<IInputs>;
}

export interface IByPass {
  title: string;
}

export interface IStepsProps {
  title?: string;
  bypass?: Array<IByPass>;
  steps?: Array<ISlides>;
  onSubmit?: (props: Array<IResultRefsSubmit>) => any;
}
export interface IButton {
  color?: string;
  disabled?: boolean;
  error?: IErrorData;
}

export interface IResultRefsSubmit {
  fieldName: string;
  value: string;
}
