import React, { Component } from "react";

interface State {
  count: number;
}
type Props = {};
export class HomeSection4Controller extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  handleImages = (count: number) => {
    this.setState({ count: count });
  };
}

export default HomeSection4Controller;
