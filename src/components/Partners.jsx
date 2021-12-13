import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";

import styled from "styled-components";
import { Container, Heading, H1 } from "./style/Home";

import Fintech from './style/images/fintech.png'
import OneDigital from './style/images/onnedigital.png'
import partner3 from './style/images/partner3.png'
import Sovereign from './style/images/sovereign.png'
export const PartnerCard = styled.div`
  width: 15rem;
  height: 15rem;
  border: 2px solid white;
  border-opacity: 0.5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(224, 249, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0) 100%
  );
`;

const PartnerWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;
  flexwrap: wrap;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FounderCard = (props) => {
  return (
    <Container style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <Heading style={{ padding: "0" }}>
        <H1
          style={{
            fontSize: "3.5rem",
            lineHeight: "3rem",
            marginBottom: "1rem",
            marginTop: "10rem",
          }}
        >
          PARTNERS AND INVESTORS
        </H1>
      </Heading>
      <PartnerWrapper
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "85%",
        }}
      >
        <PartnerCard style={{objectFit:"cover"}}><img style={{objectFit:"cover",height:"2.9rem" }}src={Fintech} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"4rem" }}src={OneDigital} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"8rem" }}src={partner3} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"3.5rem" }}src={Sovereign} alt="partner"/></PartnerCard>
        
      </PartnerWrapper>
    </Container>
  );
};

export default FounderCard;
