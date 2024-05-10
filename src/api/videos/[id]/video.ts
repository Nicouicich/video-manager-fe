import { IVideo } from "@interfaces/videos/video";

export async function getVideoById(
  id: string,
  token: string
): Promise<IVideo | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/video/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteVideoById(
  id: string,
  token: string
): Promise<boolean> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/video/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.ok;
}
