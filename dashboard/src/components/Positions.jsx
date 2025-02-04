import React,{useState , useEffect} from "react";
// import { positions } from "../data/data";

export default function Positions({token}){
    let [positions,setpositions] = useState(null)
    let [loading,setloading] = useState(true)
    let [error,seterror] = useState(null)
    const [inputtoken, setinputtoken] = useState({
          token: `${token}`
        })
  
      useEffect(()=>{
        
        const fetchdata = async ()=>{
        try{
          const urlEncodedinputtoken = new URLSearchParams();
            for (let key in inputtoken) {
                urlEncodedinputtoken.append(key, inputtoken[key]);
            }
        let response = await fetch("https://tradebackend-w2rv.onrender.com/dashboard/position",{
            method : 'POST',
            headers: {
            'content-type': 'application/x-www-form-urlencoded'
            },
            body: urlEncodedinputtoken.toString()
        })
        console.log(response);
        if(!response.ok){
          throw err;
        }
        const result = await response.json()
        if(result){
          setpositions(result)
        }
        else{
          throw err
        }
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

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>

          {positions.map((stock,index) =>{
            let profit = (stock.price * stock.qty) - (stock.avg * stock.qty)
            let profitclass= profit >= 0? "profit" : "loss"
            let dayclass = stock.isLoss ? "loss" : "profit"

            return(
              <tbody key={index}>
                <tr>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={profitclass}>{profit.toFixed(2)}</td>
              <td className={dayclass}>{stock.day}</td>
                </tr>
              </tbody>

            )
            
            
          })}
        </table>
      </div>
    </>
  );
};
