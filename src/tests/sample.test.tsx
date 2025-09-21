import { renderHook, act, render, screen } from "@testing-library/react";
import { useToggle } from "../hooks/useToggle";

describe("useToggle hook", () => {
  it("toggles correctly", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});

function Placeholder() {
  return <h1>Hello, Senior Roberto</h1>;
}

test("renders placeholder component", () => {
  render(<Placeholder />);
  expect(screen.getByText(/hello, senior roberto/i));
});
