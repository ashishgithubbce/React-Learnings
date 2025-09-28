import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// Configuring a Redux store using Redux Toolkit's configureStore function and this configured store is exported for use in the application. it will be used to provide the Redux store to the React application, allowing components to access and interact with the global state managed by Redux.configureStore configures the store with good default settings, including support for Redux DevTools and middleware like Redux Thunk.
const appStore = configureStore({
  //configuring the store with slice reducers
  reducer: {
    //this is the root reducer which contains all the slice reducers
    // Root reducer object, combining multiple slice reducers into a single reducer function i.e this the complete  app reducer which contains slice of reducers. in store we have to declare the  a reducer function  that we have created .
    cart: cartReducer, //cart slice reducer i.e cartSlice.reducer
    //cart: cartSlice.reducer
    //{cart:{items:[]}} this is the initial state of the store
  },
});

export default appStore;
