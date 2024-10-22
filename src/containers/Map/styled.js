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