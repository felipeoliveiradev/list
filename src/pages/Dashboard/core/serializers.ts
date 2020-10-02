import validator from "validator";
import { ILogin } from "./interfaces";

export class LoginSerializers {
  public login: any = (props: ILogin) => {
      const {username, password} = props;
      if (validator.isEmpty(username) || validator.isEmpty(password)) {
        return {
          type: "error",
          mensagem: "Campo usuario necessario"
        };
      } else {
          return props;
      }
  }
}