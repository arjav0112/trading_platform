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
import SellComp from "./SellComp";

export default function Dashboard(){

  const [buyStock,setbuyStock] = useState(false)
  const [sellStock,setsellStock] = useState(false)
  const [baseData,setbaseData] = useState("")

  let sendbasedata = (value)=>{
    // console.log("packet_data_recivied")

    if(value.mode === 1){
      setbaseData(value.data)
      setsellStock(false)
      setbuyStock(true)
    }
    else if (value.mode === 2){
      setbaseData(value.data)
      setsellStock(true)
      setbuyStock(false)
    }
    else{
      setsellStock(false)
      setbuyStock(false)
    }
  }



  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}
        <WatchList sendbasedata={sendbasedata}/>
        {buyStock && <BuyComp baseData={baseData} sendbasedata={sendbasedata}/>}
        {sellStock && <SellComp baseData={baseData} sendbasedata={sendbasedata}/>}

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
