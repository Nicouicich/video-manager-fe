import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IVideo } from "@interfaces/videos/video";
import { deleteVideoById } from "@api/videos/[id]/video";
import { IUserAuth } from "@interfaces/auth/auth-user";

interface SmallVideoProps {
  video: IVideo;
}

const SmallVideo: React.FC<SmallVideoProps> = ({ video }: SmallVideoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const jwt = localStorage.getItem("jwt");
  const user: IUserAuth = jwtDecode(jwt as string);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

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

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const isDeleted = await deleteVideoById(video.id, jwt as string);
    if (isDeleted) {
      setPopupMessage("Video deleted successfully");
    } else {
      setPopupMessage("Failed to delete video");
    }
    setShowPopup(true);
  };

  const handleRename = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
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

  const handleOptionsClick = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setShowOptions(!showOptions);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md mb-5 w-1/4 mx-2 relative bg-white">
      <div onClick={handleClick} className="cursor-pointer">
        <video
          src={video.url}
          className="w-full h-auto rounded-lg"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="p-3">
        <p className="font-semibold text-sm text-gray-800 truncate">{video.title.substring(0, 50)}</p>
        <p className="text-xs text-gray-600">
          Posted by{" "}
          <Link
            href={`/user/${video.user.username}`}
            onClick={(e) => e.stopPropagation()}
            className="hover:underline"
          >
            {video.user.username}
          </Link>
        </p>
        <p className="text-xs text-gray-600">{timeSinceCreation()}</p>
      </div>
      {showOptions && (user.admin || user._id === video.user.id) && (
        <div className="absolute bottom-0 right-0 mb-2 mr-2">
          <div className="w-40 rounded-lg bg-white shadow-md border border-gray-200">
            <button
              onClick={handleDelete}
              className="block w-full py-2 px-4 text-sm text-left text-gray-800 bg-gray-200 hover:bg-blue-200 hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 rounded-t-lg"
            >
              Delete
            </button>
            <button
              onClick={handleRename}
              className="block w-full py-2 px-4 text-sm text-left text-gray-800 bg-gray-200 hover:bg-blue-200 hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 rounded-b-lg"
            >
              Rename
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-2 right-2">
        <button className="focus:outline-none">
          <Image
            src="/options.png"
            alt="Options"
            width={20}
            height={20}
            className="cursor-pointer transform hover:scale-110 transition-transform"
            onClick={handleOptionsClick}
          />
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-64">
            <p className="text-center">{popupMessage}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );



};

export { SmallVideo };
