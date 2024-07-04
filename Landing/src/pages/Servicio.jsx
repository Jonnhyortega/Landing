import { Link } from "react-router-dom";
import styled from "styled-components";

const ServicioCard = styled.div`
  text-align: left;
  top: 0;
  border-radius: 10px;
  z-index: 2;
  width: auto;
`;

const ServicioDescription = styled.span`
  color: white;
  font-size: 1em;
  font-weight: 800;
  text-align: left;
`;

function Servicio({ description }) {
  return (
    <ServicioCard>
      <ServicioDescription>{description}</ServicioDescription>
    </ServicioCard>
  );
}

export default Servicio;
