import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; //for custom matchers like toBeInTheDocument

//TO group the test cases belongs to a single component we can use describe block
describe("Contact Component", () => {
  test("Should load Contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: "Contact Us" });
    //const button = screen.getByRole("button", { name: "Submit" });
    //const button = screen.getByText("Submit");
    expect(heading).toBeInTheDocument();

    //we are expecting that the heading should be in the document
  });
  test("Should load Input name inside Contact Component ", () => {
    render(<Contact />);
    const inputElement = screen.getByPlaceholderText("name");
    expect(inputElement).toBeInTheDocument();
  });
  it("Should load 2 Input boxes inside Contact Component ", () => {
    render(<Contact />);
    //writing query to get elements from the screen
    const inputElement = screen.getAllByRole("textbox"); // for mult
    //screen.getAllByRole("textbox") returns an array of DOM elements (e.g., <input> and <textarea> with role "textbox") from the jsdom environment created during testing.
    console.log(inputElement.length);
    expect(inputElement.length).toBe(4);
    // we are expecting that there should be 2 input boxes in the document
    expect(inputElement).toBeTruthy();
  });
  //both test and it are same they are used to define a test case in jest
  // you can use either test or it to define a test case
  // it is just a matter of preference
  // some people prefer to use it because it reads better in a sentence like "it should load Contact component"
  // some people prefer to use test because it is more explicit
  // both are same and you can use either one
});

//heading is an element with role heading and name Contact Us
// toBeInTheDocument is a matcher function which is used to check if the element is present in the document or not
// it is provided by jest-dom library which is included in @testing-library/react
// it returns true if the element is present in the document otherwise it returns false
// if the element is not present in the document then the test case will fail
// you can use different matcher functions like toBeVisible, toHaveTextContent, etc.
//screen is an object which contains all the queries provided by @testing-library/react
// it is used to query the DOM for elements
// render function is used to render the component in the virtual DOM provided by @testing-library/react
// it returns an object which contains various utility functions to query the rendered component
//render function will  render the contact component in a jest virtual DOM environment
//screen object will be used to query the rendered component
// getByRole is a query function which is used to get the element by its role attribute
//@testing-library/jest-dom is a library which provides custom matcher functions for jest
//toBeInTheDocument is the part of @testing-library/jest-dom library which provides custom matcher functions for jest
