import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="Hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header></Header>
        {/*The Best Ad*/}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        {/*Hero Heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In Here We will you to shape and build your ideal body and live up
              your life to fullest
            </span>
          </div>
        </div>

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/*Hero Button*/}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/*RIGHT */}
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt=""></img>
          <span>Heart Rate</span>
          <span>116bpm</span>
        </motion.div>
        {/*hero img*/}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image_back"
        />
        {/**Calaories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="cal"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>222kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
