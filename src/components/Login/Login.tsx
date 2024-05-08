import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Login from "./Index";

export function LoginComponent() {
  const params = useSearchParams().get('token');
  useEffect(() => {
    if (params) {
      localStorage.setItem('jwt', params);
      redirect('/videos');
    }
  }, [params]);

  return <Login />;
}