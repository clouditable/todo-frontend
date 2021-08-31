import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CreateTodoPopup } from "../CreateTodoPopup";
import { Provider } from "react-redux";
import { store } from "../../../services/store";

test("CreateTodoPopup component should have two button", async () => {
  render(
    <Provider store={store}>
      <CreateTodoPopup />
    </Provider>
  );

  const buttonElements = screen.getAllByRole("button");

  expect(buttonElements).toHaveLength(2);
});
