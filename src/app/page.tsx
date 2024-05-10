"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 h-full w-full"></div>
      <div className="absolute inset-0 bg-white opacity-25"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 space-y-6">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Register to access millions of free videos
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Join our community and start exploring
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/register" passHref>
              <button className="inline-block py-2 px-4 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 shadow-md mb-2">
                Register
              </button>
            </Link>
            <p className="text-center text-sm text-gray-600 mb-2">
              Already a user?
            </p>
            <Link href="/login" passHref>
              <button className="inline-block py-2 px-4 text-sm font-semibold text-gray-800 bg-gray-200 rounded-md hover:bg-blue-500 hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
