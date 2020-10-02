import { ILogin } from "./interfaces";
import { LoginRepository } from "./repositorys";

const repository = new LoginRepository();

export class LoginController {

    public login = async (props: ILogin) => {
            try {
                const teste = await repository.post(props);
                return teste;
            } catch (err) {
                return err;
            }
    }
}