
export async function getAllVideos() {
    const response = await fetch('http://localhost:3001/api/videos');
    return response.json();
}