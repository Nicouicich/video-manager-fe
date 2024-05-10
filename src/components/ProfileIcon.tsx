"use client";

import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProfileIcon: React.FC = () => {
  let [imageUrl, setImageUrl] = useState("/user-no-image.png");
  let [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUsertoken = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        const decodeken: any = jwtDecode(token);
        setUserId(decodeken._id);
        const img = decodeken.imageUrl ? decodeken.imageUrl : imageUrl;
        setImageUrl(img);
      } else {
      }
    };

    getUsertoken();
  }, []);

  return (
    <div>
      <Link href={`/user/${userId}`}>
        <Image src={imageUrl} alt="Perfil" width={32} height={32} />
      </Link>
    </div>
  );
};

export default ProfileIcon;
