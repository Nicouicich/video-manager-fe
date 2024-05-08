'use client';

import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProfileIcon: React.FC = () => {
  let [imageUrl, setImageUrl] = useState('/user-no-image.png');
  let [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUsertoken = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        setUserId(decodedToken._id);
        const img = decodedToken.imageUrl ? decodedToken.imageUrl : imageUrl;
        setImageUrl(img);
      } else {
      }
    };

    getUsertoken();
  }, []);

  return (
    <div>
      <Link href={`/user/${userId}`}>
        <Image
          src={imageUrl}
          alt="Perfil"
          width={32}
          height={32}
        />
      </Link>
    </div>
  );
};

export default ProfileIcon;