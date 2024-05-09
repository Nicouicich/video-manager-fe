import { ILoginResponse } from "@interfaces/auth/login-response";

export async function handleRegister(username: string, email: string, password: string): Promise<ILoginResponse> {
  const response: Response = await fetch('http://localhost:3000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return await response.json();

}