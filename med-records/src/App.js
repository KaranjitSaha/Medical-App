// import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import Homepage from './pages/homepage'
// import CollapsibleExample from './pages/Navbar';

function App() {
  return (
    <Router className="App">
      
      <Routes>
        <Route exact path='/' element={<Navigate replace to="/homepage" />}></Route>
        <Route exact path='/homepage' element={< Homepage />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
