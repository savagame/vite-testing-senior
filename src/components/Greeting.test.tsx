import { render, screen } from "@testing-library/react";
import { Greeting } from "./Greeting";

it("renders fallback when name is missing", () => {
  render(<Greeting />);
  expect(screen.getByText(/hello stranger/i)).toBeInTheDocument();
});
