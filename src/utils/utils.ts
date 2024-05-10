import { jwtDecode } from "jwt-decode";

export function validateToken(token: string): boolean {
  const decodedToken: any = jwtDecode(token);
  if (!decodedToken) {
    return false;
  }

  const expirationDate = new Date(decodedToken.exp * 1000);
  const currentDate = new Date();

  return expirationDate > currentDate;
}
