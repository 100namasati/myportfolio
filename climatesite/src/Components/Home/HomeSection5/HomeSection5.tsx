import React, { Component } from "react";
import "./HomeSection5.css";
import { Action } from "./Actions";
export class HomeSection5 extends Component {
  render() {
    return (
      <div>
        <div className="home5-main-container">
          <div className="home5-headings-container">
            <h1>
              TRANSPARENCY <span>AT YOUR CODE</span>
            </h1>
            <h1>
              CLIMATE ACTION <span>IN OUR VISION</span>
            </h1>
            <p>Our project updates contain the followingto help you</p>
            <p>assess the impact of your choice</p>
          </div>
          <div className="home5-card-container">
            {Action.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    index === 0
                      ? "home5-card1 home5-card"
                      : index === 1
                      ? "home5-card2 home5-card"
                      : index === 2
                      ? "home5-card3 home5-card"
                      : index === 3
                      ? "home5-card4 home5-card"
                      : "home5-card"
                  }
                >
                  <div className="home5-card-img-container">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="home5-card-content-container">
                    <h3 className="heading">{item.heading}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection5;
