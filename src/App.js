import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
//import About from "./componenets/About";
import Cart from "./componenets/Cart";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
//import { BrowserRouter, Routes, Route } from "react-router";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import RestaurantMenu from "./componenets/RestaurantMenu";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const About = lazy(() => import("./componenets/About")); // Lazy loading About component
const AppLayout = () => {
  const [Username, setUsername] = useState();
  useEffect(() => {
    const data = { name: "Ashish Kumar" };
    setUsername(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/*  Redux store provider, it wraps the entire app to provide store access */}
      <UserContext.Provider value={{ loggedInUser: Username, setUsername }}>
        {/* Providing context value to the component tree ,i.e overriding default value with new values */}
        <div className="app">
          <Header />
          <Outlet /> {/* This is where the child routes will be rendered */}
          {/* The Outlet renders the matched child route */}
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);
//root.render(<RouterProvider router={appRouter} />);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} /> {/* Default child for "/" */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <About />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
        <Route path="/cart" element={<Cart />} />
        {/* Dynamic route for restaurant menu */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
