import React, { Component } from "react";
import "./HomeSection7.css";
export class HomeSection7 extends Component {
  render() {
    return (
      <div>
        <div className="home7-main-container">
          <div className="home7-heading-section">
            <h1 className="text-lite">Your Partner For </h1>
            <h1 className="text-dark">Climate Action</h1>
          </div>
          <div className="home7-content-section">
            <div className="home7-content-container">
              <div className="home7-content-left-container">
                <div className="home7-left-top-section">
                  <h2>
                    Wondering if you alone can make <br />a significant
                    difference?{" "}
                  </h2>
                </div>
                <div className="home7-left-bottom-section">
                  <p>
                    Ekobon is a simple and effective <br />
                    way facilitate climate action
                  </p>
                  <div className="btn-container">
                    <button className="btn getStart-btn"> Get Started</button>
                  </div>
                </div>
              </div>
              <div className="home7-content-right-container">
                <div className="home7-right-top-section">
                  <p>
                    Every step counts and we bring together numerous others who{" "}
                    are striving to make a positive impact. Together we will
                    reach our goal of net-zero
                  </p>
                </div>
                <div className="home7-right-bottom-section">
                  <p>
                    Learn about our approach to help individuals and <br />
                    organisations tackle climate action
                  </p>
                  <div className="btn-container">
                    <button className="btn approch-btn"> Ekobo Approach</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection7;
