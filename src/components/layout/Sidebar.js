import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/images/logo4.png";
import Sidebarnav from "./Sidebarnav";
import '../../assets/css/header.css'
function Sidebar() {
    return (
        <>
            <div className="sider-bar-wwp">
                <div className="d-flex" id="wrapper">
                     <div className="logo-box">
                     <NavLink to="/dashboard/home" >
                        <div className="logo-box-header">
                        <img src={logo} className="logo-header" />
                        </div>
                    </NavLink>
                     </div>
                    <Sidebarnav />
                </div>
            </div>
        </>
    );
}
export default Sidebar;
