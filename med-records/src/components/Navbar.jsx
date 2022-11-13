import React from "react";
const Navbar = ()=>{
    return(
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div className="app-title">MedRecords</div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" style={{ marginLeft: 650 }}>
              <a class="nav-link active" aria-current="page" href="/homepage" >
                Home
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link disabled">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;