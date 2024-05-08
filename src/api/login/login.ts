import { LoginResponseDto } from "@/dto/auth/login-response.dto";
import { redirect } from "next/navigation";

export async function handleLogin(username: string, password: string): Promise<LoginResponseDto> {
  const response: Response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return await response.json();

}

export async function handleGoogleLogin() {
  redirect(`http://localhost:3000/api/auth/google/login`);
}