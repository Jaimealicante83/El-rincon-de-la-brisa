import React from 'react';
import Hero from './Hero.jsx';

const Main = () => {
  return (
    <>
<Hero
  title="El Rincón de la Brisa"
  paragraph="El mejor servicio desde 1996. Un lugar único para disfrutar con familia y amigos."
  buttonText="Reservar"
  buttonLink="#reservar"
  image1="/path/to/image-main.jpg"
  variant="main"
/>
    </>
  );
};

export default Main;