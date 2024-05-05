import { UserAuthDto } from "./auth-user.dto";

export interface LoginResponseDto {
  user: UserAuthDto;
  token: string;
}