"use client";

import { getAllVideos } from "@api/videos/videos";
import Navbar from "@components/Navbar";
import { SmallVideo } from "@components/videos";
import { IVideo } from "@interfaces/videos/video";
import { validateToken } from "@utils/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// page.tsx

export default function VideosPage() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const token = localStorage.getItem("jwt");
    if (token && validateToken(token))  {
      const videos: IVideo[] = await getAllVideos(token);
      setVideos(videos);
    } else {
      router.push("/");
    }
  };

  const handleVideoChange = () => {
    fetchVideos();
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-4">
        {videos.length ? (
          videos.map((video: IVideo, index) => (
            <SmallVideo key={video.title + index} video={video} onVideoChange={handleVideoChange} />
          ))
        ) : (
          <p>No videos available.</p>
        )}
      </div>
    </div>
  );
}