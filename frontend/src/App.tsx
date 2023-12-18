import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import HomePage from './Components/Home Page/Home';
import SignUpPage from './Components/Sign-up/Sign-up';
import LoginPage from './Components/Log-in/Log-in';
import MainApp from './Components/Product/MainApp';
import Dashboard from './Components/Product/Dashboard/Dashboard';
import Post from './Components/Product/New Post + AI/Post';
import Profile from './Components/Product/Profile/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/app' element={<MainApp component={<Post/>} />}/>
        <Route path='/profile' element= {<MainApp component={<Profile/>}/>} />
      </Routes>
    </Router>
  )
}

export default App;
