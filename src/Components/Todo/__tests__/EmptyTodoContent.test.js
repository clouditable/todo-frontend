import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EmptyTodoContent } from "../EmptyTodoContent";

test("EmptyTodoContent component should have p element", async () => {
  render(<EmptyTodoContent />);
  const pElement = screen.getByText(/bulunmamaktadır/i);

  expect(pElement).toBeInTheDocument();
});
