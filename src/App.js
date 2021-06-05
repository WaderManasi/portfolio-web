import React, { useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Tooltip, Button } from "@material-ui/core";
//components
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./NotFound";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
//css
import "./App.css";
import About from "./components/About/About";
function App() {
  const [show, setShow] = useState(false);
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShow(true);
    } else setShow(false);
  }
  return (
    <div className="App">
      <div class="mf-social-side-list">
        <ul>
          <li>
            <Tooltip title="GitHub" placement="right">
              <a href="https://www.github.com/wadermanasi" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="LinkedIn" placement="right">
              <a href="https://www.linkedin.com/in/manasiwader" target="_blank">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Instagram" placement="right">
              <a href="https://www.instagram.com" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Email" placement="right">
              <a href="mailto:manasiwader@gmail.com" target="_blank">
                <i class="fa fa-envelope"></i>
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip title="Twitter" placement="right">
              <a href="https://www.twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </Tooltip>
          </li>
        </ul>
      </div>

      <a
        href="#"
        id="myBtn"
        title="Go to top"
        style={{ scrollBehavior: "smooth", display: show ? "block" : "none" }}
      >
        <i className="fas fa-arrow-circle-up bounce"></i>
      </a>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
