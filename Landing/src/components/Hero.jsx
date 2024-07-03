import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import image1 from "/public/FOTO2REMK.png";
import image2 from "../imgs/foto-treino.jpg";
import image3 from "../imgs/foto-treino2.jpg";
import image4 from "../imgs/foto-treino3.jpg";
import image5 from "../imgs/foto-treino4.jpg";
import image6 from "../imgs/foto-treino5.jpg";
const images = [image1, image2, image3, image4, image5, image6];

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroContainer = styled.div`
  margin-top: 50px;
  display: flex;
  height: 100vh;
`;

const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: black;
  color: white;
  padding: 20px;
`;

const BoxRight = styled.div`
  width: 50%;
  background-image: url(${(props) => props.$bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: ${fadeIn} 1s ease-in-out;
  transition: background-image 1s ease-in-out;
`;

const LogoGoa = styled.img`
  border-radius: 10px;
  width: 150px;
  &:hover {
    cursor: pointer;
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
  font-weight: 800;
  letter-spacing: 1px;

  &:hover {
    background-color: red;
    color: black;
  }
`;

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    window.open("https://mmagoa.com/", "_blank");
  };

  return (
    <HeroContainer>
      <BoxLeft>
        <LogoGoa src={logo} alt="Logo GOA MMA" onClick={handleRedirect} />
        <p>Academia de artes marciales mixtas</p>
        <HeroButton onClick={handleRedirect}>Inscribirse</HeroButton>
      </BoxLeft>
      <BoxRight $bgImage={images[currentImageIndex]} />
    </HeroContainer>
  );
};

export default Hero;
