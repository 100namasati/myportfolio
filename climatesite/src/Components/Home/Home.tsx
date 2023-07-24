import React, { Component } from "react";
import HomeSection1 from "./HomeSection1/HomeSection1";
import HomeSection2 from "./HomeSection2/HomeSection2";
import HomeSection3 from "./HomeSection3/HomeSection3";
import HomeSection4 from "./HomeSection4/HomeSection4";
import HomeSection5 from "./HomeSection5/HomeSection5";
import HomeSection6 from "./HomeSection6/HomeSection6";
import HomeSection7 from "./HomeSection7/HomeSection7";

export class Home extends Component {
  render() {
    return (
      <div>
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
        <HomeSection7 />
      </div>
    );
  }
}

export default Home;
