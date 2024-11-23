import React from 'react';
import './Hero.scss';
import Nav from './Nav';

const Hero = ({ title, paragraph, buttonText, buttonLink, image1, image2, variant }) => {
  return (
    <section className={`hero ${variant === 'main' ? 'hero--main' : 'hero--default'}`}>
      <Nav />
      <div className="container">
        <div className="hero-content">
          <h1 className="title-lg">{title}</h1>
          <p className="hero-description">{paragraph}</p>
          {buttonText && buttonLink && (
            <a href={buttonLink} className="hero-button btn">
              {buttonText}
            </a>
          )}
        </div>
        {variant === 'main' ? (
          <div className="hero-image-main circular-text">
            <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  id="circle-path"
                  d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                ></path>
              </defs>
              <text>
                <textPath href="#circle-path" startOffset="0%">
                El mejor servicio desde 1996
                </textPath>
              </text>
            </svg>
            <img src={image1} alt="Imagen principal" className="hero-image" />
          </div>
        ) : (
          <div className="hero-images">
            <img src={image1} alt="Imagen 1" className="hero-image hero-image-small" />
            <img src={image2} alt="Imagen 2" className="hero-image hero-image-big" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
