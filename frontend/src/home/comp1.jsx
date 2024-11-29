import "./comp1.css"
import homeHero from '../assets/homeHero.png'
import { NavLink } from 'react-router-dom'



export default function Comp1(){
    return(
        <>
            <div className="comp1">
                <div className="heroImg">
                    <img src={homeHero} alt="img"></img>
                    
                </div>
                <div className="info">
                    <h1>Invest in everything</h1>
                    <h5>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
                
                    <NavLink to="signup" className="btn btn-primary">Sign up for free</NavLink>
                        
                
                </div>
            </div>
        </>
    )
}