const heading = React.createElement(
  "h1",
  { className: "heading", id: "heading" },
  "Hello World in React.....!!"
);
//it will return an React object with object as props and this is an react element, this react object become html that the browser understand.
//3rd argument is h1's child element
const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading); //injecting elememt insisde root elememt and the purpose of render method to append the react element into the DOM tree . Everything will be render inside this root and everything in root will be replaced by heading.

// <div id="parent">
//   <div id="Child">
//     <h1>Hello, i'm H1</h1>
//     <h2>Hello, i'm H2</h2>
//   </div>
// </div>
//nested elements
root.render(
  React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "h1" }, "Hello World i'm a h1 tag"),
      React.createElement("h2", { id: "h2" }, "Hello World i'm a h2 tag"),
      React.createElement("h3", { id: "h3" }, "Hello World i'm a h3 tag"),
    ])
  )
);
