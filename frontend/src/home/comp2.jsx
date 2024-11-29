import './comp2.css'
import ecosystem from '../assets/ecosystem.png'
import pressLogos from '../assets/pressLogos.png'

export default function Comp2(){
    return(
        <>
        <div className="mainDiv">
        <div className="comp2">
                <div className="info2">
                    <h2>Trust with confidence</h2>
                    <div className="subInfo">
                        <h4><b>Customer-first always</b></h4>
                        <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className="subInfo">
                        <h4><b>No spam or gimmicks</b></h4>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className="subInfo">
                        <h4><b>The Zerodha universe</b></h4>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className="subInfo1">
                        <h4><b>Do better with money</b></h4>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="imgSection">
                    <img src={ecosystem} alt="ecosystem"></img>
                    <div className="tags">
                        <a className="anchor" href="#">Explore Your Product &rarr;</a>
                        <a className="anchor" href="#">Try Kite Demo &rarr;</a>
                    </div>
                    
                </div>
                
        </div>
        <div className="pressLogo">
            <a href="#"><img src={pressLogos} alt="pressImg"></img></a>

        </div>

        </div>
            
        </>
    )
}