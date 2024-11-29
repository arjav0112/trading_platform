import './footer.css'
import logo from '../assets/logo.svg'
export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="media">
                    <div className="social_media ">
                        <div style={{height:"48px",padding: "10px 0 10px 0"}} className="logo">
                            <img style={{width: "150px",height: "20px"}} src={logo} alt="logo"/>
                        </div>
                        <p style={{fontSize: "0.9rem",opacity: "0.8"}}>© 2010 - 2024, Zerodha Broking Ltd. All rights reserved.</p>

                        <ul className="social">
                            <li><i className="fa-brands fa-x-twitter"></i></li>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-linkedin"></i></li>
                        </ul>
                        <ul className="social">
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-whatsapp"></i></li>
                            <li><i className="fa-brands fa-telegram"></i></li>
                            
                        </ul>
                        
                    </div>
                    <div style={{paddingLeft: "3rem" }} className="company">
                    <div style={{height:"48px",padding: "10px 0 10px 0"}} className="logo">
                            <h5>Company</h5>
                    </div>
                    <ul className="company-list">
                            <li>About</li>
                            <li>Products</li>
                            <li>Pricing</li>
                            <li>Referral programme</li>
                            <li>Careers</li>
                            <li>Zerodha.tech</li>
                            <li>Press & media</li>
                            <li>Zerodha Cares CSR</li>
                            
                    </ul>
                    </div>
                    <div style={{marginLeft: "5rem"}} className="support">
                    <div style={{height:"48px",padding: "10px 0 10px 0"}} className="logo">
                            <h5>Support</h5>
                    </div>
                    <ul className="company-list">
                            <li>Contact us</li>
                            <li>Support portal</li>
                            <li>Z-Connect blog</li>
                            <li>List of charges</li>
                            <li>Downloads & resouces</li>
                            <li>Videos</li>
                            <li>Market overview</li>
                            <li>How to file a complaint?</li>
                            <li>Status of your complaints</li>
                            
                    </ul>
                    </div>
                    <div style={{marginLeft: "3rem"}} className="account">
                    <div style={{height:"48px",padding: "10px 0 10px 0"}} className="logo">
                            <h5>Account</h5>
                    </div>
                    <ul className="company-list">
                            <li>Open an account</li>
                            <li>Fund transfer</li>
                            
                            
                    </ul>

                    </div>
                </div>
                
            </footer>
 
        </>
    )
}