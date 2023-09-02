import {IAuth, IProfile} from "./components/IMainComponent";
import {Api} from "./context/APIContext";

export class Profile {
    public static login(api:Api,emailOrLogin: string, password: string):Promise<IAuth>{
        return api.post<IAuth>('api/login', {
            emailOrLogin: emailOrLogin,
            password: password
        });
    }
    public static logout(api:Api):Promise<boolean>{
        return api.get('api/logout').then(res => {
            return true;
        }).catch(e => {
            return false;
        });
    }

    public static register(api:Api,firstname:string,lastname:string,login:string,pseudo:string,email:string,password:string):Promise<IAuth>{
        return api.post<IAuth>('api/register',{
            firstname:firstname,
            lastname:lastname,
            login:login,
            pseudo:pseudo,
            email:email,
            password:password
        });
    }

    public static getUser(api:Api):Promise<IProfile>{
        return api.get('api/user');
    }
}
