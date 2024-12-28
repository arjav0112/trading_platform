import React,{ useState, useEffect } from "react";
import {Tooltip , Grow} from "@mui/material";
// import { watchlist } from "../data/data";
import WatchlistItems from "./WatchlistItems";
 
export default function WatchList({changebuyStock}){
  let [watchlist,setwatchlist] = useState(null)
  let [loading,setloading] = useState(true)
  let [error,seterror] = useState(null)

  useEffect(()=>{
    changebuyStock(0);
    const fetchdata = async ()=>{
    try{
    let response = await fetch("http://localhost:8080/dashboard/watchlist")
    console.log(response);
    if(!response.ok){
      throw err;
    }
    const result = await response.json()
    setwatchlist(result)
    } catch(err){
      seterror(err.message)
    }   finally {
      setloading(false);
    }
  };
  fetchdata();
  },[])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error : {error}</p>
 
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index)=>{
          return(
            <WatchlistItems stock={stock} changebuyStock={changebuyStock} key= {index} />

          )
        })}
      </ul>
    </div>
  );
};

