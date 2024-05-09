export async function getAllVideos(token: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/video`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export async function uploadVideo(files: File[], jwt: string | null) {
  if (jwt) {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/video`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: formData,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
