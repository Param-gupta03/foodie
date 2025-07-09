import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

import CartList from "./cartList";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store?.cart?.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 justify-center text-center mx-auto">
      <h1 className="text-center text-4xl font-bold border-b-2 border-blue-600 py-5 mb-8">
        Cart
      </h1>

      <button
        className="py-1 px-4 text-xl text-white bg-[#E46F20] rounded-md hover:bg-red-500 cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>

      <div className="shadow-md px-5 bg-gray-50 rounded-md py-4 my-8">
        {cartItems.length === 0 ? (
          <div className="text-center text-2xl font-bold">
            Your cart is empty! Add items to your cart.
          </div>
        ) : (
          <CartList itemCard={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
