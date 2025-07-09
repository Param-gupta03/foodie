import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
  const [showIndex, setShowIndex] = useState();
  const {resId}=useParams();

    const resInfo=useRestaurantMenu(resId);
    if(resInfo ===null)
    {
      return(
        <Shimmer/>
      )
    }
   const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //  console.log(itemCards);
  const {name,avgRating,cuisines}= resInfo.cards[2].card.card.info;
   const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      (c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   );
  //  console.log(categories);
    return(
      <div className="text-center">
        <h1 className="font-bold my-1 pt-4 text-3xl">{name}</h1>
        <p className="font-bold test-lg">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <h1 className="font-bold mb-4"> ⭐{avgRating}</h1>
        {
          categories.map((category,index)=>(
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} 
            showMenuItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)} />
          ))
        }
      </div>
    )

}

export default RestaurantMenu;