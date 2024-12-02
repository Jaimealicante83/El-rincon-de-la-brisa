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
        <div className="container">
          <div className="box-texto">
            <h2>Nuestro Restaurante</h2>
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
            <button className="btn btn-blue">Ver más</button>
          </div>
          <div className="box-img">
            <img src="/el-restaurante.jpg" alt="Restaurante" />
          </div>
        </div>
      </section>
      
      <aside className="banner">
        <picture>
          <source srcSet="/banner-mobile.jpg" media="(max-width: 767px)" />
          <source srcSet="/banner.jpg" media="(min-width: 768px)" />
          <img src="/banner.jpg" alt="Banner" />
        </picture>
        <h2 class="cita">“Disfruta de una experiencia gastronomica sin igual 
        en la terraza con vistas al Mediterraneo”</h2>
      </aside>

      <section className="entorno">
        <div className="container">
          <div className="div1"> <h2>Un entorno sin igual</h2></div>
          <div className="div2">  <img src="/cocinero-entorno.jpg" alt="Un cocinero elabora un plato en la cocina" /></div>
          <div className="div3"> <p className="caption">
              Te invitamos a disfrutar de la alta cocina mediterránea del
              Chef Carlos Morales en un paraje junto al mar y unas vistas increibles.
            </p></div>
        
          <div className="div4">  
            <img src="/entorno-cena.jpg" alt="Una pareja cena en nuestro restaurante al atardecer" />
          </div>
          <div className="div5">
            <p class="caption">Una historia de excelencia junto al Mediterráneo desde 1996. Reconocido con tres estrellas Michelin
             y múltiples galardones internacionales que avalan nuestra pasión por la alta gastronomía.</p>
          </div>
          <div className="div6">
            <img src="/platos-mar.jpg" id="seleccion-platos" alt="Una selección de platos" />
          </div>
        </div>
      </section>

      <section className="nuestra-cocina">
        <div className="container">
          <h2>Nuestra cocina</h2>
          <div className="wrapper-platos">
            <div className="card-plato">
              <img src="/bistec.jpg" alt="Bistec" />
              <h3 className="mini-subtitulo">Bistec</h3>
              <p className="caption">
              Descubre nuestro Bistec de Res Premium, jugoso y acompañado de una reducción de vino 
              tinto y toques de trufa negra. Creación del Chef Carlos Morales para deleitarte en un 
              entorno con vistas al mar.
              </p>
            </div>
            <div className="card-plato">
              <img src="/salmon.jpg" alt="Salmon" />
              <h3 className="mini-subtitulo">Salmón marinado</h3>
              <p className="caption">
              Disfruta de nuestro Salmón Crudo, marinado con una salsa balsámica de mango y decorado 
              con delicados pétalos de flor violeta. Una creación fresca y sofisticada que despierta
              los sentidos.
              </p>
            </div> 
            <div className="card-plato">
              <img src="/postre.jpg" alt="Postre" />
              <h3 className="mini-subtitulo">Postre de galleta desmigada</h3>
              <p className="caption">
              Deléitate con nuestro postre de galleta desmigada, coronado con cremoso chocolate fundido
              y sutiles toques de flor de sal. Un final dulce, elegante y lleno de texturas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="chef-morales">
        <div className="container">
          <div className="box-imagen">
            <img src="./carlos-morales.jpg" alt="El chef Carlos Morales" />
          </div>
          <div className="box-texto">
            <h2>Chef Carlos Morales</h2>
            <p>El Chef Carlos Morales, apasionado de la cocina desde su juventud, dio sus primeros pasos en el 
              mundo culinario al lado de su abuela, quien le enseñó a valorar los ingredientes frescos y 
              la cocina tradicional mediterránea. Con una creatividad innata y un deseo constante de superación,
              Carlos se formó en prestigiosas escuelas de gastronomía europeas, perfeccionando técnicas clásicas
              y desarrollando su estilo único que fusiona tradición e innovación.</p>
            <p>En 1996, fundó su primer restaurante, un lugar donde la cocina mediterránea cobraba vida
              con toques modernos y sorpresas sensoriales. Desde entonces, su establecimiento ha sido
              reconocido como un referente en alta cocina, recibiendo numerosos premios por sus platos 
              innovadores que combinan sabores inesperados y presentaciones artísticas. </p>
              <img src="./firma.png" alt="Firma del chef Carlos Morales" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;