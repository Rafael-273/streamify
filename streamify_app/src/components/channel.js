import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './home.css';
import axios from 'axios';
import Footer from './footer.js';
import { Link } from 'react-router-dom';

function Channel() {  
  const { id } = useParams();
  const [channelData, setChannelData] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    async function fetchChannelData() {
      try {
        const API_BASE_URL = 'http://localhost:3001/api';
        const response = await axios.get(`${API_BASE_URL}/channels/${id}`);
        setChannelData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do canal:', error);
      }
    }

    async function fetchChannelVideos() {
      try {
        const API_BASE_URL = 'http://localhost:3001/api';
        const response = await axios.get(`${API_BASE_URL}/videos`);
        setChannelVideos(response.data);
      } catch (error) {
        console.error('Erro ao buscar vídeos do canal:', error);
      }
    }

    fetchChannelData();
    fetchChannelVideos();
  }, [id]);

  if (!channelData || !channelVideos) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="grid_section">
      {/* Header */}
      <div className="banner">
        <div className="shadow"></div>
        <div className="grid_banner">
          <div></div>
          <div className="content">
            <h1 className="movieTitle">{channelData.name}</h1>
            <p className="descriptionBanner description">
            {channelData.description}
            </p>

            <div className="buttons">
              <a className="play_banner" href="">
                <i className="fa fa-play" aria-hidden="true"></i>Play
              </a>
              <a href="" className="info_banner">
                <i className="fa fa-plus" aria-hidden="true"></i> Mais Informações
              </a>
            </div>
          </div>
          <div></div>
        </div>
        <div className="banner--fadeLeft"></div>
        <img src={channelData.banner} className="image img_url" alt="Banner" />
      </div>

      <div class="videos">
        <div class="videos_all">
          {channelVideos.map((video) => (
            <div key={video.id} className="movie">
              <Link to={`/play/${video.id}`}>
                <img src={video.thumb} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Channel;
