import { useState,useEffect } from "react";
import Shimmer from "./Shiimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

  const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);
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