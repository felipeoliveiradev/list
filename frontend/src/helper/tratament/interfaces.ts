export interface IInitialParameters {
  registroInicial?: string;
  registroFinal?: string;
  ordenadores?: string;
  valor?: IEntry[];
}
export enum ParametersServicesRegistroInicial {
  DEFAULT = "1",
}
export enum ParametersServicesRegistroFinal {
  DEFAULT = "25",
}

export interface IEntry {
  entry: IEntryKeyValue;
}

export interface IEntryKeyValue {
  key: string;
  value: string;
}

export interface IParameter {
  parametro: ICodeAndDescribe[];
}

export interface ICodeAndDescribe {
  codigo: string;
  descricao: string;
}

export interface IResponseRequest<T> {
  result?: T;
  message: string;
  status: boolean;
}

export interface IReturnResponseObject {
  objetos: IObjectsTransferData[];
  quantidadeRegistros: number;
  quantidadeRegistrosTotal: number;
  registroFinal: number;
  registroInicial: number;
  sucesso: boolean;
}

export interface IObjectsTransferData {
  id: number;
  nome: string;
  pai: IFatherResult | null;
}

export interface IFatherResult {
  id: number;
  nome: string;
}
