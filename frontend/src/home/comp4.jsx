import './comp4.css'
import education from '../assets/education.svg'
import { NavLink } from 'react-router-dom'

export default function Comp4(){
    return(
        <>
        <div className="comp4">
        <div className="mainDiv4">
            <div className="divImg">
                <img style={{width: "27rem"}} src={education} alt="education img"></img>
            </div>
            <div className="info4">
                <h4 style={{fontWeight: "600"}}>Free and open market education</h4>
                <div className="subInfo6">
                    <p style={{margin: "15px 0 16px 0" , opacity: "0.7"}}>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading
                    </p>
                    <a className="anchor">Varsity &rarr;</a>
                </div>
                <div className="subInfo6">
                    <p style={{margin: "30px 0 15px 0" , opacity: "0.7"}}>
                    TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a className="anchor">TradingQ&A &rarr;</a>
                </div>

            </div>
            
            
        </div>
        <div style={{padding:"40px 0 80px 0"}} className="info">
                    <h2 style={{marginBottom: "20px",fontWeight: "600"}}>Open a Zerodha account</h2>
                    <p style={{maargin: "16px 0 15px 0" , opacity: "0.7"}}> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
                    <NavLink to="signup" className="btn btn-primary">Sign up for free</NavLink>
                </div>

        </div>
    
       
            
        </>
    )
}