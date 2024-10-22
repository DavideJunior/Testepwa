<<<<<<< HEAD
import React from 'react';
import { Container, Sidebar, MainContent, MapContainer, IncidentList, IncidentItem,StyledLink} from './styled';
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
            <li><StyledLink to="/Map"><MapIcon />Mapa de Incidentes</StyledLink></li>
          </ul>
        </nav>
        <button className="logout">Sair</button>
      </Sidebar>
      
      <MainContent>
        <MapContainer>
          {/* Mapa interativo poderia ir aqui, como um componente de mapa */}
        </MapContainer>
        
        <IncidentList>
          <h2>Últimos Incidentes</h2>
          <p>Baseados nas últimas 48hrs</p>
          <ul>
            <IncidentItem>
              <p>Denúncia de Tentativa de Roubo de Celular com Agressões Sofridas</p>
              <span>Hoje às 16:30 - São Castro</span>
            </IncidentItem>
            {/* Mais itens da lista aqui */}
          </ul>
          <a href="#">Mostrar mais</a>
        </IncidentList>
      </MainContent>
    </Container>
  );
}

export default Home;
=======
import { Title } from "./style"


function Home() {
    
    return (
        <div>
            <Title>Hello word Cidade Segura </Title>
        </div>
    )


}

export default Home;
>>>>>>> 5e4cacfb0849da152b62efb59019591e78b0ea4c
