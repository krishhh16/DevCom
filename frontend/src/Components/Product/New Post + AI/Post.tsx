import React, { useEffect }  from "react";
import { useState } from "react";

export default function Post(){
    const [postText, setPostText] = useState('')

    return (
        <div style={{minWidth: '66.6%'}}>
            <textarea onChange={(e) => {setPostText(e.target.value)}} style={{width: '50vw', height: '40vh', borderRadius: "10px"}}></textarea>
            <button onClick={() => {console.log(postText); alert('Posted!')}}>Post</button>

        </div>
    )
}