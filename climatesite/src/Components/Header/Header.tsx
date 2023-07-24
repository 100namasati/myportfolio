import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import HeaderIcon from "../../Images/Logo.e9708df2.png";
import ResourceArrowDown from "../../Images/resourcearrow.png";
import BarsIcon from "../../Images/icons8-hamburger-24.png";
import CrossIcon from "../../Images/icons8-cross-30.png";
import HeaderController from "./HeaderController";
export class Header extends HeaderController {
  renderSideMenuBar = () => {
    return (
      <div>
        <div className="side-nav-main side-menu-active">
          <div>
            <ul className="side-menu-container">
              <li>
                <Link className="side-menu-item" to='/our-approach'>
                  Our Approach
                </Link>
              </li>
              <li>
                <Link className="side-menu-item" to='/climate-project'>
                  Climate Project
                </Link>
              </li>
              <li>
                <Link className="side-menu-item" to='/about-us'>
                  About Us
                </Link>
              </li>
              <li onClick={this.handleResource}>
                <div className="resource-side-menu-item-continer">
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <p className="resource-side-menu-item">Resources</p>
                    <img
                      className={
                        this.state.activeResource
                          ? "arrow-img-active"
                          : "arrow-img"
                      }
                      src={ResourceArrowDown}
                      alt=""
                    />
                  </div>

                  {this.state.activeResource ? (
                    <div className="resource-side-menu-item-container-active">
                      <Link to='/redeem' className="resource-side-item">
                        How to redeen Gifts
                      </Link>
                      <Link to='/eko-points' className="resource-side-item">
                        Eko Points
                      </Link>
                      <Link to='/faq' className="resource-side-item">
                        FAQ's
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li>
                <Link className="side-menu-item" to='/contact'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="header-main-contaienr">
          <div>
            <Link to={'/'}>
            <img className="logo" src={HeaderIcon} alt="" />

            </Link>
          </div>
          <div>
            <ul className="header-menu-container">
              <li>
                <Link className="menu-item" to={"/our-approach"}>
                  Our Approach
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/climate-project"}>
                  Climate Project
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/about-us"}>
                  About Us
                </Link>
              </li>
              <li>
                <div className="resource-menu-item">
                  <div style={{display:"flex", alignItems:"center"}} onMouseOver={this.handleResource}>
                  <p className="menu-item">Resources</p>
                  <img className="arrow-img" src={ResourceArrowDown} alt="" />
                  </div>
               


                  {
                    this.state.activeResource?(
                      <div className="resource-menu-item-container" onMouseLeave={this.handleResource}>
                      <Link to={"/redeem"} className="redeem" onClick={this.handleResource}>
                        How to redeem Gifts
                      </Link>
                      <Link to={"/eko-points"} className="ekopoints" onClick={this.handleResource}>
                        Eko Points
                      </Link>
                      <Link to={"/faq"} className="faq" onClick={this.handleResource}>
                        FAQ's
                      </Link>
                    </div>

                    ):""
                  }
                  
                 
                </div>
              </li>
              <li>
                <Link className="menu-item" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="bars-icon-container" onClick={this.handleSideNav}>
            <img src={this.state.activeSideNav ? CrossIcon : BarsIcon} alt="" />
          </div>
          {this.state.activeSideNav ? this.renderSideMenuBar() : ""}
        </div>
      </div>
    );
  }
}

export default Header;
