import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import backgroundVideo from "../video/GOA.mp4";

const HeroContainer = styled.div`
  height: 90vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  object-fit: cover;
  border: 1px solid;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1000px;
  height: 100vh;
  margin: auto;
  border-radius: 10px;
  z-index: 2;
  width: 160px;
  text-align: center;
  gap: ${(props) => (props.gapExpanded ? "200px" : "20px")};
  transition: gap 0.5s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s;
`;

const LogoGoa = styled.img`
  border-radius: 10px;
  width: 150px;
  margin: 0 0 200px 0;
  border-radius: 50%;
  margin-top: 100px;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }
`;

const HeroButton = styled.a`
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 0.3s;
  z-index: 2;
  &:hover {
    background-color: red;
    color: black;
    letter-spacing: 2px;
    transform: scale(1.05); /* Aumento de escala al pasar el mouse */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra al pasar el mouse */
  }
`;

const Hero = () => {
  const [gapExpanded, setGapExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 32) {
        setGapExpanded(true);
      } else {
        setGapExpanded(false);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      clearTimeout(timer);
    };
  }, []);

  const handleRedirect = () => {
    window.open("https://mmagoa.com/", "_blank");
  };

  return (
    <HeroContainer>
      <BackgroundVideo ref={videoRef} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <ContentContainer gapExpanded={gapExpanded} visible={visible}>
        <LogoGoa src={logo} alt="Logo GOA MMA" />
        <HeroButton onClick={handleRedirect}>Inscribirse</HeroButton>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
