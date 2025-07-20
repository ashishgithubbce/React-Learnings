import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Error from "./componenets/Error";
//import { BrowserRouter, Routes, Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
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
      <Route path="/" element={<AppLayout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
);
