// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import logo from '../imgs/logo-goa-mma.png';

export const LogoGoa = styled.img`
border-radius: 10px;
&:hover{
}
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const HeroButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: gold;
  }
`;

const Hero = () => {
  const handleRedirect = () => {
    window.open('https://mmagoa.com/', '_blank');
  };

  return (
    <HeroContainer>
      <LogoGoa src={logo} alt="Logo GOA MMA" />
      <HeroButton onClick={handleRedirect}>Inscribirse</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
