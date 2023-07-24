import React, { Component } from "react";
import "./About.css";
import aboutHero from "../../Images/MenuImages/AboutHero.jpeg";
import middleImg from "../../Images/MenuImages/about-us-2img.jpeg";
import member1 from "../../Images/MenuImages/Nikhil.jpeg";
import member2 from "../../Images/MenuImages/Nirdesh.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="aboutHeroSection">
          <h1>
            <span>Climate crisis is real.</span>
            It is happening right
            <br />
            now! It's time to take action. Are you ready?
          </h1>
          <img src={aboutHero} alt="image" />
          <p>
            There are no borders to climate change, actions of the few can
            destroy the world. The good part is that
            <br />
            action of a few can save the world. Be a part of the Carbon
            Offsetting revolution and make a global
            <br />
            impact. Replant the world's lungs, support clean energy and help fix
            the climate crisis.
          </p>
        </div>
        <div className="middleSection">
          <div className="middleImgSection">
            <img src={middleImg} alt="image" />
          </div>
          <div className="middleContent">
            <p>
              Hate climate change? But don't know what
              <br />
              moves the needle? We can help!
            </p>
            <h1 className="greenHeading">Introducing Ekobon</h1>
            <p>
              Fighting climate change, just got easier. Ekobon makes the little
              <br />
              things in life, guilt free! Ekobon is not just a tool; It's a way
              of life. It's
              <br />
              a one-stop-shop for all your sustainblity needs Choose the causes
              <br />
              you are passionate about, trust us to research the right climate
              <br />
              projects for you, invest and be a part of the impact
            </p>
          </div>
        </div>
        <div className="thirdSection">
          <p>
            We help you fund global
            <span> Eko-</span>
            positive projects to
            <br />
            balance your car<span> bon </span>
            footprint.
          </p>
        </div>
        <div className="ourVisionMission">
          <div className="ourVisionMission-item">
            <h1 className="greenHeading">Our Vision</h1>
            <div className="verticalLine"></div>
            <p>
              To empower individuals and corporates to make real, actionable
              <br />
              changes to fix the climate crisis.
            </p>
          </div>
          <div className="ourVisionMission-item" id="mission">
            <p>
              To empower individuals and corporates to make real, actionable
              <br />
              changes to fix the climate crisis.
            </p>
            <div className="verticalLine"></div>
            <h1 className="greenHeading">Our Mission</h1>
          </div>
        </div>
        <div className="teamSection">
          <h1 className="greenHeading">Meet the Team</h1>
          <div className="teamMember">
            <div className="teamMemberImg">
              <img src={member1} alt="member" />
            </div>
            <div className="aboutTeamMember">
              <h2>Nikhil Jain</h2>
              <p>
                He is an IIT Bombay alumnus with a degree in Mechanical
                Engineering. With over 15 years of banking experience under his
                belt, he has worked in top global investment banks managing vast
                trading portfolios in forex and commodities asset classes.
                Starting with Lehman Brothers in Tokyo, he has worked in various
                regions of Asia spending the last few years as a senior director
                in ANZ Bank. He is currently based in Singapore and handling the
                international operations of Ekobon.
              </p>
              <div>
                <p className="greenHeading">
                  "We all dreamed of working in the corporate world, flying
                  business class, and living a lavish lifestyle. But when the
                  time came, I felt helpless when I knew the cost of my
                  lifestyle to the environment. I didn't think there was a real
                  way I could help fight climate change; But now there is. We
                  found Ekobon as a means for individuals and corporates to
                  reduce their carbon footprint."
                </p>
              </div>
            </div>
          </div>
          <div className="teamMember">
            <div className="teamMemberImg">
              <img src={member2} alt="member" />
            </div>
            <div className="aboutTeamMember">
              <h2>Nirdesh Badjatya</h2>
              <p>
                A Chartered Accountant practising for over a decade. He is the
                director at M&N Associates Pvt Ltd and Esya Capital Private
                Limited. With his unique experience, he is skilled in handling
                Mergers & Acquisition deals, business advisory, strategic
                management and fundraising for a diversified set of clientele
                across multiple industry domains. He is currently based in
                Indore handling the Finance and ESG division of Ekobon.
              </p>
              <div>
                <p className="greenHeading">
                  "Someone should really figure it out". That's what I thought
                  every time I discussed climate change with anyone as a child.
                  And I never knew who that "someone" was. The government, the
                  industries, the scientis? Year later, I realised that "I" have
                  the capability to be the change and since then I have
                  dedicated my life to empowering people to be the change"."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
