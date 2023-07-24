import React, { Component } from "react";
interface States {
  activeBtn: string;
}
type Props = {};
export class HomeSection2Controller extends Component<Props, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeBtn: "Indivisual",
    };
  }
  HandleBtnActive = (btnVal: string) => {
    this.setState({ activeBtn: btnVal });
  };
}

export default HomeSection2Controller;
