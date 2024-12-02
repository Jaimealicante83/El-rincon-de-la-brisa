import React from 'react';
import './Footer.scss'; // Make sure to create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-columns">
                    <div className="footer-column">
                        <img src="logo.png" alt="Logo" className="footer-logo" />
                    </div>
                    <div className="footer-column">
                        <h4>Contacto</h4>
                        <p>Cala del Mirador 33,<br />
                        Sant Ametller<br />
                        Ibiza, España<br /><br />
                        +099 040 000 2320<br />
                        rb@info.res<br /><br /></p>
                    </div>
                    <div className="footer-column">
                        <h4>Horario</h4>
                        <p>Lunes-Miércoles</p>
                        <p>Cerrado</p>
                        <p>Jueves-Domingo</p>
                        <p>12:00-23:30</p>
                        <p>Sábados</p>
                        <p>20:00-23:00</p>
                        <p><b>Música en vivo</b></p>
                    </div>
                    <div className="footer-column">
                        <h4>Redes</h4>
                        <div class="footer-redes">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="facebook.png" alt="Facebook" />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <img src="x.png" alt="X" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="instagram.png" alt="instagram" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Mapa</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.7713687782402!2d1.474414600390237!3d38.91429650147304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1299476385093943%3A0x9064725cd8426d6!2sIbiza!5e1!3m2!1ses!2ses!4v1733139778193!5m2!1ses!2ses"
                            width="100%"
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación en Google Maps"
                        ></iframe>                    
                    </div>
                </div>
            </div>
        </footer>
   
    );
};

export default Footer;