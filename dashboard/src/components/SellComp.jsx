import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BuyComp.css";

export default function SellComp({ baseData , sendbasedata }){
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(baseData.price);
  // const [sellData, setsellData] = useState({})
  let newOrder = {
    name : baseData.name,
    qty : stockQuantity,
    price : stockPrice,
    mode : "SELL"
  }

 

  const handlesellClick = async () => {
    try{
        
            const urlEncodednewOrder = new URLSearchParams();
            for (let key in newOrder) {
                urlEncodednewOrder.append(key, newOrder[key]);
            }
            
            let result = await fetch('http://localhost:8080/dashboard/newOrder',{
                method: 'POST', 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodednewOrder.toString()
              })

             
              sendbasedata({data: "", mode: 3})
              let ans = await result.json()
            //  setsellData(ans)
            //  console.log(sellOrder)
            if(ans){
              let sellOrder = {
                id : ans._id,
                name : ans.name,
                qty : ans.qty,
                price : ans.price,
                mode : "SELL"
              }
              // console.log(sellOrder)
              const urlEncodedsellOrder = new URLSearchParams();
              for (let key in sellOrder) {
                 urlEncodedsellOrder.append(key, sellOrder[key]);
              }

              let response = await fetch('http://localhost:8080/dashboard/resolved',{
                method: 'POST', 
                headers: {
                  'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedsellOrder.toString()
              })
              let jsonresponse = await response.json()
              console.log(jsonresponse)
            //  console.log(sellOrder)
            }
            else{
             let response = await fetch('http://localhost:8080/dashboard/rejected',{
               method: 'POST', 
               headers: {
                 'content-type': 'application/x-www-form-urlencoded'
               },
               body: urlEncodednewOrder.toString()
             })
             let jsonresponse = await response.json()
             console.log(jsonresponse)

           }
        } catch(err){
            throw err
        }
  };

  const handleCancelClick = () => {
    sendbasedata({data: "", mode: 3})
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handlesellClick}>
            Sell
          </button>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
