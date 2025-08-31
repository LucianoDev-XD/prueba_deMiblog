import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header_superior">
        <h2 className="logo">MiBlogPersonal</h2>
      </div>

      <div className="barra-navegacion">
        <div className="menu">
          <nav>
            <ul>
              <li><a href="#" id="selected"></a></li>
              <li><a href="#">Proyectos</a>
                <ul>
                  <li><a href="#">Web</a></li>
                  <li><a href="#">Movil</a></li>
                  <li><a href="#">Juegos</a></li>
                  <li><a href="#">IA</a></li>
                </ul>
              </li>
              <li><a href="#">Código</a>
                <ul>
                  <li><a href="#">Web</a></li>
                  <li><a href="#">Movil</a></li>
                  <li><a href="#">Juego</a></li>
                  <li><a href="#">IA</a></li>
                </ul>
              </li>
              <li><a href="#">Artes</a>
                <ul>
                  <li><a href="#">Anime</a></li>
                  <li><a href="#">Chibi</a></li>
                  <li><a href="#">PixelArt</a></li>
                  <li><a href="#">Realista</a></li>
                </ul>
              </li>
              <li><a href="#">Redes Sociales</a>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Discord</a></li>
                  <li><a href="#">Github</a></li>
                  <li><a href="#">Tik Tok</a></li>
                </ul>
              </li>
              <li><a href="#">Sobre Mi</a></li>
              <li><a href="#">Licencias</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;