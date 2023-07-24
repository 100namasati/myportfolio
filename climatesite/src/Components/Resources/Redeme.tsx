import React, { Component } from "react";
import "./Redeme.css";
import redeme1 from "../../Images/MenuImages/redeme1.jpeg";
import redeme2 from "../../Images/MenuImages/redeme2.jpeg";
import redeme3 from "../../Images/MenuImages/redeme3.jpeg";
import arrow1 from "../../Images/MenuImages/leftArrow.png"
import arrow2 from "../../Images/MenuImages/rightArrow.png"
export default class Redeme extends Component {
  renderRedmeUpper = () => {
    return (
      <div className="redemeUpperContainer">
        <div className="headText">
          <h3>EKO</h3>
          <h1>point</h1>
        </div>
        <div className="heroImages">
          <div className="heroImagesContent1">
            <img src={redeme1} alt="image" />
          </div>
          <div className="heroImagesContent2">
            <img src={redeme2} alt="image" />
          </div>
        </div>
        <h1 className="carbonReductionHeading">
          Carbon reduction is not choice but a need.
        </h1>
        <div className="heroData">
          <div className="heroDataText">
            <p>
              A carbon-intensive lifestyle will only accelerate climate change
              and cause more environmental issues than ever. While some
              emissions are impossible to avoid, offsetting helps to nullify
              their impact. When you choose to offset your carbon emissions with
              Ekobon, not only do you help the earth but earn yourself some eco
              karma, too.
            </p>
            <p>
              Stay assured! Your efforts for the earth will not go unnoticed. We
              will reward you for your efforts with EKO points.{" "}
            </p>
            <p>
              Based on your country and residence and stage in the carbon
              offsetting journey, you are eligible for Ekopoints. These eko
              points are rewards that you earn for your contribution to climate
              action. You can redeem them to buy sustainable products from our
              partner stores.
            </p>
          </div>
          <div className="heroDataImg">
            <img src={redeme3} alt="image" />
          </div>
        </div>
      </div>
    );
  };
  renderRedmeLower = () => {
    return (
      <div className="redemeLowerContainer">
        <div className="headText">
          <h3>EKO point</h3>
          <h1>Balance</h1>
        </div>
        <div className="redemeLowerContent">
          <div className="lowerFirstLeft">
            <p>
              Your Eko point balance will be reset every year and can earn more
              points by offsetting more carbon. There are three threshold levels
              wherein different multipliers are applied for your carbon offset
              amount to EKO points conversion.
            </p>
          </div>
          <div className="lowerFirstRight">
            <h2>
              A - Annual average carbon footprint of the country of residence
            </h2>
            <p>Climate Citizen Threshold(T1): one times A</p>
            <p>Climate Warrior Threshold(T2): twice of A</p>
            <p>Climate Warrior Threshold(T3): twice of A</p>
          </div>
        </div>
        <div className="redemeLowerContent2">
          <div className="lowerFirstLeft">
            <p>
            Multiplier for conversion of carbon footprint to EKO points is as follows:
            </p>
            <table>
                <tr>
                    <th>Carbon FootPrints</th>
                    <th>Ekopoints</th>
                </tr>
                <tr>
                    <td>CF  T1</td>
                    <td>CFx1</td>
                </tr>
                <tr >
                    <td>T1 CF T2</td>
                    <td>T1x1 + (CF - T1)x2</td>
                </tr>
                <tr>
                    <td>T2 CF T3</td>
                    <td>T1x1 + T2x2 + (CF - T2)x3</td>
                </tr>
                <tr>
                    <td>CF T3</td>
                    <td>T1x1 + T2x2 + T3x3 + (CF - T3)x4</td>
                </tr>
            </table>
          </div>
          <div className="lowerFirstRight">
            <h2>
            Here is an example to 
         
            illustrate the above table.
            </h2>
            <p style={{lineHeight:"30px"}}>
                Refer to the table to find out the per capital
                annual average of carbon emissions for 
                your country.
            </p>
          </div>
        </div>
        <p className="arrowTextHeading">Suppose the annual average is 30 tonnes</p>
        <div className="redemeLowerArrowSection">
            <div className="arrowLeftSection">
                <img src={arrow1} alt='arrow'/>
                <p>If you offset <span>14 tonnes</span>
                , you have offset 2 times the annual average and you are a climate warrior. The multiplier for this stage is 2. We'd love to double the ekopoints for the extra thought and effort you have put in. So, you get 7 ekopoints for getting past the first stage, and 14 (7*2) for this stage. You thus get a total of 21 ekopoints.</p>
            </div>
            <div className="arrowLeftSection" style={{alignItems:"flex-start"}}>
            <img src={arrow2} alt='arrow'/>
                <p>If you offset <span>14 tonnes</span>
                , you have offset 2 times the annual average and you are a climate warrior. The multiplier for this stage is 2. We'd love to double the ekopoints for the extra thought and effort you have put in. So, you get 7 ekopoints for getting past the first stage, and 14 (7*2) for this stage. You thus get a total of 21 ekopoints.</p>
            </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.renderRedmeUpper()}
        {this.renderRedmeLower()}
      </div>
    );
  }
}
