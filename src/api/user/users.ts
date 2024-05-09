import { IGeneralUser } from "@interfaces/user/ten-users";

export async function getTenUsers(): Promise<IGeneralUser[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/users`);
  return await response.json();
}