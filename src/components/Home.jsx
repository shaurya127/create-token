import React from "react";
// import styled from "styled-components";
import About from "./About";
import CardContainer from "./CardConatiner";
import Logo from './style/images/logo.svg'
import LogoName from './style/images/LogoName.svg'

import { Container,Logos,NavbarM,Options,Item,Button,Gradient,Heading,H1,GradientButton } from "./style/Home";
import Navbar from "./Navbar";

const Home = () => {
  return (
      <>
    <Container>
      <Navbar/>
      <NavbarM>

        <Logos>
            <img style={{marginRight:".5rem"}} src={Logo} alt="company"/>
            <img src={LogoName} alt="company"/>
        </Logos>
        <Options>
          <Item>Team and Advisors</Item>
          <Item>NFT</Item>
          <Item>Swap</Item>
          <Item>Contact</Item>
          <Item>Login</Item>
          <Button>
            <Gradient style={{ background: "black", padding: "1px" }}>
              Connect Wallet
            </Gradient>
          </Button>
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
          <GradientButton>Buy SCRB token</GradientButton>
          <GradientButton>Download wallpaper</GradientButton>
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
