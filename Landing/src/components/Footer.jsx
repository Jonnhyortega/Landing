// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%;
  bottom: 0;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 GOA MMA. Todos los derechos reservados.</p>
      <div>
        {/* <FooterLink href="#home">Inicio</FooterLink>
        <FooterLink href="#about">Acerca de</FooterLink>
        <FooterLink href="#services">Servicios</FooterLink>
        <FooterLink href="#contact">Contacto</FooterLink> */}
      </div>
    </FooterContainer>
  );
};

export default Footer;
