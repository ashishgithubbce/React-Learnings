import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import data from "../mocks/restListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(data);
//     },
//   });
// });

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(data),
  })
);

//console.log("MOCK_DATA length");
//console.log(data.length);
//as from the test environment we can't make actual api calls or network calls
//so we are mocking the fetch function here
//actual  fetch  function belongs to browser, it's not part of javascript or jest
//so we are adding it to global object which is available everywhere
//this is done because in our component we are using fetch to get data from api
//but in test environment there is no fetch function available
//  here we are mocking the fetch function to return a resolved promise with a json method that also returns a resolved promise with the data object.
//global.fetch = jest.fn() means we are creating a mock function for fetch
// jest.fn() is a Jest function that creates a mock function. This mock function can be used to simulate the behavior of real functions in tests.

it("should search restaurant list for pizza", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // Wait for search input after fetch resolves
  //const searchInput = await screen.findByPlaceholderText("Search");
  const allCards = await screen.findAllByTestId("res-card");
  expect(allCards.length).toBe(8); // Assuming mock data has 15 restaurants
  const searchInput = await screen.findByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });
  // If you have a search button, click it:
  // fireEvent.click(screen.getByRole("button", { name: "Search" }));
  const results = screen.getAllByTestId("res-card"); // Assuming you gave RestaurantCard a data-testid
  expect(results.length).toBe(1);
  //expect(searchInput).toBeInTheDocument();

  // Optionally check if mock restaurant appears
  //const restaurant = await screen.findByText("Pizza Hut");
  //need to wait untill the fetch is resolved and data is loaded
  // screen.findByText is a async function it returns a promise
  // so we need to use await here
  //else test will run assertion before the fetch is resolved and data is loaded
  // and test will fail
});
it("should search top rated restaurants", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const topRatedBtn = await screen.findByRole("button", {
    name: "Top-Rated Restaurants",
  });
  fireEvent.click(topRatedBtn);
  // Wait for all restaurant cards to be rendered after filtering
  const allCards = await screen.findAllByTestId("res-card");
  expect(allCards.length).toBe(6);
});
