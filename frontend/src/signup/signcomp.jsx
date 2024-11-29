import './signcomp.css'
import signup from "../assets/signup.png"

export default function Signcomp(){
//     const validate = ()=>{
//        console.log("hellow word")
//        event.preventDefault(); 
      
//         // Fetch all the forms we want to apply custom Bootstrap validation styles to
//         const forms = document.querySelectorAll('.needs-validation')
      
//         // Loop over them and prevent submission
//         Array.from(forms).forEach(form => {
//             form.addEventListener('submit', event => {
//               if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//               }
        
//             form.classList.add('was-validated')
//         }, false)
//     })
// }

// document.getElementById('myform').action;
// document.getElementById('myform').action = "/about"; //Will set it
    return(
        <>
        <div className="sign-main-up">
            <div className="sign-up">
                
                <div className="sign-img">
                    <img src={signup} alt="Sign up img"></img>
                    

                </div>
                <div className="sign-info">
                    <h3 style={{fontWeight: 600}}>Sign Up Now</h3>
                    <p style={{opacity: "0.7"}}>Or Track Your Application</p>

                    <form action="http://localhost:3001/">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input type="email" className="form-control" id="email" required/>
                        <div className="invalid-feedback">Please Enter username</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="password" required/>
                    </div>

                        <button className="btn btn-primary"  style={{paddingRight: "20px", paddingLeft: "20px"}}>Continue</button>
                    </form>

                </div>
            </div>
                <div className="policy-info" style={{textAlign: "center",marginTop: "1rem"}}>
                    <p style={{opacity: "0.7",fontSize: "0.8rem"}}>I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.</p>
                    <p style={{opacity: "0.7",fontSize: "0.8rem",marginTop:"-15px"}}>Please visit this article to know more. </p>
                    <p style={{opacity: "0.7",fontSize: "0.8rem",marginTop:"1.5rem"}}>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, click here.</p>
                </div>
             
        </div>
       
        </>
    )
}