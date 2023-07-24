import React, { Component } from "react";
import "./HomeSection6.css";
import { Projects } from "./Project";
export class HomeSection6 extends Component {
  render() {
    return (
      <div>
        <div className="home6-main-container">
          <div className="home6-heading-container">
            <h1 className="heading-lite">Out Projects for</h1>
            <h1 className="heading-dark">Climate offsets</h1>
            <p>
              We invest in well-researched and highest quality projects driven
              towards community <br />
              development and which target the UN Sustainable Development Goals{" "}
            </p>
          </div>
          <div className="home6-cards-wrapper">
            {Projects.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    index % 2 !== 0
                      ? "home6-card-container-reverse"
                      : "home6-card-container"
                  }
                >
                  <div className={index % 2 !== 0?"home6-content-container-reverse":"home6-content-container"}>
                    <h1>{item.heading}</h1>
                    <p>{item.desc}</p>
                  </div>
                  <div
                    className={
                      index % 2 !== 0
                        ? "home6-image-container-reverse"
                        : "home6-image-container"
                    }
                  >
                    <img src={item.image} alt="" />
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

export default HomeSection6;
