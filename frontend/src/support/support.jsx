import Footer from "../utils/footer";
import Navbar from "../utils/navbar";
import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

export default function Support(){
    return (
        <>
            <Navbar />
                <Hero />
                <CreateTicket />  
            <Footer />
        
        </>

    )
}