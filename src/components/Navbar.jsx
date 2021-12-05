// import React, { useState } from "react";
// import { Drawer } from "antd";
//import { UnorderedListOutlined } from "@ant-design/icons";
// import { isBrowser } from "react-device-detect";
import "./style/Navbar.css";
// import ham from "./style/images/menu.png";
// import Drawerroutes from "./DrawerRoutes";
import Logo from "./style/images/logo.svg";
import styled from "styled-components";

import { Button } from "./style/Home";
const Navdiv = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;
const NavBar = (props) => {
  return (
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
            <a href="google.com">
              <li>Team and Advisors</li>
            </a>
            <a href="google.com">
              <li>NFT</li>
            </a>
            <a href="google.com">
              <li>Swap</li>
            </a>
            <a href="google.com">
              <li>Contact</li>
            </a>
            <a href="https://erikterwan.com/" target="_blank" rel="noreferrer" >
              <li>Login</li>
            </a>
            <Button style={{backgroundColor:"black",margin:"",padding:"0.5rem",width:"fit-content"}}>
              Connect Wallet
            </Button>
          </ul>
        </div>
        <div>
          <img src={Logo} alt="logo" />
        </div>
      </nav>
      {/* <div className="header-ham" style={{width:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
          <div><img className="menubutton" alt="ham" src={ham} style={{opacity:0.4}} onClick={() => setShowDrawer(true)}></img></div>
          
        </div>
        
      <Drawer
        placement="left"
        visible={showDrawer}
        onClose={() => setShowDrawer(false)}
        width={"80%"}
        // size={"large"}
        className="drawer"
        drawerStyle={{ backgroundColor: "#1a1a1a" }}
        title={<div className="drawer-title">MENU</div>}
        headerStyle={{ backgroundColor: "#1a1a1a", padding: 0, border: "none",marginBottom:"100px" }}
      >
        <Drawerroutes
          {...props}
          closeDrawer={() => setShowDrawer(false)}
        ></Drawerroutes>
      </Drawer> */}
    </Navdiv>
  );
};

export default NavBar;
