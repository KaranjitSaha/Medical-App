import React from "react";
import { useState } from "react";
import "./shareUI.css";
import SuccessPop from "./SuccessPop.js";


const ShareDocUI = (props) => {
  
  const [SucessShare, setSuccessShare] = useState(false);

  const showsucesspop = () => {
    setSuccessShare(true)
  }

  const closeshareUI = () => {
    props.exitshareUI();
  };

  return (
    <div>
      {SucessShare && (<SuccessPop closeshareUI={closeshareUI}/>)} 
      <div className="backdrop" onClick={props.exitQuesUI} />
      <div className="share-pop">
        <label className="share-pop-label" for="question_text">
          Share your Document With The Doctor:
        </label> <br />
        <label>Metamask Address of Doctor</label> <br />
        <input type="text" placeholder="Metamask Address"/>
        <br />
        <br />
        <button
            className="btn btn-primary"
            style={{ marginRight: 10 }}
            onClick={showsucesspop}
          >
            Share Document
          </button>
      </div>
    </div>
  );
};

export default ShareDocUI;
