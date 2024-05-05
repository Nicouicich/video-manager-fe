import { VideoDto } from "@/dto/videos/video";

export async function getVideoById(id: string, token: string): Promise<VideoDto | null> {
    const response = await fetch(`http://localhost:3001/api/video/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    try {
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
}