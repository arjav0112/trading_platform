import React from "react";
import {Tooltip , Grow} from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";

export default function Watchlistactions({uid}){
    return(
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="buy">B</button>
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