'use client';

import { getAllVideos } from '@/api/videos/videos';
import Navbar from '@/components/Navbar/Index';
import SmallVideo from '@/components/videos/SmallVideo';
import { VideoDto } from '@/dto/videos/video';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VideosPage() {
  const [videos, setVideos] = useState<VideoDto[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchVideos = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const videos: VideoDto[] = await getAllVideos(token);
        setVideos(videos);
      } else {
        router.push('/');
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-4">
        {videos.length ? (
          videos.map((video: VideoDto, index) => (
            <SmallVideo key={video.title + index} video={video} />
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
}