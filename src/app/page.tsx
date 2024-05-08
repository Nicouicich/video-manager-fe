'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url('/home-background.gif')`, backgroundSize: '100% 80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register to access millions of free videos
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our community and start exploring
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <Link href="/register" passHref>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mb-4 shadow-lg">
              Register
            </button>
          </Link>
          <Link href="/login" passHref>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg">
              Already a user? Sign in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}