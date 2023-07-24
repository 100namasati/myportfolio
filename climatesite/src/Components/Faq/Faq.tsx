import React, { Component } from "react";
import "./Faq.css";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { FaqData } from "./FaqData";
interface States {
  showCollapse: any;
  faqData: any;
}
type Props = {};

export default class Faq extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    console.log(this.props);
    this.state = {
      showCollapse: "",
      faqData: FaqData,
    };
  }
  collapse = (id: any) => {
    this.setState({ showCollapse: id });
  };
  render() {
    return (
      <div className="faqContainer">
        <div className="headingFaQText">
          <h1>FAQ'S</h1>
        </div>
        {this.state.faqData.data.map((item: any, index: any) => {
          return (
            <div key={index}>
              <div
                className="faqQuestion"
                style={{
                  borderBottomLeftRadius:
                    this.state.showCollapse === item.id ? "0" : "",
                  borderBottomRightRadius:
                    this.state.showCollapse === item.id ? "0" : "",
                }}
              >
                <h3>{item.attributes.question}</h3>
                {this.state.showCollapse === item.id ? (
                  <IoIosArrowDropupCircle
                    style={{ fontSize: "40px" }}
                    onClick={() => {
                      this.collapse("");
                    }}
                  />
                ) : this.state.showCollapse === "" ||
                  this.state.showCollapse !== item.id ? (
                  <IoIosArrowDropdownCircle
                    style={{ fontSize: "40px" }}
                    onClick={() => {
                      this.collapse(item.id);
                    }}
                  />
                ) : (
                  ""
                )}
              </div>

              {this.state.showCollapse === item.id ? (
                <div className="faqAnswer">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.attributes.answer,
                    }}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
