import React from 'react';
import './Hero.scss';

const Hero = ({ title, paragraph, buttonText, buttonLink, image1, image2, variant }) => {
  return (
    <section className={`hero ${variant === 'main' ? 'hero--main' : 'hero--default'}`}>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-description">{paragraph}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink} className="hero-button">
              {buttonText}
            </a>
          )}
        </div>

        {variant === 'main' ? (
          /* Diseño para la página principal (Main) con una sola imagen */
          <div className="hero-image-main">
            <img src={image1} alt="Imagen principal" className="hero-image" />
          </div>
        ) : (
          /* Diseño para Menú y About con dos imágenes */
          <div className="hero-images">
            <img src={image1} alt="Imagen 1" className="hero-image" />
            <img src={image2} alt="Imagen 2" className="hero-image" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
