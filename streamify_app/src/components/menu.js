import React from 'react';
import './menu.css'
import logo from '../assets/logo.png';
import { useLocation } from 'react-router-dom';

function Menu() {
  const location = useLocation();
  const isPlayPage = location.pathname.startsWith('/play/');

  if (isPlayPage) {
    return null;
  }
  return (
    <>
      <div className="nav" id="nav">
        <a href="/">
          <img src={logo} alt="" className="nav__logo" />
        </a>
      </div>
      <div>
        <ul className="menu_list">
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/movies">Canais</a>
          </li>
          <li>
            <a href="/favorites">Vídeos</a>
          </li>
          <form id="search-form" method="GET" action="/search">
            <div className="search">
              <input id="search-input" type="text" placeholder="Search" name="q" />
              <i className="fas fa-search"></i>
            </div>
          </form>
        </ul>
      </div>
    </>
  );
}

export default Menu;
