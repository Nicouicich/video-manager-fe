import { GeneralUserDto } from "@/dto/user/ten-users.dto";

export async function getTenUsers(): Promise<GeneralUserDto[]> {
  const response = await fetch(`http://localhost:3000/api/users`);
  return await response.json();
}