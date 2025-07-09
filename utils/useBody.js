import { useState,useEffect } from "react";
import { BODY_URL } from "./constants";
const useBody=()=>
{
    const [restaurantList, setRestaurantList] = useState([]);
        useEffect(()=>{
          fetchData();
        },[]);
    
        const fetchData= async ()=>{
          const data= await fetch(BODY_URL);
          const json = await data.json();
          setRestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        return (
            restaurantList
        )
}
export default useBody;