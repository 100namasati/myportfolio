import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import EyeOpen from "../../Images/eyeOpen.png";
import EyeClose from "../../Images/eyeClose.png";
import LoginImg from "../../Images/loginImg.jpeg";
import GoogleIcon from "../../Images/gooleIcon.png";
import FacebookIcon from "../../Images/facebookIcon.png";
import LoginController from "./LoginController";
import { withRouter } from "../../HOC";
export class Login extends LoginController {
  render() {
    return (
      <div>
        <div className="login-main-container">
          <div className="login-container">
            <div className="login-form-section">
              <h3>Login To Your Account</h3>
              <div>
                <p className="new-user">New To Ekobon</p>
                <p className="new-user">
                  Sign Up as an{" "}
                  <Link className="new-user-link" to="/sign-up/Indivisual">
                    Indivisual
                  </Link>{" "}
                  or{" "}
                  <Link className="new-user-link" to={"/sign-up/Bussiness"}>
                    Bussiness
                  </Link>
                </p>
              </div>
              <div className="login-form-container">
                <div className="login-form-item">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <div className="input-container">
                    <input type="email" placeholder="example@gmail.com" />
                  </div>
                </div>
                <div className="login-form-item">
                  <div className="label-container">
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                    <h4>Forgot Password</h4>
                  </div>

                  <div className="input-container">
                    <input
                      type={this.state.showPassword ? "text" : "password"}
                      placeholder="*****"
                    />
                    <img
                      src={this.state.showPassword ? EyeOpen : EyeClose}
                      alt=""
                      onClick={() =>
                        this.setState({
                          showPassword: !this.state.showPassword,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="login-button-section">
                  <div className="checkbox-section">
                    <input type="checkbox" />
                    <label htmlFor="">Keep me logged in</label>
                  </div>
                  <div>
                    <button className="login-btn" onClick={this.handleLogin}>Sign In</button>
                  </div>
                </div>
                <div className="social-login-container">
                  <div className="social-heading">
                    <div className="hr" />
                    <div>Or Sign In Using</div>
                    <div className="hr" />
                  </div>
                  <div className="social-btn-container">
                    <button className="btn google-btn">
                      Google
                      <img src={GoogleIcon} alt="" />
                    </button>
                    <button className="btn facebook-btn">
                      Facebook
                      <img src={FacebookIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-image-section">
              <img src={LoginImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter( Login);
