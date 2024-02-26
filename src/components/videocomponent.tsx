import { useState } from "react"
import { useRouter } from "next/router"
import axios from 'axios';


interface VideoComponentProps {
    userId: string;
    videoId: string;
  }
  
  const VideoComponent: React.FC<VideoComponentProps> = ({ userId, videoId }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
  
    const addToFavorites = async () => {
      try {
        setLoading(true);
        await axios.post('/api/favorites/add', { userId, videoId });
      } catch (error) {
        console.error('Error al agregar video a favoritos:', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h2>Título del Video</h2>
        <button onClick={addToFavorites} disabled={loading}>
          {loading ? 'Agregando a favoritos...' : 'Agregar a favoritos'}
        </button>
      </div>
    );
  };
  
  export default VideoComponent;