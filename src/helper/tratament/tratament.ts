import { IResponseRequest } from "./interfaces";

export class Tratament {
  public responseRequest = async <T>(
    data: any
  ): Promise<IResponseRequest<T>> => {
    if (data.status === true) {
      return {
        result: data,
        message: "Solicitação executada com sucesso",
        status: data.status,
      };
    } else {
      return {
        result: data,
        message: data.message,
        status: data.status,
      };
    }
  };
}
