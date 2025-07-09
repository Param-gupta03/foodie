import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({  data, showMenuItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="flex justify-center">
      <div className="w-6/12 cursor-pointer">
        <div className="text-lg bg-gray-400  shadow-2xs my-1 font-bold rounded-md py-2 flex justify-between" onClick={handleClick}>
        <div className="px-4" >
          {data?.title} - ({data?.itemCards?.length})
        </div>
        <div className="px-4">
          ⬇
        </div>
        </div>
        <div>
         {showMenuItems && <ItemList itemCard={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
