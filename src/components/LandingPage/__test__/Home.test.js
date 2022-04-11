import React from "react";
import Home from "../Home"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import userEvent from '@testing-library/user-event'

 test("header renders with correct text", () => {
     const component = render(<Home />);

     expect(component.getByText('Anime World')).toBeInTheDocument();
     expect(component.getByText('Looking for a new anime to watch use our random anime generator to find new animes.(Some anime are NSFW)')).toBeInTheDocument();
 })

 test("has button render of Random Anime", () => {
    const { queryByTestId } = render(<Home />);
    const animeButton = queryByTestId("animeButton")
 })

 test("can input anime name in search", () => {
    const { queryByTestId } = render(<Home />);
    const search = queryByTestId("search")
    
    fireEvent.change(search, {
        target: {
            value: "naruto"
        }
    })
    expect(search.value).toBe("naruto")
 })