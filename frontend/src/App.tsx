import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './Components/Home Page/Home';
import SignUpPage from './Components/Sign-up/Sign-up';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
