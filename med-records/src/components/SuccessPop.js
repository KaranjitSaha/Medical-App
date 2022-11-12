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
            <h1 style={{marginTop: 60, marginRight: 30, marginLeft: 30}}>Successfully shared the doument with doctor! paancho</h1>
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