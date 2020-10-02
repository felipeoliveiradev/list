export interface IConversionToJsonData<T> {
  objetos?: T;
  quantidadeRegistros: number;
  quantidadeRegistrosTotal: number;
  registroFinal: number;
  registroInicial: number;
  sucesso: boolean;
}