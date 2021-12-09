import React from "react";
import styled from "styled-components";
// import Logo3d from "./style/images/Group 1511.png";

import { Container, H1, GradientButton } from "./style/Home";
import Rupee from "./style/images/rupee-dynamic-gradient.png";
import Bag from "./style/images/money-bag-dynamic-gradient.png";
import Purse from "./style/images/wallet-dynamic-gradient.png";

const AboutWrapper = styled.div`
  margin-top: 5rem;
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
    width: 0rem;
    height: 0;
    flex-direction: column;

    object-fit: cover;
  }
`;

const Desktop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 1000px) {
    display: none;
    visibility: hidden;
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
  padding: 20px 20px;
  width: 28%;
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
  border: 2px solid white;
  margin: 5px;
  @media (max-width: 1000px) {
    width: 80%;
    font: 0.5rem;
  }
`;

const TextWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
    justify-content: center;
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

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const Colortext1 = styled.div`
  background: linear-gradient(83.93deg, #ffffff 5.84%, #f5b4c3 101.22%);
  font-style: normal;
  font-weight: normal;
  font-family: "Century Gothic";
  font-weight: 600;
  font-size: 1.3rem;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Topdiv = styled.div`
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Center = styled.div`
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

const Finance = () => {
  return (
    <>
      <Container
        style={{ marginBottom: "1rem", paddingTop: "2rem", marginTop: "4rem" }}
      >
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
            <TextWrapper>
              <Colortext
                style={{
                  fontSize: " 3rem",
                  lineHeight: "4rem",
                  width: "100% ",
                  fontFamily: "EarthOrbiter",
                }}
              >
                FINANCE
              </Colortext>
              <Colortext
                style={{
                  width: "100%",
                  marginTop: "2rem",
                  fontSize: "1.3rem",
                  lineHeight: "2rem",
                  fontFamily: "Century Gothic",
                  fontStyle: "normal",
                  fontWeight: "normal",
                }}
              >
                Finance your dreams with our financing solutions. We provide a
                variety of ways for you to explore and fund your goals. With
                Create Potocol you have nothing to worry about, we will hand
                hold you towards your dream with our decentralised financial
                system
              </Colortext>
              <Center style={{ display: "flex" }}>
                <GradientButton style={{ marginLeft: "0", marginTop: "3rem" }}>
                  Explore
                </GradientButton>
              </Center>
            </TextWrapper>
            <ImageWrapper style={{ alignItems: "start" }}>
              <Desktop style={{}}>
                <img
                  style={{ width: "220px", height: "220px" }}
                  src={Bag}
                  alt="coin"
                />
                <img
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  src={Rupee}
                  alt="Moneypurse"
                />
              </Desktop>
              <Desktop
                style={{
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "220px",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  src={Purse}
                  alt="coingbag"
                />
              </Desktop>
            </ImageWrapper>
          </Topdiv>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
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
                  <Colortext1>
                    <h3
                      style={{
                        
                      }}
                    >
                      CREATOR DEFI
                    </h3>
                    <span
                      style={{
                        fontSize:"1.1rem"
                      }}
                    >
                      A Multi Chain Solution with Defi Principles and a
                      Community friendly approach with creators at its
                      forefront, and at its core.
                    </span>
                  </Colortext1>
                </span>
              </Innerdiv>
            </TransparentDiv>
            <TransparentDiv>
              <Innerdiv>
                <span
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",

                    lineHeight: "1.5rem",
                    fontFamily: "Century Gothic",
                    marginBottom: "1rem",
                  }}
                >
                  <Colortext1>
                    <h3>CREATOR FAN TOKENS</h3><span style={{fontSize:"1.1rem"}}>A Multi Chain Solution with Defi
                    Principles and a Community friendly approach with creators
                    at its forefront, and at its core.</span>
                  </Colortext1>
                </span>
              </Innerdiv>
            </TransparentDiv>
            <TransparentDiv >
              <Innerdiv>
                <span
                  style={{
                    fontStyle: "normal",
                    fontWeight: "bold",

                    lineHeight: "1.5rem",
                    fontFamily: "Century Gothic",
                    marginBottom:"1rem"
                    
                    
                  }}
                >
                  <Colortext1>
                    <h3>CREATE TO EARN ECONOMY</h3>
                    <span style={{fontSize:"1.1rem"}}>A Multi Chain Solution with
                    Defi Principles and a Community friendly approach with
                    creators at its forefront, and at its core.</span>
                  </Colortext1>
                </span>
              </Innerdiv>
            </TransparentDiv>
          </div>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default Finance;
