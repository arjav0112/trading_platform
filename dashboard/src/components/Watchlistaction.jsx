import React from "react";
import { useEffect,useState } from "react";
import {Tooltip , Grow} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

export default function Watchlistactions({uid,sendbasedata}){
    const [jsondata, setjsondata] = useState({name:`${uid}`})

    let handlebuy = async ()=>{

        try{
            // console.log(jsondata)
            // const data = {name: "abc",num : "az"};
            const urlEncodedData = new URLSearchParams();
            for (let key in jsondata) {
                urlEncodedData.append(key, jsondata[key]);
            }
            
            let response = await fetch('https://tradebackend-w2rv.onrender.com/dashboard/fetchdata',{
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedData.toString()
            }) 
            
            let res = await response.json()
            
            // console.log(res)
            
            sendbasedata({data : res,mode : 1})
            // changebuyStock(1)

        }catch(err){
            console.log(err)
            throw err
        }
        
    }

    let handlesell = async ()=>{

        try{
            // console.log(jsondata)
            // const data = {name: "abc",num : "az"};
            const urlEncodedData = new URLSearchParams();
            for (let key in jsondata) {
                urlEncodedData.append(key, jsondata[key]);
            }
            
            let response = await fetch('https://tradebackend-w2rv.onrender.com/dashboard/fetchdata',{
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedData.toString()
            }) 
            
            let res = await response.json()
            
            // console.log(res)
            
            sendbasedata({data : res,mode : 2})
            // changebuyStock(1)

        }catch(err){
            console.log(err)
            throw err
        }    
    }
    
    return(
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="buy" onClick={handlebuy}>B</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="sell" onClick={handlesell}>S</button>
                </Tooltip>
                <Tooltip title="Analytics" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action"><BarChartOutlined /></button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action"><MoreHoriz /></button>
                </Tooltip>
                
            </span>
        </span>
    )

}