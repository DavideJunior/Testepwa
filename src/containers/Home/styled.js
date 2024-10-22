import styled from "styled-components";
import { Link } from 'react-router-dom';



export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f2f5;
`;



export const Sidebar = styled.div`

  width: 320px;
  background: #407BFF;
  display: flex;
  flex-direction: column;
  align-items: left; /* Alinha tudo ao centro */
  padding: 0;
  color: white;
  margin: 0;
 

  .logoCS { /* div com classe "logoCS" */
  width: 220px; 
  height: 110px;
  margin-bottom: 20px;
  margin: 40px 0 20px 0;
  align-self: center;

  }

  nav ul {
  
    list-style: none;
    padding: 0;
    width: 100%;

    li {
      padding: 15px;
      cursor: pointer;
      text-align: left;
      border-radius: 8px;
      &:hover {
        background-color: #1565c0;
      }
    }
  }

  .logout {
    margin-top: auto;
    padding: 10px 20px;
    background-color: #ff5252;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #e53935;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: white; /* Sem aspas */
  text-decoration: none; /* Sem aspas */

  &:hover {
    text-decoration: underline; /* Adiciona sublinhado ao passar o mouse */
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  position: relative;
`;

export const MapContainer = styled.div`
  height: 300px;
  background-color: #ddd;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

export const IncidentList = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #1976d2;
  }

  p {
    color: gray;
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    color: #1976d2;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
`;

export const IncidentItem = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 10px 0;

  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    color: gray;
    font-size: 12px;
  }

  &:last-child {
    border-bottom: none;
  }
`;
