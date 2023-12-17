import React, { useEffect }  from "react";
import { useState } from "react";

interface UserData {
    userName: String,
    email: String
}
export default function Post(){
    const [postText, setPostText] = useState('')
    const [userData, setUserData] = useState(Object)

    useEffect(() => {
        setUserData({userName: 'Krishna'})
    }, [])

    return (
        <div style={{minWidth: '66.6%'}}>
            <textarea onChange={(e) => {setPostText(e.target.value)}} style={{width: '50vw', height: '40vh', borderRadius: "10px"}}></textarea>
            <button onClick={() => {console.log(postText); alert('Posted!')}}>Post</button>
            {
                userData ? (
                    <div>upload as {userData.userName}</div>
                ) : (
                    <div></div>
                )
            }
        </div>
    )
}