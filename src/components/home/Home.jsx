import React from "react";
import "./style.css"
function Home() {
  return (
    <div className="home-page-back">
      <div className="home-page">
        <div className="home-page-left">
          <h4>Hello,Welcome</h4>
          <h1>I am <span id='myName'>Hassan Mehdi</span> a Passionate Web Developer,</h1>
        </div>
        <div className="home-page-right">
          <img src=".././my-pic/me.png" alt="loading..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
