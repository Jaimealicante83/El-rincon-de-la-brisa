import React from 'react';
import Hero from './Hero';
import '../reset.css';
import './Menu.scss';

const Menu = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Nuestro Menú"
        paragraph="Descubre nuestro menú: una selección diseñada para deleitar todos los paladares. En El Rincón de la Brisa encontrarás desde entrantes sorprendentes hasta platos principales de alta cocina, elaborados con ingredientes frescos y técnicas innovadoras. Completa tu experiencia con postres irresistibles y disfruta de una explosión de sabores."
        image1="/menu-dish1.jpg"
        image2="/menu-dish2.jpg"
        variant="default"
      />

      {/* Creaciones Section */}
      <article className="creaciones">
        <div className="container">
          <div className="creaciones-texto">
            <h2>Creaciones</h2>
            <p>
              "El Rincón de la Brisa" te invita a descubrir su carta, una exquisita selección de platos que fusionan
              tradición y modernidad. Cada creación está diseñada para deleitar tus sentidos, elaborada con ingredientes frescos y de calidad que rinden homenaje a nuestra pasión por la cocina. Desde entrantes únicos hasta postres irresistibles, cada detalle está pensado para ofrecer una experiencia culinaria inolvidable. Explora sabores únicos en un entorno que combina calidez y sofisticación, y deja que nuestra propuesta gastronómica te sorprenda.
            </p>
          </div>
          <div className="creaciones-imagenes">
            <img src="./creacion1.jpg" alt="Rodaballo con salsa de pistachos" />
            <img src="./creacion2.jpg" alt="Vieras con emulsión de albahaca" />
            <img src="./creacion3.jpg" alt="Crema de shitake con arroz valenciano" />
          </div>
        </div>
      </article>

      {/* Entrantes Section */}
      <section className="entrantes">
        <div className="container">
          <h2>Entrantes</h2>
          <div className="grid-entrantes-wrapper">
            <div className="wrapper-entrantes1">
              <p>
                El Rincón de la Brisa te invita a descubrir su carta, una exquisita selección de platos que fusionan
                tradición y modernidad. Cada creación está diseñada para deleitar tus sentidos, elaborada con
                ingredientes frescos y de calidad que rinden homenaje a nuestra pasión por la cocina. Desde
                entrantes únicos hasta postres irresistibles, cada detalle está pensado para ofrecer una experiencia
                culinaria inolvidable. Explora sabores únicos en un entorno que combina calidez y sofisticación, y deja
                que nuestra propuesta gastronómica te sorprenda.
              </p>
              <img src="./canapes-mar.jpg" alt="Unos entrantes en una mesa de nuestro restaurante" />
              <p className="caption">
                Disfruta de una experiencia única con nuestros entrantes: tapas gourmet que combinan sabores
                mediterráneos, perfectos para acompañar con un spritz.
              </p>
            </div>

            {/* Wrapper for Entrantes Extra */}
            <div className="wrapper-seccion-entrantes2">
              <div className="wrapper-entrantes2">
                <p className="caption">
                  Una deliciosa combinación de hojas frescas, aguacate cremoso, nueces y queso de cabra.
                </p>
                <img src="./ensalada-aguacate.jpg" alt="Nuestra ensalada aguacate" />
              </div>
              <div className="wrapper-entrantes3">
                <div className="entrantes3-box1">
                  <img
                    src="./chupito-salmon.jpg"
                    id="chupito-salmon"
                    alt="Un chupito de salmón ahumado y guacamole"
                  />
                  <p className="caption">Chupito de salmón con guacamole y limón</p>
                </div>
                <div className="entrantes3-box2">
                  <img src="./spritz.jpg" alt="Spritz" />
                  <p className="caption">
                    Un refrescante spritz en nuestra terraza ibicenca frente al Mediterraneo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Degustación Platos Section */}
      <section className="degustacion-platos">
        <div className="container">
          <div className="box-texto">
            <h2>Degustación platos</h2>
            <p>
              En nuestro restaurante, cada visita es un viaje culinario único. Nuestro exclusivo menú degustación está
              diseñado para deleitar tus sentidos con una sucesión de platos principales cuidadosamente elaborados. Los
              sabores, texturas y presentaciones se combinan para ofrecer un recorrido gastronómico excepcional que
              evoluciona plato a plato, asegurando que cada bocado sea una sorpresa.
            </p>
            <img src="./steak.jpg" alt="steak tartar" />
            <p className="caption">
              Disfruta de una experiencia única con nuestros entrantes: tapas gourmet que combinan sabores
              mediterráneos, perfectos para acompañar con un refrescante spritz.
            </p>
          </div>
          <div className="box-imagenes1">
            <img src="./pure.jpg" alt="puré de rodaballo" />
            <img src="./chuleton.jpg" alt="chuletón de ciervo" />
          </div>
          <div className="box-imagenes2">
            <p className="caption">
              Merluza a la salsa de Oporto con pétalos de flores y esencia de espárragos
            </p>
            <img src="./merluza.jpg" alt="merluza" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
