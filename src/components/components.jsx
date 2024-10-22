import React from 'react';
import { IconHome, IconSeach, IconMap } from './styled.js'; // importando stylização dos componentes do arquivo styled

// Componente do ícone da home
const HomeIcon = () => {
  return (
    <IconHome width="24" height="24" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.625 37.5833V20.5H24.375V37.5833M4.875 15.375L19.5 3.41663L34.125 15.375V34.1666C34.125 35.0728 33.7826 35.9418 33.1731 36.5826C32.5636 37.2233 31.737 37.5833 30.875 37.5833H8.125C7.26305 37.5833 6.4364 37.2233 5.8269 36.5826C5.21741 35.9418 4.875 35.0728 4.875 34.1666V15.375Z" 
            stroke="white" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
      />
    </IconHome>
  );
};

// Componente do ícone de busca
const SearchIcon = () => {
  return (
    <IconSeach width="24" height="24" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.5 31.875L26.525 24.4437M30.8333 14.7917C30.8333 22.3396 24.2668 28.4583 16.1667 28.4583C8.06649 28.4583 1.5 22.3396 1.5 14.7917C1.5 7.24377 8.06649 1.125 16.1667 1.125C24.2668 1.125 30.8333 7.24377 30.8333 14.7917Z" 
            stroke="white" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
      />
    </IconSeach>
  );
};

// Componente do ícone do mapa
const MapIcon = () => {
  return (
    <IconMap width="20" height="20" viewBox="0 0 48 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 17.9166C42 30.4583 24 41.2083 24 41.2083C24 41.2083 6 30.4583 6 17.9166C6 13.64 7.89642 9.53855 11.2721 6.51453C14.6477 3.4905 19.2261 1.79163 24 1.79163C28.7739 1.79163 33.3523 3.4905 36.7279 6.51453C40.1036 9.53855 42 13.64 42 17.9166Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
      />
      <path d="M24 23.2916C27.3137 23.2916 30 20.8852 30 17.9166C30 14.9481 27.3137 12.5416 24 12.5416C20.6863 12.5416 18 14.9481 18 17.9166C18 20.8852 20.6863 23.2916 24 23.2916Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
      />
    </IconMap>
  );
};

// Exportando os componentes
export { HomeIcon, SearchIcon, MapIcon };