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
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  z-index: 2;
`;

const Title = styled.h2`
  margin: 0 10px;
  font-size: 2em;
`;

const Arrow = styled.div`
  font-size: 3em;
  color: black;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  color: red;

  &:hover {
    color: white;
    filter: drop-shadow(1px 1px 1px white);
  }
`;

const ServicioContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1em;
  border: 1px solid red;
  border-radius: 10px;
  margin-top: 1.5em;
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 2;
`;

const Indicator = styled.div`
  width: 10px;
  height: 5px;
  background-color: ${(props) => (props.active ? "black" : "grey")};
  transition: background-color 0.3s ease;
  margin: 0 2px; /* Espacio entre indicadores */
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
