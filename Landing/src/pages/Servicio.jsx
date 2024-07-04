import { Link } from "react-router-dom";
import styled from "styled-components";

const ServicioCard = styled.div`

display:flex;
flex-direction: column;
gap: 15px;
border:1px solid black;
padding: 1em;
`
const ServicioTitle = styled.span`
color: black;
font-size: 1.5em;
`
const ServicioDescription = styled.span `
color: white;
text-align: left;
`

function Servicio({ name, description}) {
  return (
    <ServicioCard>
      <ServicioTitle>{name}</ServicioTitle>
      <ServicioDescription>{description}</ServicioDescription>
    </ServicioCard>
  );
}

export default Servicio;
