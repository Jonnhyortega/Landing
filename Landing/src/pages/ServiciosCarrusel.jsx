import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components"; // Asegúrate de importar styled-components
import { servicios } from "../utils/servicios";
import Servicio from "./Servicio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Importa BackgroundImage desde styled-components
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const CarruselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  max-width: 800px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2.5em;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0.5em 1em;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

const Arrow = styled.div`
  font-size: 3em;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 15px;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 0, 0, 0.7);
    transform: scale(1.1);
  }
`;

const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 1200px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1.5em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin-top: 5em;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServicioInfo = styled.div`
  flex: 1;
  padding: 1em;
  color: white;
  text-align: justify;
`;

const ServicioImage = styled.div`
  flex: 1;
  height: 500PX;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  margin-left: 2em;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2em;
    width: 100%;
    height: 200px;
  }
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

const Indicator = styled.div`
  width: 10px;
  height: 5px;
  background-color: ${(props) =>
    props.active ? "rgba(255, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.5)"};
  transition: background-color 0.3s ease;
  margin: 0 8px;
`;

const ServiciosCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + servicios.length) % servicios.length
    );
  };

  return (
    <CarruselContainer>
      <TitleContainer>
        <Arrow onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <Title>{servicios[currentIndex].name}</Title>
        <Arrow onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </TitleContainer>

      <ServicioContainer>
        <ServicioInfo>
          <Servicio
            key={servicios[currentIndex].id}
            description={servicios[currentIndex].description}
          />
        </ServicioInfo>
        <ServicioImage imageUrl={servicios[currentIndex].image} />
      </ServicioContainer>

      <IndicatorsContainer>
        {servicios.map((_, index) => (
          <Indicator key={index} active={index === currentIndex} />
        ))}
      </IndicatorsContainer>
    </CarruselContainer>
  );
};

export default ServiciosCarrusel;
