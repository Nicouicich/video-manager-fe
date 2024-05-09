import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IVideo } from '@interfaces/videos/video';
import { deleteVideoById } from '@api/videos/[id]/video';
import { IUserAuth } from '@interfaces/auth/auth-user';

interface SmallVideoProps {
  video: IVideo;
}

const SmallVideo: React.FC<SmallVideoProps> = ({ video }: SmallVideoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const jwt = localStorage.getItem('jwt');
  const user: IUserAuth = jwtDecode(jwt as string);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    router.push(`/videos/${video.title}`);
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const isDeleted = await deleteVideoById(video.id, jwt as string);
    if (isDeleted) {
      setPopupMessage('Video deleted successfully');
    } else {
      setPopupMessage('Failed to delete video');
    }
    setShowPopup(true);
  };

  const handleRename = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    // Aquí va la lógica para cambiar el nombre del video
  };

  const timeSinceCreation = () => {
    const videoDate = new Date(video.createdAt);
    const now = new Date();
    const diffInHours = Math.abs(now.getTime() - videoDate.getTime()) / 3600000;
    if (diffInHours < 24) {
      return `${Math.round(diffInHours)} hours ago`;
    } else {
      return `${Math.round(diffInHours / 24)} days ago`;
    }
  };

  const [showOptions, setShowOptions] = useState(false);

  const handleOptionsClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  return (
    <div
      className="border border-gray-300 rounded-lg p-2 mb-5 w-1/4 mx-2 relative"
    >
      <div
        onClick={handleClick}
      >
        <video
          src={video.url}
          autoPlay
          muted={isHovered ? false : true}
          className="w-full h-auto rounded-lg"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />

      </div>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <p className="font-bold text-xs">{video.title.substring(0, 50)}</p>
          <p className="text-gray-500 text-2xs">Posted by <Link href={`/user/${video.user.username}`} onClick={(e) => e.stopPropagation()}>{video.user.username}</Link></p>
          <p className="text-gray-500 text-2xs">{timeSinceCreation()}</p>
        </div>
        <div className="relative">
          <Image
            src="/options.png"
            alt="Options"
            width={20}
            height={20}
            onClick={handleOptionsClick}
            className="cursor-pointer"
          />
          {showOptions && (user.admin || user._id === video.user.id) && (
            <div className="p-2 absolute bg-white border border-gray-200 rounded-lg" style={{ top: '-350%', left: '-70px' }}>
              <button
                onClick={handleDelete}
                className="transition-colors duration-200 block w-full text-left hover:bg-blue-500 hover:text-white"
              >
                Delete
              </button>
              <button
                onClick={handleRename}
                className="transition-colors duration-200 block w-full text-left hover:bg-blue-500 hover:text-white"
              >
                Rename
              </button>
            </div>
          )}
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded shadow-lg w-64">
                <p className="text-center">{popupMessage}</p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallVideo;