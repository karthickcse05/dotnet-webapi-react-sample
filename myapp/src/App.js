import logo from './logo.svg';
import './App.css';
import {ExamCentre} from './examcentre'
import {ExamOwner} from './examowner'
import {Home} from './homepage'
import {BrowserRouter,Route,Routes,NavLink} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h3 className='d-flex justify-content-center m-3'>
        Welcome to View Exam Centres !!!
      </h3>
      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
      <ul className="navbar-nav">
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to="/home">Home</NavLink>
        </li>
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to="/examcentre">ExamCentre</NavLink>
        </li>
        <li className='nav-item m-1'>
          <NavLink className="btn btn-light btn-outline-primary" to="/examowner">ExamOwner</NavLink>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/examcentre' element={<ExamCentre/>}></Route>
        <Route path='/examowner' element={<ExamOwner/>}></Route>
      </Routes>
      </div>
      </BrowserRouter>
   
  );
}

export default App;
