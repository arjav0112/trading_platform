import React from "react";
import { positions } from "../data/data";

export default function Positions(){
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock,index) =>{
            let profit = (stock.price * stock.qty) - (stock.avg * stock.qty)
            let profitclass= profit >= 0? "profit" : "loss"
            let dayclass = stock.isLoss ? "loss" : "profit"

            return(
            <tr>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={profitclass}>{profit.toFixed(2)}</td>
              <td className={dayclass}>{stock.day}</td>
            </tr>

            )
            
            
          })}
        </table>
      </div>
    </>
  );
};
