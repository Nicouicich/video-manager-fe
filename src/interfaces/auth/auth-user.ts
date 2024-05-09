export interface IUserAuth {
  _id: string,
  username: string,
  email: string,
  admin: boolean,
  videos: string[],
}