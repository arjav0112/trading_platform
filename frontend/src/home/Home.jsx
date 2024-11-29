import Comp1 from "./comp1";
import Comp2 from "./comp2";
import Comp3 from "./comp3";
import Comp4 from "./comp4";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
export default function Home(){
    return(
        <>
        <Navbar />
        
        <Comp1 />
        <Comp2 />     
        <Comp3 />
        <Comp4 /> 

        <Footer />  
        </>
    )
} 