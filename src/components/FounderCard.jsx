import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
import fb from "./style/images/facebook 24px.png";
import twitter from "./style/images/twitter 24px.png";
import ln from "./style/images/image 1.png";
import Abishek from "./style/images/Abhishek.png";

import { CardMain } from "./style/Card";

const FounderCard = () => {
  return (
    <CardMain>
      <div style={{ marginBottom: "0.5rem" }}>
        <img style={{height:"6.5rem",width:"6.5rem",objectFit:"cover"}} src={Abishek} alt="sample" />
      </div>
      <span
        style={{
          
          fontSize: "1.2rem",
          lineHeight: "36px",
        }}
      >
        Abhishek Krishna
      </span>
      <span
        style={{
          fontWeight:"normal",
          
          fontSize: "0.9rem",
          lineHeight: "25px",
        }}
      >
        Designation
      </span>
      <div style={{ display: "flex" ,marginTop:"0.5rem" }}>
        {/* <img src={fb} alt="social" /> */}
        {/* <img src={twitter} alt="social" /> */}
        
        <img style={{height:"2rem",width:"2rem"}} src={ln} alt="social" />
      </div>
    </CardMain>
  );
};

export default FounderCard;
