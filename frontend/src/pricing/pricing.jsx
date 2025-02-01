import Footer from "../utils/footer";
import Navbar from "../utils/navbar";
import Brokerage from "./brokerage";
import OpenAccount from "./Openaccount";
import Hero from "./Hero";

export default function Pricing(){
    return (
        <>
            <Navbar />
                <Hero />
                <OpenAccount />
                <Brokerage />

            <Footer />
        
        </>

    )
}