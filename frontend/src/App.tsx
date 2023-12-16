import React, {useState} from 'react';
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './Components/Home Page/Home';
import SignUpPage from './Components/Sign-up/Sign-up';
import LoginPage from './Components/Log-in/Log-in';
import Dashboard from './Components/Product/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
