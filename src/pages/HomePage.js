import React, { useState } from "react";
import features from "../data.json";
import plans from "../plans.json";
import { FormControl } from "@mui/material";

const Radio = ({ value, name, onClick, disabled }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    // Only allow one radio button to be checked at a time.
    for (const radioButton of document.querySelectorAll(
      "input[name='" + name + "']"
    )) {
      if (radioButton !== e.target) {
        radioButton.checked = false;
      }
    }
    setChecked(true);
    onClick(e);
  };

  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={handleClick}
    />
  );
};

function HomePage() {
  const [totalPrice, setTotalPrice] = useState(18500);
  const [discont, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const data = features.features;
  const data2 = plans.plans;

  const handleRadioClick = (e) => {
    e.preventDefault();
    setDiscount(e.target.value);
    const fp = totalPrice - e.target.value;
    console.log(fp);
    setFinalPrice(fp);
  };

  function getStatusClassName(status) {
    switch (status) {
      case "expired":
        return "expired";
      case "recommended":
        return "recommended";
      case "standard":
        return "standard";
      default:
        return ""; // Default class name or no class
    }
  }

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
              <div className={`plan ${getStatusClassName(key.status)}`}>
                <div className="leftContainer">
                  <Radio
                    value={key.total}
                    name="plan"
                    onClick={handleRadioClick}
                    disabled={key.status === "expired"}
                  >
                    {key.name}
                  </Radio>
                  <p>{key.name}</p>
                </div>
                <div className="priceContainer">
                  <p>
                    Total: <span>₹ {key.total}</span>
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
                <p>- ₹ {finalPrice}</p>
              </div>
              <div className="AlertBody">
                <img src="/assets/Icon-Clock.png" alt="" srcset="" />
                <p>Offer valid till 25th March 2023 </p>
              </div>
            </div>

            <div className="TotalContainer">
              <p>Total (Incl. of 18% GST)</p>
              <p className="totalPrice">₹ {discont}</p>
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
