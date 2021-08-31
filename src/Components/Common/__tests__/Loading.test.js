import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loading } from "../Loading";

test("Loading component should have spinner component", async () => {
  const { getByTestId } = render(<Loading />);
  const spinner = getByTestId("spinner");
  expect(spinner).toBeInTheDocument();
});
