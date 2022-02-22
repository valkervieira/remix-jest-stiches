import Index from "../../routes/index";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

test("increment button works", () => {
  render(<Index />);

  const counter = screen.getByRole("log");
  const incrementBtn = screen.getByRole("button", { name: /increment/i });

  expect(counter.innerHTML).toBe("0");

  user.click(incrementBtn);
  user.click(incrementBtn);
  user.click(incrementBtn);

  expect(counter.innerHTML).toBe("3");
});

test("decrement button works", () => {
  render(<Index />);

  const counter = screen.getByRole("log");
  const decrementBtn = screen.getByRole("button", { name: /decrement/i });

  expect(counter.innerHTML).toBe("0");

  user.click(decrementBtn);
  user.click(decrementBtn);
  user.click(decrementBtn);

  expect(counter.innerHTML).toBe("-3");
});
