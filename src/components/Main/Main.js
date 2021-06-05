import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="main" id="main">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="child"
      >
        <p className="line">Hey, I am</p>
        <h1 className="name">
          <span>M</span>anasi <span>W</span>ader
        </h1>
        <p className="lin">Web-Developer|Coding|Designer</p>
      </div>

      {/* svg */}
      <svg
        className="custom-shape-divider-bottom-1622639084"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  );
}

export default Main;
