import React from 'react';
import Hero from './Hero.jsx';
import '../reset.css';
import './About.scss';

const About = () => {
  return (
    <>  
      <Hero
        title="Descubre la experiencia"
        paragraph="Descubre la esencia de El Rincón de la Brisa desde la selección de productos frescos y de calidad, hasta la creación de platos únicos que combinan tradición y modernidad. Sumérgete en el encanto de nuestra terraza mediterránea y déjate sorprender por un equipo galardonado por su pasión y excelencia."
        image1="/red-wine.jpg"
        image2="/couple-dinner.jpg"
        variant="default"
      />
      <section className="nuestros-platos">
        <div className="container">
          <div className="box-texto">
            <h2>Nuestros Platos</h2>
            <p>"El Rincón de la Brisa" es más que un restaurante, es una experiencia
              culinaria que despierta todos los sentidos. En cada plato, combinamos técnicas innovadoras
              con los mejores ingredientes de la región, creando una fusión única que rinde homenaje a
              la cocina de autor. Nuestro compromiso es ofrecer una experiencia acogedora y 
              sofisticada, donde cada detalle está diseñado para deleitar.
            </p>
          </div>
          <div className="imagen-risotto">
            <p className="caption">Risotto Funghi, una receta presente en nuestra carta desde verano de 1996. 
              Disfruta su sabor inigualable y auténtico.</p>
            <img src="/risotto.jpg" alt="risotto"/>
          </div>
          <div className="imagen-caballa">
            <p className="caption">Caballa a la brasa, una especialidad que realza los sabores del mar desde nuestra carta original. 
              Disfruta su frescura y esencia única.</p>
            <img src="/caballa.jpg" alt="Caballa" />
          </div>
          <div className="imagen-ostra">
            <p className="caption">Ostra fresca, seleccionada para ofrecerte el sabor puro del mar. Disfruta su delicadeza y carácter único.</p>
            <img src="/ostra.jpg" alt="Ostra" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
