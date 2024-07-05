import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { servicios } from "../utils/servicios";

import video1 from "../video/KIDS.mp4";
import video2 from "../video/GOA-DOJOS2.mp4";
import video3 from "../video/ASD.mp4";

const CarruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;


const Title = styled.h2`
  font-size: 2em;
  color: white;
  text-align: justify;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit:scale-down;
`;

const ServicioInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  color: white;
  text-align: justify;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: 2; 
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 80%;
  transform: translateY(-50%);
  transform: translateX(12%);
  display: flex;
  justify-content: space-between;
  z-index: 2; 
`;

const Arrow = styled.div`
  font-size: 2em;
  cursor: pointer;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 0, 0, 0.7);
    transform: scale(1.1);
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

const videos = [video1, video2, video3]; // Lista de videos de fondo para cada servicio

const ServiciosCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Muestra el título y el video al principio
    setShowTitle(true);
    setTimeout(() => {
      setShowDescription(true); // Muestra la descripción después de 5 segundos
    }, 5000);
  }, []);

  const handleNext = () => {
    setShowDescription(false); // Oculta la descripción al cambiar de servicio
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
    videoRef.current.src = videos[(currentIndex + 1) % videos.length]; // Cambia el video de fondo
  };

  const handlePrev = () => {
    setShowDescription(false); // Oculta la descripción al cambiar de servicio
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + servicios.length) % servicios.length
    );
    videoRef.current.src =
      videos[(currentIndex - 1 + videos.length) % videos.length]; // Cambia el video de fondo
  };

  return (
    <CarruselContainer>
      <ServicioContainer>

        <VideoBackground ref={videoRef} autoPlay loop muted>
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>

        <ServicioInfo visible={showDescription}>
          <h4>{showTitle && <Title>{servicios[currentIndex].name}</Title>}</h4>
        
          <p>{servicios[currentIndex].description}</p>
        </ServicioInfo>

        <ArrowContainer>
          <Arrow onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Arrow>
          <Arrow onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Arrow>
        </ArrowContainer>
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
