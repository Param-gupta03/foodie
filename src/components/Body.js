import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useBody from "../../utils/useBody";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {

  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const restaurantList = useBody();
 

  useEffect(() => {
    setFilterRestaurant(restaurantList);
  }, [restaurantList]);

  const online = useOnlineStatus();

  if (restaurantList.length === 0) {
    return <Shimmer />; // Shows shimmer when list is empty/loading
  }

  if (!online) {
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        You are offline. Check your internet connection.
      </h1>
    );
  }

  
  return (
    <div className="px-8 py-4 flex flex-col">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-4">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search restaurants..."
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => {
            const filter = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchRestaurant.toLowerCase())
            );
            setFilterRestaurant(filter);
          }}
        >
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
          onClick={() => {
            const filterList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilterRestaurant(filterList);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurantMenu/${restaurant.info.id}`}
            className="block"
          >
            <RestaurantCard restaurantData={restaurant} />
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
