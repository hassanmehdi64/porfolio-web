import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Work() {
  return (
    <div>
      <div className="work-page-back">
        <div className="work-page-main">
          <div className="work-page-text">
            <h1>
              My <span>Work</span>
            </h1>

          </div>
          <div className="my-projects">

            <div className="work-image-right">
              <div className="right-image1">
                <img src=".././assets/bnb10.png" alt="" />
                <div className="right-image-overlay">
                  <h1>
                    BNB10
                  </h1>
                  <p>BNB10 Binance Smart Chain Website</p>
                  <Link to="https://bnb10.netlify.app/" target="_blank"><button className="click-me">Click me</button></Link>
                </div>
              </div>

              <div className="work-image-right">
                <div className="right-image1">
                  <img src=".././assets/khadi.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      Khadi
                    </h1>
                    <p>Khadi website</p>
                    <Link to="https://khadiweb.netlify.app/" target="_blank"><button className="click-me">Click me</button></Link>
                  </div>
                </div>

                <div className="right-image2">
                  <img src=".././assets/travel.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      Travel &<span>Tours</span>
                    </h1>
                    <p>static website</p>
                    <Link to="https://stupendous-pixie-115659.netlify.app/" target="_blank"><button className="click-me">Click me</button></Link>
                  </div>
                </div>

                <div className="right-image2">
                  <img src=".././assets/porfolio.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      Porfolio
                    </h1>
                    <p>Client Porfolio Website</p>
                    <Link to="https://angel-cisneros.netlify.app/" target="_blank"><button className="click-me">Click me</button></Link>
                  </div>
                </div>

                <div className="right-image2">
                  <img src=".././assets/lpage.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      Landing Page
                    </h1>
                    <p>Landing page for e for a chatting android application</p>
                    <Link to="https://autoto-app.com/autoto-app-english.html" target="_blank"><button className="click-me">Click me</button></Link>
                  </div>
                </div>

                <div className="right-image2">
                  <img src=".././assets/crypto.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      Landing Page
                    </h1>
                    <p>Landing page for handling crypto projects</p>
                    <Link to="https://jaguarcryptofamily.com/" target="_blank">
                      <button className="click-me">Click me</button></Link>
                  </div>
                </div>

                <div className="right-image4">
                  <img src=".././assets/vila.png" alt="" />
                  <div className="right-image-overlay">
                    <h1>
                      App <span>Villa</span>
                    </h1>
                    <p>App villa a static website</p>
                    <Link to="https://appvillaweb.netlify.app/" target="_blank"><button className="click-me">Click me</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="view-more">
            <Link to="/viewmore" target="_blank">
              <button className="view-more-btn">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
