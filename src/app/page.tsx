import Dropdown from '@/components/dropdown'
import "./globals.css"
import { useEffect, useState } from 'react';
import getPopularVideos from './api/youtube/youtube';
import { youtube_v3 } from 'googleapis';
import Image from 'next/image';


function HomePage() {
  <div>
    <Dropdown/>
  </div>
}

export default HomePage