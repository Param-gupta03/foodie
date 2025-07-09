import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/cartSlice";
import { CDN_URL } from "../../utils/constants";

const CartList = ({ itemCard }) => {
  // console.log(itemCard);
  if (!itemCard) return null;

  const dispatch=useDispatch();
  const cartItems=useSelector((store)=>store.cart.items);
  const handleAddItem = (item) => {
      dispatch(removeItem(item));
    };


  return (
    <div className="space-y-6 p-4">
      {itemCard.map((item,index)=> (
        <div
          key={index}
          className="flex justify-between items-start border-b pb-6 group"
        >
          <div className="flex-1 pr-4">
            <h1 className="text-lg font-semibold text-gray-800 mb-1">
              {item?.card?.info?.name}
            </h1>
            <span className="text-base text-gray-900 font-bold block mb-1">
              ₹
              {(
                item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100
              )}
            </span>
            <p className="text-sm text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {item?.card?.info?.imageId && (
            <div className="w-28 h-24 rounded-lg overflow-hidden relative shadow-sm">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 text-sm font-semibold px-4 py-1 border border-green-600 rounded-full shadow hover:bg-green-600 hover:text-white transition cursor-pointer"
              onClick={()=>handleAddItem(item)}>
                REMOVE
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartList;