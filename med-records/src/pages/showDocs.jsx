import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import "./showDocs.css";

export default function ShowDocs() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="whole-page">
        <div className="doc-buttons">
          <button className="btn btn-primary" style={{ marginBottom: 10 }}>
            Share to doctor <span class="material-symbols-outlined">share</span><i className="btn-share"></i>
          </button>
          <button className="btn btn-primary">
            Add Doc <span class="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="card-section">
        <Card header="Karan" title="Saha" description="Mera naam hai"></Card>
        <Card></Card>
        <Card></Card>

        </div>
      </div>
    </div>
  );
}
