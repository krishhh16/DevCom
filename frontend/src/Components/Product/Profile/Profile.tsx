import React, {useState, useEffect}  from "react";
import { useNavigate } from "react-router-dom";


export default function Profile(){
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [isLoginT, setTLogin] = useState(false)
    const [isLoginL, setLLogin] = useState(false)
    const navigator = useNavigate()


    useEffect(() => {
      async function fetchUserData(){
        const authToken = localStorage.getItem("authToken");
        const headers: Record<string, string> = {
                'Content-Type': 'application/json',
              };
        console.log(authToken)


        if (authToken !== null) {
             headers['authorization'] = authToken;
            }
        const response:any = await fetch('http://localhost:5000/users/getUserInfo', {
          method:"POST",
          headers
        })
        const resJson = await response.json()
        if (resJson.auth === false){
          alert('Invalid authentication attempt, please login again and try again later');
          navigator('/login')
        }else {
          setUserName(resJson.userName);
          setEmail(resJson.email);
          setLLogin(resJson.linkedinLogin);
          setTLogin(resJson.twtterLogin)
        }
      }
      fetchUserData();
    }, [])

    return (
        <div style={{ margin: "10px"}}>
          <h1>Hey! it's nice to see you back {userName}</h1>
          <h3>Your Email address is {email}</h3>
          <h3>LinkedIn login: {isLoginL ? (<b>Yes</b>) : (<b>No</b>)}  </h3>
          <h3>Twitter login: {isLoginT ? (<b>Yes</b>) : (<b>No</b>)}  </h3>
        </div> 
      )
}