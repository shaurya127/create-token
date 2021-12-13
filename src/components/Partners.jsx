import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";

import styled from "styled-components";
import { Container, Heading, H1 } from "./style/Home";

import Fintech from './style/images/fintech.png'
import OneDigital from './style/images/onnedigital.png'
import partner3 from './style/images/partner3.png'
import Sovereign from './style/images/sovereign.png'
import ICCA from './style/images/icca.png'
export const PartnerCard = styled.div`
  width: 12rem;
  height: 12rem;
  border: 2px solid white;
  border-opacity: 0.5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 1rem 0;
  background: radial-gradient(91.33% 152.7% at 0% 15.16%, rgba(255, 155, 155, 0.3) 0%, rgba(89, 190, 253, 0.3) 68.99%, rgba(16, 98, 193, 0.3) 100%);

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
          width: "90%",
        }}
      >
        <PartnerCard style={{objectFit:"cover"}}><img style={{objectFit:"cover",height:"2rem" }}src={Fintech} alt="partner"/></PartnerCard>
        <PartnerCard style={{objectFit:"cover"}}><img style={{objectFit:"cover",height:"5rem" }}src={ICCA} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"3rem" }}src={OneDigital} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"7rem" }}src={partner3} alt="partner"/></PartnerCard>
        <PartnerCard><img style={{objectFit:"cover",height:"3rem" }}src={Sovereign} alt="partner"/></PartnerCard>
        
      </PartnerWrapper>
    </Container>
  );
};

export default FounderCard;
