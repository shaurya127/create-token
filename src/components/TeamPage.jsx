import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
// import fb from "./style/images/facebook 24px.png";
// import twitter from "./style/images/twitter 24px.png";
// import ln from "./style/images/linkedin 24px.svg";

// import { CardMain, CardPlain } from "./style/Card";
import Abhishek from "./style/images/Abhishek_Krishna.png";
import Noriko from "./style/images/noriko.png";
import Girish from "./style/images/Girish_Ahirwar.png";
import Yasish from "./style/images/Yashish_Khurana.png";

import Akhil from "./style/images/Akhil_Shrivastava.png";
import Kunal from "./style/images/Kunal_Singh1.png";
import Garima from "./style/images/Garima_Singh.png";
import Dheeraj from "./style/images/Dheeraj_Singh_Rathore.png";
import Peter from "./style/images/Peter Gressman Sr. Advisor (Art Critic) (1).png";

import Dheeraj1 from "./style/images/Dheeraj.png";
import Arkesh from "./style/images/Arkesh.png";
import Naveeta from "./style/images/naveeta_lal.png";
import Apeksha from "./style/images/Apeksha_jain.png";
import Raj from "./style/images/Raj.png";
import Shashank from "./style/images/Shashank.png";

import FounderCard from "./FounderCard";
import TransparentCard from "./TransparentCard";

import { Heading, H1 } from "./style/Home";

const TeamPage = () => {
  return (
    <div>
      <Heading style={{ padding: "0" }}>
        <H1
          style={{
            fontSize: "3.5rem",
            lineHeight: "3rem",
            marginBottom: "1rem",
            marginTop: ".1rem",
          }}
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
            width: "65%",
            marginTop: "4rem",
          }}
        >
          <FounderCard
            image={Abhishek}
            name={"Abhishek Krishna"}
            designation={"Founder"}
            link={"https://www.linkedin.com/in/invokerkrishna/"}
          />
          <FounderCard
            image={Girish}
            name={"Girish Ahirwar"}
            designation={"Co Founder"}
            link={"https://www.linkedin.com/in/girish-ahirwar-61743565//"}
          />
          <FounderCard
            image={Noriko}
            name={"Noriko Shakti"}
            designation={"Co Founder"}
            link={"https://norikoshakti.com/bio/"}
          />
          <FounderCard
            image={Yasish}
            name={"Yashish Khurana"}
            designation={"Crypto Expert & Trader"}
            link={"https://www.linkedin.com/in/yashish-khurana-a9b36a1a5/"}
          />
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
          <TransparentCard image={Peter} name={"Peter Gressman"} designation={"Art Critic"} link={"https://www.facebook.com/peter.gressman"}/>
          <TransparentCard image={Akhil} name={"Akhil Srivastava"} designation={"Advisor (Blockchain)"} link={"https://www.linkedin.com/in/akhil-srivastava-24991916/detail/contact-info/"}/>
          <TransparentCard image={Kunal} name={"Kunal Singh"} designation={"Advisor (Invest"} link={"https://www.linkedin.com/in/kunal-singh-07829910/"}/>
          
          
          <TransparentCard image={Dheeraj} name={"Dheeraj Singh Rathore"} designation={"Advisor (Strategy)"} link={"https://www.linkedin.com/in/dsriitr/"}/>
          <TransparentCard image={Garima} name={"Garima Singh"} designation={"Advisor ( DeFi )"} link={"https://www.linkedin.com/in/garima-singh-03907229/"}/>
          
          {/* <TransparentCard /> */}
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
            width: "95%",
            marginTop: "3rem",
          }}
        >
          <TransparentCard image={Dheeraj1}  name={"Dheeraj Kollipara"} designation={"Community Manager & NFT Artist"} link={"https://lzylad.notion.site/lzylad/Who-is-Lzy-Lad-3dfec0180b6d4ad991d9dc6f19d9608a"}/>
          <TransparentCard image={Arkesh} name={"Arkesh Ayyagari"} designation={"GEneral Council"} link={"https://www.linkedin.com/in/arkesh-ayyagari-42a936189/"}/>
          <TransparentCard image={Naveeta} name={"Naveeta Lal"} designation={"Product Head"} link={"https://in.linkedin.com/in/naveeta-lal-b086ba57"}/>
          
          
          <TransparentCard image={Apeksha} name={"Apeksha Jain"} designation={"UI/UX Designer"} link={"https://www.linkedin.com/in/ar-apeksha-jain/"}/>
          <TransparentCard image={Raj} name={"Raj Masih"} designation={"UI/UX Designer"} link={"https://www.linkedin.com/in/raj-masih-3a24941b1/"}/>
          <TransparentCard image={Shashank} name={"Shashank Dwivedi"} designation={"UI/UX Designer"} link={"https://www.linkedin.com/in/shashank-dwivedi-044361129/"}/>
          
          
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
