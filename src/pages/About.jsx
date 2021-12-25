import React from 'react';
import '../components/About.css';
import analis from '../assets/analisis.png';

const About = () => (
  <>
    <h1 className="title">Jorge Luis Adco Ccahuay</h1>
    <div className="about">
      <div className="about-description">
        <p>
          Jorge Adco Hola 👋🏻, Soy de lima-Peru. Developer En Proceso. Mis serie
          favoritas son: billions, game of thrones y Merli.
        </p>
        <p>
          En mis ratos libres analizo e interpreto posibles inversiones en el
          mercado de forex para poder invertir en las sesiones de New York y/o
          Londres.
        </p>
      </div>
      <div className="about-image">
        <img src={analis} alt="forex" />
      </div>
    </div>
    <div className="stack">
      <h2>Temas aprendidos en el Bootcamp</h2>
      <ul>
        <li>
          <img
            src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png"
            alt="ReactJS"
          />
        </li>
        <li>
          <img
            src="data:image/png;base64,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"
            alt="nodejs"
          />
        </li>
        <li>
          <img
            src="data:image/png;base64,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"
            alt="mongoDB"
          />
        </li>
      </ul>
      <div className="about-info">
        <h3>jorgead0812@gmail.com</h3>
        <a href="https://github.com/MarvoloV">Github</a>
      </div>
    </div>
  </>
);

export default About;
