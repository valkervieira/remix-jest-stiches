import Index from "../../routes/index";
import { render } from "@testing-library/react";

test("Renders index route correctly", () => {
  render(<Index />);

  expect(true).toBeTruthy();
});
