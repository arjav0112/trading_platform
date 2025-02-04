import './signcomp.css'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import signup from "../assets/signup.png"

export default function Logincomp(){
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
  
    const handleError = (err) =>
      toast.error(err, {
        position: "bottom-left",
      });
    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "bottom-right",
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const urlEncodedinputvalue = new URLSearchParams();
            for (let key in inputValue) {
                urlEncodedinputvalue.append(key, inputValue[key]);
            }
            
            let result = await fetch('https://tradebackend-w2rv.onrender.com/login',{
                method: 'POST', 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedinputvalue.toString()
              })

             let ans = await result.json()
    
          console.log(ans)
          const { success, message , token } = ans;
          if (success) {
            handleSuccess(message);
            setTimeout(() => {
                window.location.href = `https://kitedashboard-p05c.onrender.com?token=${token}`;
            }, 1000);
          } else {
            handleError(message);
          }
        } catch (error) {
          console.log(error);
        }
        setInputValue({
          ...inputValue,
          email: "",
          password: "",
        });
      };
  
    return(
        <>
        <div className="sign-main-up">
            <div className="sign-up">
                
                <div className="sign-img">
                    <img src={signup} alt="Sign up img"></img>
                    

                </div>
                <div className="sign-info">
                    <h3 style={{fontWeight: 600}}>Login To your Account</h3>
                    <p style={{opacity: "0.7"}}>Or Track Your Application</p>

                    <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input type="email" name="email" className="form-control" id="email" value={email} onChange={handleOnChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" name="password" className="form-control" id="password" value={password} onChange={handleOnChange} />
                    </div>

                        <button className="btn btn-primary"  style={{paddingRight: "20px", paddingLeft: "20px"}}>Continue</button>
                    </form>
                    <p style={{opacity: "0.7"}}>if your account does'nt exists then <Link to="/signup">click</Link> </p>
                  <ToastContainer />
                </div>
            </div>
                <div className="policy-info" style={{textAlign: "center",marginTop: "1rem"}}>
                    <p style={{opacity: "0.7",fontSize: "0.8rem"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
                    <p style={{opacity: "0.7",fontSize: "0.8rem",marginTop:"-15px"}}>Please visit this article to know more. </p>
                    <p style={{opacity: "0.7",fontSize: "0.8rem",marginTop:"1.5rem"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                </div>
             
        </div>
       
        </>
    )
}