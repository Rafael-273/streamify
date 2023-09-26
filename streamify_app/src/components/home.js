import React from 'react';
import './home.css'
import minhaImagem from '../assets/background.png';

function Home() {
  return (
    <section className="grid_section">
      {/* Header */}
      <div className="banner">
        <div className="shadow"></div>
        <div className="grid_banner">
          <div></div>
          <div className="content">
            <h1 className="movieTitle">Canal do Rafa</h1>
            <p className="descriptionBanner description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
        <img src={minhaImagem} className="image img_url" alt="Banner" />
      </div>
    </section>
  );
}

export default Home;
