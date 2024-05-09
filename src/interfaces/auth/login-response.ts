import { IUserAuth } from "./auth-user";

export interface ILoginResponse {
  user: IUserAuth;
  token: string;
}