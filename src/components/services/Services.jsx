import React from "react";
import "./style.css";
import { MdDeveloperMode } from "react-icons/md";
import { PiCodeSimple } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

function Services() {
  return (
    <div className="services-page-back">
      <div className="services-main">
        <div className="services-page-text">
          <h1>My <span>Services</span></h1>
          <p>I'm your go-to web developer for creating stunning websites that excel in both design and functionality. With expertise in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Laravel, I specialize in crafting engaging user interfaces and efficient backend systems. Whether you need a captivating frontend, a robust backend, or a seamless full-stack solution, I've got you covered. Let's work together to elevate your online presence and achieve your digital goals!</p>
        </div>
        <div className="services-cards">
          <div className="card">
            <MdDeveloperMode className="icon" />
            <h1>Frontend Development</h1>
            <p>I specialize in crafting captivating user interfaces using HTML, CSS, and React.js, Next Js Tailwind CSS, Bootstrap ensuring an immersive user experience.</p>
          </div>
          <div className="card">
            <FaLaptopCode className="icon" />
            <h1>Backend Development</h1>
            <p>Need a strong backend? I excel in Node.js, Express.js,Mongo DB and Laravel, MySQL DB to build efficient systems that support your project's goals.</p>
          </div>
          <div className="card">
            <PiCodeSimple className="icon" />
            <h1>Full Stack Development</h1>
            <p>From frontend to backend, I provide comprehensive solutions that cover all aspects of your project, ensuring seamless integration and exceptional performance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
