import React from 'react';
import Hero from './Hero.jsx';

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
    </>
  );
};

export default Main;