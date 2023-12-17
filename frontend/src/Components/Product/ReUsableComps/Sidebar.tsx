import React from "react";
import { Link } from "react-router-dom";
import "../MainApp.css"

export default function Sidebar(){
    return (
        <div className="App" style={{minWidth: '33.3%'}}>
        <nav className="Sidebar">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/app">Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
}