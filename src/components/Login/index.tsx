"use client";

import LoginForm from "../LoginForm";

export default function Login() {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Log in</h2>
      <LoginForm />
    </div>
  );
}
