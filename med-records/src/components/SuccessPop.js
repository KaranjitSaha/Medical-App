import React from "react";
import { useState } from "react";
import './sucessUI.css'

const SuccessPop = (props) => {


    const exitUI = () =>{
        props.closeshareUI()
    }

    return (
        <div>
            {/* <div className="backdrop" onClick={props.exitQuesUI} /> */}
      <div className="sucess-pop">
            <h2 style={{marginTop: 30, marginRight: 30, marginLeft: 30, marginBottom: 20}}>Successfully shared the document with doctor!</h2><br /> 
            <img src={require("../assets/check-share.png")} alt="" style={{width: 200, height: 200}} />
        <br />
        <button
            className="btn btn-primary btn-lg"
            style={{ marginRight: 10}}
            onClick={exitUI}
            style={{marginTop: 70}}
          >
            Close
          </button>
      </div>
        </div>
    );
}

export default  SuccessPop;