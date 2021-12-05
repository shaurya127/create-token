import React from "react";
import styled from "styled-components";
import Logo3d from "./style/images/AboutLogo.svg";
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
  width:70%;
  height:70%;
}
`


const About = () => {
  return (
    <>
      <Container>
        <H1 style={{ fontSize: "68px", lineHeight: "67px" }}>ABOUT CREATE</H1>
        <AboutWrapper
          style={{
            marginTop: "1rem",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <ImageWrapper>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={Logo3d}
              alt="3dimage"
            />
          </ImageWrapper>

          <TransparentDiv>
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
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
