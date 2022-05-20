export interface IUser {
  email: string;
  password: string;
  returnSecureToken?: boolean;

}

export interface IFireBaseResponse{
  idToken: string;
  expiresIn: string;
}

export interface INewTransaction {
  type?: string
  sum: number
  categories: string
  date: Date

}

export interface IFbCreateResponse {
  name: string
}


