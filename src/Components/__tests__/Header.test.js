import { fireEvent, render, screen } from "@testing-library/react";
import HeaderCompo from "../HeaderCompo";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Compo with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <HeaderCompo />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button");
  expect(loginbutton).toBeInTheDocument();
});

it("should render Header Compo with a Cart Item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderCompo />
        </Provider>
      </BrowserRouter>
    );
    const cartItem = screen.getByText("Cart - (0 items)");
    expect(cartItem).toBeInTheDocument();
  });   

it("should change Login Button to Logout on Click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <HeaderCompo />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"LogIn"});
    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button",{name:"LogOut"})
    expect(logoutButton).toBeInTheDocument();
  });   
