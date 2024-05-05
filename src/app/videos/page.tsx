'use client';

import { getAllVideos } from '@/api/videos/videos';
import SmallVideo from '@/components/videos/smallVideo';
import { VideoDto } from '@/dto/videos/video';
import { useEffect, useState } from 'react';

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoDto[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const videos: VideoDto[] = await getAllVideos(token);
        setVideos(videos);
      } else {
        window.location.href = '/';
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video: VideoDto, index) => (
        <SmallVideo key={video.title + index} video={video} />
      ))}
    </div>
  );
}