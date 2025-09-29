import RestaurantMenu from "../RestaurantMenu";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; //for custom matchers like toBeInTheDocument
import data from "../mocks/resMenuMock.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

it("should load restaurant menu of given restaurant id", async () => {
  //restaurant id  = 630455
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <RestaurantMenu />
        <Header />
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  const accordionHeader = await screen.findByText("Navratri Specials (4)");
  //expect(accordionHeader).toBeInTheDocument();
  // const aacodianHeader = await screen.findByText("Navratri Specials");
  // //expect(resMenu).toBeInTheDocument();
  fireEvent.click(accordionHeader);

  const foodItem = await screen.getAllByTestId("food-items");
  expect(foodItem.length).toBe(4);
  const addButton = await screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addButton[0]);
  const cartItems = screen.getByText("Cart(1)");
  expect(cartItems).toBeInTheDocument();
  fireEvent.click(addButton[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();
  const cartItemList = screen.getAllByTestId("cart-items");
  expect(cartItemList.length).toBe(2);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  //expect(addButton).toBeInTheDocument();
  //console.log(addButton);
  // screen.debug();
});
