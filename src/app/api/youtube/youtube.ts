import { google } from 'googleapis';

const youtube = google.youtube({
  version: 'v3',
  auth: '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', // Reemplaza con tu clave de API
});

export async function fetchYouTubeVideos() {
  try {
    const response = await youtube.search.list({
      part: ['snippet'],
      q: 'query', // Cambia 'query' por la palabra clave que desees buscar
      maxResults: 10, // Número máximo de resultados
    });

    if (response.data && response.data.items) {
      return response.data.items;
    } else {
      console.error('Error fetching YouTube videos: Response data items not found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
}