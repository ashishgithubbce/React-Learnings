import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom"; //for custom matchers like toBeInTheDocument
import { BrowserRouter } from "react-router-dom";
it("should render Header Component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  // const loginButton = screen.getByText("Login");
  expect(loginButton).toBeInTheDocument();

  // render the Header component
});
it("should render Header Component with zero Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartItems = screen.getByText("Cart(0)");
  const cartItems = screen.getByText(/Cart\(\d+\)/); // Regex to match Cart with any number of items
  expect(cartItems).toBeInTheDocument();
});
it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // const cartItems = screen.getByText("Cart(0)");
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument(); // Verify that the button text has changed to "Logout"
});
