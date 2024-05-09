'use client';

import { getAllVideos } from '@api/videos/videos';
import Navbar from '@components/Navbar';
import { SmallVideo } from '@components/videos';
import { IVideo } from '@interfaces/videos/video';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function VideosPage() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchVideos = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const videos: IVideo[] = await getAllVideos(token);
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
          videos.map((video: IVideo, index) => (
            <SmallVideo key={video.title + index} video={video} />
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
}