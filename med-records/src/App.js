// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Homepage from './pages/homepage'
import SignUpPage from './pages/signup';
import ShowDocs from './pages/showDocs';



function App() {
  return (
    <Router className="App">
      
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/homepage" />}></Route>
        <Route exact path='/homepage' element={< Homepage />}></Route>
        <Route exact path='/signup' element={< SignUpPage />}></Route>
        <Route exact path='/showDocs' element={< ShowDocs />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
