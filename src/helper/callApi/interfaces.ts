export interface ICallApi<T> {
  method: string;
  path: string;
  header?: boolean; // eslint-disable-line
  data?: any; // eslint-disable-line
  url?: string;
}

export enum EMethods {
  POST = "POST",
  PUT = "PUT",
  GET = "GET",
  Delete = "Delete"
}

export interface IFormData {
  [key: string]: string;
}

export interface ICallApiExtenal {
  data?: any;
  path?: string;
  method?: any;
  mode?: any;
  url?: string;
  headers?: any;
  audit?: IAudit;
}
export interface IAudit {
  auditavel?: string;
  nomeExecutavel?: string;
  auditIdSessao?: string;
}
