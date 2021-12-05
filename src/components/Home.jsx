import React from "react";
// import styled from "styled-components";
import About from "./About";
import CardContainer from "./CardConatiner";
import Logo from './style/images/logo.svg'
// import LogoName from './style/images/LogoName.svg'

import { Container,Logos,NavbarM,Options,Item,Heading,H1,GradientButton } from "./style/Home";
import Navbar from "./Navbar";

const Home = () => {
  return (
      <>
    <Container>
      <Navbar/>
      <NavbarM>

        <Logos>
            <img style={{marginRight:".5rem"}} src={Logo} alt="company"/>
            {/* <img src={LogoName} alt="company"/> */}
        </Logos>
        <Options>
          <button style={{margin:"10px",borderRadius:"12px",fontSize:"17px",fontWeight:"bold"}}><Item>mercado.studio</Item></button>
          <button style={{margin:"10px",borderRadius:"12px",fontSize:"17px",fontWeight:"bold"}}><Item>Team and Advisors</Item></button>
          <button style={{margin:"10px",borderRadius:"12px",fontSize:"17px",fontWeight:"bold"}}><Item>Contact</Item></button>
        
         
          
          {/* <Button>
            <Gradient style={{ background: "black", padding: "1px" }}>
              Connect Wallet
            </Gradient>
          </Button> */}
        </Options>
      </NavbarM>
      <Heading>
        <H1 
        style={{ fontSize: "5.5rem", lineHeight: "72px",fontStyle:"Earth Orbiter Bold" }}
        >
          CREATE <br /> <span style={{ fontSize: "4.1rem", lineHeight: "72px",fontStyle:"Earth Orbiter Bold" }}>PROTOCOL</span>
        </H1>
        <H1 style={{ fontSize: "22px", lineHeight: "22px" }}>
          CREATIVITY.DECENTRALISED
        </H1>
        <div style={{ display: "flex", marginTop: "1.5rem",flexWrap:"wrap",alignItems:"center",justifyContent:"center" }}>
          {/* <GradientButton>Buy SCRB token</GradientButton> */}
          <GradientButton>Download Whitepaper</GradientButton>
        </div>
        <h3 style={{opacity:"0.5",borderBottom:"1px solid white"}}>Subscribe to our newsletter</h3>
      </Heading>
    </Container>
    <About/>
    <CardContainer/>



  

    </>
  );
};

export default Home;
