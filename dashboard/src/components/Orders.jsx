import React from "react";
import { useState , useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Orders({token}){
  let [orders,setorders] = useState(null)
  const navigate = useNavigate();


  let [exorders,setexorders] = useState(null)
    let [loading,setloading] = useState(true)
    let [error,seterror] = useState(null)
  const [inputtoken, setinputtoken] = useState({
          token: `${token}`
        })
  
    useEffect(()=>{
      // changebuyStock(0);
      const fetchdata = async ()=>{
      try{
        const urlEncodedinputtoken = new URLSearchParams();
            for (let key in inputtoken) {
                urlEncodedinputtoken.append(key, inputtoken[key]);
            }
      let response = await fetch("https://tradebackend-w2rv.onrender.com/dashboard/orders",{
        method : 'POST',
        headers: {
        'content-type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedinputtoken.toString()
    })
      // console.log(response);
      if(!response.ok){
        throw err;
      }
      const result = await response.json()
      // console.log(result)
      setorders(result)

      let response1 = await fetch("https://tradebackend-w2rv.onrender.com/dashboard/exorders",{
        method : 'POST',
        headers: {
        'content-type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedinputtoken.toString()
    })
      // console.log(response);
      if(!response1.ok){
        throw err;
      }
      const ans = await response1.json()
      setexorders(ans)

      } catch(err){
        seterror(err.message)
      }   finally {
        setloading(false);
      }
    };
    fetchdata();
    },[])
  
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error : {error}</p>

    let handleRemoveOrder = async (stock)=>{

      const urlEncodedcancelOrder = new URLSearchParams();
      for (let key in stock) {
        urlEncodedcancelOrder.append(key, stock[key]);
      }
      
      let result = await fetch('https://tradebackend-w2rv.onrender.com/dashboard/cancelled',{
          method: 'POST', 
          headers: {
              'content-type': 'application/x-www-form-urlencoded'
          },
          body: urlEncodedcancelOrder.toString()
        })

       let ans = await result.json()
       if(ans){
        navigate('/')

       }
      //  console.log(ans)


    }

  return (
    <div className="orders">
      {!((orders.length > 0) || (exorders.length > 0)) ? 
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> : 
      <>
      <h3 className="title">Pending Orders ({orders.length})</h3>
      <div className="order-table">
        <table style={{width : "100%"}}>
          <thead>
          <tr>
            <th style={{width : "4%"}}></th>
            <th style={{width : "7%"}}>Type</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Price</th>
            <th style={{width : "7%"}}>Status</th>
          </tr>
          </thead>

          {orders.map((stock,index) => {

            let buyclass = stock.mode == "BUY" ? "buyclass" : "sellclass"
            stock.token = token
            
            return(
            <tbody key={index}>
            <tr>
              <td><button style={{background: "white",border: "none"}} onClick={()=>handleRemoveOrder(stock)}><i className="fa-solid fa-x"></i></button></td>
              <td><div className={buyclass}>{stock.mode}</div></td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td ><div className="actionclass">OPEN</div></td>
              
            </tr>
            </tbody>
            )
          })}
          
        </table>
      </div>

      <h3 className="title">Executed Orders ({exorders.length})</h3>
      <div className="order-table">
        <table style={{width : "100%"}}>
          <thead>
          <tr>
            <th style={{width : "7%"}}>Type</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>LTP</th>
            <th>Price</th>
            <th style={{width : "7%"}}>Status</th>
          </tr>
          </thead>

          {exorders.map((stock,index) => {

            let modeclass = stock.mode == "BUY" ? "buyclass" : "sellclass"
            let statusclass = (stock.status == "completed" ? "completeclass" : (stock.status == "rejected" ? "rejectedclass" : "cancelledclass")) 
            
            return(
            <tbody key={index}>
            <tr>
              <td><div className={modeclass}>{stock.mode}</div></td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td ><div className={statusclass}>{stock.status}</div></td>
              
            </tr>
            </tbody>
            )
          })}
          
        </table>
      </div> 
      </> }

    </div>
  );
};
