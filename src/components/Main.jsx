import React from 'react';
import Hero from './Hero.jsx';
import '../reset.css';
import './Main.scss';

const Main = () => {
  return (
    <>
      <Hero
        title="El Rincón de la Brisa"
        paragraph="El Rincón de la Brisa es más que un restaurante, es una experiencia culinaria
        que despierta todos los sentidos. En cada plato, combinamos técnicas innovadoras con los 
        mejores ingredientes de la región, creando una fusión"
        buttonText="Reservar"
        buttonLink="#reservar"
        image1="/plato.png"
        variant="main"
      />
      <section className="nuestro-restaurante">
        <h2>Nuesto Restaurante</h2>
        <p>"El Rincón de la Brisa" es más que un restaurante; es una experiencia culinaria que
          despierta todos los sentidos. En cada plato, combinamos técnicas innovadoras con los 
          mejores ingredientes de la región, creando una fusión única que rinde homenaje a la
          cocina de autor. Nuestro compromiso es ofrecer una experiencia acogedora y sofisticada,
          donde cada detalle está diseñado para deleitar.</p>
          <p>Desde el momento en que entras, serás recibido con una atmósfera cálida
            y elegante, ideal para disfrutar de una cena íntima, una celebración especial
            o simplemente dejarte llevar por el placer de los sabores auténticos. Nuestro
            equipo de chefs trabaja con pasión para presentar platos que cuentan una historia,
            cuidadosamente elaborados para brindar una experiencia inolvidable.
          </p>
      </section>
    </>
  );
};

export default Main;