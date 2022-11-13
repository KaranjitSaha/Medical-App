import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import "./showDocs.css";
import ShareDocUI from '../components/shareDocUI';
import AddDocUI from '../components/AddDocUI';
import { getMetaData, getTokenList } from "../logic/interface";

export default function ShowDocs(props) {

  const [sharedDocs, setSharedDocs] = useState([])

  useEffect(() => {
    getTokenList(props.medRecord, props.signer).then(values => {
      let metaList = []
      values.forEach((it) => {
        metaList.push(getMetaData(props.medRecord, props.signer, it, props.password))
      })
      if (metaList.length !== sharedDocs.length) {
        setSharedDocs(metaList)
      }
      console.log("Hello")

    })
  }, [sharedDocs])

  const [shareDocSelected, setShareDocSelected] = useState(false);
  const [addDocSelected, setAddDocSelected] = useState(false);

  const shareDocHandler = () => {
    setShareDocSelected(true);
  }

  const exitshareUI = () => {
    setShareDocSelected(false);
  }

  const exitaddUI = () => {
    setAddDocSelected(false);
  }

  const addDocHandler = () => {
    setAddDocSelected(true);
  }

  return (
    <div>
      <Navbar></Navbar>
      {shareDocSelected && (<ShareDocUI exitshareUI={exitshareUI} />)}
      {addDocSelected && (<AddDocUI exitaddUI={exitaddUI} sharedDocs={sharedDocs} />)}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: 25, alignContent: "center" }}>
          <b style={{fontFamily: "Courier Prime", fontSize: 30}}>View Your Documents</b>    
        </p>
      </div>

      <div className="whole-page">
        <div className="doc-buttons">
          <button
            className="btn btn-primary btn-lg"
            style={{ marginBottom: 10 }}
            onClick={shareDocHandler}
          >
            <i className="fa fa-share-alt" aria-hidden="true"></i>
          </button>
          <button className="btn btn-primary btn-lg" onClick={addDocHandler}>
            <i class="fa fa-plus"></i>
          </button>
        </div>

        <div className="card-section .mx-auto">
          <div class="col d-flex justify-content-center">
            {
              sharedDocs.forEach((value) => {
                <Card
                  name={value.name}
                  time={value.time}
                  typeofdoc={value.group}
                  issue={value.issue}
                  doctorName={value.doctorName} ></Card>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
