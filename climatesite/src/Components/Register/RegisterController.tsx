import React, { Component } from "react";
import { withRouter } from "../../HOC"

interface States {
  showPassword: boolean;
  accountType: string;
}
type Props = {
  router: any;
};
export class RegisterController extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showPassword: false,
      accountType: "",
    };
  }
  componentDidMount(): void {
    this.setState({ accountType: this.props.router.params.accountType });
  }
}

export default withRouter(RegisterController);
