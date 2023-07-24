import React, { Component } from "react";
import "./Ekopoints.css";
import eko1 from '../../Images/MenuImages/eko1.jpeg'
import eko2 from '../../Images/MenuImages/eko2.jpeg'
import eko3 from '../../Images/MenuImages/eko3.jpeg'
import eko4 from '../../Images/MenuImages/eko4.jpeg'
export default class Ekopoints extends Component {
  render() {
    return (
      <div className="ekoPointsContainer">
        <div className="ekoPointsNavbar">
            <h1>HOW TO REDEEM <span> GIFTS </span></h1>
        </div>
        <div className="ekoPointsContent">
          <div className="ekopointsContentText">
            <h5>Step:1</h5>
            <h1>Sign In/ Sign Up Ekobon</h1>
            <p>
              Enter your details to sign up. Once have logged in, you can go
              straight to the carbon offset section for offsetting your carbon
              footprint.
            </p>
          </div>
          <div className="ekopointsContentImg">
            <img src={eko1} alt="image" />
          </div>
        </div>
        <div className="ekoPointsContent">
          <div className="ekopointsContentImg">
            <img src={eko2} alt="image" />
          </div>
          <div className="ekopointsContentText">
            <h5>Step:2</h5>
            <h1>Select the offset type or plant trees for carbon offset</h1>
            <p>
            You can use the gift card to offset different activities like travel by flight, car etc. based on your lifestyle. You can also choose to redeem it by planting trees.
            </p>
          </div>
        </div>
        <div className="ekoPointsContent">
          <div className="ekopointsContentText">
            <h5>Step:3</h5>
            <h1>Put the gift code while checking out</h1>
            <p>
            Once you added the offset product in your cart, enter the gift code. Your total offset amount will get adjusted by the amount in gift card.
            </p>
          </div>
          <div className="ekopointsContentImg">
            <img src={eko3} alt="image" />
          </div>
        </div>
        <div className="ekoPointsContent">
          <div className="ekopointsContentImg">
            <img src={eko4} alt="image" />
          </div>
          <div className="ekopointsContentText">
            <h5>Step:4</h5>
            <h1>Select the climate  projects you want to invest in</h1>
            <p>
            Once the payment is done, you will be taken to the climate projects page. You can pick the project you are passionate about and amount will get invested in that project within certain duration and email confirmation will be sent..
            </p>
          </div>
        </div>
      </div>
    );
  }
}
