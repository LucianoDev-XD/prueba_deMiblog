import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main>
      <article className="presentacion">
        <h2>Bienvenidos a Todos!</h2>
        <img id="haruSaludo" src="/src/assets/images/haruurara.jpg" alt="Haru urara saludando" />
        <p>
          Esta es mi Web Principal (algo así como un portal a todo mi contenido) donde tengo planeado compartir contenido de todo un poco ya sea consejos,
          código para que puedas implementar en tu Web, avances de algún proyecto en producción (Web, Aplicación, Juego, etc) o tan solo compartir mis avances en este increíble Mundo de la Programación.
        </p>
        <p>Quieres saber más acerca de mi?</p>
        <a id="VerMas_SobreMi" href="#">Leer Más <span id="raya"> {'>'} </span></a>
      </article>
      <br />
      <article id="banner_recomendacion">
        <p>Te Puede Interesar!</p>
      </article>
      <br />
      <article className="Musica">
        <p>Un poco de música?</p>
        <p>Aquí les comparto una pequeña Playlist de mi <span className="tooltip"><span id="Ado">Utaite</span>
          <span className="tooltip-text">Es un término usado en Japón para referirse a los/as cantantes qué no muestran su rostro y no usan Vocaloid (sintetizadores de voz)</span></span> (cantante) favorita!
        </p>
        <div className="spotify">
          <iframe
            style={{ borderRadius: '0px' }}
            src="https://open.spotify.com/embed/playlist/7gtZ2FROAYh2Oru5MqIK8Z?utm_source=generator"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </article>
    </main>
  );
};

export default Main;