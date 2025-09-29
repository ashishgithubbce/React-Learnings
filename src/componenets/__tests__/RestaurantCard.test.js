import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom"; //for custom matchers like toBeInTheDocument
import MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";

it("should render RestaurantCard Component with Props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );
  const resCard = screen.getByText("Chinese Wok");
  expect(resCard).toBeInTheDocument();
  // render the Header component
});
