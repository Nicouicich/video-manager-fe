import { VideoDto } from "@/dto/videos/video";

export async function getVideoById(id: string, token: string): Promise<VideoDto | null> {
    const response = await fetch(`http://localhost:3000/api/video/${id}`, {
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

export async function deleteVideoById(id: string, token: string): Promise<boolean> {
    const response = await fetch(`http://localhost:3000/api/video/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.ok;
}