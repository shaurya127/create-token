import React from "react";
import styled from "styled-components";
import About from "./About";
import CardContainer from "./TeamPage";
import Footer from "./Footer2";
import Logo from "./style/images/logo.svg";
import LogoName from "./style/images/Logoname.png";
import "../App.css";
import Tokenomics from "./style/images/tokenomics image.png";
import {Link,BrowserRouter as Router} from 'react-router-dom'
import Whitepaper from "./CREATE PROTOCOL WHITE PAPER.pdf";
// import { Link, animateScroll as scroll } from "react-scroll";

import {
  Container,
  Logos,
  NavbarM,
  Options,
  Item,
  Heading,
  H1,
  GradientButton,
  Gradient,
  Button,
  GradientBorder,
  GradientSpan,
} from "./style/Home";
import Navbar from "./Navbar";
import Finance from "./Finance";
import CDapp from "./CDapp";
import Console from "./Console";
import Partners from "./Partners";

const LandingPage=()=>{
return(
    <>
    <Container>
         <Heading style={{ marginTop: "5rem" }}>
            <H1 style={{ fontSize: "5.5rem", lineHeight: "72px" }}>
              CREATE <br />{" "}
              <span style={{ fontSize: "4.1rem", lineHeight: "72px" }}>
                PROTOCOL
              </span>
            </H1>
            <H1
              style={{ fontSize: "22px", lineHeight: "22px" }}
              className="font-face-gm"
            >
              CREATIVITY.DECENTRALISED
            </H1>
            <div
              style={{
                display: "flex",
                marginTop: "1.5rem",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <GradientButton>Buy SCRB token</GradientButton> */}
              <GradientButton>Buy $CR8 token</GradientButton>
              <a
                href="https://marketplace-ui-v2-3zmugzwln-muzix-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"

                style={{textDecoration:"none"}}
              >
                <GradientButton>Explore Marketplace </GradientButton>
              </a>
            </div>
            <h3
              style={{
                opacity: "0.5",
                borderBottom: "1px solid white",
                fontSize: "1rem",
              }}
            >
              Subscribe to our newsletter
            </h3>
          </Heading>
    </Container>
    <About />
    <Finance />
    <Console />
    <CDapp />
    <Partners />
    {/* <CardContainer id={"teampage"} /> */}
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={Tokenomics}
          alt="tokendetails"
        />
      </div>
    </Container>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <Footer />
    </>
)
}


export default LandingPage;