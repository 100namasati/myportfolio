import React, { Component } from "react";
import "./DashboardHeader.css";
import logo from "../../../Images/Logo.e9708df2.png";
import userLogo from "../../../Images/Dashboard/userLogo.png";
import { Link, Route, Routes } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import dashIcon from "../../../Images/Dashboard/dashboardIcon.png";
import offsetIcon from "../../../Images/Dashboard/offestIcon.png";
import treeIcon from "../../../Images/Dashboard/treeIcon.png";
import giftIcon from "../../../Images/Dashboard/giftIcon.png";
import projectIcon from "../../../Images/Dashboard/projectIcon.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import DashboardHeaderController from "./DashboardHeaderController";
import { withRouter } from "../../../HOC";
import Offset, { DashboardOffset } from "../DashboardOffset/DashboardOffset";
import DashboardScreen from "../DashboardHome/DashboardScreen";
import DashboardProject from "../DashboardProject/DashboardProject";
import DashboardPlantTree from "../DashboardPlantTree/DashboardPlantTree";
import DashboardGift from "../DashboardGift/DashboardGift";
export class DashboardHeader extends DashboardHeaderController {
  displaySider = () => {
    this.setState({ showSider: !this.state.showSider });
  };
  displayFeature = () => {
    this.setState({ showFeature: !this.state.showFeature }, () => {});
  };

  renderDashboardNavbar = () => {
    return (
      <div className="dashNavbar">
        <div className={this.state.showSider ? "dashIcon-active" : "dashIcon"}>
          <img src={logo} alt="logo" />
        </div>
        <div
          className="dashMenu"
          style={{ width: this.state.showSider ? "85%" : "100%" }}
        >
          <div className="dashMenuContent">
            <Link to={"/faq"}>FAQ</Link>
            <div className="dashMenuVertical"></div>
            <div className="cardHeader">
              <span>
                <BsCart3 style={{ fontSize: "25px" }} />
              </span>
              <div className="count">0</div>
            </div>
            <div className="userFeatures">
              <img src={userLogo} alt="userLogo" />
              <span>
                <IoIosArrowDown
                  onClick={this.displayFeature}
                  onMouseOver={this.displayFeature}
                />
              </span>
            </div>
            {this.state.showFeature ? (
              <div className="featureList" onMouseLeave={this.displayFeature}>
                <ul>
                  <li>
                    <Link to={"/"}>Profile</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Order History</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Climate Certificate</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Take a tour</Link>
                  </li>
                  <li>
                    <Link to={"/"} onClick={this.handleLogout}>
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  };
  //   renderDashboardSider = () => {
  //     return (
  //       <div className="dashSiderContainer">
  //         <div
  //           className={this.state.showSider ? "dashSider-active" : "dashSider"}
  //         >
  //           <ul>
  //             <li onClick={()=>this.handleComponent(<DashboardScreen/>)}>
  //               <span className="dashMenuIcons">
  //                 <img src={dashIcon} alt="dashIcon" />
  //               </span>
  //               <Link to={"/dashboardScreen"}>Dashboard</Link>
  //             </li>
  //             <li onClick={()=>this.handleComponent(<Offset/>)}>
  //               <span className="dashMenuIcons">
  //                 <img src={offsetIcon} alt="dashIcon" />
  //               </span>
  //               <Link to={'/offset'} >Offset</Link>
  //             </li>
  //             <li>
  //               <span className="dashMenuIcons">
  //                 <img src={treeIcon} alt="dashIcon" />
  //               </span>
  //               <Link to={"/"}>Plan a tree</Link>
  //             </li>
  //             <li>
  //               <span className="dashMenuIcons">
  //                 <img src={giftIcon} alt="dashIcon" />
  //               </span>
  //               <Link to={"/"}>Gift a card</Link>
  //             </li>
  //             <li>
  //               <span className="dashMenuIcons">
  //                 <img src={projectIcon} alt="dashIcon" />
  //               </span>
  //               <Link to={"/"}>Projects</Link>
  //             </li>
  //           </ul>
  //         </div>
  //
  //       </div>
  //     );
  //   };
  renderDashboardSider = () => {
    return (
      <div className="sider-main-container">
        <div
          className={
            this.state.showSider ? "responsiveSider" : "fullScreenSider"
          }
        >
          <ul className="Sider-menu">
            <li>
              <Link className="Sider-menu-item" to={"/dashboard"}>
                <img src={dashIcon} alt="" />
                <h3>Dashboard</h3>
              </Link>
            </li>
            <li>
              <Link className="Sider-menu-item" to={"/offset"}>
                <img src={offsetIcon} alt="" />
                <h3>Offset</h3>
              </Link>
            </li>
            <li>
              <Link className="Sider-menu-item" to={"/plant-a-tree"}>
                <img src={treeIcon} alt="" />
                <h3>Plant a tree</h3>
              </Link>
            </li>
            <li>
              <Link className="Sider-menu-item" to={"/gift-a-card"}>
                <img src={giftIcon} alt="" />
                <h3>Gift a Card</h3>
              </Link>
            </li>
            <li>
              <Link className="Sider-menu-item" to={"/projects"}>
                <img src={projectIcon} alt="" />
                <h3>Projects</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={this.state.showSider ? "siderToogle" : "siderToogle-res"}
          onClick={this.displaySider}
        >
          {this.state.showSider ? (
            <RxCross2 style={{ color: "black" }} />
          ) : (
            <FaBars style={{ color: "black" }} />
          )}
        </div>
      </div>
    );
  };
  renderDashboardContainer = () => {
    return (
      <div className="dashboardScreenContainer">
        {/* {this.state.component} */}
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/offset" element={<DashboardOffset />} />
          <Route path="/plant-a-tree" element={<DashboardPlantTree />} />
          <Route path="/gift-a-card" element={<DashboardGift />} />
          <Route path="/projects" element={<DashboardProject />} />
        </Routes>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderDashboardNavbar()}
        <div className="mainDash">
          {this.renderDashboardSider()}
          {this.renderDashboardContainer()}
        </div>
      </div>
    );
  }
}

export default withRouter(DashboardHeader);
