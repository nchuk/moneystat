export class User{
  public email: string;
  public password: string;

  constructor(data: IUser) {
    this.email = data.email;
    this.password = data.password;
  }
}

export interface IUser{
  email: string;
  password: string;
}

