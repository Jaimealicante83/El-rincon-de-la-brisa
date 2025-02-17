import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <ScrollToTop /> 
      <div className="App">
        {/* Configuración de rutas */}
        <Routes>
          <Route
            path="/"
            element={
             <Main />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
