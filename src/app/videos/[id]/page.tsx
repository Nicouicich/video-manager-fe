import { getVideoById } from '@/api/videos/[id]/video';

export default async function VideosPage({ params }: any) {
  console.log(params.id);
  const videos = await getVideoById(params.id);
  //   console.log(videos);
  return (
    <div>
      <h1>Video Page</h1>
    </div>
  );
}
