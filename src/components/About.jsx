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
              Disfruta su frescura única.</p>
            <img src="/caballa.jpg" alt="Caballa" />
          </div>
          <div className="imagen-ostra">
            <p className="caption">Ostra fresca, seleccionada para ofrecerte el sabor puro del mar. Disfruta su delicadeza y carácter único.</p>
            <img src="/ostra.jpg" alt="Ostra" />
          </div>
        </div>
      </section>

      <section class="productos-frescos">
        <div class="container">
          <h2>Productos siempre frescos</h2>
          <div class="productos-frescos-wrapper">
            <img src="./mercadillo.jpg" alt="Mercadillo" class="large-img" />
            <p class="caption">
              De la plaza a tu plato: así empieza nuestra historia cada día.
              Recorremos los mejores mercados locales seleccionando
              personalmente cada ingrediente, para que solo lo más fresco y
              selecto llegue a nuestra cocina. Seguimos cada paso del proceso
              con dedicación y cariño, desde la cuidadosa elección de los
              productos hasta el momento final del servicio en mesa. 
            </p>
            <img src="./verduras.jpg" alt="Verduras" class="small-img" />
            <img src="./cortando-verduras.jpg" alt="Un cocinero corta verduras" class="wide-img" />
          </div>
        </div>
      </section>

      <section className="lugar">
        <div className="container">
          <h2>Un lugar para disfrutar</h2>
          <div className="lugar-wrapper">
            <p>En "El Rincón de la Brisa", cada visita es un deleite para los sentidos. Comer 
              en nuestra terraza con vistas impresionantes al mar es mucho más que una comida, 
              es una experiencia que combina sabores y paisajes. Los clientes disfrutan de exquisitos
              platos mediterráneos, preparados con ingredientes frescos, mientras se relajan con la 
              suave brisa marina y una vista única. La experiencia gastronómica se complementa con un 
              ambiente visual que invita al descanso, creando momentos memorables e inigualables.</p>
            <img src="/atardecer.jpg" alt="atardecer desde nuestra terraza" />
            <p className="caption">Disfruta de nuestra cocina de alta calidad en una terraza con vistas al mar Mediterraneo</p>
            <img src="/chica-terraza.jpg" alt="Una mujer disfruta de la terraza" />
          </div>
        </div>
      </section>

      <section className="equipo">
        <div className="container">
          <h2>EL equipo</h2>
          <p>
            El equipo de cocineros de "El Rincón de la Brisa" es el alma de nuestra cocina mediterránea.
            Formados en las mejores escuelas de cocina del mundo, nuestros chefs aportan dedicación y
            experiencia a cada plato. Seleccionamos ingredientes locales de alta calidad para ofrecer
            una experiencia gastronómica que respeta las raíces mediterráneas, con un toque especial que
            hace cada creación memorable. Su compromiso y pasión garantizan que cada visita sea única y llena de sabor.
          </p>
          <img src="./cocinero-atardecer.jpg" class="cocinerotarde" alt="Un cocinero prepara un plato en la terraza al atardecer" />
          <img src="./equipo-cocina.jpg" id="foto-equipo" alt="El equipo de cocineros del rincón de la brisa" />
          <div className="imagenes-derecha">
            <img src="./cocinera.jpg" alt="Una cocinera en nuestra terraza" />
            <img src="./camarero.jpg" alt="Un camarero en la terraza" />
          </div>
          <img src="./chef-atardecer.jpg" alt="El chef del rincón de la brisa en la terraza al atardecer" />
        </div>
      </section>

    </>
  );
};

export default About;
