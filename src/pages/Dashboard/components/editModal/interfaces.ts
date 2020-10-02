export interface IEditModalProps {
  rowSelected?: number | null | undefined;
  data?: any;
  closeEdit(): void;
}

export interface ISeparatorStyles {
  first?: boolean;
}

export interface ITableStyles {
  header?: boolean;
}

export interface iObjectData {
  codigoOperacao: string;
  dataEvento: Date;
  id: number;
  ip: string;
  nomeExecutavel: string;
  nomeHostUsuario: string;
  quantidadeLinha: number;
  sessao: {
    id: number;
    usuario: {
      nome: string;
    }
  };
  statusOperacao: string;
  usuario: string;
}