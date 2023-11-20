import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import AlertState from './context/alert/AlertState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <Router basename='/'>
      <AlertState>
      <NoteState>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>

      </Routes>
      </NoteState>
      </AlertState>
    </Router>
    </>
    
  );
}

export default App;
