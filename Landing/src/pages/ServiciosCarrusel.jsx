import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { servicios } from "../utils/servicios";

import video2 from "../video/GOA-DOJOS2.mp4";
import video1 from "../video/KIDS.mp4";
import video3 from "../video/ASD.mp4";

const CarruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
`;

const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  height: 80vh;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(1000px);
  }
`;

const ServicioInfo = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  color: white;
  text-align: center;
  border-radius: 10px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: 2;
  animation: ${(props) => (props.visible ? fadeIn : "none")} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 3em;
  color: white;
`;

const ArrowContainer = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const Arrow = styled.div`
  font-size: 1.5em;
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

const videos = [video1, video2, video3];

const ServiciosCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowTitle(true);
  }, []);

  const handleNext = () => {
    setShowTitle(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
      videoRef.current.src = videos[(currentIndex + 1) % videos.length];
      setShowTitle(true);
    }, 500);
  };

  const handlePrev = () => {
    setShowTitle(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + servicios.length) % servicios.length
      );
      videoRef.current.src = videos[(currentIndex - 1 + videos.length) % videos.length];
      setShowTitle(true);
    }, 500);
  };

  return (
    <CarruselContainer>
      <ServicioContainer>
        <VideoBackground ref={videoRef} autoPlay loop muted>
          <source src={videos[currentIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoBackground>

        <ServicioInfo visible={showTitle}>
          <Title>{servicios[currentIndex].name}</Title>
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
