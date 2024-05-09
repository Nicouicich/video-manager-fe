import { IGeneralUser } from "@interfaces/user/ten-users";

export async function getTenUsers(): Promise<IGeneralUser[]> {
  const response = await fetch(`http://localhost:3000/api/users`);
  return await response.json();
}