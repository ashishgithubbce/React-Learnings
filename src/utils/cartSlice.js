import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart", //name of the slice
  initialState: {
    items: [], //initial state of the slice
  },
  reducers: {
    //reducers to handle actions, it's a reducer object where each key is an action name and the value is a function that defines how the state should change in response to that action.
    // here we are muatating the satate directly because immer library is used internally by redux toolkit to handle immutability
    addItem: (state, action) => {
      state.items.push(action.payload); //adding item to the cart
      //redux tookit give an option to directly mutate the state because it uses immer library internally to handle immutability.
      //immer library will create a copy of the state and then apply the mutations to the copy and then return the new state
      //immer library uses proxy to track the changes made to the state.
      //immer library makes it easier to work with immutable state in redux. i.e redux toolkit uses immer behind the scenes to handle immutability
      //so we can directly mutate the state in redux toolkit
      //vanilla redux we have to return a new state object instead of mutating the state directly
      //const newState = [...state ]; //creating a copy of the state
      //newState.items.push(action.payload)
      //return newState  //returning the new state
      //redux toolkit says either you can mutate the state directly or you can return a new state object but not both
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id); //removing item from the cart
    },
    clearCart: (state) => {
      console.log("Clearing cart..." + current(state));
      //state.items = []; //clearing the cart
      // state.items.length = 0; //clearing the cart
      return { items: [] }; //returning a new state object with empty items array
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions; //exporting actions
export default cartSlice.reducer;
//reducer is combinations of all the reducers defined in the slice.
//exporting reducer
//RTK compiles into a single reducer function that can be passed to the Redux store.
// The cartSlice manages the state of a shopping cart, allowing items to be added, removed, and the cart to be cleared. The actions and reducer are exported for use in the Redux store and <components className=""></components>
// components to interact with the cart state.
// The cartSlice manages the state of a shopping cart, allowing items to be added, removed, and the cart to be cleared. The actions and reducer are exported for use in the Redux store and components to interact with the cart state.
