"use client"
import Dropdown from '@/components/dropdown'
import { useEffect, useState } from 'react'
import { google } from 'googleapis'
import { fetchYouTubeVideos } from './api/youtube/youtube'


export default function HomePage() {

  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    async function getVideos() {
      const fetchedVideos = await fetchYouTubeVideos();
      setVideos(fetchedVideos || []);
    }
    getVideos();
  }, []);

  return (
    <div>
      <Dropdown/>
      <div>
      <h1>Videos de YouTube</h1>
      <div>
        {videos.map((video) => (
          <div key={video.id?.videoId}>
            <h2>{video.snippet?.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id?.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
