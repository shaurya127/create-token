import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
import fb from "./style/images/facebook 24px.png";
import twitter from "./style/images/twitter 24px.png";
import ln from "./style/images/image 1.png";
import Abishek from "./style/images/Abhishek.png";

import { CardMain } from "./style/Card";

const FounderCard = (props) => {
  return (
    <CardMain>
      <div style={{ marginBottom: "0.5rem" }}>
        <img style={{height:"6.5rem",width:"6.5rem",objectFit:"cover"}} src={props.image} alt="sample" />
      </div>
      <span
        style={{
          
          fontSize: "1rem",
          lineHeight: "36px",
        }}
      >
        {props.name}
      </span>
      <span
        style={{
          fontWeight:"normal",
          textAlign:"center",
          fontSize: ".8rem",
          lineHeight: "25px",
        }}
      >
        {props.designation}
      </span>
      <div style={{ display: "flex" ,marginTop:"0.5rem" }}>
        {/* <img src={fb} alt="social" /> */}
        {/* <img src={twitter} alt="social" /> */}
        <a href={props.link}>
        <img style={{height:"2rem",width:"2rem"}} src={ln} alt="social" />
      </a></div>
    </CardMain>
  );
};

export default FounderCard;
