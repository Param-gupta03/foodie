"use client";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shiimmer";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [filterRestaurant,setFilterRestaurant]=useState([]);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData= async ()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
    }
    if(restaurantList.length  === 0){
      return <Shimmer/>;
    }
  return ( 
    <div className="body">
      
      <div className="ratingFilter" >
       <div className="search-box">
        <input
          type="text"
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <button className="search" onClick={()=>{
          const filter = restaurantList.filter((res) =>
          res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())

        );
        setFilterRestaurant(filter);
        }}>
          Search
        </button>
      </div>
      
        <button className="btn" onClick={()=>{
            const fiterlist=restaurantList.filter((res) => res.info.avgRating>4.5);
            setFilterRestaurant(fiterlist)
            }}>filter</button> 
        
      </div>
      <div className="restaurant-container">
        {filterRestaurant.map((restaurants) => (
          <RestaurantCard
            key={restaurants.info.id}
            restaurantData={restaurants}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;