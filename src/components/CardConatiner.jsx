import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
// import fb from "./style/images/facebook 24px.png";
// import twitter from "./style/images/twitter 24px.png";
// import ln from "./style/images/linkedin 24px.svg";

// import { CardMain, CardPlain } from "./style/Card";
import Abhishek from './style/images/Abhishek.png'
import Noriko from './style/images/noriko.png'
import Girish from './style/images/girish.png'

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
          <FounderCard image={Abhishek} name={"Abhishek Krishna"} designation={"Founder"} link={"https://www.linkedin.com/in/invokerkrishna/"}/>
          <FounderCard image={Girish} name={"Girish Ahirwar"} designation={"Co Founder"} link={"https://www.linkedin.com/in/girish-ahirwar-61743565//"}/>
          <FounderCard image={Noriko} name={"Noriko Shakti"} designation={"Co Founder"} link={"https://norikoshakti.com/bio/"}/>
          <FounderCard image={Abhishek} name={"Yashish Khurana"} designation={"Founder"} link={"https://www.linkedin.com/in/invokerkrishna/"}/>
          
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
          <TransparentCard image={Abhishek} name={"Kunal Singh"} designation={"Advisor"} link={"https://www.linkedin.com/in/kunal-singh-07829910/"}/>
          <TransparentCard image={Abhishek} name={"Arkesh Ayyagari"} designation={"General Council"} link={"https://www.linkedin.com/in/arkesh-ayyagari-42a936189/"}/>
          <TransparentCard image={Abhishek} name={"Garima Singh"} designation={"Full Time Advisor"} link={"https://www.linkedin.com/in/garima-singh-03907229/"}/>
          <TransparentCard image={Abhishek} name={"Deegendra"} designation={"Founder"} link={"https://www.linkedin.com/in/invokerkrishna/"}/>
          {/* <TransparentCard /> */}
        </div>
      </div>
      
    </div>
  );
};

export default CardContainer;
