

export async function getAllVideos(token: string) {
    const response = await fetch('http://localhost:3001/api/video', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.json();
}