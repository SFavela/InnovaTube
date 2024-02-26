"use client"

import Dropdown from '@/components/dropdown';
import { getData } from './api/youtube/youtube';
import { useState, useEffect } from 'react';
import "./styles/homepage.css"

interface Video {
  id?: {
    videoId?: string;
  };
  snippet?: {
    title?: string;
    thumbnails?: {
      default?: {
        url?: string;
      };
    };
  };
  statistics?: {
    viewCount?: string;
  };
}

export default function HomePage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [favorites, setFavorites] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getData();
        setVideos(data);
      } catch (error) {
        console.error('Error al obtener los datos de la API de YouTube:', error);
      }
    }

    fetchVideos();
  }, []);

  const playVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const addToFavorites = (video: Video) => {
    setFavorites([...favorites, video]);
  };

  return (
    <main>
      <Dropdown />
      <div className='video-container'>
        {videos.map((video) => (
          <div key={video.id?.videoId} className="video-item">
            <div className="video-info">
              <img
                src={video.snippet?.thumbnails?.default?.url}
                alt="Thumbnail del video"
                style={{ width: '240px', height: '135px', cursor: 'pointer' }}
                onClick={() => playVideo(video.id?.videoId || '')}
              />
              <h2>{video.snippet?.title?.substring(0, 10)}</h2>
              <p>Reproducciones: {video.statistics?.viewCount}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}