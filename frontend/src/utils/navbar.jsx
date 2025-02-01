import './navbar.css'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return(
        <>
            <nav style={{height: "67px", borderBottom: "0.1px solid grey" }} className="navbar sticky-top navbar-expand-lg">
                <div className="container-fluid">
                    <a style={{marginLeft: "13%"}} className="navbar-brand" href="/"><img style={{width: "130px",height: "1.15rem"}} src={logo} alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div style={{marginRight: "15%"}} className="navbar-nav ms-auto">
                            <NavLink to="/signup" className="nav-link navElement" aria-current="page" href="#">Signup</NavLink>
                            <NavLink to="/about" className="nav-link navElement" href="#">About</NavLink>
                            <NavLink to="/products" className="nav-link navElement" href="#">Products</NavLink>
                            <NavLink to="/pricing" className="nav-link navElement" href="#">Pricing</NavLink>
                            <NavLink to="/support" className="nav-link navElement" href="#">Support</NavLink>
                         </div>
                    </div>
                </div>
            </nav>
        </>
    )
}