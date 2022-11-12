import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
export default function SignUpPage() {
  return (
    <div className="signin-page">
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
              <a class="nav-link active" aria-current="page" href="#">
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

      <div className="sign-in-flex">
        <div className="signin-img">
          <img src={require("../assets/signup.png")} alt="rjgbekgn"></img>
        </div>
        <div className="sign-in-form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="button" class="btn btn-primary">
              Link Metamask Wallet
            </button> <br />
            <button type="submit" class="btn btn-primary" style={{marginTop: 40}}> Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
