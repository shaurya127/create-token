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
margin-top:1rem;
display:flex;
justify-content:space-evenly;
flexWrap:wrap;

@media(max-width:1000px){
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`;

const ImageWrapper=styled.div`
width:50%;
height:50%;
object-fit:contain;

@media(max-width:1000px){
  width:20rem;
  height:15rem;
}
`


const About = () => {
  return (
    <>
      <Container style={{marginBottom:"1rem",paddingTop:"2rem"}}>
        <H1 style={{ fontSize: "68px", lineHeight: "67px" }}>ABOUT CREATE</H1>
        <AboutWrapper
          style={{
            marginTop: "2rem",
            display: "flex",
            alignItems: "center", 
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <ImageWrapper>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",background: "rgba(0, 0, 0, 1)",
            }}
              src={Logo3d}
              alt="3dimage"
            />
          </ImageWrapper>
          <div style={{display:"flex",flexDirection:"column",width:"50%",alignItems:"center",justifyContent:"center"}}>
          <TransparentDiv >
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
              A Multi Chain Solution with Defi Principles and a Community
              friendly approach with creators at its forefront, and at its core.
            </span>
            <GradientButton>Earn Create</GradientButton>
          </TransparentDiv>
          <TransparentDiv >
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
              A Multi Chain Solution with Defi Principles and a Community
              friendly approach with creators at its forefront, and at its core.
            </span>
            <GradientButton>Earn Create</GradientButton>
          </TransparentDiv>

          </div>
          
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
