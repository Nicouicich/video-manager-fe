'use client';
import { getVideoById } from "@api/videos/[id]/video";
import { IVideo } from "@interfaces/videos/video";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const runtime = 'edge';
export default function VideosPage({ params }: any) {
  const [video, setVideo] = useState<IVideo | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchVideo = async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        const video2 = await getVideoById(params.id, token);
        setVideo(video2);
      } else {
        router.push('/');
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
