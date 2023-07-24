import React, { Component } from "react";
import "./HomeSection1.css";
import IndivisualIcon from "../../../Images/indv-icon.f3c55d91.svg";
import BussinessIcon from "../../../Images/business-icon.93f17889.svg";
import Hero1Img from "../../../Images/carbon_bannerImg.78c8e835.png";
import Partner1 from "../../../Images/partner-1.d465de22.png";
import Partner2 from "../../../Images/Partner-2.966b96c6.png";
import Partner3 from "../../../Images/Partner-3.1a6ebecd.png";
import { Link } from "react-router-dom";
export class HomeSection1 extends Component {
  render() {
    return (
      <div>
        <div className="home1-main-container">
          <div className="home1-left-container">
            <div className="left-heading-container">
              <h1 className="heading-lite">SUSTAINABLE</h1>
              <h1 className="heading-dark">SOLUTION</h1>
              <h1 className="heading-lite">SIMPLIFIED</h1>
            </div>
            <div className="left-content-container">
              <p className="content1">
                Take climate action in your hands.Know your carbon
                footprints,offset it by investing and verified climate projects
                and share your story to amplify the impact.Plant more trees and
                make difference.
              </p>
              <p className="content2">
                Ekobon is a all-in-one digital tool to make climate action easy
                and effective for everyone.
              </p>
            </div>
            <div className="left-button-container">
              <Link to="/login" className="btn btn-indivisual">
                <img src={IndivisualIcon} alt="" />
                For Indivisual
              </Link>
              <Link to="/login" className="btn btn-bussiness">
                <img src={BussinessIcon} alt="" />
                For Bussiness
              </Link>
            </div>
          </div>
          <div className="home1-right-container">
            <img src={Hero1Img} alt="" />
          </div>
          <div className="our-partners-main-container">
            <h1>Our Partners</h1>
            <div className="partners-container">
              <div className="partner">
                <img src={Partner1} alt="" />
              </div>
              <div className="partner">
                <img src={Partner2} alt="" />
              </div>
              <div className="partner">
                <img src={Partner3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection1;
