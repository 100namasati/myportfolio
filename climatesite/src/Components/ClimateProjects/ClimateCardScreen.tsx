import React, { Component } from "react";
import "./ClimateCardScreen.css";
import { climateScreenData } from "./ClimateProjectData";
import { MdLocationOn } from "react-icons/md";
import Carousel from "react-elastic-carousel";
type Props={
    data:any;
    }
    interface States{
        breakPoints:any;
    }
export default class extends Component <Props, States> {
    breakPoints: ({ width: number; itemsToShow: number; itemsToScroll?: undefined; pagination?: undefined; } | { width: number; itemsToShow: number; itemsToScroll: number; pagination: boolean; } | { width: number; itemsToShow: number; itemsToScroll: number; pagination?: undefined; })[];
    constructor(props:Props){
        super(props);
        // console.log(this.props);
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 2,itemsToScroll:3 },
            { width: 991, itemsToShow: 3 ,},
            { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 5 },
            { width: 1750, itemsToShow: 6 }
          ]
    }
  render() {
    return (
      <div className="card">
            {/* @ts-ignore */}
            <Carousel breakPoints={this.breakPoints}>
        {this.props.data.map((item:any, index:any) => {
          return (
            <div className="climateCardContainer" key={index}>
              <img src={item?.attributes.standard_image} />
              <div className="climateCardContent">
                <h4>{item?.attributes.project_name}</h4>
                <p>
                  <span>
                    <MdLocationOn />
                  </span>
                  {item?.attributes.location}
                </p>  
              </div>
              <div className="climateShowData">
              <h4>{item?.attributes.project_name}</h4>
                <p>
                  <span>
                    <MdLocationOn />
                  </span>
                  {item?.attributes.location}
                </p>  
                <button className="buttonDetails">
                    Project Details
                </button>
              </div>
            </div>
          );
        })}
        </Carousel>
      </div>
    );
  }
}
