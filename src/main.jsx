import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import AdvancedSearch from './containers/AdvancedSearch';
import Map from './containers/Map';
=======
import Home from './containers/Home'; // A importação deve funcionar se index.jsx tiver um export default
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
<<<<<<< HEAD
    <Router>
      <Routes>
      <Route path="/Home" element={<Home />} /> 
        <Route path="/" element={<Home />} />           {/* Página inicial */}
        <Route path="/AdvancedSearch" element={<AdvancedSearch />} /> {/* Página de busca avançada */}
        <Route path="/Map" element={<Map />} />           {/* Página do mapa de incidentes */}
      </Routes>
    </Router>
=======
    <Home />
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
  </StrictMode>
);