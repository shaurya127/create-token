import React from "react";
// import styled from "styled-components";
// import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
import fb from "./style/images/facebook 24px.png";
import twitter from "./style/images/twitter 24px.png";
import ln from "./style/images/image 1.png";
import Abishek from "./style/images/Abhishek.png";

import { CardPlain } from "./style/Card";

const TransparentCard = () => {
  return (
    <CardPlain>
      <div style={{ marginBottom: "1rem" }}>
        <img
          style={{ hieght: "10rem", width: "10rem", objectFit: "cover" }}
          src={Abishek}
          alt="sample"
        />
      </div>
      <span
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "24px",
          lineHeight: "36px",
        }}
      >
        Abhishek Krishna
      </span>
      <span
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "16px",
          lineHeight: "25px",
        }}
      >
        Designation
      </span>
      <div style={{ display: "flex",marginTop:"0.5rem" }}>
        {/* <img src={fb} alt="social" /> */}
        {/* <img src={twitter} alt="social" /> */}
        <img style={{height:"2rem",width:"2rem"}}src={ln} alt="social" />
      </div>
    </CardPlain>
  );
};

export default TransparentCard;
