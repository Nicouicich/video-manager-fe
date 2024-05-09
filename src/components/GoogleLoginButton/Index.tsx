import Link from 'next/link';
import Image from "next/image";

export default function GoogleLoginButton() {
  return (
    <div className='mt-4 text-center'>
      <Link
        href={`${process.env.NEXT_PUBLIC_API}/auth/google/login`}
        className='flex items-center justify-center mt-4 bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-4 cursor-pointer'
      >
        <Image
          className='mr-2'
          src='/google_icon.png'
          alt='Google Icon'
          width='20'
          height='20'
        />
        Continue with Google
      </Link>
    </div>
  );
}