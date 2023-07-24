import React, { Component } from "react";
import "./HomeSection3.css";
import { StepsData } from "./StepsData";
export class HomeSection3 extends Component {
  renderNextSteps = () => {
    return (
      <div className="home3-bottom-section">
        {StepsData.map((item: any, index: number) => {
          return (
            <div key={index} className="steps-card">
              <div className="steps-img-container">
                <img src={item.img} alt="" />
              </div>
              <div className="steps-content-container">
                <p className="text">{item.content1}</p>
                <br />
                <p className="text1">{item.content2}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="home3-main-container">
          <div className="home3-top-section">
            <div className="main-heading-section">
              <h1 className="heading1">WHY CLIMATE TION SHOULD BE</h1>
              <h1>YOUR NEXT STEP</h1>
            </div>
            <div className="subHeading-section">
              <p>
                Climate change has already caused global temperatue to rise 1°C
                above pre-industrial level.
              </p>
              <br />
              <p>
                Unless emissions are rapidly reduced, temperatures could rise
                1.5°C by 2040, 2°C by 2065
              </p>
              <br />
              <p>
                and 4°C by 2100
                <span className="source-ipc">(Source - IPCC report)</span>
              </p>
            </div>
          </div>
          {this.renderNextSteps()}
        </div>
      </div>
    );
  }
}

export default HomeSection3;
