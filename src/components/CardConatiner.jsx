import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
// import fb from "./style/images/facebook 24px.png";
// import twitter from "./style/images/twitter 24px.png";
// import ln from "./style/images/linkedin 24px.svg";

// import { CardMain, CardPlain } from "./style/Card";
import Abhishek from './style/images/Abhishek_Krishna.png'
import Noriko from './style/images/noriko.png'
import Girish from './style/images/Girish_Ahirwar.png'
import Yasish from './style/images/Yashish_Khurana.png'

import Akhil from './style/images/Akhil_Shrivastava.png'
import Kunal from './style/images/Kunal_Singh.png'
import Garima from './style/images/Garima_Singh.png'

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
          <FounderCard  image={Yasish} name={"Yashish Khurana"} designation={"Crypto Expert & Trader"} link={"https://www.linkedin.com/in/yashish-khurana-a9b36a1a5/"}/>
          
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
            width: "80%",
            marginTop: "3rem",
          }}
        >
          <TransparentCard image={Akhil} name={"Akhil Srivastava"} designation={"Advisor"} link={"https://www.linkedin.com/in/akhil-srivastava-24991916/detail/contact-info/"}/>
          <TransparentCard image={Kunal} name={"Kunal Singh"} designation={"Advisor"} link={"https://www.linkedin.com/in/kunal-singh-07829910/"}/>
          
          
          <TransparentCard image={Abhishek} name={"Deegendra"} designation={"Advisor"} link={"https://www.linkedin.com/in/invokerkrishna/"}/>
          <TransparentCard image={Garima} name={"Garima Singh"} designation={"Full Time Advisor"} link={"https://www.linkedin.com/in/garima-singh-03907229/"}/>
          {/* <TransparentCard /> */}
        </div>
      </div>
      
    </div>
  );
};

export default CardContainer;
