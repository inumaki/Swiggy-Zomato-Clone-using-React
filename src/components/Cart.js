import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";
import shoppingCart from "../assest/img/shoppingCart.png";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(addToCart("sumit bhai"));
  };
  return (
    <div className="pt-8 text-center bg-fefe h-screen">
      <div className=" bg-white p-4 w-1/3 ml-5">
        <div className="bg-fefe p-2 flex align-center items-center">
          <img src={shoppingCart} className=" h-[50px] w-[50px] m-1" />
          <h3 className="text-not-perfect-grey font-semibold text-lg ">
            CART: ({items.length})
          </h3>
        </div>
        <div className="mt-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 text-white p-2 mb-2 rounded-lg flex justify-between items-center"
            >
              <span>{item.itemName}</span>
              <div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 m-1 rounded-full transition-colors duration-300"
                  onClick={addItem}
                >
                  +Add
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-full transition-colors duration-300">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
