import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
export default function SignInPage() {
    return (
        <div className="signin-page">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div className="app-title">MedRecords
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav" style={{ marginLeft: 650 }}>
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">About Us</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link disabled">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav >


            <div className="sign-in-flex">
                <div className="signin-img">
                    <img
                        src={require("../assets/signin.png")}
                        alt="rjgbekgn"
                    ></img>
                </div>
                <div className="sign-in-form"> hello</div>
            </div>
        </div >
    );
}   