export interface IUser {
  email: string;
  password: string;
  returnSecureToken?: boolean;

}

export interface IFireBaseResponse{
  idToken: string;
  expiresIn: string;
}




