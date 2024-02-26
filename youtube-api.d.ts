// youtube-api.d.ts

declare module "youtube-api" {
  export interface YouTubeOptions {
    key: YOUTUBE_API_KEY,
    clientId: YOUTUBE_CLIENT_ID,
  }

  export class YouTube {
    constructor(options: YouTubeOptions);

    search: {
      list: (params: {
        q: string;
        part: string;
      }) => Promise<YouTubeSearchResponse>;
    };
  }

  export interface YouTubeSearchResponse {
    items: YouTubeVideo[];
  }

  export interface YouTubeVideo {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
    };
  }
}