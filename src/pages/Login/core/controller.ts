import { ILogin } from "./interfaces";
import { LoginRepository } from "./repositorys";

const repository = new LoginRepository();

export class LoginController {

    public login = async (state: any, values: any, history: any) => {

            try {
                const teste = await repository.post(state, values, history);
                return teste;
            } catch (err) {
                return err;
            }
    }
}