import React, { useState } from "react";
import styled from "styled-components";
import { servicios } from "../utils/servicios";
import Servicio from "./Servicio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const CarruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  padding: 0 0 4em 0;
`;

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

const TitleContainer = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;

const Title = styled.h2`
  margin: 0 10px;
  font-size: 2em;
  color: white;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0 1em;
  border-radius: 10px;
    box-shadow: 2px 2px 5px 1px rgba(55, 2, 2, 0.483);

`;

const Arrow = styled.div`
  font-size: 3em;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  color: white;

  &:hover {
    color: rgba(255, 2, 2, 0.483);
    filter: drop-shadow(10px 10px 10px white);
  }
`;

const ServicioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 600px; /* Ancho máximo para contenido */
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 1em;
  box-shadow: 2px 2px 5px 1px rgba(55, 2, 2, 0.483);
  border-radius: 10px;
  margin-top: 7em;

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 5em;
  }

  @media (max-width: 768px) {
    margin-top: 8em;
  }
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 3;
`;

const Indicator = styled.div`
  width: 10px;
  height: 5px;
  background-color: ${(props) => (props.active ? "black" : "grey")};
  transition: background-color 0.3s ease;
  margin: 0 4px;
`;

const ServiciosCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      {servicios.map((servicio, index) => (
        <BackgroundImage
          key={servicio.id}
          imageUrl={servicio.image}
          visible={index === currentIndex}
        />
      ))}

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
        <Servicio
          key={servicios[currentIndex].id}
          description={servicios[currentIndex].description}
        />
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
