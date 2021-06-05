import React, { useState } from "react";
import "./Portfolio.css";
import aces from "../../images/aces.jpg";
import epic from "../../images/epic-quotes.jpg";
import hotel from "../../images/hotel.jpg";
import weather from "../../images/weather.jpg";
import bank from "../../images/bank.jpg";

//import aces from '../../images/aces-web.PNG'
function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h3>Portfolio</h3>
      <div class="container">
        <input type="radio" id="reset" name="color" />
        <label for="reset">All</label>

        <input type="radio" id="blogs" name="color" />
        <label for="blogs">Blogs</label>

        <input type="radio" id="static" name="color" />
        <label for="static">Static-Projects</label>

        <input type="radio" id="dynamic" name="color" />
        <label for="dynamic">Dynamic</label>

        <div className="tile static">
          <div className="image">
            <img src={epic} />
            <div className="middle">
              <div class="text">
                <b>
                  NPM package: <span style={{ color: "#3f132a" }}>epic-quotes</span>{" "}
                  which fetches inspiring quotes from{" "}
                  <i>
                    <span style={{ color: "#3f132a" }}>Bhagavad-Gita</span>
                  </i>{" "}
                  API
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://github.com/WaderManasi/epic-quotes"
              target="_blank"
            >
              Github <i className="fa fa-github"></i>
            </a>
            <a href="https://www.npmjs.com/package/epic-quotes" target="_blank">
              Live <i className="fas fa-link"></i>
            </a>
          </div>
        </div>

        <div className="tile blogs">
          <div className="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikShsJOYsMDyyovvhaIm52kj2n2zGO377yw&usqp=CAU" />
            <div className="middle">
              <div class="text">
                <b>
                  Article published on GeeksForGeeks: <span style={{ color: "#3f132a" }}>Offline Detection Logic of Progressive Web Apps</span>{" "}
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://www.geeksforgeeks.org/progressive-web-app-offline-support-detection-logic-for-chrome-browser/"
              target="_blank"
            >
              View Article
            </a>
          </div>
        </div>

        <div className="tile static">
          <div className="image">
            <img src={aces} />
            <div className="middle">
              <div class="text">
                <b>
                  Offical Website: <span style={{ color: "#3f132a" }}>Association of Computer Engineering Students, DYPCOE.</span>{" "}
                  
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://github.com/ACES-DYPCOE/ACES-WEBSITE"
              target="_blank"
            >
              Github <i className="fa fa-github"></i>
            </a>
            <a href="https://aces-dypcoeakurdi.web.app/" target="_blank">
              Live <i className="fas fa-link"></i>
            </a>
          </div>
        </div>

        <div className="tile dynamic">
          <div className="image">
            <img src={weather} />
            <div className="middle">
              <div class="text">
                <b>
                  <span style={{ color: "#3f132a" }}>REACT: </span>{" "}
                  Weather Report App
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://github.com/WaderManasi/React-Weather-Report-App"
              target="_blank"
            >
              Github <i className="fa fa-github"></i>
            </a>
            <a
              href="https://react-weather-report-app.herokuapp.com/"
              target="_blank"
            >
              Live <i className="fas fa-link"></i>
            </a>
          </div>
        </div>

        <div className="tile static">
          <div className="image">
            <img src={hotel} />
            <div className="middle">
              <div class="text">
                <b>
                  Frontend: <br/><span style={{ color: "#3f132a" }}>Restaurant Website</span>{" "}
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://github.com/WaderManasi/Restaurant-Project"
              target="_blank"
            >
              Github <i className="fa fa-github"></i>
            </a>
            <a
              href="https://wadermanasi.github.io/Restaurant-Project/"
              target="_blank"
            >
              Live <i className="fas fa-link"></i>
            </a>
          </div>
        </div>

        <div className="tile dynamic">
          <div className="image">
            <img src={bank} />
            <div className="middle">
              <div class="text">
                <b>
                  <span style={{ color: "#3f132a" }}>Banking Website</span>{" "}
                </b>
              </div>
            </div>
          </div>
          <div className="info">
            <a
              href="https://github.com/WaderManasi/GRIP21-Basic-Banking-System"
              target="_blank"
            >
              Github <i className="fa fa-github"></i>
            </a>
            <a
              href="/"
              
            >
              Demo <i className="fas fa-link"></i>
            </a>
          </div>
        </div>

        <div className="tile blogs">
          <div className="image">
            <svg
              fill="#2962FF"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hashnode</title>
              <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
            </svg>
          </div>
          <div className="info">
            <a href="/" target="_blank">
              View Article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
