import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from '../components/Navbar';
export default function SignUpPage() {
  return (
    <div className="signin-page">
     <Navbar></Navbar>

      <div className="sign-in-flex">
        <div className="signin-img">
          <img src={require("../assets/signup.png")} alt="rjgbekgn"></img>
        </div>
        <div className="sign-in-form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
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
            <button type="submit" class="btn btn-primary" style={{marginTop: 40}}> Sign In /Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
