import React, { Component } from 'react'
import DashboardScreen from '../DashboardHome/DashboardScreen';
interface States {
    showSider: boolean;
    showFeature: boolean;
  }
  type Props = {
    router:any
  };
export class DashboardHeaderController extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = {
          showSider: false,
          showFeature: false,
        };
      }
    handleLogout= async()=>{
        localStorage.clear()
        this.props.router.navigate('/')
        window.location.reload()
    }
   
}

export default DashboardHeaderController