export interface UserAuthDto {
  token: string,
  user: {
    id: string,
    username: string,
  },
  expiresAt: Date;
}