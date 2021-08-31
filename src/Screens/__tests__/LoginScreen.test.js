import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginScreen } from "../LoginScreen";
import { Provider } from "react-redux";
import { store } from "../../services/store";
import { ToastContainer } from "react-toastify";
import { loginService } from "../../services/auth/api";

const setup = () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <ToastContainer />
      <LoginScreen />
    </Provider>
  );
  const usernameInput = getByTestId("username");
  const passwordInput = getByTestId("password");
  const loginBtn = getByTestId("login-btn");
  return {
    usernameInput,
    passwordInput,
    loginBtn,
  };
};

test("LoginScreen should have username and password input and should change when change event fired", async () => {
  const { usernameInput, passwordInput } = setup();
  fireEvent.change(usernameInput, { target: { value: "user" } });
  fireEvent.change(passwordInput, { target: { value: "password" } });
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(usernameInput.value).toBe("user");
  expect(passwordInput.value).toBe("password");
});

test("LoginScreen button should be disabled if username and password are not exists", async () => {
  const { usernameInput, passwordInput, loginBtn } = setup();
  fireEvent.change(usernameInput, { target: { value: "" } });
  fireEvent.change(passwordInput, { target: { value: "" } });
  expect(loginBtn.hasAttribute("disabled")).toBeTruthy();
});

test("LoginScreen should show error message if username or password wrong", async () => {
  render(
    <Provider store={store}>
      <ToastContainer />
      <LoginScreen />
    </Provider>
  );
  const username = "wrong";
  const password = "wrong";

  store.dispatch(loginService({ username, password }));
  await waitFor(
    () => {
      expect(screen.getByText(/kontrol/i)).toBeInTheDocument();
    },
    { timeout: 25000 }
  );
});
