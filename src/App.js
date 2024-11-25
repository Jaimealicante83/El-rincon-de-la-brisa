import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Booking from './components/Booking';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
