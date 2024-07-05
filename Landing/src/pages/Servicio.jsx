import styled, { keyframes } from 'styled-components';

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
  margin: 0 auto;
  border-radius: 10px;
  z-index: 2;
`;

const ServicioDescription = styled.span`
  color: white;
  font-size: 1em;
  font-weight: 800;
  text-align: justify;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

function Servicio({ description }) {
  return (
    <ServicioCard>
      <ServicioDescription>{description}</ServicioDescription>
    </ServicioCard>
  );
}

export default Servicio;
