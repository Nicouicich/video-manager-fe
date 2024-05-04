
export async function getVideoById(id: string) {
    const response = await fetch(`http://localhost:3001/api/video/${id}`);
    try {
        console.log(response);
        console.log(await response.text());

    } catch (error) {
        console.log(error);
    }
    // console.log(await response.json());
    // return response.json();
}