export async function getData() {
  try {
    const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBwKa8IAmNGgWRmLSPbhgC3bFfFYQMioas&part=snippet,statistics&chart=mostPopular&maxResults=50');
    if (!response.ok) {
      //throw new Error('Error al obtener los datos de la API de YouTube');
    }
    const data = await response.json();
    console.log(data); 
    return data.items;
  } catch (error) {
    console.error('Error al obtener los datos de la API de YouTube:', error);
    return [];
  }
}