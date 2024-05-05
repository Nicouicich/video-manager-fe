'use client';
import { getVideoById } from "@/api/videos/[id]/video";
import { VideoDto } from "@/dto/videos/video";
import { useState, useEffect } from "react";

export default function VideosPage({ params }: any) {
  const [video, setVideo] = useState<VideoDto | null>(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const video2 = await getVideoById(params.id, token);
        setVideo(video2);
      } else {
        window.location.href = '/';
      }
    };

    fetchVideo();
  }, [params.id]);

  if (!video) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex justify-center items-center" style={{ minHeight: "100vh" }}>
      <video src={video.url} controls autoPlay muted />
    </div>
  );
}
