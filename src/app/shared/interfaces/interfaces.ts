import {EntranceComponent} from "../../authorization/modal/entrance/entrance.component";
import {RegistrationComponent} from "../../authorization/modal/registration/registration.component";

export interface IUser {
  email: string;
  password: string;
  returnSecureToken?: boolean;

}

export interface IFireBaseResponse{
  idToken: string;
  expiresIn: string;
}

export type modalComponents = EntranceComponent|RegistrationComponent




