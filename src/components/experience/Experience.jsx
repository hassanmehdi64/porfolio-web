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
                <img src=".././assets/3beez.jpg" />
              </div>
              <div className="inner-card">
                <h1>Frontend Developer</h1>

                <p className="details">
                  My role as a Frontend Developer focused on crafting
                  and maintaining dynamic web interfaces using cutting-edge technologies at <a href="https://3beeztech.com/"><span>3Beez</span></a>
                  <p className="joining-date">Nov 2023  –---   March 2024</p>
                </p>
              </div>
            </div>

            <div className="main-card">
              <div className="company-logo">
                <img src=".././assets/webcollection.jpg" />
              </div>
              <div className="inner-card">
                <h1>Laravel Developer</h1>

                <p className="details">
                  As a PHP/Laravel Developer at Web Collection, I specialized in creating
                  and maintaining web applications using PHP and the Laravel framework.<Link to="https://www.linkedin.com/company/cologixs/" target="_blank"><span></span></Link>.
                  <p className="joining-date">Dec 2022 –--- May 2023</p>
                </p>
              </div>
            </div>


            <div className="main-card">
              <div className="company-logo">
                <img src=".././assets/3beez.jpg" />
              </div>
              <div className="inner-card">
                <h1>Full Stack Developer / Trainer</h1>
                <p className="details">

                  As a Full Stack Developer/Trainer at 3Beez Tech, I mastered web dev and training, leading impactful projects and mentoring teammates in diverse tech stacks.
                  <p className="joining-date">Feb 2022 –---  March 2024</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
