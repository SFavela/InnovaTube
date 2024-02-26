"use client"
import Dropdown from '@/components/dropdown'
import { useEffect, useState } from 'react'
import { fetchYouTubeVideos } from './api/youtube/youtube'

function HomePage() {

  const [videos, setVideos] = useState<any[]>([]);

 // useEffect(() => {
  //  async function getVideos() {
   //   const fetchedVideos = await fetchYouTubeVideos();
     // setVideos(fetchedVideos || []);
   // }
    //getVideos();
  //}, []);
  return (
    <div>
      <Dropdown/>
    </div>
  )
}

export default HomePage