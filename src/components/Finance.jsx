import React from "react";
import styled from "styled-components";
import Logo3d from "./style/images/Group 1511.png";


import { Container, H1, GradientButton } from "./style/Home";
import Rupee from './style/images/rupee-dynamic-gradient.png'
import Bag from './style/images/money-bag-dynamic-gradient.png'
import Purse from './style/images/wallet-dynamic-gradient.png'

const AboutWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  flexwrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  height: 50%;
  object-fit: contain;

  @media (max-width: 1000px) {
    width: 20rem;
    height: 15rem;
  }
`;

const Desktop=styled.div`
@media(max-width: 1000px)
{
    display:none;
    visibility: hidden;
}
`

const Innerdiv=styled.div`
display:flex;

@media(max-width:1000px)
{
    flex-Direction:column;
}
`


const TransparentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  width: 70%;
  height:30%;
  margin-top:2.5rem;

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(224, 249, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  filter: drop-shadow(2px 16px 19px rgba(0, 0, 0, 0.09));
  backdrop-filter: blur(80px);

  border-radius: 12px;


  @media(max-width:1000px){
    width:fit-content;
    
    font:.5rem
  }
`;

const Finance = () => {
  return (
    <>
      <Container style={{marginBottom:"1rem",paddingTop:"2rem"}}>
        
        <AboutWrapper
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center", 
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <ImageWrapper style={{alignItems:"start"}}>
          <H1 style={{ fontSize: "68px", lineHeight: "67px",textAlign:"left",marginTop:"0"}}>FINANCE</H1>
            <Desktop style={{display:"flex",width:"100%",flexDirection:"row-reverse",height:"30%"}}>
                <img src={Rupee} alt="coin"/>
            </Desktop>
            <Desktop style={{height:"30%"}}>
                <img src={Bag} alt="coingbag"/>
            </Desktop>
            <Desktop style={{display:"flex",width:"100%",flexDirection:"row-reverse",height:"30%"}}>
                <img src={Purse} alt="Moneypurse"/>
            </Desktop>
            
          </ImageWrapper>
          <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"center",justifyContent:"center"}}>
          <TransparentDiv>
              <Innerdiv>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Century Gothic",
                marginBottom: "1rem",
              }}
            >
                <h3>CREATOR DEFI</h3>
              A Multi Chain Solution with Defi Principles and a Community
              friendly approach with creators at its forefront, and at its core.
            </span>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <GradientButton>Explore</GradientButton>
            </div>
            </Innerdiv>
          </TransparentDiv>
          <TransparentDiv >
          <Innerdiv>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                // fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Century Gothic",
                marginBottom: "1rem",
              }}
            >
                <h3>CREATOR FAN TOKENS</h3>
              A Multi Chain Solution with Defi Principles and a Community
              friendly approach with creators at its forefront, and at its core.
            </span>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <GradientButton>Explore</GradientButton>
            </div>
            </Innerdiv>
          </TransparentDiv>
          <TransparentDiv>
              <Innerdiv>
          
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                // fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Century Gothic",
                marginBottom: "1rem",
                // width:"60%"
              }}
            >
                
                <h3>CREATE TO EARN ECONOMY</h3>
              A Multi Chain Solution with Defi Principles and a Community
              friendly approach with creators at its forefront, and at its core.
            </span>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <GradientButton>Explore</GradientButton>
            </div>
            
            </Innerdiv>
            
          </TransparentDiv>

          </div>
          
        </AboutWrapper>
      </Container>
    </>
  );
};

export default Finance;
