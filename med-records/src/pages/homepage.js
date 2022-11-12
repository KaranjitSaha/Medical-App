import React from "react";
// import ReactDOM from 'react-dom';
// import {Link} from 'react-router-dom'
import "./homepage.css";
const homepage = () => {
  return (
    <div>
      <div className="navbar">
        <div className="home-btn">
          <div className="app-title">MedRecords</div>
          <div className="logo"></div>
          {/* <div className='plus'></div> */}
          <span className="plus">&#43;</span>
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
        <div className="home-img">
          <img
            src={require("../assets/HomePageDoctor.png")}
            alt="rjgbekgn"
          ></img>
        </div>
      </div>

      <div className="partnerBox">
        <div className="partners"></div>
        <div className="home-img" style={{ marginLeft: 160 }}>
          <img src={require("../assets/Partners.png")} alt="rjgbekgn"></img>
        </div>
      </div>
      <div className="feature-box">
        <div className="feature-title">What you can store?</div>
        <div className="feature-desc">
          Here at MedRecords you can store all your medical related documents
          and reports. Be it your precriptions, your X-ray reports, your medical
          bills, every document can be stored on the blockchain. Documents
          stored will be tamper proof and permanent. Be assured!
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default homepage;
