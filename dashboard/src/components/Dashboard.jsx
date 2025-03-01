import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState , useEffect } from "react";
import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import BuyComp from "./BuyComp";
import SellComp from "./SellComp";

export default function Dashboard({username,token}){

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
        {buyStock && <BuyComp baseData={baseData} sendbasedata={sendbasedata} token={token}/>}
        {sellStock && <SellComp baseData={baseData} sendbasedata={sendbasedata} token={token}/>}

      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary username={username}/>} />
          <Route path="/orders" element={<Orders token={token}/>} />
          <Route path="/holdings" element={<Holdings token={token}/>} />
          <Route path="/positions" element={<Positions token={token} />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
};
