import styled from "styled-components";
import { LogoImg } from "./Dojos";
import logo from "../imgs/logo-goa-mma.png"
const NoPageContent = styled.div`
font-size: 2em;
height: 100vh;
text-align: center;
place-content: center;
`

const Logo = styled.img`
width: 150px;
`

function NoPage() {
    return (
      <>
          <NoPageContent>
            <Logo src={logo}></Logo>
            <h2>Page doesn´t exist</h2>
          </NoPageContent>
      </>
    )
  }
  
  export default NoPage