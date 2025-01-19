import React from "react";
import { useCookies } from "react-cookie";
import {useState, useEffect} from "react"
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { ToastContainer, toast } from "react-toastify";


export default function Home(){
  const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const [cookies, removeCookie] = useCookies([]);
    const [inputtoken, setinputtoken] = useState({
      token: `${token}`
    })
    
    const [username, setUsername] = useState("");
    
    useEffect(() => {
      const verifyCookie = async () => {
        if (!token) {
          window.location.href = "http://localhost:3000/login";
          // console.log(cookies.token)
        }
       
        // settoken1(token)
  
        const urlEncodedinputtoken = new URLSearchParams();
        for (let key in inputtoken) {
            urlEncodedinputtoken.append(key, inputtoken[key]);
        }
              
              let result = await fetch('http://localhost:8080/',{
                  method: 'POST', 
                  headers: {
                      'content-type': 'application/x-www-form-urlencoded'
                  },
                  body: urlEncodedinputtoken.toString()
                })
  
               let data = await result.json()
      
            // console.log(ans)
  
        
        const { status, user } = data;
        setUsername(user);
        return status
          ? toast(`Hello ${user}`, {
              position: "top-right",
            })
          : (window.location.href = "http://localhost:3000/login");
      };
      verifyCookie();
    }, [cookies, removeCookie]);
  
  return (
    <>
      <TopBar username={username} token={token}/>
      <Dashboard username={username}/>
    </>
  );
};
