import React,{useState} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


export default function Menu({username,token}){
  let [selectedmenu,setselectedmenu] = useState(0);
  let [isdropdown,setisdropdown] = useState(false);
  const [inputtoken, setinputtoken] = useState({
          token: `${token}`
    })
  

  let handlemenu = (val) => {
    setselectedmenu(val)
  }

  let handledropdown = (val) =>{
    setisdropdown(!val);
  }

  let handlelogout = async () =>{
    const urlEncodedinputtoken = new URLSearchParams();
    for (let key in inputtoken) {
        urlEncodedinputtoken.append(key, inputtoken[key]);
    }
          
    let result = await fetch('http://localhost:8080/logout',{
        method: 'POST', 
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedinputtoken.toString()
       })

    let data = await result.json()
    console.log(data)

    const {status , message} = data

    if(status){
      toast(`${message}`, {
          position: "top-right",
       })

       setTimeout(() => {
        window.location.href = `http://localhost:3000/`;
       }, 1000);

    }
    else{
      toast.error(message, {
              position: "bottom-left",
      });
    }
  }

  let menuclass = "menu"
  let activemenuclass = "menu selected"
  // console.log(selectedmenu,isdropdown)
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration: "none"}} onClick={()=> handlemenu(0)}><p className={selectedmenu === 0?activemenuclass: menuclass }>Dashboard</p></Link>
          </li>
          <li>
          <Link to="/orders" style={{textDecoration: "none"}} onClick={()=> handlemenu(1)}><p className={selectedmenu === 1?activemenuclass: menuclass }>Orders</p></Link>
            
          </li>
          <li>
          <Link to="/holdings" style={{textDecoration: "none"}} onClick={()=> handlemenu(2)}><p className={selectedmenu === 2?activemenuclass: menuclass }>Holdings</p></Link>
           
          </li>
          <li>
          <Link to="/positions" style={{textDecoration: "none"}} onClick={()=> handlemenu(3)}><p className={selectedmenu === 3?activemenuclass: menuclass }>Positions</p></Link>
        
          </li>
          <li>
          <Link to="/funds" style={{textDecoration: "none"}} onClick={()=> handlemenu(4)}><p className={selectedmenu === 4?activemenuclass: menuclass }>Funds</p></Link>
            
          </li>
          <li>
          <Link to="/apps" style={{textDecoration: "none"}} onClick={()=> handlemenu(5)}><p className={selectedmenu === 5?activemenuclass: menuclass }>Apps</p></Link>
            
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">A</div>
          <p className="username" onClick={() => {
            handlemenu(6)
            handledropdown(isdropdown)
          }}>{username}</p>
        </div>
        {isdropdown? <div className="logout" style={{marginLeft: "1rem"}}>
          <button onClick={handlelogout} style={{background :"white",textDecoration: "none",fontSize: "0.8rem"}}>Logout</button>
        </div> : <></>}
      </div>
    </div>
  );
};
