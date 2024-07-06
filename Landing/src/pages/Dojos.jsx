import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import video1 from "../video/GOA-DOJOS1.mp4";
import video2 from "../video/GOA-DOJOS2.mp4";
import video3 from "../video/GOA-DOJOS3.mp4";
import { dojos } from "../utils/dojos";
import logo from "../imgs/logo-goa-mma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const DojoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const VideoMosaic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  z-index: 0;
  opacity: 0.7;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  font-size: 3em;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const borderAnimation = keyframes`
  0% {
    clip-path: inset(0 100% 0 0);
  }
  25% {
    clip-path: inset(0 0 100% 0);
  }
  50% {
    clip-path: inset(0 0 0 100%);
  }
  75% {
    clip-path: inset(100% 0 0 0);
  }
  100% {
    clip-path: inset(0 100% 0 0);
  }
`;

const fadeInLetters = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AdditionalContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  width: 90%;
  padding: 20px;
  border-radius: 10px;
  display: ${(props) => (props.show ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  gap: 2em;
  animation: ${fadeIn} 1.4s ease-in-out;

  @media (max-width: 768px) {
    width: 90%;
    margin: 5em 0 15em 0;
    grid-template-columns: 1fr;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid red;
    border-radius: 10px;
    animation: ${borderAnimation} 1.5s linear forwards;
  }
`;

const CardDojo = styled.div`
  border-radius: 10px;
  padding: 1em;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0.5em;
    text-align: justify;
  }
`;

const NameDojo = styled.h3`
  font-size: 2em;
  color: white;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  gap: 1em;
  animation: ${fadeInLetters} 1.3s ease forwards;

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
`;

const LogoImg = styled.img`
  width: 50px;
  border-radius: 50px;
  margin: 0 0 0 1em;
  border: 1px solid white;

  @media (max-width: 768px) {
    width: 40px;
    margin: 0 0 0 0.5em;
  }
`;

const InfoDojo = styled.p`
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

export const Dojos = () => {
  const [showAdditional, setShowAdditional] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAdditional(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DojoContainer>
      <VideoMosaic>
        <Video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Video autoPlay loop muted>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
        <Video autoPlay loop muted>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoMosaic>
      <AdditionalContainer show={showAdditional}>
        {dojos.map((dojo) => (
          <CardDojo key={dojo.id}>
            <NameDojo>
              <LogoImg src={logo} alt="Logo GOA MMA" />
              {dojo.name}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "red", filter: "drop-shadow(2px 2px 10px grey)" }}
              />
            </NameDojo>
            <InfoDojo>Dirección: {dojo.address} </InfoDojo>
            <InfoDojo>Horarios: {dojo.schedules}</InfoDojo>
            <InfoDojo>Teléfono: {dojo.phone}</InfoDojo>
          </CardDojo>
        ))}
      </AdditionalContainer>
    </DojoContainer>
  );
};
