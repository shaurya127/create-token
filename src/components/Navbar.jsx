// import React, { useState } from "react";
// import { Drawer } from "antd";
//import { UnorderedListOutlined } from "@ant-design/icons";
// import { isBrowser } from "react-device-detect";
import "./style/Navbar.css";
import Logo from "./style/images/logo.svg";
import LogoName from "./style/images/Logoname.png";
import "../App.css";
import Tokenomics from "./style/images/tokenomics image.png";
import {Link,BrowserRouter as Router} from 'react-router-dom'
import Whitepaper from "./CREATE PROTOCOL WHITE PAPER.pdf";
// import ham from "./style/images/menu.png";
// import Drawerroutes from "./DrawerRoutes";
// import Logo from "./style/images/logo.svg";
import styled from "styled-components";
import {
  Container,
  Logos,
  NavbarM,
  Options,
  Item,
  Heading,
  H1,
  GradientButton,
  Gradient,
  Button,
  GradientBorder,
  GradientSpan,
} from "./style/Home";

// import { Button } from "./style/Home";
const Navdiv = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
`;
const NavBar = (props) => {
  return (
  <>
    <Navdiv>
      <nav
        role="navigation"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div id="menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <button>
            <Link to='/team'>
              <li>Team and Advisors</li>
            </Link>
            </button>
            
            <a href='https://marketplace-ui-v2-3zmugzwln-muzix-frontend.vercel.app/' target='_blank' rel="noreferrer">
              <li>merkado studio</li>
              </a>
            {/* <a href="google.com">
              <li>Swap</li>
            </a> */}
            <a href="google.com">
              <li>Contact</li>
            </a>
            {/* <a href="https://erikterwan.com/" target="_blank" rel="noreferrer" >
              <li>Login</li>
            </a>
            <Button style={{backgroundColor:"black",margin:"",padding:"0.5rem",width:"fit-content"}}>
              Connect Wallet
            </Button> */}
          </ul>
        </div>
        
        <div>
          <Link to='/'>
          <img src={Logo} alt="logo" />
          </Link>
        </div>
      </nav>
      
    </Navdiv>
    <NavbarM>
            <Logos>
              <Link to='/'>
              <img style={{ marginRight: "1rem" }} src={Logo} alt="company" />
              <img src={LogoName} alt="company" />
              </Link>
            </Logos>
            <Options>
              <a
                href="https://marketplace-ui-v2-3zmugzwln-muzix-frontend.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    background: "none",
                    fontFamily: "Rubik",
                  }}
                >
                  <Item>mercado.studio</Item>
                </button>
              </a>
              <Link to='/team' style={{textDecoration:"none"}}>
                <button
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    background: "none",
                    fontFamily: "Rubik",
                    textDecoration:"none"
                  }}
                >
                  
                  <Item>Team and Advisors</Item>
                 
                </button>
                </Link>
              <a
                href="mailto:grish@createprotocol.org"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    background: "none",
                    fontFamily: "Rubik",
                  }}
                >
                  <Item>Contact</Item>
                </button>
              </a>

              <a style={{ textDecoration: "none" }} href={Whitepaper} download>
                <GradientButton style={{ width: "fit-content" }}>
                  Download Whitepaper
                </GradientButton>
              </a>

              
            </Options>
          </NavbarM>
    </>
  );
};

export default NavBar;
