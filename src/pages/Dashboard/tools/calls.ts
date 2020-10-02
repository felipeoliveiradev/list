import { callApiExtenal } from "helper/callApi/callApi";

export class LoginCalls {
  public login = async (props: any) => {
    try {
      const result = await callApiExtenal({
        method: "POST",
        path: "authentication",
        data: props
      });
      return await result?.data;
    } catch (err) {
        throw err;
    }
  }
}
