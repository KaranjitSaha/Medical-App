import React from "react";
import { useState } from "react";
import "./addDocUI.css";

const AddDocUI = (props) => {
  const closeaddDocUI = () => {
    props.exitaddUI();
  };

  return (
    <div>
      <div className="backdrop" onClick={props.exitQuesUI} />
      <div className="share-pop">
        <label className="share-pop-label" for="question_text">
          Add New Document
        </label>{" "}
        <br />
        <label>Doctor Name</label> <br />
        <input type="text" placeholder="Doctor Name" />
        <br />
        <br />
        <label>Domument Name</label> <br />
        <input type="text" placeholder="Doc Name" />
        <label>Type of Document</label> <br />
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Medical Prescription
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Test Report
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Test Prescription
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Medical Bill
        </label>
        <br />
        <div class="mb-2">
          <label for="formFile" class="form-label">
            Upload Your Document
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>

        <br/>
        <br/>
        <button
          className="btn btn-primary"
          style={{ marginRight: 10 }}
          onClick={closeaddDocUI}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default AddDocUI;
