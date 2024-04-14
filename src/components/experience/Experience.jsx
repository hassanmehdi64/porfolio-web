import React from "react";
import "./style.css";
import { MdDeveloperMode } from "react-icons/md";
import { PiCodeSimple } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

function Experience() {
  return (
    <div>
      <div className="experience-page-back">
        <div className="experience-main">
          <div className="experience-page-text">
            <h1>
              My <span>Experience</span>
            </h1>
            <p>I have extensive experience in full-stack web development, specializing in React, Node.js, Express.js, and Laravel.
              Throughout my career, I've built scalable and efficient web applications, delivering exceptional user experiences.
              I excel in problem-solving and collaborating with teams to turn ideas into innovative digital solutions.</p>
          </div>
          <div className="experience-cards">
            <div className="main-card">
              <div className="company-logo">
                <img src=".././assets/imx.jpg" />
              </div>
              <div className="inner-card">
                <h1>Jounior FullStack Developer</h1>

                <p className="details">
                  Working as a jounior FullStack Developer at <Link to="https://ideometrix.com/" target="_blank"><span>Ideometrix</span></Link>.
                </p>
                <p className="joining-date">04 / jan / 2024</p>
              </div>
            </div>
            <div className="main-card">
              <div className="company-logo">
                <img src=".././assets/cologix.jpg" />
              </div>
              <div className="inner-card">
                <h1>Frontend Developer</h1>

                <p className="details">
                  Worked as a frontend Developer at <Link to="https://www.linkedin.com/company/cologixs/" target="_blank"><span>Cologixs</span></Link>.
                </p>
                <div className="dates">
                  <p className="joining-date">07 / oct / 2023</p>
                  <p className="joining-date">-------------</p>
                  <p className="joining-date">28 / dec / 2023</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
