import React from "react";
import styled from "styled-components";
import { LogoImg } from "../pages/Dojos";
import logo from "../imgs/logo-goa-mma.png";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  bottom: 0;
`;

const Content = styled.p`
  font-size: 0.8em;
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

const Logo = styled.img`
  width: 20px;
  border-radius: 50%;
  margin: 0 2em;
  border: 1px solid red;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Logo src={logo}></Logo>
        &copy; 2024 - Academia de artes marciales mixtas GOA. Todos los derechos
        reservados.
        <Logo src={logo}></Logo>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
