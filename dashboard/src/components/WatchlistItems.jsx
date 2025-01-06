import React,{ useEffect, useState } from "react";
import {Tooltip , Grow} from "@mui/material";
import {KeyboardArrowDown,KeyboardArrowUp} from "@mui/icons-material";
import Watchlistactions from "./Watchlistaction";


export default function WatchlistItems({stock,sendbasedata}){
    const [watchlistactions,setwatchlistactions] = useState(false);
    // console.log(watchlistactions)
    
    let handleMouseEnter = (e)=>{
        
        setwatchlistactions(true);
    }

    let handleMouseLeave = (e)=>{
        setwatchlistactions(false);
    }
    // console.log(stock.name)
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (<KeyboardArrowDown className="down"/>) : (<KeyboardArrowUp className="up"/>)}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {watchlistactions && <Watchlistactions uid={stock.name} sendbasedata={sendbasedata}/>}

        </li>
    )
}