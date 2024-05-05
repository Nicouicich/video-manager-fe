import { LoginResponseDto } from "@/dto/auth/login-response.dto";

export async function login(username: string, password: string): Promise<LoginResponseDto> {
  try {
    const response: Response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Internal Server Error');
  }
}