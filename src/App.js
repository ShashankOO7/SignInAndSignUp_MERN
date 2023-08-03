import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;

