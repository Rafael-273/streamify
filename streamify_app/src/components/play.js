import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './play.css';
import logo from '../assets/logo.png';
import { useParams, Link } from 'react-router-dom';
import YouTube from 'react-youtube';

function Play() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  let videoId;

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const response = await axios.get(`http://localhost:3001/api/video/${id}`);
        setVideoData(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do vídeo:', error);
      }
    }

    fetchVideoData();
  }, [id]);

  // Verifique se videoData é null antes de acessar suas propriedades
  if (videoData === null) {
    return <div>Carregando...</div>;
  }

    const youtubeUrl = videoData.media_file;
    const match = youtubeUrl.match(/[?&]v=([A-Za-z0-9_\-]+)/);

    // Verifique se há uma correspondência e pegue o ID do vídeo
    if (match) {
        videoId = match[1];
        console.log(videoId); // Isso imprimirá o ID do vídeo
    } else {
        console.error('URL do vídeo do YouTube inválida');
    }
    const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // Adicione quaisquer parâmetros personalizados que desejar aqui
    },
  };

  return (
    <section className="section">
      <div id="video_player">
        <div className="top">
          <div className="top_title">
            <Link to={'/'}>
              <i className="material-symbols-outlined seta">keyboard_backspace</i>
            </Link>
            <h3>{videoData.title}</h3>
          </div>
          <div></div>
          <Link to="/home">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="container_video">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>
    </section>
  );
}

export default Play;
