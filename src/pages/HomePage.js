import React from "react";
import features from "../data.json";
import plans from "../plans.json";
import { Radio, FormControl } from "@mui/material";

function HomePage() {

  const data = features.features;
  const data2 = plans.plans;
  return (
    <div className="HomePage">
      <div className="leftPanel">
        <div className="MainLockUp">
          <div className="mainTitle">
            <p>Access curated courses worth</p>
            <p>
              ₹<span className="strikeText">18,500</span> at just{" "}
              <span className="highLightText"> ₹ 99</span> per year!
            </p>
          </div>
          <div className="features_list">
            {data.map((key) => (
              <div className="feature">
                <img src={key.icon} />
                <p>{key.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rightPanel">
        <div className="form">
          <div className="ProgressBar">
            <div className="Stage1">
              <p className="icon">1</p>
              <p className="text">Sign Up</p>
            </div>
            <div className="Stage2">
              <p className="icon">2</p>
              <p className="text">Subscribe</p>
            </div>
          </div>
          <div className="FormHeader">
            <p>Select your subcription plan</p>
          </div>
          <div className="InputContainer">
            {data2.map((key) => (
              <div className="plan">
                <div className="leftContainer">
                  <Radio value={key.id} />
                  <p>{key.name}</p>
                </div>
                <div className="priceContainer">
                  <p>
                    Total: <span>{key.total}</span>
                  </p>
                  <p>{key.pm}/mo</p>
                </div>
              </div>
            ))}
          </div>
          <div className="SummaryContainer">
            <div className="TextContainer">
              <p>Subscription Fee</p>
              <p> ₹18,500</p>
            </div>
            <div className="Alert">
              <div className="AlertHeader">
                <p>Limited Time Offer</p>
                <p>₹ price</p>
              </div>
              <div className="AlertBody">
                <img src="/assets/Icon-Clock.png" alt="" srcset="" />
                <p>Offer valid till 25th March 2023 </p>
              </div>
            </div>

            <div className="TotalContainer">
              <p>Total (Incl. of 18% GST)</p>
              <p className="totalPrice">₹ Total Price</p>
            </div>

            <div className="ButtonContainer">
              <button className="CancelButton">CANCEL</button>
              <button className="SubmitButton">PROCEED TO PAY</button>
            </div>

            <div className="IconContainer">
              <img src="/assets/Razorpay-Icon.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
