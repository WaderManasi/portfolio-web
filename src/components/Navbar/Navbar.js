import React from "react";
import "./Navbar.css";

function Navbar() {
  function myFunction() {
    var x = document.getElementById("centered_nav");
    if (x.className === "rc_nav") {
      x.className += " responsive";
    } else {
      x.className = "rc_nav";
    }
  }
  return (
    <div className="navbar" id="navbar">
      <div id="rc_logo">
        <a href="#" style={{ fontFamily: "Dancing Script" }}></a>
      </div>

      <div className="rc_nav" id="centered_nav">
        <a href="#about" title="About me" active>
          About Me
        </a>
        <a href="#skills" title="Skills">
          Skills
        </a>
        <a href="#portfolio" title="Projects & Blogs">
          Portfolio
        </a>
        <a href="#certifications" title="Contact">
          Certifications
        </a>
        <a href="#contact" title="Contact">
          Contact
        </a>
        <a
          href="javascript:void(0);"
          title="Menu"
          style={{ fontSize: 18 }}
          className="icon"
          onclick={myFunction}
        >
          &#9776;
        </a>
      </div>
    </div>
  );
}

export default Navbar;
