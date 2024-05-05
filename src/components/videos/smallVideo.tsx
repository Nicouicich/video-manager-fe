'use client';
import { VideoDto } from '@/dto/videos/video';
import React, { useState } from 'react';

interface SmallVideoProps {
  video: VideoDto;
}

const SmallVideo: React.FC<SmallVideoProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.location.href = `/videos/${video.title}`;
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

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="border border-gray-300 rounded-lg p-2 mb-5 w-1/6 mx-2"
    >
      <video
        src={video.url}
        autoPlay={isHovered}
        loop={isHovered}
        muted={isHovered}
        className="w-full h-auto rounded-lg"
      />
      <div className="mt-2">
        <p className="font-bold text-xs">{video.title}</p>
        <p className="text-gray-500 text-2xs">Posted by {video.user.username}</p>
        <p className="text-gray-500 text-2xs">{timeSinceCreation()}</p>
      </div>
    </div>
  );
};

export default SmallVideo;