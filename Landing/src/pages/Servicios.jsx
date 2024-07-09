import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { servicios } from "../utils/servicios";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ServicioCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const Video = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 20px;
  text-align: justify;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);

    &:hover {
    background-color: GREY;
  }
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 1.2em;
  color: black;
`;

const Description = styled.p`
  font-size: 1em;
  color: black;
  max-height: ${(props) => (props.expanded ? "100%" : "3em")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  text-align: justify;
`;

const VerMas = styled.button`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  border: none;
  font-weight: 700;
  letter-spacing: 1px;
  &:hover {
    background-color: #ea0000;
    color: black;
    border: none;
  }
`;

const Servicios = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <GridContainer>
      {servicios.map((servicio, index) => (
        <ServicioCard key={index} delay={index * 0.3}>
          {servicio.video ? (
            <Video autoPlay loop muted>
              <source src={servicio.video} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          ) : (
            <Video style={{ backgroundImage: `url(${servicio.image})` }} />
          )}
          <Info>
            <Title>{servicio.name}</Title>
            <Description expanded={expandedIndex === index}>
              {servicio.description}
            </Description>
            <VerMas onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? "Ver menos" : "Ver más"}
            </VerMas>
          </Info>
        </ServicioCard>
      ))}
    </GridContainer>
  );
};

export default Servicios;
