import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signin.css";
import Navbar from '../components/Navbar';
import { useState } from "react";
import { ethers } from "ethers";
// import { getCurrentTime } from "../logic/interface";
import { useNavigate } from "react-router-dom";
import {getCurrentTime, signIn } from "../logic/interface";
import abi_text from "./abi.json"


export default function SignUpPage(props) {
  const [walletAddress, setWalletAddress] = useState("No Address")
  const [password_invalid, setPasswordInvalid] = useState(false)
  const [open, setOpen] = useState(false);
  let provider;

  let abi = abi_text
  const navigate = useNavigate()


  // const passInvalidHandler = () =>{
  //   const handleClickToOpen = () => {
  //       setOpen(true);
  //   };
    
  //   const handleToClose = () => {
  //       setOpen(false);
  //   };
  //   return (
  //       <div stlye={{}}>
  //           {/* <Button variant="outlined" color="primary"
  //               onClick={handleClickToOpen}>
  //               Open Demo Dialog
  //           </Button> */}
  //           {handleClickToOpen()};
  //           <Dialog open={open} onClose={handleToClose}>
  //               <DialogTitle>{"Error !!!"}</DialogTitle>
  //               <DialogContent>
  //                   <DialogContentText>
  //                       Error !!!
  //                   </DialogContentText>
  //               </DialogContent>
  //               <DialogActions>
  //                   <Button onClick={handleToClose}
  //                       color="primary" autoFocus>
  //                       Close
  //                   </Button>
  //               </DialogActions>
  //           </Dialog>
  //       </div>
  //   );
  // }

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
    if(props.password === ""){
        alert("Password is empty.")
    }

    let result = await signIn(props.medRecord, props.signer, props.password)
    // let result = await getCurrentTime(medRecord, signer)
    console.log(result)
    if (result === true) {
      navigate('/showDocs')
    }
    else{
      alert("Password is incorrect.")
    }
  }

  function handlePassChange(event) {
    props.setPassword(event.target.value)
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
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={props.password}
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
