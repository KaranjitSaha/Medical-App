import React from "react";
import { useState } from "react";
import "./addDocUI.css";
import { mintMedRecord } from "../logic/interface";
import { uploadFileIPFSWithProgress } from "../logic/put-files.mjs";

const AddDocUI = (props) => {
  const closeaddDocUI = () => {
    uploadFileIPFSWithProgress(forum.file)
    // props.setSharedDocs((oldArray) => [...oldArray, {
    //   'group': forum['type'],
    //   'extension': forum['extension'],
    //   'name': forum['DocumentName'],
    //   'doctorName': forum['DoctorName']
    // }])

    // mintMedRecord(props.medRecord, props.signer,)
    props.exitaddUI();
  };

  let showFile = async (e) => {
    // e.preventDefault()
    // let type = e.target.files[0].type
    // const reader = new FileReader()
    // reader.onload = async (e) => {
    //   const text = (e.target.result)
      setForum({ ...forum, 'file': e.target.files[0] , 'extension': e.target.files[0].name })
      // console.log(e)
      // const blob = new Blob([new Uint8Array(e.target.result)], { type: type });
      // console.log(blob);
    // }
    // reader.readAsText(e.target.files[0])
  }

  const [forum, setForum] = useState({
    'DoctorName': "",
    "DocumentName": "",
    "type": "",
    "extension": "",
    "file": ""
  })

  let updateDoctorName = (event) => {
    setForum({ ...forum, 'DoctorName': event.target.value })
  }

  let updateDocumentName = (event) => {
    setForum({ ...forum, 'DocumentName': event.target.value })
  }

  let typeChange = (event) => {
    setForum({ ...forum, type: event.currentTarget.value })
  }

  return (
    <div>
      <div className="backdrop" onClick={props.exitQuesUI} />
      <div className="share-pop">
        <label className="share-pop-label" for="question_text">
          Add New Document
        </label>{" "}
        <br />
        <label>Doctor Name</label> <br />
        <input type="text" placeholder="Doctor Name" value={forum.DoctorName} onChange={updateDoctorName} />
        <br />
        <br />
        <label>Domument Name</label> <br />
        <input type="text" placeholder="Doc Name" value={forum.DocumentName} onChange={updateDocumentName} />
        <label>Type of Document</label> <br />
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value="Medical Prescription"
          checked={forum.type === "Medical Prescription"}
          onChange={typeChange}

        />
        <label class="form-check-label" for="flexRadioDefault1">
          Medical Prescription
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          value="Test Report"
          checked={forum.type === "Test Report"}
          onChange={typeChange}

        />
        <label class="form-check-label" for="flexRadioDefault2">
          Test Report
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault3"
          value="Test Prescription"
          checked={forum.type === "Test Prescription"}
          onChange={typeChange}

        />
        <label class="form-check-label" for="flexRadioDefault3">
          Test Prescription
        </label>
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault4"
          value="Medical Bill"
          checked={forum.type === "Medical Bill"}
          onChange={typeChange}

        />
        <label class="form-check-label" for="flexRadioDefault4">
          Medical Bill
        </label>
        <br />
        <div class="mb-2">
          <label for="formFile" class="form-label">
            Upload Your Document
          </label>
          <input className="form-control" type="file" id="formFile" onChange={(e) => {
            showFile(e)
          }} />
        </div>

        <br />
        <br />
        <button
          className="btn btn-primary"
          style={{ marginRight: 10 }}
          onClick={closeaddDocUI} // raddi ka fnc
        >
          Confirm
        </button>

        {/* close button */}
        <br/>
        <button
          className="btn btn-primary"
          style={{ marginRight: 10 }}
          onClick={closeaddDocUI}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddDocUI;
