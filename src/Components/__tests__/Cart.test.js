import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestroMenu from "../RestroMenu";
import HeaderCompo from "../HeaderCompo"
import CartCompo from "../CartCompo"
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

//fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should Load Restaurant Component", async () => {
  await act(async () =>
    render(
        <BrowserRouter>
      <Provider store={appStore}>
        <HeaderCompo /> // bcz Cart - (0 items)
        <RestroMenu />
        <CartCompo/>
      </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("BK Cafe (7)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  const addBtn = screen.getAllByRole("button", { name: "Add +" }); // you are finding not only one button so give All
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

  fireEvent.click(addBtn[1]); 
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument()
  expect(screen.getAllByTestId("foodItems").length).toBe(18)

  fireEvent.click(screen.getByRole("button",{name:"Clear"}))
  expect(screen.getAllByTestId("foodItems").length).toBe(16)
  expect(screen.getByText("Cart is Empty Add Items"))

});
