import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BuyComp.css";

export default function BuyComp({ baseData , sendbasedata,token }){
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(baseData.price);

  let newOrder = {
    name : baseData.name,
    qty : stockQuantity,
    price : stockPrice,
    mode : "BUY",
    token: token,
  }

  const handleBuyClick = async () => {
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

             let ans = await result.json()
             sendbasedata({data: "", mode: 3})
             if(ans){
              let response = await fetch('http://localhost:8080/dashboard/resolved',{
                method: 'POST', 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodednewOrder.toString()
              })
              let jsonresponse = await response.json()
              console.log(jsonresponse)
             }else{
               console.log(ans)
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
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};
