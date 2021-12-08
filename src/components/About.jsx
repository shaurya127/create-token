import React from "react";
import styled from "styled-components";
import Logo3d from "./style/images/Group 1511.png";
import { TransparentDiv } from "./style/About";


import {
  Container,
  H1,
  GradientButton,
} from "./style/Home";

const AboutWrapper = styled.div`
margin-top:5rem;
display:flex;
justify-content:space-evenly;
flexWrap:wrap;
flex-direction:row;
@media(max-width:1000px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`;

const Colortext1 = styled.div`

  
font-family: "Century Gothic";
  background: linear-gradient(83.93deg, #ffffff 5.84%, #f5b4c3 101.22%);
  font-style: normal;
  font-weight: normal;
  font-weight: 600;
font-size: 1.4rem;

  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
  @media(max-width:1000px){
    text-align:center;
  }
`;

const ImageWrapper=styled.div`
width:45%;
height:50%;
object-fit:contain;
margin-top:5rem;
@media(max-width:1000px){
  width:80%;
  height:15rem;
}
`


const About = () => {
  return (
    <>
      <Container style={{marginBottom:"1rem",paddingTop:"2rem"}}>
        {/* <H1 style={{ fontSize: "68px", lineHeight: "67px" }}>ABOUT CREATE</H1> */}
        <AboutWrapper
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center", 
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TransparentDiv style={{}}>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Century Gothic",
                marginBottom: "1rem",
              }}
            ><Colortext1>
              <h3>CREATE TOKEN</h3><span style={{fontSize:"1.2rem"}}>The Currency of your Creativity. Convert your creativity into currency For the first time ever.</span></Colortext1>
            </span>
            <GradientButton style={{marginLeft:"0"}}>Explore</GradientButton>
          </TransparentDiv>
          <ImageWrapper >
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",background: "rgba(0, 0, 0, 1)",
            }}
              src={Logo3d}
              alt="3dimage"
            />
          </ImageWrapper>
          
          
          <TransparentDiv style={{}}>
            <span
              style={{
                fontStyle: "normal",
                fontWeight: "bold",
                // fontSize: "1rem",
                lineHeight: "1.5rem",
                fontFamily: "Century Gothic",
                marginBottom: "1rem",
              }}
            ><Colortext1>
            <span  style={{fontSize:"1.2rem"}}>
              A Multi Chain Solution with Defi Principles and a Community friendly approach with creators at its forefront, and at its core.</span></Colortext1>
            </span>
            <GradientButton style={{marginLeft:"0"}}>Earn Create</GradientButton>
          </TransparentDiv>

          
          
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;