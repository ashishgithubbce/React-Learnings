import { useSelector } from "react-redux"; // Importing
// useSelector hook from react-redux to access Redux store state
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //here we are selecting specific portion of the store i.e cart slice using useSelector hook from react-redux
  //subscribe to right portion of the store  to increase performance and avoid unnecessary re-renders i.e subscribe to only specfic portion of the store
  // const store = useSelector((store) => store);
  //never do this because it will subscribe to the entire store and any change in the store will cause re-render of the component
  // const storeItems = store.cart.items;

  const total = cartItems.reduce((acc, item) => {
    return (
      acc + (item?.card?.info?.price || item?.card?.info?.defaultPrice || 0)
    );
  }, 0);
  const dispatch = useDispatch();
  // const ClearCartItems = () => {
  //   dispatch(clearCart());
  // };
  if (cartItems.length === 0) {
    return (
      <div className="cart-container p-4 m-4 border border-gray-300 rounded-lg shadow-lg w-1/2 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600">
          Add items to your cart to see them here.
        </p>
      </div>
    );
  }
  return (
    <div className="cart-container p-4 m-4 border border-gray-300 rounded-lg shadow-lg w-1/2 mx-auto">
      <div className="cart-header flex justify-between items-center mb-4">
        <div className="mt-1 mb-1 font-bold text-2xl text-blue-800">
          Total Items : {cartItems.length}
        </div>
        <button
          className="bg-blue-600 text-white font-semibold px-3 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.map((item, index) => (
        <div key={index} data-testid="cart-items">
          <ul>
            <li className="text-lg font-medium text-gray-800 my-2 border-1 border-amber-100 p-2 rounded-md shadow-sm">
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG"
                ? "🟩"
                : "🟥"}{" "}
              {item?.card?.info?.name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          </ul>
        </div> // Displaying item name
      ))}
      <div className="mt-4 p-2 font-bold text-xl border-t border-gray-500">
        Total Price: ₹{total / 100}
      </div>
    </div>
  );
};
export default Cart;
