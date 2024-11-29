import './comp3.css'
import pricing0 from '../assets/pricing0.svg'
import intradayTrades from '../assets/intradayTrades.svg'
import pricingMF from '../assets/pricingMF.svg'


export default function Comp3(){
    return(
        <>
        <div className="comp3">
        <div className="mainDiv1">
            <div className="info3">
            <h2 style={{fontWeight: 600}}>Unbeatable pricing</h2>
            <p style={{opacity: 0.7}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

            </div>
            <div className="subImg1">
                <img src={pricing0} alt="pricing0"></img>
                <p>Free account opening</p>
            </div>
            <div className="subImg2">
            <img src={pricingMF} alt="pricingMF"></img>
            <p>Free equity delivery
            and direct mutual funds</p>

            </div>
            <div className="subImg3">
            <img src={intradayTrades} alt="intradayTrades" />
            <p>Intraday and
            F&O</p>

            </div>

        </div>
        <div className="pricingAnchor">
            <a href="#" className="anchor">See pricing &rarr;</a>
        </div>

        </div>
        
            
        </>
    )
}