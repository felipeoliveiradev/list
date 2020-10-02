import { LoginCalls } from "../tools/calls";
import { LoginSerializers } from "./serializers";
import { Tratament } from "helper/tratament/tratament";

// Classes Globais
const calls = new LoginCalls();
const serializers = new LoginSerializers();
const tratament = new Tratament();
export class LoginRepository {

  public post = async (state: any, values: any, history: any) => {
    try {
      const serializer = await serializers.login(values);
      if (!serializer.type) {
        const call = await calls.login(serializer);
        sessionStorage.setItem("token", call.result.success.token);
        sessionStorage.setItem("user", call.result.success);
        const trataments = await tratament.responseRequest(call);
        if(trataments.status){
          history.push("/dashboard")
          return;
        }
      } else {
        return tratament.responseRequest(serializers);
      }
    } catch (err) {
      state.errorState.setError(true)
      return tratament.responseRequest(err);

    }
  }
}