import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "../providers/UserProvider";
import MessageProvider from "../providers/MessageProvider";

describe("login page", () => {
  test("main components render correctly", () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            <Login />
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: /login/i });
    const loginHeader = screen.getByRole("heading", { name: /login/i });
    const usernameField = screen.getByRole("textbox", { name: /username/i });
    const passwordField = screen.getByLabelText(/password/i); // password has no implicit role

    expect(loginButton).toBeInTheDocument();
    expect(loginHeader).toBeInTheDocument();
    expect(usernameField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  test("forbid required fields", async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            <Login />
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: /login/i });

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/username is required/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    });
  });

  test("show message if username/password combination is invalid", async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            <Login />
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>,
    );

    const usernameField = screen.getByRole("textbox", { name: /username/i });
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    userEvent.type(usernameField, "x");
    userEvent.type(passwordField, "y");

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Username\/Password combination is invalid, please try again/i,
        ),
      ).toBeInTheDocument();
    });
  });
  test("successfull login with welcome message and routing", async () => {
    render(
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            <Login />
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>,
    );

    const usernameField = screen.getByRole("textbox", { name: /username/i });
    const passwordField = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    userEvent.type(usernameField, "user");
    userEvent.type(passwordField, "user");

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText(/welcome back,/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(window.location.pathname).toEqual("/home");
    });
  });
});
