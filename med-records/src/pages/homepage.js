import React from "react";
// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom'
import "./homepage.css";
import Footer from '../components/Footer'
const homepage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="home-btn">
          <div className="app-title">MedRecords</div>
          {/* <div className="logo"></div> */}
          {/* <div className='plus'></div> */}
          {/* <span className="plus">&#43;</span> */}
        </div>

        <div className="options">
          <div className="option">Home</div>
          <div className="option">About Us</div>
          <div className="option">Reviews</div>
        </div>

        <button type="button" className="login-btn">
          Login/ Register
        </button>
      </div>

      <div className="home-desc">
        <div>
          <p className="titlePagep">
            {" "}
            An efficient and ease-of-use to manage and store your medical
            records.
          </p>
          <p className="titleDescription">
            A Web3 based platform for storing all your medical records and bills
            at one place.
          </p>
          <button className="get-started">Get Started</button>
        </div>
        <div className="home-img" style={{marginLeft:200}}>
          <img
            src={require("../assets/HomePageDoctor.png")}
            alt="rjgbekgn"
          ></img>
        </div>
      </div>

      <div className="partnerBox">
        <div className="partners"></div>
        <div className="home-img" style={{ marginLeft: 120 }}>
          <img src={require("../assets/Partners.png")} alt="rjgbekgn"></img>
        </div>
      </div>
      <div className="feature-box">
        <div className="home-img" style={{ marginLeft: 120 }}>
          <img src={require("../assets/Features.png")} alt="rjgbekgn"></img>
        </div>
      </div>
      <div>
      <div className="home-img" style={{ marginLeft: 240 }}>
          <img src={require("../assets/Testimonials.png")} alt="rjgbekgn"></img>
        </div>
      </div>
      < Footer />
    </div>

    // footer code
    
  );
};

export default homepage;
