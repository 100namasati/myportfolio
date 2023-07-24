import React, { Component } from "react";
import "./HomeSection4.css";
import { Action } from "./Actions";
import Image1 from "../../../Images/ActionImg1.jpeg";
import Image2 from "../../../Images/ProjectRenewable.fee59b84.jpg";
import Image3 from "../../../Images/ActionImg3.jpeg";
import Image4 from "../../../Images/ActionImg4.jpeg";
import HomeSection4Controller from "./HomeSection4Controller";
export class HomeSection4 extends HomeSection4Controller {
  render() {
    return (
      <div className="home4-main-container">
        <div className="home4-headings-container">
          <h2>Climate Action</h2>
          <h1>Is not as Difficult As You Think</h1>
        </div>
        <div className="home4-card-container">
          {Action.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={
                  index === 0
                    ? "home4-card1 home4-card"
                    : index === 1
                    ? "home4-card2 home4-card"
                    : index === 2
                    ? "home4-card3 home4-card"
                    : index === 3
                    ? "home4-card4 home4-card"
                    : "home4-card"
                }
                onClick={() => this.handleImages(item.count)}
              >
                <div className="home4-card-img-container">
                  <img src={item.img} alt="" />
                </div>
                <div className="home4-card-content-container">
                  <h1
                    className={
                      this.state.count === item.count ? "count-active" : "count"
                    }
                  >
                    {item.count}.
                  </h1>
                  <h3
                    className={
                      this.state.count === item.count
                        ? "heading-active"
                        : "heading"
                    }
                  >
                    {item.heading}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="home4-image-container">
          <div className="image">
            <img
              src={
                this.state.count === 1
                  ? Image1
                  : this.state.count === 2
                  ? Image2
                  : this.state.count === 3
                  ? Image3
                  : this.state.count === 4
                  ? Image4
                  : ""
              }
              alt=""
            />
          </div>
          <div className="pagination">
            <span
              className={
                this.state.count === 1
                  ? "pagination-active"
                  : "pagination-count"
              }
              onClick={() => this.handleImages(1)}
            >
              1
            </span>
            <span
              className={
                this.state.count === 2
                  ? "pagination-active"
                  : "pagination-count"
              }
              onClick={() => this.handleImages(2)}
            >
              2
            </span>
            <span
              className={
                this.state.count === 3
                  ? "pagination-active"
                  : "pagination-count"
              }
              onClick={() => this.handleImages(3)}
            >
              3
            </span>
            <span
              className={
                this.state.count === 4
                  ? "pagination-active"
                  : "pagination-count"
              }
              onClick={() => this.handleImages(4)}
            >
              4
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection4;
