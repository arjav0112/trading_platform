import Footer from "../utils/footer";
import Navbar from "../utils/navbar";
import LeftSection from "./Leftsection";
import RightSection from "./Rightsection";
import Hero from "./Hero";
import Universe from "./Universe";
import kite_img from "../assets/kite.png"
import console_img from "../assets/console.png"
import coin_img from "../assets/coin.png"
import varsity_img from "../assets/varsity.png"
import kiteconnect from "../assets/kiteconnect.png"

export default function Products(){
    return (
        <>
            <Navbar />
            <Hero />
      <LeftSection
        imageURL={kite_img}
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/signup"
        learnMore="/about"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL={console_img}
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/about"
      />
      <LeftSection
        imageURL= {coin_img}
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/signup"
        learnMore="/about"
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL= {kiteconnect}
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/about"
      />
      <LeftSection
        imageURL={varsity_img}
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="/signup"
        learnMore="/about"
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
            <Footer />
        
        </>

    )
}