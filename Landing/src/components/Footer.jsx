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

const Content = styled.p`
font-size: .8em;
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        &copy; 2024 - Academia de artes marciales mixtas GOA. Todos los derechos
        reservados.
      </Content>
    </FooterContainer>
  );
};

export default Footer;
