import React from "react";
import { plansData } from "../../data/plansData";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plan-blur"></div>
      <div className="blur plan-blur2"></div>

      <div className="Program-header">
        <span className="stroke-text">Ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now with us</span>
      </div>
      {/*Plans Card*/}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> &#x20B9; {plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benifits -></span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
