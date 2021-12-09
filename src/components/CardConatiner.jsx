import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
// import fb from "./style/images/facebook 24px.png";
// import twitter from "./style/images/twitter 24px.png";
// import ln from "./style/images/linkedin 24px.svg";

// import { CardMain, CardPlain } from "./style/Card";

import FounderCard from "./FounderCard";
import TransparentCard from "./TransparentCard";

import { Heading, H1 } from "./style/Home";

const CardContainer = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <Heading style={{ padding: "0" }}>
        <H1
          style={{ fontSize: "3.5rem", lineHeight: "3rem", marginBottom: "1rem",marginTop:"10rem" }}
        >
          MEET THE TEAM
        </H1>
      </Heading>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "100%",
          // marginTop:"4rem"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "80%",
            marginTop: "4rem",
          }}
        >
          <FounderCard />
          <FounderCard />
          <FounderCard />
          <FounderCard />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          width: "100%",
          // marginTop:"4rem"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            width: "90%",
            marginTop: "3rem",
          }}
        >
          <TransparentCard />
          <TransparentCard />
          <TransparentCard />
          <TransparentCard />
          <TransparentCard />
        </div>
      </div>
      
    </div>
  );
};

export default CardContainer;
