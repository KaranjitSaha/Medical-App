import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from '../components/Navbar';
import { useState } from "react";
import { ethers } from "ethers";
import { getCurrentTime, signIn } from "../logic/interface";
import abi_text from "./abi.json"


export default function SignUpPage() {
  const [walletAddress, setWalletAddress] = useState("No Address")
  const [password, setPassword] = useState("")
  const [medRecord, setMedRecord] = useState("")
  const [signer, setSigner] = useState("")

  let provider;

  let abi = abi_text

  // async function requestAccount() {
  //   console.log("Requesting account ....")
  //   // Checking if Meta Mask Extension is existing
  //   if(window.ethereum) {
  //     console.log('Meta Mask is detected');

  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setWalletAddress(accounts)
  //     } catch (error) {
  //       console.log("Error connecting ...")
  //     }
  //   } else {
  //     console.log('Meta Mask not detected');
  //   }
  // }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum)

      await provider.send("eth_requestAccounts", []);
      let sgn = provider.getSigner()
      setSigner(sgn)
      setWalletAddress(await sgn.getAddress())

      setMedRecord(new ethers.Contract("0x5fbdb2315678afecb367f032d93f642f64180aa3", abi, provider))
    }
  }

  async function login() {
    if (medRecord === "") {
      console.log("MedRecord Error")
    }
    if(signer === "") {
      console.log("Signer Error")
    }
    let result = await signIn(medRecord, signer, password)
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
          <img src={require("../assets/signup.png")} alt="rjgbekgn"></img>
        </div>
        <div className="sign-in-form">
          <form>
            <div class="form-group">
              <label class="address" for="exampleInputEmail1">{walletAddress}</label>
            </div>
            <button type="button" class="btn btn-primary" onClick={connectWallet}>
              Link Metamask Wallet
            </button> <br />
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={password}
                onChange={handlePassChange}
              />
              <button type="button" class="btn btn-primary" onClick={login}>
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
