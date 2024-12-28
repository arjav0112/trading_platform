import React from "react";
import { useEffect,useState } from "react";
import {Tooltip , Grow} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

export default function Watchlistactions({uid,changebuyStock}){
    const [jsondata, setjsondata] = useState({name:`${uid}`})
    let [baseData,setbaseData] = useState("")

    useEffect(()=>{
        let fetchjson = async ()=>{
        try{
                // console.log(jsondata)
                // const data = {name: "abc",num : "az"};
                const urlEncodedData = new URLSearchParams();
                for (let key in jsondata) {
                  urlEncodedData.append(key, jsondata[key]);
                }

                let response = await fetch('http://localhost:8080/dashboard/fetchdata',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    body: urlEncodedData.toString()
                }) 
                
                let res = await response.json()
    
                // console.log(res)
    
                setbaseData(res)
    
            }catch(err){
                console.log(err)
                throw err
            }
    }
    fetchjson()
    },[jsondata])


    let handlebuy = async ()=>{
        try{
            changebuyStock(1)
            const urlEncodedbaseData = new URLSearchParams();
            for (let key in baseData) {
                urlEncodedbaseData.append(key, baseData[key]);
            }
            
            let result = await fetch('http://localhost:8080/dashboard/holding/buy',{
                method: 'POST', 
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedbaseData.toString()
              })

             let ans = await result.json()
             console.log(ans)
            
        } catch(err){
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
                    <button className="sell">S</button>
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