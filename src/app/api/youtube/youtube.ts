import {google, youtube_v3} from 'googleapis';

export default async function getPopularVideos(){
    const apiKey = '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'
    const youtube = google.youtube({version: 'v3', auth: apiKey});

    const response = await youtube.videos.list({
        part:['snippet'],
        chart: 'mostPopular',
        maxResults: 50
    });

    const videos = response.data.items;
    return videos;
}
