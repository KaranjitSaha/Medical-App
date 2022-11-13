// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import { useState } from "react";
import Homepage from './pages/homepage'
import SignUpPage from './pages/signup';
import ShowDocs from './pages/showDocs';



function App() {

  const [medRecord, setMedRecord] = useState("")
  const [signer, setSigner] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Router className="App">
      
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/homepage" />}></Route>
        <Route exact path='/homepage' element={< Homepage />}></Route>
        <Route exact path='/signup' element={< SignUpPage medRecord={medRecord} setMedRecord={setMedRecord} signer={signer} setSigner={setSigner}
        password={password} setPassword={setPassword} />}></Route>
        <Route exact path='/showDocs' element={< ShowDocs medRecord={medRecord} signer={signer} password={password}/>}></Route>

      </Routes>
      
    </Router>
  );
}

export default App;
