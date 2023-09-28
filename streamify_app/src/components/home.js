import React from 'react';
import './home.css'
import banner from '../assets/banner.jpg';
import { thumbs } from '../assets/thumbs/thumbs.js'
import { covers } from '../assets/covers/covers.js'
import Footer from './footer.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [videos, setVideos] = useState([]);
  const [channelCovers, setChannelCovers] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const API_BASE_URL = "http://localhost:3001/api";
        const response = await axios.get(`${API_BASE_URL}/videos`);
        setVideos(response.data);
      } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
      }
    }
    async function fetchChannelCovers() {
      try {
        const API_BASE_URL = 'http://localhost:3001/api';
        const response = await axios.get(`${API_BASE_URL}/channels`);
        setChannelCovers(response.data);
      } catch (error) {
        console.error('Erro ao buscar covers dos canais:', error);
      }
    }

    fetchChannelCovers();
    fetchVideos();
  }, []);

  return (
    <section className="grid_section">
      {/* Header */}
      <div className="banner">
        <div className="shadow"></div>
        <div className="grid_banner">
          <div></div>
          <div className="content">
            <h1 className="movieTitle">Streamify</h1>
            <p className="descriptionBanner description">
            Você está prestes a entrar em um mundo de vídeos incríveis e conteúdo fascinante. O Streamify é a plataforma definitiva de vídeos que oferece uma experiência de entretenimento como nenhuma outra. Aqui, você pode explorar, descobrir e compartilhar vídeos dos mais variados tipos, tudo em um só lugar.
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
        <img src={banner} className="image img_url" alt="Banner" />
      </div>

      <div class="videos">
        <div style={{ display: 'flex'}}>
          <h1 class="title_row" style={{ color: '#FF0000' }}>Videos</h1><h1 class="title_row" style={{ color: 'aliceblue' }}>em Alta</h1>
        </div>
        <div class="videos_all">
            {videos.map((video) => (
              <div key={video.id} className="movie">
                <a href="#">
                  <img src={video.thumb}/>
                </a>
              </div>
            ))}
        </div>
      </div>

      <div class="videos">
        <div style={{ display: 'flex'}}>
          <h1 class="title_row" style={{ color: '#FF0000' }}>Canais</h1><h1 class="title_row" style={{ color: 'aliceblue' }}>Recomendados</h1>
        </div>
        <div class="covers_all">
          {channelCovers.map((channel) => (
            <div key={channel.id} className="cover">
              <Link to={`/channel/${channel.id}`}>
                <img src={channel.cover}/>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
