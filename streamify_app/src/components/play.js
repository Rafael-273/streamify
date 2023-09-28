import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './play.css';
import logo from '../assets/logo.png';
import { useParams, Link } from 'react-router-dom';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

function Play() {
    const { videoId } = useParams();
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        async function fetchVideoData() {
        try {
            const response = await axios.get(`http://localhost:3001/api/videos/${videoId}`);
            setVideoData(response.data);
        } catch (error) {
            console.error('Erro ao buscar detalhes do vídeo:', error);
        }
        }

        fetchVideoData()
    }, [videoId]);

    // Verifique se videoData é null antes de acessar suas propriedades
    if (videoData === null) {
        return <div>Carregando...</div>;
    }

    const player = videojs('my-video', {
        controls: false,
        autoplay: true,
        preload: 'metadata',
        aspectRatio: '16:9',
    })
    
    // Evento 'loadedmetadata' para definir o tempo inicial
    player.on('loadedmetadata', () => {
      player.currentTime(30);
    });
    return () => {
        // Destrua o player quando o componente for desmontado
        if (player) {
          player.dispose();
        }
      };
    }, []); 

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
        <video
        id="my-video"
        className="video-js"
        >
        <source src={videoData.media_file} type='video/mp4' />
        <p className="vjs-no-js">
            Para visualizar este vídeo, ative o JavaScript e considere a atualização para um navegador da Web que
            <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noopener noreferrer">
            suporta vídeo HTML5
            </a>
        </p>
        </video>
        </div>
      </div>
    </section>
  );
}

export default Play;
