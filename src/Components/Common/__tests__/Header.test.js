import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "../Header";
import { Provider } from "react-redux";
import { store } from "../../../services/store";

test("Header component should have one button and one p", async () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  const pElement = screen.getByText(/hoşgeldiniz/i);
  const buttonElement = screen.getByText(/çıkış/i);
  expect(pElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});
