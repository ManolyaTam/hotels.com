import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home/Home";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "../providers/UserProvider";
import MessageProvider from "../providers/MessageProvider";

describe("Home page", () => {
  test("main components render correctly when signed out", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            {" "}
            {/* Include MessageProvider here */}
            <Home />
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>,
    );

    const trendingDestinationsHeader = screen.getByText(
      "Trending Destinations",
    );
    const featuredDealsHeader = screen.getByText("Featured Deals");

    expect(trendingDestinationsHeader).toBeInTheDocument();
    expect(featuredDealsHeader).toBeInTheDocument();
  });
});
