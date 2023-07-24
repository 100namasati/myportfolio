import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import EyeOpen from "../../Images/eyeOpen.png";
import EyeClose from "../../Images/eyeClose.png";
import LoginImg from "../../Images/loginImg.jpeg";
import GoogleIcon from "../../Images/gooleIcon.png";
import FacebookIcon from "../../Images/facebookIcon.png";
import { RegisterController } from "./RegisterController";
import { withRouter } from "../../HOC"
export class Register extends RegisterController {
  renderBussinessSignUp = () => {
    return (
      <div>
        <div className="signup-form-item">
          <label className="label" htmlFor="email">
            Company Name
          </label>
          <div className="input-container">
            <input type="text" placeholder="Company" />
          </div>
        </div>
        <div className="signup-form-item">
          <label className="label" htmlFor="country">
            Country
          </label>
          <div className="input-container">
            <select
              className="country-select"
              name="country"
              id="country"
              placeholder="Country"
            >
              <option value="India`">india</option>
              <option value="America">America</option>
              <option value="Ukrane">Ukrane</option>
              <option value="China">Chine</option>
            </select>
          </div>
        </div>
        <div className="signup-form-item">
          <label className="label" htmlFor="email">
            Company Size
          </label>
          <div className="input-container">
            <select
              className="Members-select"
              name="Members"
              id="Members"
              placeholder="Members"
            >
              <option value={0}>0</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
            </select>{" "}
          </div>
        </div>
        <div className="signup-form-item">
          <label className="label" htmlFor="email">
            Comapny Email
          </label>
          <div className="input-container">
            <input type="email" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="signup-button-section">
          <div className="checkbox-section">
            <input type="checkbox" />
            <label htmlFor="">
              I have read and agree with <span>Terms & Conditions</span> and{" "}
              <span>Privacy Policy </span>{" "}
            </label>
          </div>
        </div>
      </div>
    );
  };
  renderIndivisualSignUp = () => {
    return (
      <div>
        <div className="form-name-container">
          <div className="signup-form-item sign-form-item-indivisual ">
            <label className="label" htmlFor="email">
              First Name
            </label>
            <div
              className={
                this.state.accountType === "Indivisual"
                  ? "input-container-indivisual"
                  : "input-container"
              }
            >
              <input type="text" placeholder="First Name" />
            </div>
          </div>
          <div className="signup-form-item sign-form-item-indivisual">
            <label className="label" htmlFor="email">
              Last Name
            </label>
            <div
              className={
                this.state.accountType === "Indivisual"
                  ? "input-container-indivisual"
                  : "input-container"
              }
            >
              <input type="text" placeholder=" Last Name" />
            </div>
          </div>
        </div>

        <div className="signup-form-item">
          <label className="label" htmlFor="country">
            Country
          </label>
          <div className="input-container">
            <select
              className="country-select"
              name="country"
              id="country"
              placeholder="Country"
            >
              <option value="India`">india</option>
              <option value="America">America</option>
              <option value="Ukrane">Ukrane</option>
              <option value="China">Chine</option>
            </select>
          </div>
        </div>

        <div className="signup-form-item">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="input-container">
            <input type="email" placeholder="example@gmail.com" />
          </div>
        </div>
        <div className="signup-button-section">
          <div className="checkbox-section">
            <input type="checkbox" />
            <label htmlFor="">
              I have read and agree with <span>Terms & Conditions</span> and{" "}
              <span>Privacy Policy </span>{" "}
            </label>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className="signup-main-container">
          <div className="signup-container">
            <div className="signup-form-section">
              <h3>Signup For {this.state.accountType}</h3>
              <div className="new-user-title">
                Signup For
                <Link
                  to={
                    this.state.accountType === "Indivisual"
                      ? "/sign-up/Bussiness"
                      : "/sign-up/Indivisual"
                  }
                  className="new-user"
                >
                  {" "}
                  {this.state.accountType === "Indivisual"
                    ? "Bussiness"
                    : "Indivisual"}
                </Link>
                <p>
                  Already a user ?
                  <Link className="new-user-link new-user" to={"/login"}>
                    Sign In
                  </Link>{" "}
                </p>
              </div>
              <div className="signup-form-container">
                {this.state.accountType === "Indivisual"
                  ? this.renderIndivisualSignUp()
                  : this.renderBussinessSignUp()}
                <div className="btn-container">
                  <button className="signup-btn">Next</button>
                </div>
                <div className="social-signup-container">
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
            <div className="signup-image-section">
              <img src={LoginImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
