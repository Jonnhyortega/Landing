import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { servicios } from "../utils/servicios";
import { Link } from "react-router-dom";

const CarruselContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ServicioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ImageBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 1s ease-in-out;
  transition: opacity 1s ease-in-out;
`;

const ServicioInfo = styled.div`
  border-radius: 1em;
  margin-top: 1em;
  color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: red;
  border: 1px solid white;
  width: 50%;
  height: 80%;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
  z-index: 2;
  animation: ${(props) => (props.visible ? fadeIn : "none")} 0.5s ease-out;
  backdrop-filter: blur(1px) saturate(200%);
  -webkit-backdrop-filter: blur(12px) saturate(200%);
  background-color: rgba(255, 255, 255, 0);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;

const Logo = styled.img`
  margin-top: 1em;
  width: 200px;
  z-index: 2;
  border-radius: 50%;
`;

const Title = styled.h2`
  margin: 0 auto;
  width: 90%;
  text-align: center;
  font-size: 3em;
  color: white;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(to right, white, black);
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(1px 2px 5px white);
  text-shadow: 1px 1px 1px black;
`;

const VerMas = styled.a`
  place-content: center;
  color: gold;
  text-align: center;
`;

const ArrowContainer = styled.div`
  margin: 0 auto;
  width: 150px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const Arrow = styled.div`
  font-size: 2.1em;
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

const ServiciosCarrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setShowTitle(true);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageVisible(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % servicios[currentIndex].image.length
        );
        setImageVisible(true);
      }, 1000);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, [currentIndex]);

  const handleNext = () => {
    setShowTitle(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servicios.length);
      setCurrentImageIndex(0);
      setShowTitle(true);
    }, 500);
  };

  const handlePrev = () => {
    setShowTitle(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + servicios.length) % servicios.length
      );
      setCurrentImageIndex(0);
      setShowTitle(true);
    }, 500);
  };

  return (
    <CarruselContainer>
      <ServicioContainer>
        <ImageBackground
          style={{
            backgroundImage: `url(${servicios[currentIndex].image[currentImageIndex]})`,
          }}
          visible={imageVisible}
        />
        <ServicioInfo visible={showTitle}>
          <Title>{servicios[currentIndex].name}</Title>
          <VerMas>Ver más</VerMas>
          <ArrowContainer>
            <Arrow onClick={handlePrev}>
              <FontAwesomeIcon icon={faCircleLeft} />
            </Arrow>
            <Arrow onClick={handleNext}>
              <FontAwesomeIcon icon={faCircleRight} />{" "}
            </Arrow>
          </ArrowContainer>
        </ServicioInfo>
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
