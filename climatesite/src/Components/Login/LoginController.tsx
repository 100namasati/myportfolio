import React, { Component } from "react";

interface States {
  showPassword: boolean;
}
type Props = {
  router:any,

};
export class LoginController extends Component<Props, States> {
  constructor(props: any) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }
  handleLogin= async ()=>{
   await localStorage.setItem("user", "user")
   setTimeout(() => {
    this.props.router.navigate('/dashboard')
    window.location.reload()
   }, 100);
   
  }
}

export default LoginController;
