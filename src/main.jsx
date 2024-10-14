import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './containers/Home'; // A importação deve funcionar se index.jsx tiver um export default

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);