import "./HomeSection2.css";
import HomeSection2Controller from "./HomeSection2Controller";
import IndivRecycleImg from "../../../Images/indvRecycle.71dd6235.png";
import IndivOffImg from "../../../Images/indvOffImg.jpg";
import BussinessOffImg from "../../../Images/BusinessOff.jpeg";
import IdvPlant from "../../../Images/idvPlant.8d9dad5e.png";
import IdvPlantTree from "../../../Images/indvPlanttreeImg.jpg";
import BussinessSubs from "../../../Images/BusinessSubs.png";
export class HomeSection2 extends HomeSection2Controller {
  renderIndivisualSection = () => {
    return (
      <div>
        <div className="home2-img-section-main">
          <div className="img-section-left-wrapper hr">
            <div className="img-section-top-section">
              <div className="top-img-container">
                <img
                  src={
                    this.state.activeBtn === "Indivisual"
                      ? IndivRecycleImg
                      : IndivRecycleImg
                  }
                  alt=""
                />
              </div>
              <div className="top-content-container">
                <h2>
                  {this.state.activeBtn === "Indivisual"
                    ? "Offset"
                    : this.state.activeBtn === "Bussiness"
                    ? "One Time Offsets"
                    : ""}{" "}
                </h2>
                <p>
                  {this.state.activeBtn === "Indivisual"
                    ? "Calculate and your offset carbon footprint"
                    : this.state.activeBtn === "Bussiness"
                    ? "Calculate and  offset your organisation's carbon footprint for a single time"
                    : ""}
                </p>
              </div>
            </div>
            <div className="img-section-bottom-section">
              <img
                src={
                  this.state.activeBtn === "Indivisual"
                    ? IndivOffImg
                    : this.state.activeBtn === "Bussiness"
                    ? BussinessOffImg
                    : ""
                }
                alt=""
              />
            </div>
          </div>

          <div className="img-section-left-wrapper">
            <div className="img-section-top-section">
              <div className="top-img-container">
                <img
                  src={
                    this.state.activeBtn === "Indivisual"
                      ? IdvPlant
                      : this.state.activeBtn === "Bussiness"
                      ? IndivRecycleImg
                      : ""
                  }
                  alt=""
                />
              </div>
              <div className="top-content-container">
                <h2>
                  {this.state.activeBtn === "Indivisual"
                    ? "Plant Trees"
                    : this.state.activeBtn === "Bussiness"
                    ? "Subscription Offset"
                    : ""}
                </h2>
                <p>
                  {this.state.activeBtn === "Indivisual"
                    ? "Plant a tree and contributeto the greener future"
                    : this.state.activeBtn === "Bussiness"
                    ? "Take a carbon offset package whichfits your bussiness operations"
                    : ""}
                </p>
              </div>
            </div>
            <div className="img-section-bottom-section">
              <img
                src={
                  this.state.activeBtn === "Indivisual"
                    ? IdvPlantTree
                    : this.state.activeBtn === "Bussiness"
                    ? BussinessSubs
                    : ""
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="home2-main-container">
          <div className="home2-heading-container">
            <h1>
              REDUCE OUR <span className="bold-heading">CARBON EMISSION</span>{" "}
            </h1>
          </div>
          <div className="button-container">
            <div className="button-wrapper">
              <button
                className={
                  this.state.activeBtn === "Indivisual"
                    ? "btn-active btn"
                    : "btn"
                }
                onClick={() => this.HandleBtnActive("Indivisual")}
              >
                Indivisual
              </button>
              <button
                className={
                  this.state.activeBtn === "Bussiness"
                    ? "btn-active btn"
                    : "btn"
                }
                onClick={() => this.HandleBtnActive("Bussiness")}
              >
                Bussiness
              </button>
            </div>
          </div>
          <div className="home2-img-container">
            {this.renderIndivisualSection()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection2;
