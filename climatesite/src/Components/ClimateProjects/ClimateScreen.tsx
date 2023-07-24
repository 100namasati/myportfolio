import React, { Component } from "react";
import "./ClimateScreen.css";
import climateImg from "../../Images/MenuImages/ClimateGoals.png";
import standard1 from "../../Images/MenuImages/climategoldicon.cbf12831.png";
import standard2 from "../../Images/MenuImages/climateicon2.6a085959.png";
import standard3 from "../../Images/MenuImages/climateicon3-old.7f9df2ed.png";
import footer from "../../Images/MenuImages/projectclimatewind.93fece89.png";
import ClimateCardScreen from "./ClimateCardScreen";
import { climateScreenData } from "./ClimateProjectData";
// import Carousel from "react-elastic-carousel";
// import { MdLocationOn } from "react-icons/md";


class ClimateScreen extends Component {
 
  renderClimateHeroSection = () => {
    return (
      <div className="climateHeroConatiner">
        <div className="upper-text-container">
          <p className="upper-text">
            Ekobon handpicks climate projects that deliver measurable benefits
            aligned to the goals of the Paris Agreement with emphasis on
            community development.
          </p>
          <p className="upper-text">
            All Ekobon projects contribute to the achievement of the
            <span> Sustainable Development Goals</span>
            (SDG) set up the United Nations.
          </p>
        </div>
        <div className="climateHeroFeature">
          <img src={climateImg} alt="climate-goals" />
        </div>
        <div className="standard-text">
          <p className="upper-text">
            Projects selected go through rigorous internal process to ensure
            highest quality and have been certified by the best industry
            verification standards.
          </p>
          <h2>Standards we work with</h2>
        </div>
        <div className="standardContainer">
          <img src={standard1} alt="img" />
          <img src={standard2} alt="img" />
          <img src={standard3} alt="img" />
        </div>
      </div>
    );
  };
  renderClimateFooterSection = () => {
    return (
      <div className="climateFooterContainer">
        <div className="climateFooterLeftContainer">
          <h2>Invest in Climate Project</h2>
          <div className="rolesButton">
            <button id="indivisual">For indivisual</button>
            <button id="business">For Business</button>
          </div>
        </div>
        <div className="climateFooterRightContainer">
          <img src={footer} />
        </div>
      </div>
    );
  };
  
  render() {
    return (
      <>
        <div>
          <div className="climate-project-heading">
            <h1>Climate Projects</h1>
          </div>
          {this.renderClimateHeroSection()}
          <div className="renewableSection">
            <h1>Renewable</h1>
            <ClimateCardScreen data={climateScreenData?.Renewable?.data} />
          </div>
          <div className="renewableSection">
            <h1>Energy Efficiency</h1>
            <ClimateCardScreen
              data={climateScreenData["Energy Efficiency"]?.data}
            />
          </div>
          <div className="renewableSection">
            <h1>Community Projects</h1>
            <ClimateCardScreen
              data={climateScreenData["Community projects "]?.data}
            />
          </div>
          <div className="renewableSection">
            <h1>Plant Based Solutions</h1>
            <ClimateCardScreen
              data={climateScreenData["Plant based solutions"]?.data}
            />
          </div>
          {this.renderClimateFooterSection()}
        </div>
      </>
    );
  }
}

export default ClimateScreen;
