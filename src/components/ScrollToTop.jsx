import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // useLocation nos da acceso a la ubicación actual
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando la ruta cambia, hacemos scroll al inicio
    window.scrollTo(0, 0);
  }, [pathname]); // Este efecto se ejecuta cada vez que pathname cambia

  return null; // Este componente no renderiza nada visualmente
}

export default ScrollToTop;