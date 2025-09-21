import { renderHook, act } from "@testing-library/react";
import { useToggle } from "../hooks/useToggle";

describe("useToggle", () => {
  it("should start with default false", () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it("shuld respect custom inital value", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it("should toggle the value when toggle is clicked", () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);

    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });
});
