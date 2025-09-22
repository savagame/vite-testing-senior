import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./ErrorBoundary";

const Boom = () => {
  throw new Error("*");
};

it("catches errors and shows fallback", () => {
  render(
    <ErrorBoundary fallback={<p>Custom Error</p>}>
      <Boom />
    </ErrorBoundary>
  );

  expect(screen.getByText(/custom error/i)).toBeInTheDocument();
});
