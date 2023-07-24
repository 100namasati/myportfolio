import React, { Component } from "react";
import "./OurApproach.css";
import bussiness from "../../Images/MenuImages/organization.svg";
import bussinessDash from "../../Images/MenuImages/Business-ourapproach.jpeg";
import indivisual from "../../Images/MenuImages/individual.svg";
import indivisualDash from "../../Images/MenuImages/indvOffImg-ourapproach.jpeg";
import arrowBlack from "../../Images/MenuImages/arrow1.png";
import arrowBlue from "../../Images/MenuImages/arrow2.png";
import step1 from "../../Images/MenuImages/step1.svg";
import step2 from "../../Images/MenuImages/Step2.svg";
import step3 from "../../Images/MenuImages/Step3.svg";
import step4 from "../../Images/MenuImages/Step4.svg";
import step5 from "../../Images/MenuImages/Step5.svg";
import action1 from "../../Images/MenuImages/feature1.png";
import action2 from "../../Images/MenuImages/action2.png";
import action3 from "../../Images/MenuImages/action3.png";
import action4 from "../../Images/MenuImages/action4.png";
export default class OurApproach extends Component {
  renderOurApproachHeroSection = () => {
    return (
      <div className="ourApproachHeroContainer">
        <h1>
          We need to join hands to
          <br />
          tackle <span className="highlightedText">climate change</span>
          <br />
          together
        </h1>
        <p>Ekobon is our effort to facilitate the same.</p>
      </div>
    );
  };
  renderOurApproachMiddleSection = () => {
    return (
      <div className="ourApproachMiddleContainer">
        <div className="ourApproachTopText">
          <h3>
            Whether you are an organization or
            <br />
            individual, we have a
            <span className="highlightedText"> carbon offsetting </span>
            <br />
            <span className="highlightedText"> Solution </span>
            for you
          </h3>
        </div>
        <div className="ourApproachMiddleContent">
          <div className="ourApproachMiddleContentItem">
            <div className="itemIcon">
              <img src={bussiness} alt="img" />
            </div>
            <h2>Bussiness</h2>
            <p>
              You can calculate the impact of your business operations, choose
              how much you want to offset, make a contribution to a climate
              project of your choice, Ekobon buys carbon credits on your behalf,
              deregister the credits or trade them.
            </p>
            <img src={bussinessDash} alt="img" />
          </div>
          <div className="ourApproachMiddleContentItem">
            <div className="itemIcon">
              <img src={indivisual} alt="img" />
            </div>
            <h2>Indivisual</h2>
            <p>
              You can calculate the impact of your business operations, choose
              how much you want to offset, make a contribution to a climate
              project of your choice, Ekobon buys carbon credits on your behalf,
              deregister the credits or trade them.
            </p>
            <img src={indivisualDash} alt="img" />
          </div>
        </div>
      </div>
    );
  };
  renderOurApproachWorkFlow = () => {
    return (
      <div className="workFlowContainer">
        <div className="workFlowTopText">
          <h2>
            Understand How
            <br />
            <span className="hightlightedText">Carbon Offsettting Works</span>
          </h2>
        </div>
        <div className="workFlowFirstStep">
          <div className="startDescription">
            <p className="para1">
              CO2 emissions are behind the global temperature rise. Humans
              cannot stop emitting CO2 and there is an environmental footprint
              of existence. The growing population and evolving human activities
              are responsible for the constant release of CO2 in the atmosphere.
            </p>
            <p className="para2">
              The perils of climate change are not unknown. We all need to take
              the right steps before the alarming condition turns into a
              calamity.
            </p>
          </div>
          <div className="arrowContainer">
            <img src={arrowBlack} alt="arrow" />
          </div>
          <div className="workFlowItem">
            <div className="stepIcon">
              <img src={step1} />
            </div>
            <p>
              Neutralize the CO2 you produce by funding climate projects that
              help eliminate the CO2 equivalent to the amount you generate.
            </p>
          </div>
        </div>
        <div className="workFlowSecondStep">
          <div className="workFlowSecondStepLeft">
            <div className="arrowBlueContainer">
              <img src={arrowBlue} alt="arrow" />
            </div>
            <div className="workFlowItem">
              <div className="stepIcon">
                <img src={step5} />
              </div>
              <p className="para1">
                Be conscious about your actions and try to minimize your
                footprint
                <hr />
                <p className="para2">
                  Recycle more, Avoid deforestation, Make conscious choices,
                  Walk more, Use public transport.
                </p>
              </p>
            </div>
            <div className="arrowBlueContainer">
              <img src={arrowBlue} alt="arrow" />
            </div>
          </div>
          <div className="workFlowSecondStepLeft">
            <div className="arrowContainer" id="verticalArrow">
              <img src={arrowBlack} alt="arrow" />
            </div>
            <div className="workFlowItem">
              <div className="stepIcon">
                <img src={step2} />
              </div>
              <p>
                Ekobon carefully chooses and offers you a selection of climate
                projects. Choose your project and invest based on your budget
              </p>
            </div>
            <div className="arrowContainer" id="verticalArrow">
              <img src={arrowBlack} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="workFlowFirstStep">
          <div className="workFlowItem">
            <div className="stepIcon">
              <img src={step4} />
            </div>
            <p className="para1">
              Together we will give back to the world, more than we take from
              it.
              <hr />
              <p className="para2">Together we will create an impact.</p>
            </p>
          </div>

          <div className="arrowContainer" id="leftArrow">
            <img src={arrowBlack} alt="arrow" />
          </div>
          <div className="workFlowItem">
            <div className="stepIcon">
              <img src={step3} />
            </div>
            <p className="para1">
              With your funding, Ekobon will buy carbon credits on your behalf
              and deregister them.
              <hr />
              <p className="para2">
                Every carbon credit that you help deregister will mean
                neutralization of 1 tonne of CO2.
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  };
  renderClimateChange = () => {
    return (
      <div className="climateChangeContainer">
        <div className="climateChangeContent">
          <h2>
            Consciously we can
            <span>
              {" "}
              tackle <br /> climate change{" "}
            </span>
          </h2>
          <p>
            We have taken the first step. Would you join us?
            <br />
            Not only do we help you identify the best projects, we constantly
            monitor the impact of your actions too. With regular updates of
            projects and the change they facilitate, you can stay assured that
            your funds are reaping the desired results.
          </p>
        </div>
      </div>
    );
  };
  renderOurApproachAction = () => {
    return (
      <div className="approachActionContainer">
        <div className="first">
          <div className="approachActionContent" id="right">
            <img src={action1} alt="image" />
            <h3>Earn Carbon Points</h3>
          </div>
          <div className="approachActionContent" id="bottom">
            <img src={action2} alt="image" />
            <h3>Get access to sustainable brands</h3>
          </div>
        </div>
        <div className="first">
          <div className="approachActionContent" id="top">
            <img src={action3} alt="image" />
            <h3>Tips and tricks to reduce your footprint</h3>
          </div>
          <div className="approachActionContent" id="left">
            <img src={action4} alt="image" />
            <h3>Carbon credit trading made easy</h3>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderOurApproachHeroSection()}
        {this.renderOurApproachMiddleSection()}
        {this.renderOurApproachWorkFlow()}
        {this.renderClimateChange()}
        {this.renderOurApproachAction()}
      </div>
    );
  }
}
