// youtube-api.d.ts

declare module "youtube-api" {
    export interface YouTubeOptions {
      key: YOUTUBE_API_KEY;
      clientId: YOUTUBE_CLIENT_ID;
      // Agrega aquí otras opciones si es necesario
    }
  
    export class YouTube {
      constructor(options: YouTubeOptions);
  
      // Define los métodos que planeas utilizar
      // Aquí tienes un ejemplo con el método search.list
      search: {
        list: (params: {
          q: string;
          part: string;
        }) => Promise<YouTubeSearchResponse>;
        // Agrega aquí otros métodos si es necesario
      };
    }
  
    export interface YouTubeSearchResponse {
      items: YouTubeVideo[];
      // Agrega aquí otras propiedades si es necesario
    }
  
    export interface YouTubeVideo {
      // Define las propiedades de un video de YouTube
      // Aquí tienes un ejemplo con la propiedad snippet.title
      snippet: {
        title: string;
        // Agrega aquí otras propiedades si es necesario
      };
    }
  
    // Define otros tipos si es necesario
  }
  