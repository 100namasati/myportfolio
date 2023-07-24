import React, { Component } from "react";
import "./Contact.css";
import { GrLocation, GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contactNavbar">
          <h1>GET IN TOUCH!</h1>
        </div>
        <div className="contactInformation">
          <div className="inforamtionContent">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <GrLocation className="infoIcon" />
              </span>
              <h3>Address</h3>
            </div>

            <p>Asati ward no.1 near Sanskar Bhawan</p>
          </div>
          <div className="inforamtionContent">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <FiPhoneCall className="infoIcon" />
              </span>
              <h3>Mobile</h3>
            </div>
            <p>9893073626</p>
          </div>
          <div className="inforamtionContent">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>
                <GrMail className="infoIcon" />
              </span>
              <h3>Contact</h3>
            </div>

            <p>sonam@softopstechnologies.com</p>
          </div>
        </div>
        <div className="infoFormContainer">
          <div className="leftInfoContent">
            <label>Your Name</label>

            <input type="text" placeholder="Type your name" />
            <div className="secondRowInfo">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>Mobile Number</label>
                <input type="text" placeholder="enter your mobile" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>E-mail</label>
                <input type="text" placeholder="enter your email" />
              </div>
            </div>
          </div>
          <div className="rightInforContent">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Message</label>
              <textarea
                id="w3review"
                name="w3review"
                rows={10}
                cols={100}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="buttonContainer">
          <button className="formButton">Send Message</button>
        </div>
      </div>
    );
  }
}
