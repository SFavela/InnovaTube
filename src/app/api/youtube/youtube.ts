import { YouTube, YouTubeSearchResponse, YouTubeVideo } from "youtube-api";

// Importa las variables de entorno
const { YOUTUBE_API_KEY, YOUTUBE_CLIENT_ID } = process.env;

// Crea una nueva instancia de YouTube con tus credenciales
const youtubeInstance = new YouTube({
  key: YOUTUBE_API_KEY,
  clientId: YOUTUBE_CLIENT_ID,
});

// Función para obtener los videos
async function getVideos(query: string) {
  try {
    // Realiza una solicitud a la API de YouTube
    const response = await youtubeInstance.search.list({
      q: query,
      part: "snippet",
    });

    // Devuelve la lista de videos
    return response.items;
  } catch (error) {
    console.error("Error al obtener los videos:", error);
    return []; // Devuelve una lista vacía en caso de error
  }
}
// Export the function as a module
export default getVideos;