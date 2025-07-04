import { useState,useEffect } from "react";
import Shimmer from "./Shiimmer";
import { useParams } from "react-router";

const RestaurantMenu=()=>{

  const {resId}=useParams();

    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
      const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId="+resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    
    }
    if(resInfo ===null)
    {
      return(
        <Shimmer/>
      )
    }
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
   console.log(itemCards);
    return(
      <div className="menu">
        <h1>{resInfo.cards[0].card.card.text}</h1>
        <ul className="menulist">
          {itemCards?.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - ₹{(item?.card?.info?.price || item?.card?.info?.defaultPrice)/100} </li>))}
        </ul>
      </div>
    )

}

export default RestaurantMenu;