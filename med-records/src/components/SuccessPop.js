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
            <h2 style={{marginTop: 60, marginRight: 30, marginLeft: 30}}>Successfully shared the document with doctor!</h2>
            <img src="../assets/check-share.png" alt="" style={{width: 200, height: 200}} />

        <br />
        <button
            className="btn btn-primary btn-lg"
            style={{ marginRight: 10 }}
            onClick={exitUI}
            style={{marginTop: 50}}
          >
            Close
          </button>
      </div>
        </div>
    );
}

export default  SuccessPop;