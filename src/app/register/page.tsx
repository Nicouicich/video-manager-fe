"use client";
import RegisterForm from "@components/RegisterForm";

export default function Register() {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>
      <RegisterForm />
    </div>
  );
}
