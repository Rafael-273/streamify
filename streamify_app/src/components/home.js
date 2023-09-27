import React from 'react';
import './home.css'
import banner from '../assets/banner.jpg';
import { thumbs } from '../assets/thumbs/thumbs.js'
import { covers } from '../assets/covers/covers.js'
import Footer from './footer.js';

function Home() {
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
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb1}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb2}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb3}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb4}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb5}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb6}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb7}/>
              </a>
            </div>
            <div name="movie1" class="movie">
              <a href="#">
                <img src={thumbs.thumb8}/>
              </a>
            </div>
        </div>
      </div>

      <div class="videos">
        <div style={{ display: 'flex'}}>
          <h1 class="title_row" style={{ color: '#FF0000' }}>Canais</h1><h1 class="title_row" style={{ color: 'aliceblue' }}>Recomendados</h1>
        </div>
        <div class="covers_all">
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover1}/>
              </a>
            </div>
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover2}/>
              </a>
            </div>
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover3}/>
              </a>
            </div>
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover4}/>
              </a>
            </div>
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover5}/>
              </a>
            </div>
            <div name="cover1" class="cover">
              <a href="#">
                <img src={covers.cover6}/>
              </a>
            </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Home;
