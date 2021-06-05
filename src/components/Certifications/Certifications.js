import React from "react";
import "./Certifications.css";
function Certifications() {
  return (
    <div className="certifications" id="certifications">
      <svg
        className="custom-shape-divider-top-1622640486"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
          className="shape-fill"
        ></path>
      </svg>
      <h2 style={{ color: "#02040f" }}>Certifications</h2>
      <div data-aos="fade-down" data-aos-duration="1000" className="container arrange row">
        <div>
          <div class="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8PGj_Kw5eXdWo3xcvEDSpV5a3lXODLc20Dg&usqp=CAU"
              alt="Avatar"
            />
            <div class="container">
            <p>
                <b>
                  <a href="" >Responsive Web Design</a>
                </b>
              </p>
              <p>
                <b>
                  <a href="">Frontend Tools</a>
                </b>
              </p>
            
            </div>
          </div>
        </div>

        <div>
          <div class="card">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
            />
            <div class="container">
              <p>
                <b>
                  <a href="https://media.geeksforgeeks.org/courses/certificates/5ba553c3b03d24ad56e2a4668aa156f8.pdf" target="_blank">Data-Structures & Algorithms</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div>
        <div class="card">
            <img
              src="data:image/png;base64,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"
              alt="Avatar"
            />
            <div class="container">
              <p>
                <b>
                  <a href="">Python Specialization</a>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div><div class="card">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NABwA62QNABoADBgEDhoNABg0OD8ImkgA72YFv1UnLDIAABC4ubvCw8Xv7/AAAAj29vaPkZOcnaAAABIKdjsHnkmztLW+v8ESGSLs8eGCAAAA/0lEQVR4nO3cOQ7CMBBAUcDsENaEnftfkwYapkEWCsR6r80U/nIVR3GvBwAAAAAAAAAAAAAAAAAAANCeYZ62ljdLm3d1nKrDUJq9no0yTVoKvDeDd4eQmI5haH96BZ6rfo7xpZ3E6SKsfbBNoXAXp9bPTZxcqnGOajXvSuEybw8VKlSoUKFChQoVKlSoUKFChQoVKlSoUOHvC68puJVV2OyD+HGj04WfUahQoUKFChUqVKhQoUKFCrteWP47fvnnNOWftSlUqFChQoUKFSpUqFChQoUKFSpUqFChwqzCP/8fv/w7Fcq/F+Mb/vxuEwAAAAAAAAAAAAAAAAAAAKDTHoDCYDr8qkOBAAAAAElFTkSuQmCC"
              alt="Avatar"
            />
            <div class="container">
            <p>
                <b>
                  <a href="https://www.hackerrank.com/certificates/f1386213287f" target="_blank">C</a>
                </b>
              </p>
            <p>
                <b>
                  <a href="https://www.hackerrank.com/certificates/1d6b871aef6b" target="_blank">C++</a>
                </b>
              </p>
              <p>
                <b>
                  <a href="https://www.hackerrank.com/certificates/903659f57a74" target="_blank">Java</a>
                </b>
              </p>
            
            </div>
          </div></div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Certifications;
