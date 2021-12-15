import React from "react";
import styled from "styled-components";
import About from "./About";
import CardContainer from "./TeamPage";
import Footer from "./Footer2";
import Logo from "./style/images/logo.svg";
import LogoName from "./style/images/Logoname.png";
import "../App.css";
import Tokenomics from "./style/images/tokenomics image.png";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whitepaper from "./CREATE PROTOCOL WHITE PAPER.pdf";
// import { Link, animateScroll as scroll } from "react-scroll";
import LandingPage from "./LandingPage";

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
// import { Route } from "react-router-dom";

const Home = () => {
  // const ScrollLink = Scroll.ScrollLink;

  return (
    <>
      
        <Container>
          <Navbar />
        </Container>

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/team" element={<CardContainer />} />
        </Routes>
      
    </>
  );
};

export default Home;
