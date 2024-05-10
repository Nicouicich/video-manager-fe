import { ILoginResponse } from "@interfaces/auth/login-response";
import { redirect } from "next/navigation";

export async function handleLogin(
  username: string,
  password: string
): Promise<ILoginResponse> {
  const response: Response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  return await response.json();
}

export async function handleGoogleLogin() {
  redirect(`${process.env.NEXT_PUBLIC_API}/auth/google/login`);
}
