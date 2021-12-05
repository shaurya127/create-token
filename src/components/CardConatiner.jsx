import React from "react";
import styled from "styled-components";
import SampleImage from "./style/images/Abhishek_Krishna 1.svg";
import fb from "./style/images/facebook 24px.png";
import twitter from "./style/images/twitter 24px.png";
import ln from "./style/images/linkedin 24px.svg";

import { CardMain, CardPlain } from "./style/Card";

import FounderCard from "./FounderCard";
import TransparentCard from "./TransparentCard";

const CardContainer = () => {
  return (
    <>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap:"wrap"
      }}
    >
        <FounderCard/> 
        <FounderCard/> 
        <FounderCard/> 
        <FounderCard/> 

    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap:"wrap"
      }}
    >
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 

    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap:"wrap"
      }}
    >
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 
        <TransparentCard/> 

    </div>
    </>
  );
};

export default CardContainer;
