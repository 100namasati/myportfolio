import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.e9708df2.png";
import TwitterLogo from "../../Images/twitterlogo.png";
import FacebookLogo from "../../Images/facebooklogo.png";
import Instagramlogo from "../../Images/instalogo.png";
import LinkedInLogo from "../../Images/linkedinlogo.png";
export class Footer extends Component {
  render() {
    return (
      <div className="footer-main-section">
        <div className="footer-main-container">
          <div className="footer-top-section">
            <ul>
              <li>
                <Link className="menu-item" to={"/"}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/"}>
                  Project
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/"}>
                  FAQ's
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/"}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/"}>
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="menu-item" to={"/"}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-bottom-section">
            <div className="footer-logo-section">
              <img src={Logo} alt="" />
            </div>
            <div className="footer-rights-section">
              <p> &#169;Carbonoffsetapp. All Right Reserved 2023 </p>
            </div>
            <div className="footer-social-media-section">
              <Link to={"/"}>
                <img className="footer-social-icon" src={TwitterLogo} alt="" />
              </Link>
              <Link to={"/"}>
                <img className="footer-social-icon" src={FacebookLogo} alt="" />
              </Link>
              <Link to={"/"}>
                <img
                  className="footer-social-icon"
                  src={Instagramlogo}
                  alt=""
                />
              </Link>
              <Link to={"/"}>
                <img className="footer-social-icon" src={LinkedInLogo} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
