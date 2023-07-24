import React, { Component } from "react";

interface States {
  activeSideNav: boolean;
  activeResource: boolean;
}
type Props = {
 
};
export class HeaderController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeSideNav: false,
      activeResource: false,
    };
  }
  
  handleSideNav = () => {
    this.setState({ activeSideNav: !this.state.activeSideNav });
  };
  handleResource = () => {
    this.setState({ activeResource: !this.state.activeResource });
  };
}

export default HeaderController;
