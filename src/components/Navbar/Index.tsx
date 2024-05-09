import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProfileIcon from '../ProfileIcon';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  let [admin, setAdmin] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getUsertoken = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const decodeken: any = jwtDecode(token);
        setAdmin(decodeken.admin);
      }
    };

    getUsertoken();
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200 relative">
      <div>
        <button onClick={toggleMenu} className="hamburger-button">
          {isOpen ? (
            <Image
              src="/hamburguer-open.png"
              alt="Menu"
              width={32}
              height={32}
            />
          ) : (
            <Image
              src="/hamburguer-closed.png"
              alt="Menu"
              width={32}
              height={32}
            />
          )}
        </button>

        {isOpen && (
          <div className="bg-blue-100 absolute left-0 top-full w-64">
            {admin && (
              <Link href="/admin" className="block w-full text-left p-2 hover:bg-blue-500 hover:text-white">
                Admin panel
              </Link>
            )}
            <Link href="/videos" className="block w-full text-left p-2 hover:bg-blue-500 hover:text-white">
              Videos
            </Link>
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