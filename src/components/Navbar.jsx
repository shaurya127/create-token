import React, { useState } from "react";
import { Drawer } from "antd";
//import { UnorderedListOutlined } from "@ant-design/icons";
import { isBrowser } from "react-device-detect";
import "./style/Navbar.css";
import ham from "./style/images/menu.png";
import Drawerroutes from "./DrawerRoutes";
const NavBar = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);
//   const name = props.location.pathname.replaceAll("-", " ").replace("/", "");
  return (
    
      <div
        className="header-container"
      >
        <div className="header-ham" style={{width:"100vw",display:"flex",justifyContent:"space-between",alignItems:"center"}} >
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
        headerStyle={{ backgroundColor: "#1a1a1a", padding: 0, border: "none" }}
      >
        <Drawerroutes
          {...props}
          closeDrawer={() => setShowDrawer(false)}
        ></Drawerroutes>
      </Drawer>
    </div>
  );
};

export default NavBar;
