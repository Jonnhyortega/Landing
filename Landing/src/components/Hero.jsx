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
  gap: 50px;
  height: 100vh;
  margin: auto;
  border-radius: 10px;
  z-index: 2;
  width: 160px;
  text-align: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s, gap 0.5s;

 @media (max-width: 568px) {
   gap: 200px
  }
`;

const LogoGoa = styled.img`
  width: 150px;
  margin-top: 100px;
  border-radius: 50%;
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
  opacity: ${(props) => (props.visible ? 1 : 0)};
  &:hover {
    color: white;
    letter-spacing: 2px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => {
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
      <ContentContainer visible={visible}>
        <LogoGoa src={logo} alt="Logo GOA MMA" />
        <HeroButton visible={visible} onClick={handleRedirect}>
          Inscribirse
        </HeroButton>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;
