import { CDN_URL } from "../../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="w-full bg-gray-100 rounded-lg overflow-hidden shadow hover:bg-gray-200 cursor-pointer">
      <img
        src={CDN_URL + cloudinaryImageId}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <h4 className="flex items-center  text-green-600 ">
            ⭐ {avgRating}
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>

        <p className="text-gray-500 text-sm mb-1">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>

        <p className="text-gray-400 text-xs">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
