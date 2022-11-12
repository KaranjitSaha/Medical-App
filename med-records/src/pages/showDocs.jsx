import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useState } from "react";
import "./showDocs.css";
import ShareDocUI from '../components/shareDocUI';
import AddDocUI from '../components/AddDocUI';

export default function ShowDocs() {
  

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
      {addDocSelected && (<AddDocUI exitaddUI={exitaddUI} />)}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontSize: 25, alignContent: "center" }}>
          <b>View Your Documents</b>    
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
            <Card
            name="Karan"
            time="Saha"
            typeofdoc="Mera naam hai"
            issue="28/07/2022"
            doctorName="Dr. Chomu" ></Card>
        </div>
          
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
}
