import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import AdvancedSearch from './containers/AdvancedSearch';
import Map from './containers/Map';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
      <Route path="/Home" element={<Home />} /> 
        <Route path="/" element={<Home />} />           {/* Página inicial */}
        <Route path="/AdvancedSearch" element={<AdvancedSearch />} /> {/* Página de busca avançada */}
        <Route path="/Map" element={<Map />} />           {/* Página do mapa de incidentes */}
      </Routes>
    </Router>
  </StrictMode>
);