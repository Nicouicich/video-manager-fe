import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProfileIcon from '../ProfileIcon';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import { MenuItem } from './MenuItem';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getUserToken = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        setIsAdmin(decodedToken.admin);
      }
    };

    getUserToken();
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 text-gray-800 shadow-md relative">
      <div className="flex items-center">
        <button onClick={toggleMenu} className="hamburger-button mr-4 relative">
          <span className="sr-only">Toggle Menu</span>
          <div className="w-10 h-10 relative">
            <Image
              src={isOpen ? '/hamburguer-open.png' : '/hamburguer-closed.png'}
              alt="Menu"
              layout="fill"
              objectFit="contain"
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </button>

        {isOpen && (
          <div className="bg-blue-200 absolute left-0 top-full w-64 mt-2 rounded-md shadow-lg">
            <MenuItem href="/videos">Videos</MenuItem>
            {isAdmin && <MenuItem href="/admin">Admin panel</MenuItem>}
          </div>
        )}
      </div>
      <div>
        <ProfileIcon />
      </div>
    </nav>
  );

};


export default Navbar;
