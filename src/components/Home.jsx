import React from "react";
// import styled from "styled-components";
import About from "./About";
import CardContainer from "./CardConatiner";
import Footer from "./Footer2";
import Logo from './style/images/logo.svg'
// import LogoName from './style/images/LogoName.svg'
import '../App.css'

import { Container,Logos,NavbarM,Options,Item,Heading,H1,GradientButton,Gradient,Button,connnectwallet } from "./style/Home";
import Navbar from "./Navbar";
import Finance from "./Finance";
import CDapp from './CDapp'
import Console from './Console'

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
          <button style={{margin:"10px",fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none"}}><Item>mercado.studio</Item></button>
          <button style={{margin:"10px",fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none"}}><Item>Team and Advisors</Item></button>
          <button style={{margin:"10px",fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none"}}><Item>Contact</Item></button>
        
         
          
          <Button >
            <Gradient style={{ background: "black", padding: "8px 20px",borderRadius: "26px" ,backgroundColor:"#000000"}}>
              Connect Wallet
            </Gradient>
          </Button>
        </Options>
      </NavbarM>
      <Heading style={{marginTop:"5rem"}}>
        <H1 
        style={{ fontSize: "5.5rem", lineHeight: "72px" }}
        >
          CREATE <br /> <span style={{ fontSize: "4.1rem", lineHeight: "72px" }}>PROTOCOL</span>
        </H1>
        <H1 style={{ fontSize: "22px", lineHeight: "22px" }} className="font-face-gm">
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
    <Finance/>
    <Console/>
    <CDapp/>
    <CardContainer/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

  
    <Footer/>
    </>
  );
};

export default Home;
