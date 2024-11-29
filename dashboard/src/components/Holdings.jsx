import React,{useState} from "react";
import { holdings } from "../data/data";

export default function Holdings(){
  let [totalcurrval,settotalcurrval] = useState(0);
  let [totalprofit,settotalprofit] = useState(0);
  
  
  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock,index) => {
            let currval = stock.qty * stock.price
            let profit = currval - stock.avg * stock.qty
            let profitclass = profit >= 0 ? "profit" : "loss"
            let dayclass = stock.isLoss ? "loss" : "profit"
            totalcurrval+=currval
            totalprofit+=profit


            return(

            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td>{currval.toFixed(2)}</td>
              <td className={profitclass}>{(profit).toFixed(2)}</td>
              <td className={profitclass}>{stock.net}</td>
              <td className={dayclass}>{stock.day}</td>
            </tr>
            )
          })}
          
        </table>
      </div>
      
      <div className="row">
        <div className="col">
          <h5>
            {(totalcurrval-totalprofit).toFixed(2)}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {totalcurrval.toFixed(2)}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalprofit >= 0? "profit" : "loss"}>{(totalprofit).toFixed(2)} ({((totalprofit/(totalcurrval-totalprofit))*100).toFixed(2)}%)</h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};


