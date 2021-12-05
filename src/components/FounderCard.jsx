import React from "react";
import styled from "styled-components";
import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
import fb from "./style/images/facebook 24px.png";
import twitter from "./style/images/twitter 24px.png";
import ln from "./style/images/linkedin 24px.svg";


import { CardMain,CardPlain } from "./style/Card";


const FounderCard=()=>{

    return(
        
        <CardMain>
            <div style={{marginBottom:"1rem"}}>
          <img src={SampleImage} alt="sample" />
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
        <div style={{ display: "flex" }}>
          <img src={fb} alt="social" />
          <img src={twitter} alt="social" />
          <img src={ln} alt="social" />
        </div>
        </CardMain>
        
        
    )
}


export default FounderCard;