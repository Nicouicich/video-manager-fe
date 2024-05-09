// pages/AdminPage.tsx
'use client';
import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import UploadButton from '@components/Upload/VideoUploadButton';
import Navbar from '@components/Navbar/Index';

const AdminPage: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decodedJwt: any = jwtDecode(jwt);
      const isAdmin = decodedJwt.admin;
      if (!isAdmin) {
        router.push('/');
      }
    } else {
      router.push('/');
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Admin" />
      </Head>

      <Navbar />
      <h1></h1>
      <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <UploadButton />
      </div>
    </div>
  );
};

export default AdminPage;