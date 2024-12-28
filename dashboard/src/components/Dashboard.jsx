import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import BuyComp from "./BuyComp";

export default function Dashboard(){

  const [buyStock,setbuyStock] = useState(false)

  let changebuyStock = (value)=>{
    console.log("packet recevied")
    if(value) setbuyStock(true)
    else setbuyStock(false)
  }
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
        <WatchList changebuyStock={changebuyStock}/>
        {buyStock && <BuyComp/>}

      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};
