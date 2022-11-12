// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Homepage from './pages/homepage'
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';


function App() {
  return (
    <Router className="App">
      
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/homepage" />}></Route>
        <Route exact path='/homepage' element={< Homepage />}></Route>
        <Route exact path='/signin' element={< SignInPage />}></Route>
        <Route exact path='/signup' element={< SignUpPage />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
