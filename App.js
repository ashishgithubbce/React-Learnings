import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { className: "heading", id: "heading" },
  "Hello World in React.....!!"
);
//it will return an React object with object as props and this is an react element, this react object become html that the browser understand.
//3rd argument is h1's child element
const root = ReactDOM.createRoot(document.getElementById("root2"));
//root.render(heading); //injecting elememt insisde root elememt and the purpose of render method to append the react element into the DOM tree . Everything will be render inside this root and everything in root will be replaced by heading.
//react element using JSX
const jsxHeading = (
  <div id="parent" tabIndex="0">
    <div id="Child" tabIndex="1">
      <h1 tabIndex="2">Hello, i'm H1</h1>
      <h2>Hello, i'm H2</h2>
    </div>
  </div>
);
const title = (
  <div>
    <h1>React : Laying The foundation!!</h1>
  </div>
);
const FooterComp = (props) => {
  return (
    <div className="footer">
      <h2>Footer Component!</h2>
      <h3>Hi, {props.id ? props.id : props}</h3>
    </div>
  );
};
//functional component
const HeadingComponent = () => {
  const id = "Ashish@1234";
  return (
    <div className="container">
      {title}
      <h1>Welcome to Functional Component!! 🚀</h1>
      <h2>Hi Ashish</h2>
      <FooterComp id={id} />
      {FooterComp(id)}
      <FooterComp id={id}></FooterComp>
    </div>
  );
};
root.render(<HeadingComponent />);
//nested elements
//root.render(jsxHeading);
// root.render(
//   React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//       React.createElement(
//         "h1",
//         { id: "h1", key: "1" },
//         "Hello World i'm a h1 tag"
//       ),
//       React.createElement(
//         "h2",
//         { id: "h2", key: "2" },
//         "Hello World i'm a h2 tag"
//       ),
//       React.createElement(
//         "h3",
//         { id: "h3", key: "3" },
//         "Hello World i'm a h3 tag"
//       ),
//     ])
//   )
// );
