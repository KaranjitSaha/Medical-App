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
        {/* <br /> */}
        <label className="share-pop-label" for="question_text">
          Share your Document With The Doctor:
        </label> <br />
        <label style={{fontFamily: 'Belleza', fontSize: 20, marginTop: 20, fontWeight: 'bold'}}>Metamask Address of Doctor</label> <br />
        <input className="text-meta" type="text" placeholder="Metamask Address"/>
        {/* <input type="text" class="form-control" id="usr" style={{width: 100}} /> */}
        <br />
        <br />
        <button
            className="btn btn-primary btn-lg"
            style={{ marginRight: 10 }}
            onClick={showsucesspop}
          >
            Share Document
          </button>
          <br/>
          <br />
          <br />
          <button
            className="btn btn-primary btn-lg"
            style={{ marginRight: 10 }}
            onClick={closeshareUI}
          >
            Close
          </button>
      </div>
    </div>
  );
};

export default ShareDocUI;
