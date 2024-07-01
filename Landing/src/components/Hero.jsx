import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../imgs/logo-goa-mma.png';
import image1 from '/public/FOTO2REMK.png';
import image2 from '/public/fotogrupal.jpg'; 

const images = [image1, image2]; 

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: white;
  background-image: url(${props => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  animation: ${fadeIn} 1s ease-in-out;
  transition: background-image 1s ease-in-out;
`;

export const LogoGoa = styled.img`
  border-radius: 10px;
  margin-top: 20px;
  &:hover {
  }
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    window.open('https://mmagoa.com/', '_blank');
  };

  return (
    <HeroContainer bgImage={images[currentImageIndex]}>
      <LogoGoa src={logo} alt="Logo GOA MMA" />
      <p>Academia de artes marciales mixtas</p>
      <HeroButton onClick={handleRedirect}>Inscribirse</HeroButton>
    </HeroContainer>
  );
};

export default Hero;
