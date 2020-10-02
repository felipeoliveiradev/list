import { ILogin } from "./interfaces";
import { LoginCalls } from "../tools/calls";
import { LoginSerializers } from "./serializers";
import { Tratament } from "helper/tratament/tratament";

// import { LoginParameters } from "../tools/parameters";
// import { LoginObject } from "../tools/objects";

// Classes Globais
const calls = new LoginCalls();
const serializers = new LoginSerializers();
// const parameters = new LoginParameters();
// const objects = new LoginObject();
const tratament = new Tratament();

export class LoginRepository {

  public post = async (props: ILogin) => {
    try {

      const serializer = await serializers.login(props);
      if (!serializer.type) {
          const call = await calls.login(serializer);
          sessionStorage.setItem("token", call.result.success.token);
          return tratament.responseRequest(call);
      } else {
        return tratament.responseRequest(serializers);
      }
    } catch (err) {
      return tratament.responseRequest(err);

    }
  }
}