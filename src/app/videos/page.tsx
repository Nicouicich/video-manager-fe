import { getAllVideos } from '@/api/videos/videos';

export default async function VideosPage() {
  const videos = await getAllVideos();
  console.log(videos);

  return (
    <div>
      <h1>Video Page</h1>
    </div>
  );
}
