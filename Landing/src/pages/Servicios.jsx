import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { servicios } from "../utils/servicios";
import Servicio from "./Servicio";

// Estilos para el contenedor principal del carrusel
const CarruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

// Estilos para las imágenes del carrusel
const Imagen = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

// Estilos para el contenedor de la tarjeta de servicio
const ServicioCardContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 2;
`;

// Estilos para las flechas de navegación
const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 3;
  ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
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
        <Imagen
          key={servicio.id}
          src={servicio.image}
          alt={servicio.name}
          visible={index === currentIndex}
        />
      ))}
      <ServicioCardContainer>
        <Servicio
          key={servicios[currentIndex].id}
          name={servicios[currentIndex].name}
          description={servicios[currentIndex].description}
        />
      </ServicioCardContainer>
      <Arrow left onClick={handlePrev}>
        &#9664;
      </Arrow>
      <Arrow onClick={handleNext}>&#9654;</Arrow>
    </CarruselContainer>
  );
};

export default ServiciosCarrusel;
