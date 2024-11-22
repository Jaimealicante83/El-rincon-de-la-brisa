import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Configuración de rutas */}
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                title="El Rincón de la Brisa"
                paragraph="Es más que un restaurante; es una experiencia culinaria que despierta todos los sentidos."
                buttonText="Reservar"
                buttonLink="/menu"
                variant="main"
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
