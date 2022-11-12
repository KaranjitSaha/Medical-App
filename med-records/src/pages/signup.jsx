import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from '../components/Navbar';
import { useState } from "react";
import { ethers } from "ethers";
import { getCurrentTime, signIn } from "../logic/interface";
import abi_text from "./abi.json"


export default function SignUpPage(props) {
  const [walletAddress, setWalletAddress] = useState("No Address")
  const [password, setPassword] = useState("")

  let provider;

  let abi = abi_text

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum)

      await provider.send("eth_requestAccounts", []);
      let sgn = provider.getSigner()
      props.setSigner(sgn)
      setWalletAddress(await sgn.getAddress())

      props.setMedRecord(new ethers.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3", abi, provider))
    }
  }

  async function login() {
    if (props.medRecord === "") {
      console.log("MedRecord Error")
    }
    if(props.signer === "") {
      console.log("Signer Error")
    }
    let result = await signIn(props.medRecord, props.signer, password)
    // let result = await getCurrentTime(medRecord, signer)
    console.log(result)
  }

  function handlePassChange(event) {
    setPassword(event.target.value)
  }

  return (
    <div className="signin-page">
      <Navbar></Navbar>

      <div className="sign-in-flex">
        <div className="signin-img">
          <img src={require("../assets/signin.png")} alt="rjgbekgn"></img>
        </div>
        <div className="sign-in-form">
          <form>
            <div class="form-group">
              <label class="address" for="exampleInputEmail1">{walletAddress}</label>
            </div>
            <br />
            <button type="button" class="btn btn-primary" onClick={connectWallet} style={{marginLeft:10, fontFamily: 'Open Sans'}}>
              Link Metamask Wallet
            </button> 
            <br />
            <br />
            <label for="exampleInputPassword1" style={{fontFamily: "sans-serif"}}>Enter Password</label>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={handlePassChange}
              />

              <br />
              <br />
              <button type="button" class="btn btn-primary btn-lg" style={{marginLeft:10, backgroundColor: '#4461F2', fontFamily: "Open Sans"}} onClick={login}>
                Login / Signup
              </button> <br />
            </div>
            <div class="form-group form-check">
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
