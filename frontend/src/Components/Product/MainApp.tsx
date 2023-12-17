import React from "react";
import Sidebar from "./ReUsableComps/Sidebar";
import Post from "./New Post + AI/Post";
import Unauthorized from "../Unauthorized/Unauthorized";
export default function MainApp() {
    return (
      <div>
        {localStorage.getItem("authToken") ? (
            <div style={{display: "flex"}}>
                <Sidebar/>
                <Post/>
            </div>
        ) : (
            <div>
                <Unauthorized/>
            </div>
        )}
      </div>  
    )}