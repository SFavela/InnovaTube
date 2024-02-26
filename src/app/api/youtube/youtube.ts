import { google } from 'googleapis';

const youtube = google.youtube({
  version: 'v3',
  auth: '67990251493-lt662ma8qid73hl7rck1odol85jinv6n.apps.googleusercontent.com',
});

export async function fetchYouTubeVideos() {
  try {
    const response = await youtube.search.list({
      part: ['snippet'],
      q: 'mostPopular', 
      maxResults: 10,
    });

    if (response.data && response.data.items) {
      return response.data.items;
    } else {
      console.error('Error al obtener videos de YouTube: No se encontraron elementos en la respuesta');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener videos de YouTube:', error);
    return [];
  }
}