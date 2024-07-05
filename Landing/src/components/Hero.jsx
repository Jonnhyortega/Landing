import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../imgs/logo-goa-mma.png";
import backgroundVideo from "../video/GOA.mp4";

const HeroContainer = styled.div`
  height: 90vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  height: 100vh;
  width: 90%;
  text-align: center;
  gap: ${(props) => (props.gapExpanded ? "200px" : "20px")};
  transition: gap 0.5s;
`;

const LogoGoa = styled.img`
  border-radius: 10px;
  width: 150px;
  margin: 0 auto;
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
    letter-spacing: 5px;
  }
`;

const Hero = () => {
  const [gapExpanded, setGapExpanded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
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
      <ContentContainer gapExpanded={gapExpanded}>
        <LogoGoa src={logo} alt="Logo GOA MMA"/>
        <HeroButton onClick={handleRedirect}>Inscribirse</HeroButton>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
