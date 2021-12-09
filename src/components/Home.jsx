import React from "react";
import styled from "styled-components";
import About from "./About";
import CardContainer from "./CardConatiner";
import Footer from "./Footer2";
import Logo from './style/images/logo.svg'
import LogoName from './style/images/Logoname.png'
import '../App.css'
import Tokenomics from './style/images/tokenomics image.png';

import { Container,Logos,NavbarM,Options,Item,Heading,H1,GradientButton,Gradient,Button,GradientBorder,GradientSpan} from "./style/Home";
import Navbar from "./Navbar";
import Finance from "./Finance";
import CDapp from './CDapp'
import Console from './Console';




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
          <button style={{fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none",fontFamily: "Rubik"}}><Item>mercado.studio</Item></button>
          <button style={{fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none",fontFamily: "Rubik"}}><Item>Team and Advisors</Item></button>
          <button style={{fontSize:"17px",fontWeight:"bold",backgroundColor:"transparent",color:"white",border: "none",background: "none",fontFamily: "Rubik"}}><Item>Contact</Item></button>
        
         
          
         
          {/* <GradientBorder><GradientSpan>Connect Wallet</GradientSpan></GradientBorder> */}
          <GradientButton style={{width:"fit-content"}}>Download Whitepaper</GradientButton>
          
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
          <GradientButton>Buy $CR8 token</GradientButton>
          <GradientButton>Explore Marketplace </GradientButton>
        </div>
        <h3 style={{opacity:"0.5",borderBottom:"1px solid white",fontSize:"1rem"}}>Subscribe to our newsletter</h3>
      </Heading>
    </Container>
    <About/>
    <Finance/>
    <Console/>
    <CDapp/>
    <CardContainer/>
    <Container>
    <div
    style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"}}>
    <img style={{height:"100%",width:"100%",objectFit:"cover"}} src={Tokenomics} alt="tokendetails"/>
    </div>
    </Container>

    
    
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
