import React from 'react';
import { Container, Sidebar, StyledLink} from './styled.js';
import logoCs from '../../assets/logoCS.png' // importação da logo Cidade Segura 
import {HomeIcon, SearchIcon, MapIcon} from '../../components/components.jsx'; // importação do icon home 



const Home = () => {
  return (
    <Container>
      <Sidebar>
          <img src={logoCs} alt="Cidade Segura" className="logoCS"/>
        <nav>
          <ul>
          <li><StyledLink to="/Home"><HomeIcon width="10" />Home</StyledLink></li>
            <li><StyledLink to="/AdvancedSearch"><SearchIcon />Busca Avançada</StyledLink></li>
            <li><StyledLink to="/map"><MapIcon />Mapa de Incidentes</StyledLink></li>
          </ul>
        </nav>
        <button className="logout">Sair</button>
      </Sidebar>
    
    </Container>
  );
}

export default Home;
