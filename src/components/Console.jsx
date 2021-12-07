import React from "react";
import styled from "styled-components";
import Logo3d from "./style/images/Group 1511.png";

import { Container, H1, GradientButton } from "./style/Home";
import Key from "./style/images/key.png";
import Notebook from "./style/images/notebook.png";
import Heart from "./style/images/notify-heart-dynamic-gradient.png";

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
  object-fit: cover;

  @media (max-width: 1000px) {
    width: 0;
    height: 0;
    flex-direction:column;
    
    object-fit: cover;
  }
`;

const Desktop = styled.div`
display: flex;
width: 100%;

justify-content: space-between;
align-items: start;
@media(max-width:1000px){
  display:none;
  visibility:hidden;
  height:0;
}
`;

const Innerdiv = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TransparentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  width:25%;
  height: 30%;
  margin-top: 2.5rem;

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

  @media (max-width: 1000px) {
    width: 80%;

    font: 0.5rem;
  }
`;

const TextWrapper = styled.div`
  width: 40%;
  display:flex;
  flex-direction:column;
    justify-content:center;   
  @media(max-width:1000px)
  {
    width:100%;
    justify-content:center;
  }
`;

const Colortext = styled.div`
  font-size: 96px;
  line-height: 95px;

  font-family: Earth Orbiter Bold;
  background: linear-gradient(83.93deg, #ffffff 5.84%, #f5b4c3 101.22%);
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 22px;
  text-transform: capitalize;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-bottom: 0;
  @media(max-width:1000px){
    text-align:center;
  }
`;

const Topdiv=styled.div`
justify-content:space-between;
@media(max-width:1000px){
  flex-direction:column;
  justify-content:center;
}
`

const Center=styled.div`
@media(max-width:1000px){
  justify-content:center;
}`


const Console = () => {
  return (
    <>
      <Container style={{ marginBottom: "1rem", paddingTop: "2rem" }}>
        <AboutWrapper
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Topdiv style={{ width: "100%", display: "flex" }}>
            
            <ImageWrapper style={{ alignItems: "start" }}>
              <Desktop
                style={{
                  
                  
                }}
              >
                <img src={Key} alt="coin" />
                <img src={Notebook} alt="Moneypurse" />
              </Desktop>
              <Desktop
                style={{
                  justifyContent: "center",
                }}
              >
                <img src={Heart} alt="coingbag" />
              </Desktop>
            </ImageWrapper>
            <TextWrapper>
              <Colortext style={{ fontSize: "4rem", lineHeight: "4rem",width:"100%",fontFamily:"EarthOrbiter" }}>
              CONSOLE
              </Colortext>
              <Colortext
                style={{
                  width: "1005",
                  marginTop: "2rem",
                  fontSize: "1.5rem",
                  lineHeight: "2rem",
                  fontFamily: "Century Gothic",
                  fontStyle: "normal",
                  fontWeight: "normal",
                }}
              >
                Manage your NFT’s in the coolest dashboard at Create. Upload your art, collaborate with artists, manage your creations, set rules about the usage of your NFT, royalty management✓
              </Colortext>
              <Center style={{display:"flex"}}>
              <GradientButton style={{marginLeft:"0", marginTop: "3rem" }}>
                Explore
              </GradientButton>
              </Center>
              
            </TextWrapper>
          </Topdiv>

          
        </AboutWrapper>
      </Container>
    </>
  );
};

export default Console;
