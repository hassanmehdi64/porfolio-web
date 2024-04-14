import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page-back">
      <div className="about-page-main">
        <div className="about-page-left">
          <img src=".././my-pic/me.png" alt="Aliyas Muhammad" />
        </div>
        <div className="about-page-right">
          <h1>About <span>Me</span></h1>
          <p>
            Hello! I'm Hassan Mehdi, a full-stack web developer proficient in React, Tailwind CSS, Next.js, Laravel, Express.js, MongoDB, and Node.js. I specialize in crafting elegant and user-centric web applications.
          </p>
          <p>
            With a focus on enhancing user experiences, I leverage my expertise in both front-end and back-end technologies to build scalable and efficient solutions. Let's connect and discuss how we can bring your ideas to life.
          </p>
          <Link to="/contact">
            <button>Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
