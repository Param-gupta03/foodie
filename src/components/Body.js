// "use client";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shiimmer";
import { Link } from "react-router"; 
import useBody from "../../utils/useBody";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [filterRestaurant,setFilterRestaurant]=useState([]);
    const restaurantList=useBody();
    useEffect(() => {
      setFilterRestaurant(restaurantList);
    }, [restaurantList]);
    const online =useOnlineStatus();
    if(online===false)
    {
      return (
        <h1>you are offline Check your internet connection</h1>
      )
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
          <Link key={restaurants.info.id} to={"/restaurantMenu/"+restaurants.info.id}><RestaurantCard
            restaurantData={restaurants}
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;