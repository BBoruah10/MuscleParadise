import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm("service_p7nlcwp", "template_ch0x7pe", form.current, {
        publicKey: "tXWck_Z1r7Y_hhdPE",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US ?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container" onSubmit={handleSubmit}>
          <input
            ref={form}
            type="email"
            name="user_email"
            placeholder="Enter your Email"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
