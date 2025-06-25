"use client";
import RestaurantCard from "./RestaurantCard";
import listOfrestaurant from "../../utils/mockData"
import { useState } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState(listOfrestaurant);
  return (
    <div className="body">
      <div className="search-box">
        Search
      </div>
      <div className="ratingFiter" >
        <button className="btn" onClick={()=>{
            const fiterlist=restaurantList.filter((res) => res.info.avgRating>4);
            setRestaurantList(fiterlist)
            }}>filter</button> 
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;