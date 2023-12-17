import React  from "react";
import { useState } from "react";
export default function Post(){
    const [postText, setPostText] = useState('')
    return (
        <div style={{minWidth: '66.6%'}}>
            <textarea onChange={(e) => {setPostText(e.target.value)}}></textarea>
            <button onClick={() => {console.log(postText); alert('Posted!')}}>Post</button>
        </div>
    )
}